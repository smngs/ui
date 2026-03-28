import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./Collapsible";
import { Button } from "./Button";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible style={{ width: "24rem" }}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost">Toggle content ▾</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p style={{ padding: "0.8rem 0" }}>This content can be shown or hidden.</p>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen style={{ width: "24rem" }}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost">Toggle content ▾</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p style={{ padding: "0.8rem 0" }}>This content is open by default.</p>
      </CollapsibleContent>
    </Collapsible>
  ),
};
