import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" style={{ width: "32rem" }}>
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Details</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Overview content.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Details content.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Settings content.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const TwoTabs: Story = {
  render: () => (
    <Tabs defaultValue="code" style={{ width: "32rem" }}>
      <TabsList>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="code">
        <pre><code>{"<Button variant=\"primary\">Click me</Button>"}</code></pre>
      </TabsContent>
      <TabsContent value="preview">
        <p>Rendered button would appear here.</p>
      </TabsContent>
    </Tabs>
  ),
};
