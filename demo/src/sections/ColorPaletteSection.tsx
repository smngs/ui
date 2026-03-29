import { Separator } from "@smngs/ui";
import { Section } from "../Section";
import { ColorSwatch, type SwatchDef } from "../ColorSwatch";

const BRAND: SwatchDef[] = [
  { token: "--color-brand",  hex: "#30a3b3", label: "Brand",  light: false, usages: ["Button (primary)", "Badge (brand)", "Links", "Section accent bars", "TOC active item"] },
  { token: "--color-accent", hex: "#EA9B56", label: "Accent", light: false, usages: ["Badge (accent)", "Code syntax: strings / variables"] },
];

const SEMANTIC: SwatchDef[] = [
  { token: "--color-success", hex: "#34c98f", label: "Success", light: false, usages: ["Badge (success)", "Toast (success)"] },
  { token: "--color-warning", hex: "#f4a44d", label: "Warning", light: false, usages: ["Badge (warning)", "Toast (warning)"] },
  { token: "--color-info",    hex: "#4a7fd4", label: "Info",    light: false, usages: ["Badge (info)", "Toast (info)", "Code syntax: numbers / functions"] },
  { token: "--color-danger",  hex: "#f05555", label: "Danger",  light: false, usages: ["Badge (danger)", "AlertDialog trigger", "Code syntax: errors"] },
];

const BASE_DARK: SwatchDef[] = [
  { token: "--color-text",     hex: "#e8e8e8", label: "Text",       light: true,  usages: ["Body text", "Headings"] },
  { token: "--color-muted",    hex: "#aaaaaa", label: "Muted",      light: true,  usages: ["h2 / h3", "Secondary text"] },
  { token: "--color-subtle",   hex: "#777777", label: "Subtle",     light: false, usages: ["Labels", "Placeholder text", "Section labels"] },
  { token: "--color-bg",       hex: "#222222", label: "Background", light: false, usages: ["Page background", "Nav spacer"] },
  { token: "--color-bg-code",  hex: "#333333", label: "Code BG",    light: false, usages: ["Code blocks", "Input fields", "Collapsible trigger"] },
  { token: "--color-surface",  hex: "#2d2d2d", label: "Surface",    light: false, usages: ["Card", "Dialog", "Popover", "Dropdown", "Select content"] },
  { token: "--color-border",   hex: "#484848", label: "Border",     light: false, usages: ["Input borders", "Dropdown borders"] },
  { token: "--color-divider",  hex: "#3a3a3a", label: "Divider",    light: false, usages: ["Separator", "Accordion borders"] },
  { token: "--color-badge",    hex: "#5e5e5e", label: "Badge",      light: false, usages: ["Badge (default) background"] },
  { token: "--color-white",    hex: "#ffffff", label: "White",      light: true,  usages: ["Text on brand backgrounds", "Button (primary) text", "Navbar links"] },
];

const BASE_LIGHT: SwatchDef[] = [
  { token: "--color-text",     hex: "#2f2f2f", label: "Text",       light: false, usages: ["Body text", "Headings"] },
  { token: "--color-muted",    hex: "#555555", label: "Muted",      light: false, usages: ["h2 / h3", "Secondary text"] },
  { token: "--color-subtle",   hex: "#888888", label: "Subtle",     light: false, usages: ["Labels", "Placeholder text", "Section labels"] },
  { token: "--color-bg",       hex: "#f6f6f6", label: "Background", light: true,  usages: ["Page background", "Nav spacer"] },
  { token: "--color-bg-code",  hex: "#e8eaec", label: "Code BG",    light: true,  usages: ["Code blocks", "Input fields", "Collapsible trigger"] },
  { token: "--color-surface",  hex: "#ffffff", label: "Surface",    light: true,  usages: ["Card", "Dialog", "Popover", "Dropdown", "Select content"] },
  { token: "--color-border",   hex: "#cccccc", label: "Border",     light: true,  usages: ["Input borders", "Dropdown borders"] },
  { token: "--color-divider",  hex: "#e0e0e0", label: "Divider",    light: true,  usages: ["Separator", "Accordion borders"] },
  { token: "--color-badge",    hex: "#5e5e5e", label: "Badge",      light: false, usages: ["Badge (default) background"] },
  { token: "--color-white",    hex: "#ffffff", label: "White",      light: true,  usages: ["Text on brand backgrounds", "Button (primary) text", "Navbar links"] },
];

export function ColorPaletteSection({ isDark }: { isDark: boolean }) {
  const base = isDark ? BASE_DARK : BASE_LIGHT;
  return (
    <>
      <Section title="Color Palette" id="color-palette" level={1}>
        <div className="section-label">Brand</div>
        <div className="token-grid" style={{ marginBottom: "var(--space-3)" }}>
          {BRAND.map((s) => <ColorSwatch key={s.token} {...s} />)}
        </div>
        <div className="section-label">Semantic</div>
        <div className="token-grid" style={{ marginBottom: "var(--space-3)" }}>
          {SEMANTIC.map((s) => <ColorSwatch key={s.token} {...s} />)}
        </div>
        <div className="section-label">Base</div>
        <div className="token-grid">
          {base.map((s) => <ColorSwatch key={s.token} {...s} />)}
        </div>
      </Section>
      <Separator />
    </>
  );
}
