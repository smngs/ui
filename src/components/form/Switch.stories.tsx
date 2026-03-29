import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { Label } from "./Label";

const meta: Meta<typeof Switch> = {
  title: "Form/Switch",
  component: Switch,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Off: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
      <Switch id="sw1" />
      <Label htmlFor="sw1">Notifications</Label>
    </div>
  ),
};

export const On: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
      <Switch id="sw2" defaultChecked />
      <Label htmlFor="sw2">Dark mode</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
      <Switch id="sw3" disabled />
      <Label htmlFor="sw3">Disabled</Label>
    </div>
  ),
};
