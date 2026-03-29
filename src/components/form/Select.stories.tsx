import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select
      placeholder="Select a framework..."
      groups={[
        {
          options: [
            { value: "react", label: "React" },
            { value: "vue", label: "Vue" },
            { value: "svelte", label: "Svelte" },
            { value: "astro", label: "Astro" },
          ],
        },
      ]}
    />
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select
      placeholder="Select language..."
      groups={[
        {
          label: "Frontend",
          options: [
            { value: "ts", label: "TypeScript" },
            { value: "js", label: "JavaScript" },
          ],
        },
        {
          label: "Backend",
          options: [
            { value: "go", label: "Go" },
            { value: "rust", label: "Rust" },
            { value: "python", label: "Python" },
          ],
        },
      ]}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select
      placeholder="Disabled select"
      disabled
      groups={[
        {
          options: [
            { value: "a", label: "Option A" },
          ],
        },
      ]}
    />
  ),
};
