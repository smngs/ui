import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "32rem" }}>
      <Tabs defaultValue="tab1">
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
    </div>
  ),
};

export const TwoTabs: Story = {
  render: () => (
    <div style={{ width: "32rem" }}>
      <Tabs defaultValue="code">
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
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", width: "32rem" }}>
      <div>
        <div style={{ fontSize: "var(--text-xs)", color: "var(--color-subtle)", marginBottom: "var(--space-1)" }}>size="sm"</div>
        <Tabs defaultValue="a" size="sm">
          <TabsList>
            <TabsTrigger value="a">Tab A</TabsTrigger>
            <TabsTrigger value="b">Tab B</TabsTrigger>
            <TabsTrigger value="c">Tab C</TabsTrigger>
          </TabsList>
          <TabsContent value="a"><p>Small tab content.</p></TabsContent>
          <TabsContent value="b"><p>Tab B.</p></TabsContent>
          <TabsContent value="c"><p>Tab C.</p></TabsContent>
        </Tabs>
      </div>
      <div>
        <div style={{ fontSize: "var(--text-xs)", color: "var(--color-subtle)", marginBottom: "var(--space-1)" }}>size="md" (default)</div>
        <Tabs defaultValue="a">
          <TabsList>
            <TabsTrigger value="a">Tab A</TabsTrigger>
            <TabsTrigger value="b">Tab B</TabsTrigger>
            <TabsTrigger value="c">Tab C</TabsTrigger>
          </TabsList>
          <TabsContent value="a"><p>Medium tab content.</p></TabsContent>
          <TabsContent value="b"><p>Tab B.</p></TabsContent>
          <TabsContent value="c"><p>Tab C.</p></TabsContent>
        </Tabs>
      </div>
      <div>
        <div style={{ fontSize: "var(--text-xs)", color: "var(--color-subtle)", marginBottom: "var(--space-1)" }}>size="lg"</div>
        <Tabs defaultValue="a" size="lg">
          <TabsList>
            <TabsTrigger value="a">Tab A</TabsTrigger>
            <TabsTrigger value="b">Tab B</TabsTrigger>
            <TabsTrigger value="c">Tab C</TabsTrigger>
          </TabsList>
          <TabsContent value="a"><p>Large tab content.</p></TabsContent>
          <TabsContent value="b"><p>Tab B.</p></TabsContent>
          <TabsContent value="c"><p>Tab C.</p></TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};
