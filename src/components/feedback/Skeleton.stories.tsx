import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  argTypes: {
    variant: { control: "select", options: ["text", "circle", "rect"] },
  },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: { width: "100%", height: "2rem" },
};

export const Circle: Story = {
  args: { width: "4.8rem", height: "4.8rem", variant: "circle" },
};

export const Text: Story = {
  args: { width: "60%", height: "1.4rem", variant: "text" },
};

export const CardPlaceholder: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
      <Skeleton variant="circle" width="4.8rem" height="4.8rem" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <Skeleton variant="text" width="40%" height="1.6rem" />
        <Skeleton variant="text" width="100%" height="1.2rem" />
        <Skeleton variant="text" width="80%" height="1.2rem" />
      </div>
    </div>
  ),
};
