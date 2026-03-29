import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Navbar,
  NavbarTitle,
  NavbarLinks,
  NavbarRight,
  NavbarHamburger,
  NavbarMobileMenu,
  NavbarDropdownContent,
} from "./Navbar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./DropdownMenu";
import { Button } from "../display/Button";
import { Avatar } from "../display/Avatar";

const meta: Meta = {
  title: "Navigation/Navbar",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Navbar>
      <NavbarTitle href="#">My App</NavbarTitle>
      <NavbarLinks>
        <Button variant="nav" asChild><a href="#">Home</a></Button>
        <Button variant="nav" asChild><a href="#">Blog</a></Button>
        <Button variant="nav" asChild><a href="#">About</a></Button>
      </NavbarLinks>
      <NavbarRight>
        <NavbarHamburger />
      </NavbarRight>
      <NavbarMobileMenu>
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">About</a>
      </NavbarMobileMenu>
    </Navbar>
  ),
};

export const WithDropdown: Story = {
  render: () => (
    <Navbar>
      <NavbarTitle href="#">@smngs/ui</NavbarTitle>
      <NavbarLinks>
        <Button variant="nav" asChild><a href="#">Home</a></Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="nav">Components ▾</Button>
          </DropdownMenuTrigger>
          <NavbarDropdownContent>
            <DropdownMenuItem>Button</DropdownMenuItem>
            <DropdownMenuItem>Badge</DropdownMenuItem>
            <DropdownMenuItem>Card</DropdownMenuItem>
            <DropdownMenuItem>Tabs</DropdownMenuItem>
          </NavbarDropdownContent>
        </DropdownMenu>
        <Button variant="nav" asChild><a href="#">Docs</a></Button>
      </NavbarLinks>
      <NavbarRight>
        <NavbarHamburger />
      </NavbarRight>
      <NavbarMobileMenu>
        <a href="#">Home</a>
        <a href="#">Components</a>
        <a href="#">Docs</a>
      </NavbarMobileMenu>
    </Navbar>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <Navbar>
      <Avatar
        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
        fallback="AB"
        size="sm"
      />
      <NavbarTitle href="#">My App</NavbarTitle>
      <NavbarLinks>
        <Button variant="nav" asChild><a href="#">Dashboard</a></Button>
        <Button variant="nav" asChild><a href="#">Projects</a></Button>
        <Button variant="nav" asChild><a href="#">Settings</a></Button>
      </NavbarLinks>
      <NavbarRight>
        <Button variant="primary" style={{ fontSize: "var(--text-sm)" }}>Sign in</Button>
        <NavbarHamburger />
      </NavbarRight>
      <NavbarMobileMenu>
        <a href="#">Dashboard</a>
        <a href="#">Projects</a>
        <a href="#">Settings</a>
      </NavbarMobileMenu>
    </Navbar>
  ),
};

export const MinimalLinks: Story = {
  render: () => (
    <Navbar>
      <NavbarTitle href="#">Brand</NavbarTitle>
      <NavbarRight>
        <Button variant="nav" asChild><a href="#">Login</a></Button>
        <Button variant="primary" style={{ fontSize: "var(--text-sm)" }}>Get started</Button>
        <NavbarHamburger />
      </NavbarRight>
      <NavbarMobileMenu>
        <a href="#">Login</a>
        <a href="#">Get started</a>
      </NavbarMobileMenu>
    </Navbar>
  ),
};
