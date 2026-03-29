import React, { useState, useEffect } from "react";
import { Highlight } from "prism-react-renderer";
import { lightTheme, darkTheme } from "./codeTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faXmark, faCube } from "@fortawesome/free-solid-svg-icons";
import { faReact, faTypescript } from "@fortawesome/free-brands-svg-icons";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
  AlertDialog, AlertDialogContent, AlertDialogTrigger,
  AspectRatio,
  Avatar,
  Badge,
  Button,
  Card, CardBody, CardHeader,
  Checkbox,
  Collapsible, CollapsibleContent, CollapsibleTrigger,
  Dialog, DialogClose, DialogContent, DialogTrigger,
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
  HoverCard, HoverCardContent, HoverCardTrigger,
  Label,
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger,
  Popover, PopoverContent, PopoverTrigger,
  Progress,
  RadioGroup, RadioGroupItem,
  ScrollArea,
  Select,
  Separator,
  Slider,
  Switch,
  Tabs, TabsContent, TabsList, TabsTrigger,
  Toast, ToastProvider, ToastViewport,
  Tooltip,
  Grid, GridItem,
} from "@smngs/ui";

type TocItem = { id: string; label: string; level: 1 | 2 };

const TOC_ITEMS: TocItem[] = [
  { id: "color-palette", label: "Color Palette",   level: 1 },
  { id: "typography",    label: "Typography",       level: 1 },
  { id: "components",   label: "Components",        level: 1 },
  { id: "button",       label: "Button",            level: 2 },
  { id: "badge",        label: "Badge",             level: 2 },
  { id: "avatar",       label: "Avatar",            level: 2 },
  { id: "card",         label: "Card",              level: 2 },
  { id: "tabs",         label: "Tabs",              level: 2 },
  { id: "accordion",    label: "Accordion",         level: 2 },
  { id: "collapsible",  label: "Collapsible",       level: 2 },
  { id: "dialog",       label: "Dialog",            level: 2 },
  { id: "popover",      label: "Popover / HoverCard", level: 2 },
  { id: "dropdown-menu",  label: "DropdownMenu",    level: 2 },
  { id: "navigation-menu", label: "NavigationMenu", level: 2 },
  { id: "form",         label: "Form",              level: 2 },
  { id: "toast",        label: "Toast",             level: 2 },
  { id: "grid",         label: "Grid",              level: 2 },
  { id: "progress",     label: "Progress",          level: 2 },
  { id: "scroll-area",  label: "ScrollArea",        level: 2 },
  { id: "tooltip",      label: "Tooltip",           level: 2 },
];

