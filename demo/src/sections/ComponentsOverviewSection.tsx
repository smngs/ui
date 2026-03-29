import { NavLink } from "react-router-dom";
import { Separator } from "@smngs/ui";
import { Section } from "../Section";

const CATEGORIES = [
  {
    name: "Display",
    color: "var(--color-brand)",
    components: ["Avatar", "Badge", "Blockquote", "Button", "Card", "Separator", "Tooltip", "LinkCard", "Toggle", "ToggleGroup", "ArticleCard", "ArticleHero", "ArticleListCard"],
  },
  {
    name: "Overlay",
    color: "var(--color-info)",
    components: ["Dialog", "AlertDialog", "Popover", "HoverCard", "ContextMenu"],
  },
  {
    name: "Navigation",
    color: "var(--color-accent)",
    components: ["Accordion", "Collapsible", "Tabs", "DropdownMenu", "NavigationMenu", "Navbar", "Menubar"],
  },
  {
    name: "Form",
    color: "var(--color-success)",
    components: ["Checkbox", "RadioGroup", "Switch", "Select", "Slider", "Label", "Form"],
  },
  {
    name: "Feedback",
    color: "var(--color-warning)",
    components: ["Toast", "Progress"],
  },
  {
    name: "Layout",
    color: "#9b7fd4",
    components: ["AspectRatio", "Grid", "ScrollArea", "Toolbar"],
  },
];

export function ComponentsOverviewSection() {
  const total = CATEGORIES.reduce((s, c) => s + c.components.length, 0);

  return (
    <>
      <Section title="Components" id="components-overview" level={1}>
        <p style={{ color: "var(--color-muted)", margin: "0 0 var(--space-3)", fontSize: "var(--text-base)" }}>
          {total} components across {CATEGORIES.length} categories.{" "}
          <NavLink to="/components" style={{ color: "var(--color-brand)" }}>View all →</NavLink>
        </p>
        <div className="overview-grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="overview-card">
              <div className="overview-card-header" style={{ borderColor: cat.color }}>
                <span className="overview-card-name">{cat.name}</span>
                <span className="overview-card-count" style={{ color: cat.color }}>{cat.components.length}</span>
              </div>
              <ul className="overview-card-list">
                {cat.components.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Separator />
    </>
  );
}
