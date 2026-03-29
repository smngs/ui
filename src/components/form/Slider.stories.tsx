import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Form/Slider",
  component: Slider,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <Slider defaultValue={[40]} />
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <Slider defaultValue={[20, 80]} />
    </div>
  ),
};

export const WithStep: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <Slider defaultValue={[50]} step={10} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <Slider defaultValue={[60]} disabled />
    </div>
  ),
};
