import React, { useState, useEffect, useCallback, useRef } from "react";

export type TocItem = { id: string; label: string; level: 1 | 2 | 3 };

function collectItems(container: string): TocItem[] {
  return Array.from(
    document.querySelectorAll<HTMLElement>(`${container} [id]`)
  )
    .map((el) => {
      // Support both: headings with id (e.g. rehype-slug) and wrapper divs with id containing a heading
      const isHeading = /^H[1-3]$/.test(el.tagName);
      const heading = isHeading ? el : el.querySelector<HTMLElement>("h1, h2, h3");
      if (!heading) return null;
      return {
        id: el.id,
        label: heading.textContent?.trim() ?? el.id,
        level: parseInt(heading.tagName[1]) as 1 | 2 | 3,
      };
    })
    .filter((item): item is TocItem => item !== null && item.label !== "");
}

function getActiveH2(items: TocItem[], activeId: string): string | null {
  const idx = items.findIndex((item) => item.id === activeId);
  if (idx === -1) return null;
  if (items[idx].level <= 2) return activeId;
  for (let i = idx - 1; i >= 0; i--) {
    if (items[i].level <= 2) return items[i].id;
  }
  return null;
}

export interface TocProps {
  /** CSS selector for the container holding sections with `id` attributes.
   *  Each matching element should have a child heading (h1/h2/h3).
   *  @default ".page" */
  container?: string;
  /** Title displayed above the TOC list. @default "Contents" */
  title?: string;
  /** Additional class name on the root `<aside>`. */
  className?: string;
  /** An optional signal to re-scan headings (e.g. the current pathname). */
  refreshKey?: string;
}

export function Toc({
  container = ".page",
  title = "Contents",
  className = "",
  refreshKey,
}: TocProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const suppressObserver = useRef(false);
  const suppressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Collect headings on mount and when refreshKey changes
  useEffect(() => {
    const timer = setTimeout(() => setItems(collectItems(container)), 50);
    return () => clearTimeout(timer);
  }, [container, refreshKey]);

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
        const first = elements.find(
          (el) => el.getBoundingClientRect().top < window.innerHeight
        );
        if (first) current = first.id;
      }
      if (current) setActiveId(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        checkActive();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkActive();
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const handleClick = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      suppressObserver.current = true;
      if (suppressTimer.current) clearTimeout(suppressTimer.current);
      const liftSuppress = () => {
        suppressObserver.current = false;
      };
      window.addEventListener("scrollend", liftSuppress, { once: true });
      suppressTimer.current = setTimeout(() => {
        window.removeEventListener("scrollend", liftSuppress);
        suppressObserver.current = false;
      }, 700);
    },
    []
  );

  if (items.length === 0) return null;

  const activeH2 = getActiveH2(items, activeId);

  return (
    <aside className={`smngs-toc ${className}`.trim()}>
      {title && <div className="smngs-toc-title">{title}</div>}
      <nav>
        <ul className="smngs-toc-list">
          {items.map((item, index) => {
            let hidden = false;
            if (item.level === 3) {
              let parentH2: string | null = null;
              for (let i = index - 1; i >= 0; i--) {
                if (items[i].level <= 2) {
                  parentH2 = items[i].id;
                  break;
                }
              }
              hidden = parentH2 !== activeH2;
            }
            return (
              <li
                key={item.id}
                className={`smngs-toc-item smngs-toc-item-h${item.level}${
                  activeId === item.id ? " smngs-toc-item-active" : ""
                }${hidden ? " smngs-toc-h3-hidden" : ""}`}
              >
                {item.level === 3 ? (
                  <div className="smngs-toc-h3-inner">
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                    >
                      {item.label}
                    </a>
                  </div>
                ) : (
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
