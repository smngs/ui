import React, { useCallback, useContext, useEffect, useSyncExternalStore } from "react";

import { THEME_STORAGE_KEY as STORAGE_KEY } from "../../theme-script";

/**
 * `data-theme` on the root element is the single source of truth: the init
 * script writes it, the toggle writes it, and React reads it. That keeps the
 * server render (which has no DOM) from disagreeing with the client, with no
 * state to keep in sync on either side.
 */
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function readTheme(): boolean {
  return document.documentElement.getAttribute("data-theme") === "dark";
}

function prefersDark(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored === "dark";
  } catch {
    // Storage unavailable (private mode) — fall through to the OS preference.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(dark: boolean) {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  try {
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  } catch {
    // Storage unavailable — the attribute still holds for this page view.
  }
  emit();
}

type ThemeContextValue = { isDark: boolean; toggleTheme: () => void };

const ThemeContext = React.createContext<ThemeContextValue>({
  isDark: false,
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isDark = useSyncExternalStore(subscribe, readTheme, () => false);

  // Only matters when themeInitScript is missing: settle the attribute so the
  // rest of the app has something to read.
  useEffect(() => {
    if (!document.documentElement.hasAttribute("data-theme")) {
      applyTheme(prefersDark());
    }
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(!readTheme());
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
