import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarLink,
} from "./Toolbar";

const meta: Meta = {
  title: "Layout/Toolbar",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Toolbar aria-label="Text formatting">
      <ToolbarButton aria-label="Undo">↩</ToolbarButton>
      <ToolbarButton aria-label="Redo">↪</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="multiple" aria-label="Text format">
        <ToolbarToggleItem value="bold" aria-label="Bold"><strong>B</strong></ToolbarToggleItem>
        <ToolbarToggleItem value="italic" aria-label="Italic"><em>I</em></ToolbarToggleItem>
        <ToolbarToggleItem value="underline" aria-label="Underline"><span style={{ textDecoration: "underline" }}>U</span></ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single" defaultValue="left" aria-label="Text alignment">
        <ToolbarToggleItem value="left" aria-label="Align left">⬅</ToolbarToggleItem>
        <ToolbarToggleItem value="center" aria-label="Align center">⬛</ToolbarToggleItem>
        <ToolbarToggleItem value="right" aria-label="Align right">➡</ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarLink href="#">Share</ToolbarLink>
    </Toolbar>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Toolbar aria-label="Actions">
      <ToolbarButton aria-label="New">New</ToolbarButton>
      <ToolbarButton aria-label="Open">Open</ToolbarButton>
      <ToolbarButton aria-label="Save">Save</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton aria-label="Cut" disabled>Cut</ToolbarButton>
      <ToolbarButton aria-label="Copy" disabled>Copy</ToolbarButton>
      <ToolbarButton aria-label="Paste">Paste</ToolbarButton>
    </Toolbar>
  ),
};

export const MinimalEditor: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      <Toolbar aria-label="Editor toolbar">
        <ToolbarToggleGroup type="multiple" aria-label="Format">
          <ToolbarToggleItem value="bold" aria-label="Bold"><strong>B</strong></ToolbarToggleItem>
          <ToolbarToggleItem value="italic" aria-label="Italic"><em>I</em></ToolbarToggleItem>
          <ToolbarToggleItem value="code" aria-label="Code">{"</>"}</ToolbarToggleItem>
        </ToolbarToggleGroup>
        <ToolbarSeparator />
        <ToolbarButton aria-label="Insert link">🔗</ToolbarButton>
        <ToolbarButton aria-label="Insert image">🖼</ToolbarButton>
      </Toolbar>
      <div
        style={{
          border: "1px solid var(--color-divider)",
          borderRadius: "var(--radius-md)",
          padding: "var(--space-3)",
          minHeight: "8rem",
          fontSize: "var(--text-sm)",
          color: "var(--color-subtle)",
        }}
      >
        Editor content area…
      </div>
    </div>
  ),
};
