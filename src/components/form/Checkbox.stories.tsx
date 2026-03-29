import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Label } from "./Label";

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
      <Checkbox id="cb1" />
      <Label htmlFor="cb1">Accept terms</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
      <Checkbox id="cb2" defaultChecked />
      <Label htmlFor="cb2">Remember me</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
      <Checkbox id="cb3" disabled />
      <Label htmlFor="cb3">Disabled option</Label>
    </div>
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
      <Checkbox id="cb4" defaultChecked disabled />
      <Label htmlFor="cb4">Disabled checked</Label>
    </div>
  ),
};
