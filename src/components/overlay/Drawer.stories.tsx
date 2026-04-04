import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "./Drawer";
import { Button } from "../display/Button";

const meta: Meta<typeof Drawer> = {
  title: "Overlay/Drawer",
  component: Drawer,
};
export default meta;
type Story = StoryObj<typeof Drawer>;

export const Right: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer (Right)</Button>
      </DrawerTrigger>
      <DrawerContent title="Settings" description="Manage your preferences.">
        <p>Drawer content goes here.</p>
        <DrawerClose asChild>
          <Button variant="ghost">Close</Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  ),
};

export const Left: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer (Left)</Button>
      </DrawerTrigger>
      <DrawerContent title="Navigation" side="left">
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </DrawerContent>
    </Drawer>
  ),
};
