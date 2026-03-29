import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote } from "./Blockquote";

const meta: Meta<typeof Blockquote> = {
  title: "Display/Blockquote",
  component: Blockquote,
  parameters: { layout: "padded" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "danger"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  render: () => (
    <Blockquote>
      Design is not just what it looks like and feels like. Design is how it works.
    </Blockquote>
  ),
};

export const Info: Story = {
  render: () => (
    <Blockquote variant="info">
      This feature is currently in beta. Behavior may change in future releases.
    </Blockquote>
  ),
};

export const Success: Story = {
  render: () => (
    <Blockquote variant="success">
      Your configuration has been validated successfully.
    </Blockquote>
  ),
};

export const Warning: Story = {
  render: () => (
    <Blockquote variant="warning">
      Deprecated: This API will be removed in v2.0. Please migrate to the new interface.
    </Blockquote>
  ),
};

export const Danger: Story = {
  render: () => (
    <Blockquote variant="danger">
      Breaking change: The default export has been removed. Use named exports instead.
    </Blockquote>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <Blockquote>Default — neutral callout or quotation.</Blockquote>
      <Blockquote variant="info">Info — informational note or tip.</Blockquote>
      <Blockquote variant="success">Success — confirmation or positive outcome.</Blockquote>
      <Blockquote variant="warning">Warning — caution or deprecated notice.</Blockquote>
      <Blockquote variant="danger">Danger — error or breaking change.</Blockquote>
    </div>
  ),
};
