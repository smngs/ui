import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LinkCard } from "./LinkCard";

const meta: Meta<typeof LinkCard> = {
  title: "Display/LinkCard",
  component: LinkCard,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof LinkCard>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: "48rem" }}>
      <LinkCard
        href="https://radix-ui.com"
        title="Radix UI"
        description="An open source component library optimized for fast development, easy maintenance, and accessibility."
      />
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div style={{ maxWidth: "48rem" }}>
      <LinkCard
        href="https://github.com/smngs/ui"
        title="@smngs/ui"
        description="A Radix UI-based design system with 25+ components, built with CSS custom properties and TypeScript."
        image="https://opengraph.githubassets.com/1/smngs/ui"
      />
    </div>
  ),
};

export const WithFavicon: Story = {
  render: () => (
    <div style={{ maxWidth: "48rem" }}>
      <LinkCard
        href="https://github.com"
        title="GitHub"
        description="Where the world builds software."
        favicon="https://github.com/favicon.ico"
      />
    </div>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <div style={{ maxWidth: "48rem" }}>
      <LinkCard
        href="https://react.dev"
        title="React — The library for web and native user interfaces"
      />
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", maxWidth: "48rem" }}>
      <LinkCard
        href="https://radix-ui.com"
        title="Radix UI"
        description="Unstyled, accessible components for building high-quality design systems."
      />
      <LinkCard
        href="https://www.typescriptlang.org"
        title="TypeScript"
        description="TypeScript is JavaScript with syntax for types."
      />
      <LinkCard
        href="https://vitejs.dev"
        title="Vite"
        description="Next generation frontend tooling."
      />
    </div>
  ),
};
