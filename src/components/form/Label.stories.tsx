import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Form/Label",
  component: Label,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <Label>Email address</Label>,
};

export const WithInput: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <Label htmlFor="email">Email address</Label>
      <input
        id="email"
        type="email"
        placeholder="you@example.com"
        style={{ padding: "0.6rem 1rem", borderRadius: "0.4rem", border: "1px solid var(--color-border)", fontSize: "1.4rem" }}
      />
    </div>
  ),
};
