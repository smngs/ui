import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent } from "./AlertDialog";
import { Button } from "../display/Button";

const meta: Meta = {
  title: "Overlay/AlertDialog",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="danger">Delete Item</Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        title="Are you sure?"
        description="This action cannot be undone. This will permanently delete the item."
        cancelLabel="Cancel"
        actionLabel="Delete"
      />
    </AlertDialog>
  ),
};

export const CustomLabels: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="primary">Leave Page</Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        title="Leave this page?"
        description="Any unsaved changes will be lost."
        cancelLabel="Stay"
        actionLabel="Leave"
      />
    </AlertDialog>
  ),
};
