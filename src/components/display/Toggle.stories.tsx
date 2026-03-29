import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Display/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["default", "outline"] },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => <Toggle aria-label="Bold">B</Toggle>,
};

export const DefaultPressed: Story = {
  render: () => <Toggle defaultPressed aria-label="Bold">B</Toggle>,
};

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Italic">
      <em>I</em>
    </Toggle>
  ),
};

export const Disabled: Story = {
  render: () => <Toggle disabled aria-label="Bold">B</Toggle>,
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
      <Toggle size="sm" aria-label="Small">S</Toggle>
      <Toggle size="md" aria-label="Medium">M</Toggle>
      <Toggle size="lg" aria-label="Large">L</Toggle>
    </div>
  ),
};

export const TextFormatting: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-1)" }}>
      <Toggle variant="outline" aria-label="Bold"><strong>B</strong></Toggle>
      <Toggle variant="outline" aria-label="Italic"><em>I</em></Toggle>
      <Toggle variant="outline" aria-label="Underline"><span style={{ textDecoration: "underline" }}>U</span></Toggle>
      <Toggle variant="outline" aria-label="Strikethrough"><span style={{ textDecoration: "line-through" }}>S</span></Toggle>
    </div>
  ),
};
