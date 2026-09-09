/**
 * Sets `data-theme` from storage (or the OS preference) before first paint.
 *
 * Put this in the document head, ahead of any content — inline, not as a file,
 * so it runs before the browser paints and the page doesn't flash the wrong
 * theme. Without it ThemeProvider still settles on the right theme, just one
 * frame late.
 *
 *   <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
 *   <script is:inline set:html={themeInitScript} />   // Astro
 *
 * Its own entry point (`@smngs/ui/theme-script`) rather than part of the main
 * one: a server component or a build-time template needs the string without
 * pulling the React components in behind it.
 */
export const THEME_STORAGE_KEY = "theme";

export const themeInitScript = `(function(){try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',d?'dark':'light');}catch(e){}})();`;
