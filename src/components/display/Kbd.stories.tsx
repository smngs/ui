import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "./Kbd";

const meta: Meta<typeof Kbd> = {
  title: "Display/Kbd",
  component: Kbd,
};
export default meta;
type Story = StoryObj<typeof Kbd>;

export const Single: Story = {
  render: () => <Kbd>K</Kbd>,
};

export const Combination: Story = {
  render: () => (
    <span>
      <Kbd>⌘</Kbd><Kbd>K</Kbd>
    </span>
  ),
};

export const InText: Story = {
  render: () => (
    <p style={{ fontSize: "1.4rem" }}>
      Press <Kbd>⌘</Kbd><Kbd>S</Kbd> to save, or <Kbd>Esc</Kbd> to cancel.
    </p>
  ),
};
