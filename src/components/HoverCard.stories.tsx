import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./HoverCard";
import { Avatar } from "./Avatar";

const meta: Meta = {
  title: "Components/HoverCard",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="#" style={{ textDecoration: "underline" }}>@smngs</a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <Avatar fallback="SG" size="md" />
          <div>
            <p style={{ fontWeight: "bold" }}>smngs</p>
            <p style={{ fontSize: "1.2rem", color: "var(--color-text-muted)" }}>Researcher & Developer</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
