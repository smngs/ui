import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: { layout: "centered" },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Empty: Story = {
  render: () => <div style={{ width: "32rem" }}><Progress value={0} /></div>,
};

export const Quarter: Story = {
  render: () => <div style={{ width: "32rem" }}><Progress value={25} /></div>,
};

export const Half: Story = {
  render: () => <div style={{ width: "32rem" }}><Progress value={50} /></div>,
};

export const ThreeQuarters: Story = {
  render: () => <div style={{ width: "32rem" }}><Progress value={75} /></div>,
};

export const Complete: Story = {
  render: () => <div style={{ width: "32rem" }}><Progress value={100} /></div>,
};

export const Interactive: Story = {
  args: { value: 60 },
  render: (args) => <div style={{ width: "32rem" }}><Progress {...args} /></div>,
};
