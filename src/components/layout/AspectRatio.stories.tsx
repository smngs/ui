import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./AspectRatio";

const meta: Meta<typeof AspectRatio> = {
  title: "Layout/AspectRatio",
  component: AspectRatio,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Widescreen: Story = {
  render: () => (
    <div style={{ width: "32rem" }}>
      <AspectRatio ratio={16 / 9}>
        <div style={{ width: "100%", height: "100%", background: "var(--color-bg-subtle)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0.4rem" }}>
          16:9
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <AspectRatio ratio={1}>
        <div style={{ width: "100%", height: "100%", background: "var(--color-bg-subtle)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0.4rem" }}>
          1:1
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  render: () => (
    <div style={{ width: "16rem" }}>
      <AspectRatio ratio={3 / 4}>
        <div style={{ width: "100%", height: "100%", background: "var(--color-bg-subtle)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0.4rem" }}>
          3:4
        </div>
      </AspectRatio>
    </div>
  ),
};
