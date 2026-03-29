import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./Collapsible";
import { Button } from "../display/Button";

const meta: Meta<typeof Collapsible> = {
  title: "Navigation/Collapsible",
  component: Collapsible,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="ghost">Toggle content ▾</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p style={{ padding: "0.8rem 0" }}>This content can be shown or hidden.</p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <Button variant="ghost">Toggle content ▾</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p style={{ padding: "0.8rem 0" }}>This content is open by default.</p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};
