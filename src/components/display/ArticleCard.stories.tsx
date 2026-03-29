import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "./ArticleCard";

const meta: Meta<typeof ArticleCard> = {
  title: "Display/ArticleCard",
  component: ArticleCard,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  render: () => (
    <ArticleCard
      style={{ width: "24rem" }}
      title="Getting Started with React Server Components"
      category="Engineering"
      tags={["React", "Next.js", "Performance"]}
      date="2026-03-30"
    />
  ),
};

export const WithImage: Story = {
  render: () => (
    <ArticleCard
      style={{ width: "24rem" }}
      image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
      imageAlt="Code on screen"
      title="Getting Started with React Server Components"
      category="Engineering"
      tags={["React", "Next.js", "Performance"]}
      date="2026-03-30"
    />
  ),
};

export const AsLink: Story = {
  render: () => (
    <ArticleCard
      style={{ width: "24rem" }}
      href="#"
      image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
      imageAlt="Code on screen"
      title="Getting Started with React Server Components"
      category="Engineering"
      tags={["React", "Next.js", "Performance"]}
      date="2026-03-30"
    />
  ),
};

export const NoImage: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1.6rem", flexWrap: "wrap" }}>
      <ArticleCard
        style={{ width: "22rem" }}
        title="Understanding CSS Grid Layout"
        category="Design"
        tags={["CSS", "Layout"]}
        date="2026-03-15"
      />
      <ArticleCard
        style={{ width: "22rem" }}
        title="TypeScript Tips for Large Codebases"
        category="Engineering"
        tags={["TypeScript", "DX"]}
        date="2026-02-28"
      />
    </div>
  ),
};
