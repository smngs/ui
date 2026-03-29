import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Display/Badge",
  component: Badge,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "TypeScript" },
};

export const AsLink: Story = {
  render: () => (
    <Badge asChild>
      <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
    </Badge>
  ),
};
