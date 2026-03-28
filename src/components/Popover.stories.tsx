import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "./Popover";
import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Popover",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p style={{ marginBottom: "0.8rem" }}>Popover content goes here.</p>
        <PopoverClose asChild>
          <Button variant="ghost">Close</Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="primary">Settings</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p style={{ fontWeight: "bold", marginBottom: "0.8rem" }}>Settings</p>
        <p style={{ fontSize: "1.2rem", color: "var(--color-text-muted)" }}>Configure your preferences here.</p>
      </PopoverContent>
    </Popover>
  ),
};
