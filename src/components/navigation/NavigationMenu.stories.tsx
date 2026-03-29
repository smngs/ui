import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent,
} from "./NavigationMenu";

const meta: Meta = {
  title: "Navigation/NavigationMenu",
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Home</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div style={{ padding: "1.2rem", display: "flex", flexDirection: "column", gap: "0.8rem", minWidth: "16rem" }}>
            <NavigationMenuLink href="#">Design System</NavigationMenuLink>
            <NavigationMenuLink href="#">Components</NavigationMenuLink>
            <NavigationMenuLink href="#">Tokens</NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">About</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  ),
};

export const LinksOnly: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Home</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Blog</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Contact</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  ),
};
