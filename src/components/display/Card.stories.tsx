import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Display/Card",
  component: Card,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: "24rem" }}>
      <CardHeader>Card Title</CardHeader>
      <CardBody>Card body content goes here.</CardBody>
    </Card>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Card style={{ width: "24rem" }}>
      <CardHeader>Research Paper</CardHeader>
      <CardBody>
        <p>This card demonstrates longer content with multiple paragraphs.</p>
        <p style={{ marginTop: "0.8rem" }}>Additional details can go here.</p>
      </CardBody>
    </Card>
  ),
};
