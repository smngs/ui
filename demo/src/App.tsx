import React, { useState } from "react";
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
} from "@smngs/ui";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      {children}
    </div>
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

  return (
    <ToastProvider>
      <div className="page">

        {/* Hero */}
        <div className="hero">
          <div className="hero-text">
            <h1>@smngs/ui</h1>
            <p>A Radix UI-based design system — 25 components</p>
            <div className="row">
              <Badge asChild><a href="https://radix-ui.com" target="_blank" rel="noreferrer">Radix UI</a></Badge>
              <Badge asChild><a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">TypeScript</a></Badge>
              <Badge asChild><a href="https://react.dev" target="_blank" rel="noreferrer">React 18</a></Badge>
            </div>
          </div>
          <Avatar fallback="SM" size="lg" />
        </div>

        {/* Color Palette */}
        <Section title="Color Palette">
          <div className="token-grid">
            {[
              { token: "--color-brand",      hex: "#30a3b3", label: "Brand" },
              { token: "--color-text",       hex: "#2f2f2f", label: "Text" },
              { token: "--color-muted",      hex: "#555555", label: "Muted" },
              { token: "--color-subtle",     hex: "#888888", label: "Subtle" },
              { token: "--color-bg",         hex: "#f6f6f6", label: "Background" },
              { token: "--color-bg-code",    hex: "#f4f5f6", label: "Code BG" },
              { token: "--color-badge",      hex: "#5e5e5e", label: "Badge" },
              { token: "--color-border",     hex: "#cccccc", label: "Border" },
              { token: "--color-divider",    hex: "#e0e0e0", label: "Divider" },
              { token: "--color-white",      hex: "#ffffff", label: "White" },
              { token: "--color-success",    hex: "#30b582", label: "Success" },
              { token: "--color-warning",    hex: "#ef9243", label: "Warning" },
              { token: "--color-info",       hex: "#3063b5", label: "Info" },
              { token: "--color-danger",     hex: "#e03c3c", label: "Danger" },
            ].map(({ token, hex, label }) => {
              const dark = ["#2f2f2f", "#555555", "#9b4dca", "#5e5e5e", "#606c76", "#30a3b3", "#30b582", "#3063b5", "#e03c3c"].includes(hex);
              return (
                <div key={token} className="token-swatch">
                  <div
                    className="token-swatch-color"
                    style={{ background: `var(${token})`, color: dark ? "#f6f6f6" : "#2f2f2f" }}
                  >
                    {hex}
                  </div>
                  <div className="token-swatch-info">
                    <div className="token-swatch-name">{label}</div>
                    <div className="token-swatch-token">{token}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Separator />

        {/* Typography */}
        <Section title="Typography">
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

        {/* Button */}
        <Section title="Button">
          <div className="row">
            <Button variant="primary">Primary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="nav">Nav</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="primary" asChild><a href="#top">Link</a></Button>
          </div>
        </Section>

        <Separator />

        {/* Badge */}
        <Section title="Badge">
          <div className="row">
            <Badge>Default</Badge>
            <Badge asChild><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></Badge>
            <Badge asChild><a href="https://orcid.org" target="_blank" rel="noreferrer">ORCID</a></Badge>
          </div>
        </Section>

        <Separator />

        {/* Avatar */}
        <Section title="Avatar">
          <div className="row">
            <Tooltip content="sm"><Avatar fallback="SM" size="sm" /></Tooltip>
            <Tooltip content="md"><Avatar fallback="SM" size="md" /></Tooltip>
            <Tooltip content="lg"><Avatar fallback="SM" size="lg" /></Tooltip>
            <Avatar src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y" alt="Gravatar" size="lg" fallback="SM" />
          </div>
        </Section>

        <Separator />

        {/* Card */}
        <Section title="Card">
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
        <Section title="Tabs">
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
        </Section>

        <Separator />

        {/* Accordion */}
        <Section title="Accordion">
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
        </Section>

        <Separator />

        {/* Collapsible */}
        <Section title="Collapsible">
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
        </Section>

        <Separator />

        {/* Dialog */}
        <Section title="Dialog / AlertDialog">
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
        </Section>

        <Separator />

        {/* Popover / HoverCard */}
        <Section title="Popover / HoverCard">
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
        </Section>

        <Separator />

        {/* DropdownMenu */}
        <Section title="DropdownMenu">
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
        </Section>

        <Separator />

        {/* NavigationMenu */}
        <Section title="NavigationMenu">
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
        </Section>

        <Separator />

        {/* Form components */}
        <Section title="Form — Checkbox / RadioGroup / Switch / Select / Slider / Label">
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
        </Section>

        <Separator />

        {/* Toast */}
        <Section title="Toast">
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
        </Section>

        <Separator />

        {/* Progress */}
        <Section title="Progress">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", maxWidth: "48rem" }}>
            <Progress value={progress} />
            <div style={{ fontSize: "var(--text-xs)", color: "var(--color-subtle)" }}>{progress}% complete</div>
            <Progress value={30} />
            <Progress value={90} />
          </div>
        </Section>

        <Separator />

        {/* ScrollArea */}
        <Section title="ScrollArea">
          <ScrollArea height="16rem" style={{ border: "1px solid var(--color-divider)", borderRadius: "var(--radius-md)" }}>
            <div style={{ padding: "var(--space-3)" }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} style={{ padding: "var(--space-1) 0", borderBottom: "1px solid var(--color-divider)", fontSize: "var(--text-sm)", color: "var(--color-muted)" }}>
                  Notification {i + 1}: You have a new message waiting.
                </div>
              ))}
            </div>
          </ScrollArea>
        </Section>

        <Separator />

        {/* Tooltip */}
        <Section title="Tooltip">
          <div className="row">
            {(["top", "right", "bottom", "left"] as const).map((side) => (
              <Tooltip key={side} content={`Shows on ${side}`} side={side}>
                <Button variant="ghost">{side}</Button>
              </Tooltip>
            ))}
          </div>
        </Section>

      </div>
      <ToastViewport />
    </ToastProvider>
  );
}
