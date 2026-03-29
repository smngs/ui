import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid, GridItem } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Box = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div
    style={{
      background: "var(--color-brand)",
      color: "var(--color-white)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-3)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-medium)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style,
    }}
  >
    {children}
  </div>
);

export const TwoColumns: Story = {
  render: () => (
    <Grid columns={2}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  render: () => (
    <Grid columns={3}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
    </Grid>
  ),
};

export const AutoFill: Story = {
  render: () => (
    <Grid columns="auto" gap="md">
      {Array.from({ length: 6 }).map((_, i) => (
        <Box key={i}>{i + 1}</Box>
      ))}
    </Grid>
  ),
};

export const WithColSpan: Story = {
  render: () => (
    <Grid columns={3} gap="md">
      <GridItem colSpan={2}><Box>span 2</Box></GridItem>
      <Box>1</Box>
      <Box>1</Box>
      <GridItem colSpan="full"><Box>full width</Box></GridItem>
    </Grid>
  ),
};

export const WithRowSpan: Story = {
  render: () => (
    <Grid columns={3} gap="md">
      <GridItem rowSpan={2}><Box style={{ height: "100%" }}>row 2</Box></GridItem>
      <Box>1</Box>
      <Box>1</Box>
      <Box>1</Box>
      <Box>1</Box>
    </Grid>
  ),
};

export const Gaps: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      {(["none", "sm", "md", "lg"] as const).map((gap) => (
        <div key={gap}>
          <div style={{ fontSize: "var(--text-xs)", color: "var(--color-subtle)", marginBottom: "var(--space-1)" }}>
            gap="{gap}"
          </div>
          <Grid columns={4} gap={gap}>
            {Array.from({ length: 4 }).map((_, i) => <Box key={i}>{i + 1}</Box>)}
          </Grid>
        </div>
      ))}
    </div>
  ),
};
