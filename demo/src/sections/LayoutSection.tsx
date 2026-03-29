import { useState } from "react";
import {
  AspectRatio,
  Card, CardBody,
  Grid, GridItem,
  ScrollArea,
  Separator,
  Toolbar, ToolbarButton, ToolbarSeparator, ToolbarSpacer, ToolbarToggleGroup, ToolbarToggleItem,
} from "@smngs/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateLeft, faRotateRight,
  faBold, faItalic, faUnderline,
  faAlignLeft, faAlignCenter, faAlignRight,
  faEye, faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Section } from "../Section";
import { CodeBlock } from "../CodeBlock";

export function LayoutSection({ isDark }: { isDark: boolean }) {
  const [activeFormats, setActiveFormats] = useState<string[]>([]);
  const [activeAlign, setActiveAlign] = useState("left");
  const [mode, setMode] = useState("editor");

  return (
    <>
      <div className="section" id="layout">
        <h2>Layout</h2>
      </div>

      {/* Toolbar */}
      <Section title="Toolbar" id="toolbar" level={3}>
        <Toolbar aria-label="Demo toolbar">
          <ToolbarButton aria-label="Undo" onClick={() => {}}><FontAwesomeIcon icon={faRotateLeft} /></ToolbarButton>
          <ToolbarButton aria-label="Redo" onClick={() => {}}><FontAwesomeIcon icon={faRotateRight} /></ToolbarButton>
          <ToolbarSeparator />
          <ToolbarToggleGroup
            type="multiple"
            value={activeFormats}
            onValueChange={setActiveFormats}
            aria-label="Text format"
          >
            <ToolbarToggleItem value="bold" aria-label="Bold"><FontAwesomeIcon icon={faBold} /></ToolbarToggleItem>
            <ToolbarToggleItem value="italic" aria-label="Italic"><FontAwesomeIcon icon={faItalic} /></ToolbarToggleItem>
            <ToolbarToggleItem value="underline" aria-label="Underline"><FontAwesomeIcon icon={faUnderline} /></ToolbarToggleItem>
          </ToolbarToggleGroup>
          <ToolbarSeparator />
          <ToolbarToggleGroup
            type="single"
            value={activeAlign}
            onValueChange={(v) => v && setActiveAlign(v)}
            aria-label="Alignment"
          >
            <ToolbarToggleItem value="left" aria-label="Left"><FontAwesomeIcon icon={faAlignLeft} /></ToolbarToggleItem>
            <ToolbarToggleItem value="center" aria-label="Center"><FontAwesomeIcon icon={faAlignCenter} /></ToolbarToggleItem>
            <ToolbarToggleItem value="right" aria-label="Right"><FontAwesomeIcon icon={faAlignRight} /></ToolbarToggleItem>
          </ToolbarToggleGroup>
          <ToolbarSpacer />
          <ToolbarToggleGroup
            type="single"
            value={mode}
            onValueChange={(v) => v && setMode(v)}
            aria-label="View mode"
          >
            <ToolbarToggleItem value="editor" aria-label="Editor"><FontAwesomeIcon icon={faPen} /></ToolbarToggleItem>
            <ToolbarToggleItem value="preview" aria-label="Preview"><FontAwesomeIcon icon={faEye} /></ToolbarToggleItem>
          </ToolbarToggleGroup>
        </Toolbar>
        <CodeBlock isDark={isDark} code={`
<Toolbar aria-label="Text formatting">
  <ToolbarButton aria-label="Undo" onClick={handleUndo}>
    <FontAwesomeIcon icon={faRotateLeft} />
  </ToolbarButton>
  <ToolbarSeparator />
  <ToolbarToggleGroup type="multiple" value={activeFormats} onValueChange={setActiveFormats}>
    <ToolbarToggleItem value="bold" aria-label="Bold">
      <FontAwesomeIcon icon={faBold} />
    </ToolbarToggleItem>
    <ToolbarToggleItem value="italic" aria-label="Italic">
      <FontAwesomeIcon icon={faItalic} />
    </ToolbarToggleItem>
  </ToolbarToggleGroup>
  <ToolbarSpacer />
  <ToolbarToggleGroup type="single" value={mode} onValueChange={(v) => v && setMode(v)}>
    <ToolbarToggleItem value="editor" aria-label="Editor">
      <FontAwesomeIcon icon={faPen} />
    </ToolbarToggleItem>
    <ToolbarToggleItem value="preview" aria-label="Preview">
      <FontAwesomeIcon icon={faEye} />
    </ToolbarToggleItem>
  </ToolbarToggleGroup>
</Toolbar>
        `} />
      </Section>

      <Separator />

      {/* Grid */}
      <Section title="Grid" id="grid" level={3}>
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

      {/* ScrollArea */}
      <Section title="ScrollArea" id="scroll-area" level={3}>
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

      {/* AspectRatio */}
      <Section title="AspectRatio" id="aspect-ratio" level={3}>
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ width: "20rem" }}>
            <div style={{ fontSize: "var(--text-xs)", color: "var(--color-subtle)", marginBottom: "var(--space-1)" }}>16 / 9</div>
            <AspectRatio ratio={16 / 9}>
              <div style={{ width: "100%", height: "100%", background: "var(--color-bg-code)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-md)", color: "var(--color-muted)", fontWeight: "bold" }}>
                16 / 9
              </div>
            </AspectRatio>
          </div>
          <div style={{ width: "12rem" }}>
            <div style={{ fontSize: "var(--text-xs)", color: "var(--color-subtle)", marginBottom: "var(--space-1)" }}>4 / 3</div>
            <AspectRatio ratio={4 / 3}>
              <div style={{ width: "100%", height: "100%", background: "var(--color-bg-code)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-md)", color: "var(--color-muted)", fontWeight: "bold" }}>
                4 / 3
              </div>
            </AspectRatio>
          </div>
          <div style={{ width: "10rem" }}>
            <div style={{ fontSize: "var(--text-xs)", color: "var(--color-subtle)", marginBottom: "var(--space-1)" }}>1 / 1</div>
            <AspectRatio ratio={1}>
              <div style={{ width: "100%", height: "100%", background: "var(--color-bg-code)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-md)", color: "var(--color-muted)", fontWeight: "bold" }}>
                1 / 1
              </div>
            </AspectRatio>
          </div>
        </div>
        <CodeBlock isDark={isDark} code={`
<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</AspectRatio>
        `} />
      </Section>
    </>
  );
}
