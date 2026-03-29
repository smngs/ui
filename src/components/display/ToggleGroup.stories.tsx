import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";

const meta: Meta = {
  title: "Display/ToggleGroup",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">⬅</ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">⬛</ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">➡</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Bold"><strong>B</strong></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic"><em>I</em></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline"><span style={{ textDecoration: "underline" }}>U</span></ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Strikethrough"><span style={{ textDecoration: "line-through" }}>S</span></ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Outline: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="md">
      <ToggleGroupItem value="sm" aria-label="Small">S</ToggleGroupItem>
      <ToggleGroupItem value="md" aria-label="Medium">M</ToggleGroupItem>
      <ToggleGroupItem value="lg" aria-label="Large">L</ToggleGroupItem>
      <ToggleGroupItem value="xl" aria-label="Extra Large">XL</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", alignItems: "flex-start" }}>
      <ToggleGroup type="single" size="sm" defaultValue="a">
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="md" defaultValue="a">
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="lg" defaultValue="a">
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <ToggleGroup type="single" disabled defaultValue="b">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
  ),
};
