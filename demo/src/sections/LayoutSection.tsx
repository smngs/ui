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
  faListUl, faListOl, faQuoteLeft, faCode,
  faEye, faPen,
} from "@fortawesome/free-solid-svg-icons";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { Section } from "../Section";
import { CodeBlock } from "../CodeBlock";

export function LayoutSection({ isDark }: { isDark: boolean }) {
  const [mode, setMode] = useState<"editor" | "preview">("editor");
  const [activeAlign, setActiveAlign] = useState("left");
  const [activeHeading, setActiveHeading] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["paragraph", "heading"] }),
    ],
    content: "<p>This is a <strong>WYSIWYG editor</strong> powered by TipTap. Select text and use the toolbar to format it.</p><p>Markdown shortcuts work too — type ** for bold, * for italic, ## for heading, - for a bullet list.</p>",
    onTransaction({ editor: e }) {
      const align = ["left", "center", "right"].find((a) => e.isActive({ textAlign: a }));
      setActiveAlign(align ?? "left");
      setActiveHeading(
        e.isActive("heading", { level: 1 }) ? "h1"
        : e.isActive("heading", { level: 2 }) ? "h2"
        : ""
      );
    },
  });

  const activeFormats = editor ? [
    editor.isActive("bold") && "bold",
    editor.isActive("italic") && "italic",
    editor.isActive("underline") && "underline",
  ].filter(Boolean) as string[] : [];

  const activeBlocks = editor ? [
    editor.isActive("bulletList") && "bulletList",
    editor.isActive("orderedList") && "orderedList",
    editor.isActive("blockquote") && "blockquote",
    editor.isActive("codeBlock") && "codeBlock",
  ].filter(Boolean) as string[] : [];

  function handleFormatsChange(newFormats: string[]) {
    const changed = [
      ...newFormats.filter((f) => !activeFormats.includes(f)),
      ...activeFormats.filter((f) => !newFormats.includes(f)),
    ];
    changed.forEach((f) => {
      if (f === "bold") editor?.chain().focus().toggleBold().run();
      else if (f === "italic") editor?.chain().focus().toggleItalic().run();
      else if (f === "underline") editor?.chain().focus().toggleUnderline().run();
    });
  }

  function handleBlocksChange(newBlocks: string[]) {
    const changed = [
      ...newBlocks.filter((b) => !activeBlocks.includes(b)),
      ...activeBlocks.filter((b) => !newBlocks.includes(b)),
    ];
    changed.forEach((b) => {
      if (b === "bulletList") editor?.chain().focus().toggleBulletList().run();
      else if (b === "orderedList") editor?.chain().focus().toggleOrderedList().run();
      else if (b === "blockquote") editor?.chain().focus().toggleBlockquote().run();
      else if (b === "codeBlock") editor?.chain().focus().toggleCodeBlock().run();
    });
  }

  function handleHeadingChange(v: string) {
    if (v === "h1") editor?.chain().focus().toggleHeading({ level: 1 }).run();
    else if (v === "h2") editor?.chain().focus().toggleHeading({ level: 2 }).run();
    else editor?.chain().focus().setParagraph().run();
  }

  function handleAlignChange(v: string) {
    const align = v || "left";
    setActiveAlign(align);
    editor?.chain().focus().setTextAlign(align).run();
  }

  const isPreview = mode === "preview";

  return (
    <>
      <div className="section" id="layout">
        <h2>Layout</h2>
      </div>

      {/* Toolbar */}
      <Section title="Toolbar" id="toolbar" level={3}>
        <div className="wysiwyg-wrapper">
          <Toolbar aria-label="Text formatting">
            <ToolbarButton
              aria-label="Undo"
              disabled={isPreview || !editor?.can().undo()}
              onClick={() => editor?.chain().focus().undo().run()}
            >
              <FontAwesomeIcon icon={faRotateLeft} />
            </ToolbarButton>
            <ToolbarButton
              aria-label="Redo"
              disabled={isPreview || !editor?.can().redo()}
              onClick={() => editor?.chain().focus().redo().run()}
            >
              <FontAwesomeIcon icon={faRotateRight} />
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarToggleGroup
              type="single"
              value={isPreview ? "" : activeHeading}
              onValueChange={handleHeadingChange}
              aria-label="Heading"
            >
              <ToolbarToggleItem value="h1" aria-label="Heading 1" disabled={isPreview} style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-bold)" }}>H1</ToolbarToggleItem>
              <ToolbarToggleItem value="h2" aria-label="Heading 2" disabled={isPreview} style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-bold)" }}>H2</ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator />
            <ToolbarToggleGroup
              type="multiple"
              value={isPreview ? [] : activeFormats}
              onValueChange={handleFormatsChange}
              aria-label="Text format"
            >
              <ToolbarToggleItem value="bold" aria-label="Bold" disabled={isPreview}><FontAwesomeIcon icon={faBold} /></ToolbarToggleItem>
              <ToolbarToggleItem value="italic" aria-label="Italic" disabled={isPreview}><FontAwesomeIcon icon={faItalic} /></ToolbarToggleItem>
              <ToolbarToggleItem value="underline" aria-label="Underline" disabled={isPreview}><FontAwesomeIcon icon={faUnderline} /></ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator />
            <ToolbarToggleGroup
              type="single"
              value={isPreview ? "" : activeAlign}
              onValueChange={handleAlignChange}
              aria-label="Alignment"
            >
              <ToolbarToggleItem value="left" aria-label="Left" disabled={isPreview}><FontAwesomeIcon icon={faAlignLeft} /></ToolbarToggleItem>
              <ToolbarToggleItem value="center" aria-label="Center" disabled={isPreview}><FontAwesomeIcon icon={faAlignCenter} /></ToolbarToggleItem>
              <ToolbarToggleItem value="right" aria-label="Right" disabled={isPreview}><FontAwesomeIcon icon={faAlignRight} /></ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator />
            <ToolbarToggleGroup
              type="multiple"
              value={isPreview ? [] : activeBlocks}
              onValueChange={handleBlocksChange}
              aria-label="Block format"
            >
              <ToolbarToggleItem value="bulletList" aria-label="Bullet list" disabled={isPreview}><FontAwesomeIcon icon={faListUl} /></ToolbarToggleItem>
              <ToolbarToggleItem value="orderedList" aria-label="Ordered list" disabled={isPreview}><FontAwesomeIcon icon={faListOl} /></ToolbarToggleItem>
              <ToolbarToggleItem value="blockquote" aria-label="Blockquote" disabled={isPreview}><FontAwesomeIcon icon={faQuoteLeft} /></ToolbarToggleItem>
              <ToolbarToggleItem value="codeBlock" aria-label="Code block" disabled={isPreview}><FontAwesomeIcon icon={faCode} /></ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSpacer />
            <ToolbarToggleGroup
              type="single"
              value={mode}
              onValueChange={(v) => v && setMode(v as "editor" | "preview")}
              aria-label="View mode"
            >
              <ToolbarToggleItem value="editor" aria-label="Editor"><FontAwesomeIcon icon={faPen} /></ToolbarToggleItem>
              <ToolbarToggleItem value="preview" aria-label="Preview"><FontAwesomeIcon icon={faEye} /></ToolbarToggleItem>
            </ToolbarToggleGroup>
          </Toolbar>
          {isPreview ? (
            <div
              className="wysiwyg-preview"
              dangerouslySetInnerHTML={{ __html: editor?.getHTML() ?? "" }}
            />
          ) : (
            <EditorContent editor={editor} className="wysiwyg-editor" />
          )}
        </div>
        <CodeBlock isDark={isDark} code={`
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { ToolbarSpacer, ToolbarToggleGroup, ToolbarToggleItem } from "@smngs/ui";

// StarterKit includes Markdown-like input rules:
//   **bold**, *italic*, ## Heading, - bullet list, \`\`\` code block

const [mode, setMode] = useState("editor");
const [activeAlign, setActiveAlign] = useState("left");

const editor = useEditor({
  extensions: [StarterKit, Underline, TextAlign.configure({ types: ["paragraph"] })],
  content: "<p>Hello <strong>world</strong></p>",
  onTransaction({ editor: e }) {
    const align = ["left", "center", "right"].find(a => e.isActive({ textAlign: a }));
    setActiveAlign(align ?? "left");
  },
});

// In Toolbar:
<ToolbarSpacer />
<ToolbarToggleGroup type="single" value={mode} onValueChange={(v) => v && setMode(v)}>
  <ToolbarToggleItem value="editor" aria-label="Editor"><FontAwesomeIcon icon={faPen} /></ToolbarToggleItem>
  <ToolbarToggleItem value="preview" aria-label="Preview"><FontAwesomeIcon icon={faEye} /></ToolbarToggleItem>
</ToolbarToggleGroup>

// Content area:
{mode === "preview"
  ? <div dangerouslySetInnerHTML={{ __html: editor?.getHTML() ?? "" }} />
  : <EditorContent editor={editor} />
}
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
