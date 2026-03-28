import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProvider, ToastViewport } from "./Toast";
import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Toast",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

function ToastDemo({ variant }: { variant: "default" | "success" | "error" }) {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Show {variant} toast
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={variant === "success" ? "Success!" : variant === "error" ? "Error" : "Notification"}
        description={
          variant === "success"
            ? "Your changes have been saved."
            : variant === "error"
            ? "Something went wrong."
            : "You have a new message."
        }
        variant={variant}
        duration={3000}
      />
      <ToastViewport />
    </ToastProvider>
  );
}

export const Default: Story = {
  render: () => <ToastDemo variant="default" />,
};

export const Success: Story = {
  render: () => <ToastDemo variant="success" />,
};

export const Error: Story = {
  render: () => <ToastDemo variant="error" />,
};