function Toc({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return (
    <aside className="toc">
      <div className="toc-title">Contents</div>
      <nav>
        <ul className="toc-list">
          {TOC_ITEMS.map((item) => (
            <li key={item.id} className={`toc-item toc-item-h${item.level}${activeId === item.id ? " toc-item-active" : ""}`}>
              <a href={`#${item.id}`} onClick={() => onSelect(item.id)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function Section({ title, id, level = 2, children }: { title: string; id?: string; level?: 1 | 2; children: React.ReactNode }) {
  const Heading = `h${level}` as "h1" | "h2";
  return (
    <div className="section" id={id}>
      <Heading>{title}</Heading>
      {children}
    </div>
  );
}

function CodeBlock({ code, isDark }: { code: string; isDark: boolean }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button className="code-block-trigger">
          <span>Usage</span>
          <span className="code-block-chevron" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Highlight theme={isDark ? darkTheme : lightTheme} code={code.trim()} language="tsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                borderRadius: "0 0 var(--radius-md) var(--radius-md)",
                padding: "var(--space-3)",
                overflowX: "auto",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--leading-loose)",
                margin: 0,
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function App() {
  const [toastOpen, setToastOpen] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const [sliderVal, setSliderVal] = useState([40]);
  const [checkA, setCheckA] = useState<boolean | "indeterminate">(false);
  const [radioVal, setRadioVal] = useState("react");
  const [progress] = useState(65);
  const [collOpen, setCollOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [activeSwatchToken, setActiveSwatchToken] = useState<string | null>(null);
  const suppressObserver = React.useRef(false);
  const suppressTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDark]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const checkActive = () => {
      if (suppressObserver.current) return;
      const elements = TOC_ITEMS
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];
      const threshold = 80; // scroll-margin-top(6rem=60px) + buffer
      let current = "";
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= threshold) {
          current = el.id;
        }
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
  }, []);

  return (
    <ToastProvider>
      <div className="layout">
      <Toc activeId={activeId} onSelect={(id) => {
        setActiveId(id);
        suppressObserver.current = true;
        if (suppressTimer.current) clearTimeout(suppressTimer.current);

        const liftSuppress = () => {
          suppressObserver.current = false;
        };
        window.addEventListener("scrollend", liftSuppress, { once: true });
        // scrollend が発火しない環境用のフォールバック
        suppressTimer.current = setTimeout(() => {
          window.removeEventListener("scrollend", liftSuppress);
          suppressObserver.current = false;
        }, 2000);
      }} />
      <div className="page">

        {/* Navbar */}
        <div className="nav-spacer" aria-hidden="true" />
        <nav className="site-nav">
          <Avatar src="https://github.com/smngs.png" fallback="SM" size="sm" />
          <a
            href="https://github.com/smngs/ui"
            target="_blank"
            rel="noreferrer"
            className="nav-title"
          >
            @smngs/ui
          </a>
          <div className="nav-right">
            <div className="nav-links">
              <a href="#color-palette">Color Palette</a>
              <a href="#typography">Typography</a>
              <a href="#components">Components</a>
            </div>
            <button
              className="theme-toggle"
              onClick={() => setIsDark((d) => !d)}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
            </button>
            <button
              className="hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
          {menuOpen && (
            <div className="nav-mobile-menu">
              <a href="#color-palette" onClick={() => setMenuOpen(false)}>Color Palette</a>
              <a href="#typography" onClick={() => setMenuOpen(false)}>Typography</a>
              <a href="#components" onClick={() => setMenuOpen(false)}>Components</a>
            </div>
          )}
        </nav>

        {/* Hero */}
        <div className="hero">
          <div className="hero-text">
            <h1>@smngs/ui</h1>
            <p>A Radix UI-based design system — 25 components</p>
            <div className="row">
              <Badge asChild><a href="https://radix-ui.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCube} /> Radix UI</a></Badge>
              <Badge asChild><a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTypescript} /> TypeScript</a></Badge>
              <Badge asChild><a href="https://react.dev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faReact} /> React 18</a></Badge>
            </div>
          </div>
          <Avatar src="https://github.com/smngs.png" fallback="SM" size="lg" />
        </div>

        {/* Color Palette */}
        <Section title="Color Palette" id="color-palette" level={1}>
          {(() => {
            type SwatchDef = { token: string; hex: string; label: string; light: boolean; usages: string[] };
            const brand: SwatchDef[] = [
              { token: "--color-brand",  hex: "#30a3b3", label: "Brand",  light: false, usages: ["Button (primary)", "Badge (brand)", "Links", "Section accent bars", "TOC active item"] },
              { token: "--color-accent", hex: "#EA9B56", label: "Accent", light: false, usages: ["Badge (accent)", "Code syntax: strings / variables"] },
            ];
            const semantic: SwatchDef[] = [
              { token: "--color-success", hex: "#34c98f", label: "Success", light: false, usages: ["Badge (success)", "Toast (success)"] },
              { token: "--color-warning", hex: "#f4a44d", label: "Warning", light: false, usages: ["Badge (warning)", "Toast (warning)"] },
              { token: "--color-info",    hex: "#4a7fd4", label: "Info",    light: false, usages: ["Badge (info)", "Toast (info)", "Code syntax: numbers / functions"] },
              { token: "--color-danger",  hex: "#f05555", label: "Danger",  light: false, usages: ["Badge (danger)", "AlertDialog trigger", "Code syntax: errors"] },
            ];
            const base: SwatchDef[] = isDark ? [
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
            ] : [
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
            const renderSwatch = ({ token, hex, label, light, usages }: SwatchDef) => {
              const isActive = activeSwatchToken === token;
              return (
                <div
                  key={token}
                  className={`token-swatch${isActive ? " token-swatch-active" : ""}`}
                  onClick={() => setActiveSwatchToken(isActive ? null : token)}
                >
                  <div
                    className="token-swatch-color"
                    style={{ background: `var(${token})`, color: light ? "#2f2f2f" : "#f6f6f6" }}
                  >
                    {hex}
                  </div>
                  <div className="token-swatch-info">
                    <div className="token-swatch-name">{label}</div>
                    <div className="token-swatch-token">{token}</div>
                    <div className="token-swatch-usage">
                      {usages.map((u) => <div key={u} className="token-swatch-usage-item">{u}</div>)}
                    </div>
                  </div>
                </div>
              );
            };
            return (
              <>
                <div className="section-label">Brand</div>
                <div className="token-grid" style={{ marginBottom: "var(--space-3)" }}>
                  {brand.map(renderSwatch)}
                </div>
                <div className="section-label">Semantic</div>
                <div className="token-grid" style={{ marginBottom: "var(--space-3)" }}>
                  {semantic.map(renderSwatch)}
                </div>
                <div className="section-label">Base</div>
                <div className="token-grid">
                  {base.map(renderSwatch)}
                </div>
              </>
            );
          })()}
        </Section>

        <Separator />

        {/* Typography */}
        <Section title="Typography" id="typography" level={1}>
          <h1>Heading 1 — The quick brown fox</h1>
          <h2>Heading 2 — The quick brown fox</h2>
          <h3>Heading 3 — The quick brown fox</h3>
          <h4>Heading 4 — The quick brown fox</h4>
          <p>Body text — The quick brown fox jumps over the lazy dog. Use this to check baseline text size, line height, and color.</p>
          <p>
            This sentence contains a <a href="#">hyperlink</a>, <strong>bold text</strong>, <em>italic text</em>, and <small>small text</small>.
            Inline <code>code</code> can appear mid-sentence too.
          </p>
          <blockquote>
            Design is not just what it looks like and feels like. Design is how it works. — Steve Jobs
          </blockquote>
          <pre><code>{`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}`}</code></pre>
          <ul>
            <li>Unordered list item one</li>
            <li>Unordered list item two</li>
            <li>Unordered list item three</li>
          </ul>
          <ol>
            <li>Ordered list item one</li>
            <li>Ordered list item two</li>
            <li>Ordered list item three</li>
          </ol>
        </Section>

        <Separator />

        <div className="section" id="components">
          <h1>Components</h1>
        </div>

        {/* Button */}
        <Section title="Button" id="button">
          <div className="row">
            <Button variant="primary">Primary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="primary" asChild><a href="#top">Link</a></Button>
          </div>
          <CodeBlock isDark={isDark} code={`
<Button variant="primary">Primary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="primary" disabled>Disabled</Button>
<Button variant="primary" asChild><a href="/page">Link</a></Button>
          `} />
        </Section>

        <Separator />

        {/* Badge */}
        <Section title="Badge" id="badge">
          <div className="row">
            <Badge>Default</Badge>
            <Badge asChild><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></Badge>
            <Badge asChild><a href="https://orcid.org" target="_blank" rel="noreferrer">ORCID</a></Badge>
          </div>
          <CodeBlock isDark={isDark} code={`
<Badge>Default</Badge>
<Badge asChild><a href="https://github.com">GitHub</a></Badge>
          `} />
        </Section>

        <Separator />

        {/* Avatar */}
        <Section title="Avatar" id="avatar">
          <div className="row">
            <Tooltip content="sm"><Avatar fallback="SM" size="sm" /></Tooltip>
            <Tooltip content="md"><Avatar fallback="SM" size="md" /></Tooltip>
            <Tooltip content="lg"><Avatar fallback="SM" size="lg" /></Tooltip>
            <Avatar src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y" alt="Gravatar" size="lg" fallback="SM" />
          </div>
          <CodeBlock isDark={isDark} code={`
<Avatar fallback="SM" size="sm" />
<Avatar fallback="SM" size="md" />
<Avatar fallback="SM" size="lg" />
<Avatar src="https://example.com/photo.jpg" alt="User" size="lg" fallback="SM" />
          `} />
        </Section>

        <Separator />

        {/* Card */}
        <Section title="Card" id="card">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(24rem, 1fr))", gap: "var(--space-2)" }}>
            <Card>
              <CardHeader>User Profile</CardHeader>
              <CardBody>
                <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
                  <Avatar fallback="AL" size="md" />
                  <div>
                    <div style={{ fontWeight: "var(--font-bold)" }}>Alice Johnson</div>
                    <div style={{ fontSize: "var(--text-sm)", color: "var(--color-subtle)" }}>@alice</div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>AspectRatio</CardHeader>
              <CardBody style={{ padding: 0 }}>
                <AspectRatio ratio={16 / 9}>
                  <div style={{ width: "100%", height: "100%", background: "var(--color-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-white)", fontWeight: "bold" }}>
                    16 / 9
                  </div>
                </AspectRatio>
              </CardBody>
            </Card>
          </div>
        </Section>

        <Separator />

        {/* Tabs */}
        <Section title="Tabs" id="tabs">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>All items are displayed here.</p>
            </TabsContent>
            <TabsContent value="favorites">
              <p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Items you have marked as favorites appear here.</p>
            </TabsContent>
            <TabsContent value="recent">
              <p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Items you have recently viewed appear here.</p>
            </TabsContent>
          </Tabs>
          <CodeBlock isDark={isDark} code={`
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for Tab 1</TabsContent>
  <TabsContent value="tab2">Content for Tab 2</TabsContent>
</Tabs>
          `} />
        </Section>

        <Separator />

        {/* Accordion */}
        <Section title="Accordion" id="accordion">
          <Accordion type="single" defaultValue="q1" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>How long does shipping take?</AccordionTrigger>
              <AccordionContent>Standard delivery takes 2–5 business days. Express options are available if you need it sooner.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Can I return or exchange an item?</AccordionTrigger>
              <AccordionContent>Yes, unused items can be returned or exchanged within 30 days of delivery.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>How do I delete my account?</AccordionTrigger>
              <AccordionContent>Go to Settings → Account and follow the deletion steps. This action cannot be undone.</AccordionContent>
            </AccordionItem>
          </Accordion>
          <CodeBlock isDark={isDark} code={`
<Accordion type="single" collapsible>
  <AccordionItem value="q1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer.</AccordionContent>
  </AccordionItem>
</Accordion>
          `} />
        </Section>

        <Separator />

        {/* Collapsible */}
        <Section title="Collapsible" id="collapsible">
          <Collapsible open={collOpen} onOpenChange={setCollOpen}>
            <div style={{ border: "1px solid var(--color-divider)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--space-2) var(--space-3)" }}>
                <span style={{ fontWeight: "var(--font-medium)" }}>Team Members</span>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" style={{ fontSize: "var(--text-xs)" }}>
                    {collOpen ? "Collapse" : "Expand"}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div style={{ padding: "0 var(--space-3) var(--space-2)", fontSize: "var(--text-sm)", color: "var(--color-muted)" }}>
                  <div>• Alice Johnson</div>
                  <div>• Bob Smith</div>
                  <div>• Carol Williams</div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
          <CodeBlock isDark={isDark} code={`
<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">Toggle</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>Hidden content here.</CollapsibleContent>
</Collapsible>
          `} />
        </Section>

        <Separator />

        {/* Dialog */}
        <Section title="Dialog / AlertDialog" id="dialog">
          <div className="row">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="primary">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent title="Product Details" description="View detailed information about this item.">
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-muted)" }}>
                  Name: Wireless Headphones Pro<br />
                  Color: Midnight Black<br />
                  Stock: 3 remaining
                </p>
                <DialogClose asChild>
                  <Button variant="ghost" style={{ marginTop: "var(--space-2)" }}>Close</Button>
                </DialogClose>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost">Confirm Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent
                title="Are you sure?"
                description="This action cannot be undone."
                actionLabel="Delete"
                cancelLabel="Cancel"
              />
            </AlertDialog>
          </div>
          <CodeBlock isDark={isDark} code={`
<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent title="Title" description="Description">
    <p>Dialog body content.</p>
    <DialogClose asChild><Button variant="ghost">Close</Button></DialogClose>
  </DialogContent>
</Dialog>

<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="ghost">Delete</Button></AlertDialogTrigger>
  <AlertDialogContent
    title="Are you sure?"
    description="This action cannot be undone."
    actionLabel="Delete"
    cancelLabel="Cancel"
  />
</AlertDialog>
          `} />
        </Section>

        <Separator />

        {/* Popover / HoverCard */}
        <Section title="Popover / HoverCard" id="popover">
          <div className="row">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div style={{ fontSize: "var(--text-sm)" }}>
                  <div style={{ fontWeight: "var(--font-bold)", marginBottom: "var(--space-1)" }}>More Info</div>
                  <p style={{ margin: 0, color: "var(--color-muted)" }}>A floating panel that opens on click.</p>
                </div>
              </PopoverContent>
            </Popover>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost">HoverCard (hover me)</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
                  <Avatar fallback="AL" size="sm" />
                  <div style={{ fontSize: "var(--text-sm)" }}>
                    <div style={{ fontWeight: "var(--font-bold)" }}>@alice</div>
                    <div style={{ color: "var(--color-subtle)" }}>Alice Johnson</div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <CodeBlock isDark={isDark} code={`
<Popover>
  <PopoverTrigger asChild><Button variant="ghost">Open</Button></PopoverTrigger>
  <PopoverContent>Popover content.</PopoverContent>
</Popover>

<HoverCard>
  <HoverCardTrigger asChild><Button variant="ghost">Hover me</Button></HoverCardTrigger>
  <HoverCardContent>Card shown on hover.</HoverCardContent>
</HoverCard>
          `} />
        </Section>

        <Separator />

        {/* DropdownMenu */}
        <Section title="DropdownMenu" id="dropdown-menu">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Menu ▾</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => alert("Copied!")}>Copy Link</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => alert("Shared!")}>Share</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>Delete (disabled)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <CodeBlock isDark={isDark} code={`
<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="ghost">Menu ▾</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuItem onSelect={() => {}}>Copy Link</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem disabled>Delete (disabled)</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
          `} />
        </Section>

        <Separator />

        {/* NavigationMenu */}
        <Section title="NavigationMenu" id="navigation-menu">
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                  <NavigationMenuLink href="#">New Arrivals</NavigationMenuLink>
                  <NavigationMenuLink href="#">On Sale</NavigationMenuLink>
                  <NavigationMenuLink href="#">Top Picks</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Blog</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>
          <CodeBlock isDark={isDark} code={`
<NavigationMenu>
  <NavigationMenuItem>
    <NavigationMenuLink href="#">About</NavigationMenuLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
    <NavigationMenuContent>
      <NavigationMenuLink href="#">New Arrivals</NavigationMenuLink>
    </NavigationMenuContent>
  </NavigationMenuItem>
</NavigationMenu>
          `} />
        </Section>

        <Separator />

        {/* Form components */}
        <Section title="Form — Checkbox / RadioGroup / Switch / Select / Slider / Label" id="form">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(28rem, 1fr))", gap: "var(--space-4)" }}>

            {/* Checkbox */}
            <div>
              <div style={{ fontWeight: "var(--font-medium)", marginBottom: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--color-subtle)" }}>Checkbox</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                {[
                  { id: "chk-a", label: "I agree to the terms of service", checked: checkA, onChange: setCheckA },
                ].map((item) => (
                  <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <Checkbox id={item.id} checked={item.checked} onCheckedChange={item.onChange} />
                    <Label htmlFor={item.id}>{item.label}</Label>
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                  <Checkbox id="chk-b" defaultChecked />
                  <Label htmlFor="chk-b">Checked by default</Label>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                  <Checkbox id="chk-c" disabled />
                  <Label htmlFor="chk-c">Disabled</Label>
                </div>
              </div>
            </div>

            {/* RadioGroup */}
            <div>
              <div style={{ fontWeight: "var(--font-medium)", marginBottom: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--color-subtle)" }}>RadioGroup</div>
              <RadioGroup value={radioVal} onValueChange={setRadioVal}>
                {[
                  { value: "react", label: "React" },
                  { value: "vue", label: "Vue" },
                  { value: "svelte", label: "Svelte" },
                ].map((opt) => (
                  <div key={opt.value} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <RadioGroupItem value={opt.value} id={`radio-${opt.value}`} />
                    <Label htmlFor={`radio-${opt.value}`}>{opt.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Switch */}
            <div>
              <div style={{ fontWeight: "var(--font-medium)", marginBottom: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--color-subtle)" }}>Switch</div>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <Switch id="sw-1" checked={switchOn} onCheckedChange={setSwitchOn} />
                <Label htmlFor="sw-1">{switchOn ? "ON" : "OFF"}</Label>
              </div>
            </div>

            {/* Select */}
            <div>
              <div style={{ fontWeight: "var(--font-medium)", marginBottom: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--color-subtle)" }}>Select</div>
              <Select
                placeholder="Select a language..."
                groups={[
                  { label: "Frontend", options: [{ value: "react", label: "React" }, { value: "vue", label: "Vue" }, { value: "svelte", label: "Svelte" }] },
                  { label: "Backend", options: [{ value: "go", label: "Go" }, { value: "rust", label: "Rust" }, { value: "python", label: "Python" }] },
                ]}
              />
            </div>

            {/* Slider */}
            <div>
              <div style={{ fontWeight: "var(--font-medium)", marginBottom: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--color-subtle)" }}>Slider — {sliderVal[0]}</div>
              <Slider value={sliderVal} onValueChange={setSliderVal} />
            </div>

          </div>
          <CodeBlock isDark={isDark} code={`
<Checkbox id="chk" checked={checked} onCheckedChange={setChecked} />
<Label htmlFor="chk">Accept terms</Label>

<RadioGroup value={val} onValueChange={setVal}>
  <RadioGroupItem value="a" id="r-a" /><Label htmlFor="r-a">Option A</Label>
  <RadioGroupItem value="b" id="r-b" /><Label htmlFor="r-b">Option B</Label>
</RadioGroup>

<Switch id="sw" checked={on} onCheckedChange={setOn} />
<Label htmlFor="sw">Enable</Label>

<Select
  placeholder="Select..."
  groups={[{ label: "Group", options: [{ value: "a", label: "Option A" }] }]}
/>

<Slider value={[40]} onValueChange={setVal} />
          `} />
        </Section>

        <Separator />

        {/* Toast */}
        <Section title="Toast" id="toast">
          <div className="row">
            <Button variant="primary" onClick={() => setToastOpen(true)}>
              Show Toast
            </Button>
          </div>
          <Toast
            open={toastOpen}
            onOpenChange={setToastOpen}
            title="Saved"
            description="Your changes have been saved successfully."
            variant="success"
          />
          <CodeBlock isDark={isDark} code={`
<ToastProvider>
  <Button onClick={() => setOpen(true)}>Show Toast</Button>
  <Toast
    open={open}
    onOpenChange={setOpen}
    title="Saved"
    description="Your changes have been saved."
    variant="success"
  />
  <ToastViewport />
</ToastProvider>
          `} />
        </Section>

        <Separator />

        {/* Grid */}
        <Section title="Grid" id="grid">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <div>
              <div className="section-label" style={{ marginBottom: "var(--space-2)" }}>columns=3 / gap="md"</div>
              <Grid columns={3} gap="md">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i}><CardBody style={{ textAlign: "center", color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Item {i + 1}</CardBody></Card>
                ))}
              </Grid>
            </div>
            <div>
              <div className="section-label" style={{ marginBottom: "var(--space-2)" }}>columns="auto" (responsive)</div>
              <Grid columns="auto" gap="md">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Card key={i}><CardBody style={{ textAlign: "center", color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Item {i + 1}</CardBody></Card>
                ))}
              </Grid>
            </div>
            <div>
              <div className="section-label" style={{ marginBottom: "var(--space-2)" }}>colSpan / full width</div>
              <Grid columns={3} gap="md">
                <GridItem colSpan={2}><Card><CardBody style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>colSpan=2</CardBody></Card></GridItem>
                <Card><CardBody style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>colSpan=1</CardBody></Card>
                <GridItem colSpan="full"><Card><CardBody style={{ textAlign: "center", color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>colSpan="full"</CardBody></Card></GridItem>
              </Grid>
            </div>
          </div>
          <CodeBlock isDark={isDark} code={`
// Fixed columns
<Grid columns={3} gap="md">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</Grid>

// Responsive auto-fill
<Grid columns="auto" gap="md">
  <Card>...</Card>
</Grid>

// Spanning columns
<Grid columns={3} gap="md">
  <GridItem colSpan={2}>Wide item</GridItem>
  <div>Normal item</div>
  <GridItem colSpan="full">Full width</GridItem>
</Grid>
          `} />
        </Section>

        <Separator />

        {/* Progress */}
        <Section title="Progress" id="progress">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", maxWidth: "48rem" }}>
            <Progress value={progress} />
            <div style={{ fontSize: "var(--text-xs)", color: "var(--color-subtle)" }}>{progress}% complete</div>
            <Progress value={30} />
            <Progress value={90} />
          </div>
          <CodeBlock isDark={isDark} code={`<Progress value={65} />`} />
        </Section>

        <Separator />

        {/* ScrollArea */}
        <Section title="ScrollArea" id="scroll-area">
          <ScrollArea height="16rem" style={{ border: "1px solid var(--color-divider)", borderRadius: "var(--radius-md)" }}>
            <div style={{ padding: "var(--space-3)" }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} style={{ padding: "var(--space-1) 0", borderBottom: "1px solid var(--color-divider)", fontSize: "var(--text-sm)", color: "var(--color-muted)" }}>
                  Notification {i + 1}: You have a new message waiting.
                </div>
              ))}
            </div>
          </ScrollArea>
          <CodeBlock isDark={isDark} code={`
<ScrollArea height="16rem">
  <div>Long content here...</div>
</ScrollArea>
          `} />
        </Section>

        <Separator />

        {/* Tooltip */}
        <Section title="Tooltip" id="tooltip">
          <div className="row">
            {(["top", "right", "bottom", "left"] as const).map((side) => (
              <Tooltip key={side} content={`Shows on ${side}`} side={side}>
                <Button variant="ghost">{side}</Button>
              </Tooltip>
            ))}
          </div>
          <CodeBlock isDark={isDark} code={`
<Tooltip content="Helpful hint" side="top">
  <Button variant="ghost">Hover me</Button>
</Tooltip>
          `} />
        </Section>

      </div>
      </div>
      <ToastViewport />
    </ToastProvider>
  );
}
