import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "./Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  argTypes: {
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: () => (
    <Tooltip content="Tooltip text" side="top">
      <Button variant="ghost">Hover me</Button>
    </Tooltip>
  ),
};

export const Right: Story = {
  render: () => (
    <Tooltip content="Tooltip on the right" side="right">
      <Button variant="ghost">Hover me</Button>
    </Tooltip>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Tooltip content="Tooltip below" side="bottom">
      <Button variant="ghost">Hover me</Button>
    </Tooltip>
  ),
};

export const Left: Story = {
  render: () => (
    <Tooltip content="Tooltip on the left" side="left">
      <Button variant="ghost">Hover me</Button>
    </Tooltip>
  ),
};
