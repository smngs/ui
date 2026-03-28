import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const FallbackSm: Story = {
  args: { fallback: "AB", size: "sm" },
};

export const FallbackMd: Story = {
  args: { fallback: "AB", size: "md" },
};

export const FallbackLg: Story = {
  args: { fallback: "AB", size: "lg" },
};

export const WithImage: Story = {
  args: {
    src: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y",
    alt: "Gravatar",
    fallback: "AB",
    size: "lg",
  },
};
