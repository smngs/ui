import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export type TocItem = { id: string; label: string; level: 1 | 2 | 3 };

function collectItems(): TocItem[] {
  return Array.from(document.querySelectorAll<HTMLElement>(".page .section[id]"))
    .map((el) => {
      const heading = el.querySelector<HTMLElement>("h1, h2, h3");
      return {
        id: el.id,
        label: heading?.textContent?.trim() ?? el.id,
        level: heading ? (parseInt(heading.tagName[1]) as 1 | 2 | 3) : 2,
      };
    })
    .filter((item) => item.label);
}

function getActiveH2(items: TocItem[], activeId: string): string | null {
  const idx = items.findIndex((item) => item.id === activeId);
  if (idx === -1) return null;
  if (items[idx].level === 2) return activeId;
  if (items[idx].level === 3) {
    for (let i = idx - 1; i >= 0; i--) {
      if (items[i].level === 2) return items[i].id;
    }
  }
  return null;
}

export function Toc() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const suppressObserver = React.useRef(false);
  const suppressTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Re-collect headings after route change (wait for DOM to render)
  useEffect(() => {
    const timer = setTimeout(() => setItems(collectItems()), 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Scroll spy
  useEffect(() => {
    if (items.length === 0) return;
    suppressObserver.current = false;

    const checkActive = () => {
      if (suppressObserver.current) return;
      const elements = items
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];
      const threshold = 80;
      let current = "";
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= threshold) current = el.id;
      }
      if (!current) {
        const first = elements.find((el) => el.getBoundingClientRect().top < window.innerHeight);
        if (first) current = first.id;
      }
      if (current) setActiveId(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; checkActive(); });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkActive();
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  if (items.length === 0) return null;

  const activeH2 = getActiveH2(items, activeId);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
    suppressObserver.current = true;
    if (suppressTimer.current) clearTimeout(suppressTimer.current);
    const liftSuppress = () => { suppressObserver.current = false; };
    window.addEventListener("scrollend", liftSuppress, { once: true });
    suppressTimer.current = setTimeout(() => {
      window.removeEventListener("scrollend", liftSuppress);
      suppressObserver.current = false;
    }, 700);
  };

  return (
    <aside className="toc">
      <div className="toc-title">Contents</div>
      <nav>
        <ul className="toc-list">
          {items.map((item, index) => {
            let hidden = false;
            if (item.level === 3) {
              let parentH2: string | null = null;
              for (let i = index - 1; i >= 0; i--) {
                if (items[i].level === 2) { parentH2 = items[i].id; break; }
              }
              hidden = parentH2 !== activeH2;
            }
            return (
              <li
                key={item.id}
                className={`toc-item toc-item-h${item.level}${activeId === item.id ? " toc-item-active" : ""}${hidden ? " toc-h3-hidden" : ""}`}
              >
                {item.level === 3 ? (
                  <div className="toc-h3-inner">
                    <a href={`#${item.id}`} onClick={(e) => handleClick(e, item.id)}>{item.label}</a>
                  </div>
                ) : (
                  <a href={`#${item.id}`} onClick={(e) => handleClick(e, item.id)}>{item.label}</a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
