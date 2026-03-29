import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormSubmit,
} from "./Form";
import { Button } from "../display/Button";

const meta: Meta = {
  title: "Form/Form",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.55em 0.9em",
  fontSize: "var(--text-sm)",
  fontFamily: "inherit",
  border: "1px solid var(--color-divider)",
  borderRadius: "var(--radius-sm)",
  background: "var(--color-bg)",
  color: "var(--color-text)",
  outline: "none",
  transition: "border-color var(--ease-fast)",
};

export const Default: Story = {
  render: () => (
    <div style={{ width: "32rem" }}>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormField name="email">
          <FormLabel>Email</FormLabel>
          <FormControl>
            <input
              type="email"
              placeholder="you@example.com"
              required
              style={inputStyle}
            />
          </FormControl>
          <FormMessage match="valueMissing">Email is required.</FormMessage>
          <FormMessage match="typeMismatch">Please enter a valid email.</FormMessage>
        </FormField>
        <FormSubmit asChild>
          <Button variant="primary">Subscribe</Button>
        </FormSubmit>
      </Form>
    </div>
  ),
};

export const SignIn: Story = {
  render: () => (
    <div style={{ width: "32rem" }}>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormField name="email">
          <FormLabel>Email</FormLabel>
          <FormControl>
            <input
              type="email"
              placeholder="you@example.com"
              required
              style={inputStyle}
            />
          </FormControl>
          <FormMessage match="valueMissing">Email is required.</FormMessage>
          <FormMessage match="typeMismatch">Please enter a valid email address.</FormMessage>
        </FormField>
        <FormField name="password">
          <FormLabel>Password</FormLabel>
          <FormControl>
            <input
              type="password"
              placeholder="••••••••"
              required
              minLength={8}
              style={inputStyle}
            />
          </FormControl>
          <FormMessage match="valueMissing">Password is required.</FormMessage>
          <FormMessage match="tooShort">Password must be at least 8 characters.</FormMessage>
        </FormField>
        <FormSubmit asChild>
          <Button variant="primary" style={{ width: "100%" }}>Sign In</Button>
        </FormSubmit>
      </Form>
    </div>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <div style={{ width: "32rem" }}>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormField name="name">
          <FormLabel>Name</FormLabel>
          <FormControl>
            <input
              type="text"
              placeholder="Your name"
              required
              style={inputStyle}
            />
          </FormControl>
          <FormMessage match="valueMissing">Name is required.</FormMessage>
        </FormField>
        <FormField name="message">
          <FormLabel>Message</FormLabel>
          <FormControl>
            <textarea
              placeholder="Write your message…"
              required
              minLength={10}
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </FormControl>
          <FormMessage match="valueMissing">Message is required.</FormMessage>
          <FormMessage match="tooShort">Message must be at least 10 characters.</FormMessage>
        </FormField>
        <FormSubmit asChild>
          <Button variant="primary">Send Message</Button>
        </FormSubmit>
      </Form>
    </div>
  ),
};
