export type TocItem = { id: string; label: string; level: 1 | 2 | 3 };

export const TOC_ITEMS: TocItem[] = [
  { id: "color-palette", label: "Color Palette",      level: 1 },
  { id: "typography",    label: "Typography",          level: 1 },
  { id: "components",   label: "Components",           level: 1 },
  // Display
  { id: "display",      label: "Display",              level: 2 },
  { id: "blockquote",   label: "Blockquote",           level: 3 },
  { id: "button",       label: "Button",               level: 3 },
  { id: "link-card",    label: "LinkCard",             level: 3 },
  { id: "badge",        label: "Badge",                level: 3 },
  { id: "avatar",       label: "Avatar",               level: 3 },
  { id: "card",         label: "Card",                 level: 3 },
  { id: "tooltip",      label: "Tooltip",              level: 3 },
  // Overlay
  { id: "overlay",      label: "Overlay",              level: 2 },
  { id: "dialog",       label: "Dialog / AlertDialog", level: 3 },
  { id: "popover",      label: "Popover / HoverCard",  level: 3 },
  // Navigation
  { id: "navigation",   label: "Navigation",           level: 2 },
  { id: "tabs",         label: "Tabs",                 level: 3 },
  { id: "accordion",    label: "Accordion",            level: 3 },
  { id: "collapsible",  label: "Collapsible",          level: 3 },
  { id: "dropdown-menu",   label: "DropdownMenu",      level: 3 },
  { id: "navbar",          label: "Navbar",            level: 3 },
  { id: "navigation-menu", label: "NavigationMenu",    level: 3 },
  // Form
  { id: "form",         label: "Form",                 level: 2 },
  { id: "checkbox",     label: "Checkbox",             level: 3 },
  { id: "radio-group",  label: "RadioGroup",           level: 3 },
  { id: "switch",       label: "Switch",               level: 3 },
  { id: "select",       label: "Select",               level: 3 },
  { id: "slider",       label: "Slider",               level: 3 },
  { id: "label",        label: "Label",                level: 3 },
  // Feedback
  { id: "feedback",     label: "Feedback",             level: 2 },
  { id: "toast",        label: "Toast",                level: 3 },
  { id: "progress",     label: "Progress",             level: 3 },
  // Layout
  { id: "layout",       label: "Layout",               level: 2 },
  { id: "grid",         label: "Grid",                 level: 3 },
  { id: "scroll-area",  label: "ScrollArea",           level: 3 },
  { id: "aspect-ratio", label: "AspectRatio",          level: 3 },
];

function getActiveH2(activeId: string): string | null {
  const idx = TOC_ITEMS.findIndex(item => item.id === activeId);
  if (idx === -1) return null;
  const level = TOC_ITEMS[idx].level;
  if (level === 2) return activeId;
  if (level === 3) {
    for (let i = idx - 1; i >= 0; i--) {
      if (TOC_ITEMS[i].level === 2) return TOC_ITEMS[i].id;
    }
  }
  return null;
}

export function Toc({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  const activeH2 = getActiveH2(activeId);

  return (
    <aside className="toc">
      <div className="toc-title">Contents</div>
      <nav>
        <ul className="toc-list">
          {TOC_ITEMS.map((item, index) => {
            let hidden = false;
            if (item.level === 3) {
              let parentH2: string | null = null;
              for (let i = index - 1; i >= 0; i--) {
                if (TOC_ITEMS[i].level === 2) { parentH2 = TOC_ITEMS[i].id; break; }
              }
              hidden = parentH2 !== activeH2;
            }
            return (
              <li key={item.id} className={`toc-item toc-item-h${item.level}${activeId === item.id ? " toc-item-active" : ""}${hidden ? " toc-h3-hidden" : ""}`}>
                {item.level === 3 ? (
                  <div className="toc-h3-inner">
                    <a href={`#${item.id}`} onClick={() => onSelect(item.id)}>{item.label}</a>
                  </div>
                ) : (
                  <a href={`#${item.id}`} onClick={() => onSelect(item.id)}>{item.label}</a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
