import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "./Dialog";
import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Dialog",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent title="Dialog Title" description="This is the dialog description.">
        <p>Dialog body content goes here.</p>
        <div style={{ marginTop: "1.6rem", display: "flex", justifyContent: "flex-end", gap: "0.8rem" }}>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary">Confirm</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutDescription: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Open Simple Dialog</Button>
      </DialogTrigger>
      <DialogContent title="Simple Dialog">
        <p>A dialog without a description.</p>
      </DialogContent>
    </Dialog>
  ),
};
