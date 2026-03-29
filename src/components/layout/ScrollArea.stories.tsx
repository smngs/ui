import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./ScrollArea";

const meta: Meta<typeof ScrollArea> = {
  title: "Layout/ScrollArea",
  component: ScrollArea,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea height="20rem" style={{ width: "32rem" }}>
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} style={{ padding: "0.8rem 1.2rem", borderBottom: "1px solid var(--color-border)" }}>
          Item {i + 1}
        </div>
      ))}
    </ScrollArea>
  ),
};

export const Narrow: Story = {
  render: () => (
    <ScrollArea height="16rem" style={{ width: "20rem" }}>
      {Array.from({ length: 30 }, (_, i) => (
        <div key={i} style={{ padding: "0.6rem 1.2rem" }}>
          List entry {i + 1}
        </div>
      ))}
    </ScrollArea>
  ),
};
