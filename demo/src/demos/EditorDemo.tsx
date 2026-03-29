import { useState } from "react";
import {
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

export function EditorDemo() {
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
          <ToolbarToggleItem value="h1" aria-label="Heading 1" disabled={isPreview}><span style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-bold)" }}>H1</span></ToolbarToggleItem>
          <ToolbarToggleItem value="h2" aria-label="Heading 2" disabled={isPreview}><span style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-bold)" }}>H2</span></ToolbarToggleItem>
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
  );
}
