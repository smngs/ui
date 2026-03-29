import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "./ContextMenu";

const meta: Meta = {
  title: "Overlay/ContextMenu",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          style={{
            width: "24rem",
            height: "12rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px dashed var(--color-divider)",
            borderRadius: "var(--radius-md)",
            color: "var(--color-subtle)",
            fontSize: "var(--text-sm)",
            userSelect: "none",
          }}
        >
          Right-click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Open in New Tab</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Copy Link</ContextMenuItem>
        <ContextMenuItem>Copy Image</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem disabled>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          style={{
            width: "24rem",
            height: "12rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px dashed var(--color-divider)",
            borderRadius: "var(--radius-md)",
            color: "var(--color-subtle)",
            fontSize: "var(--text-sm)",
            userSelect: "none",
          }}
        >
          Right-click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Export</ContextMenuLabel>
        <ContextMenuItem>Export as PNG</ContextMenuItem>
        <ContextMenuItem>Export as SVG</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          style={{
            width: "24rem",
            height: "12rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px dashed var(--color-divider)",
            borderRadius: "var(--radius-md)",
            color: "var(--color-subtle)",
            fontSize: "var(--text-sm)",
            userSelect: "none",
          }}
        >
          Right-click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>View</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Copy Link</ContextMenuItem>
            <ContextMenuItem>Email</ContextMenuItem>
            <ContextMenuItem>Slack</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuItem>Move to Trash</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
