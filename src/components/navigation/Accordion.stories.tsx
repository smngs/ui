import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Navigation/Accordion",
  component: Accordion,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  render: () => (
    <Accordion type="single" collapsible style={{ width: "32rem" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is smngs-ui?</AccordionTrigger>
        <AccordionContent>A design system built with Radix UI primitives and CSS custom properties.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I install it?</AccordionTrigger>
        <AccordionContent>Run <code>npm install @smngs/ui</code> in your project.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes — all interactive components are built on Radix UI which follows WAI-ARIA patterns.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" style={{ width: "32rem" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section One</AccordionTrigger>
        <AccordionContent>Content for section one.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section Two</AccordionTrigger>
        <AccordionContent>Content for section two.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
