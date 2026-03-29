import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { Label } from "./Label";

const meta: Meta = {
  title: "Form/RadioGroup",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
      <RadioGroup defaultValue="option1">
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <RadioGroupItem value="option1" id="r1" />
          <Label htmlFor="r1">Option One</Label>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <RadioGroupItem value="option2" id="r2" />
          <Label htmlFor="r2">Option Two</Label>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <RadioGroupItem value="option3" id="r3" />
          <Label htmlFor="r3">Option Three</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};
