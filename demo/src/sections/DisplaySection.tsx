import {
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card, CardBody, CardHeader,
  LinkCard,
  Separator,
  Tooltip,
} from "@smngs/ui";
import { Section } from "../Section";
import { CodeBlock } from "../CodeBlock";

export function DisplaySection({ isDark }: { isDark: boolean }) {
  return (
    <>
      <div className="section" id="display">
        <h2>Display</h2>
      </div>

      {/* Blockquote */}
      <Section title="Blockquote" id="blockquote" level={3}>
        <blockquote>Default — Design is not just what it looks like and feels like. Design is how it works. — Steve Jobs</blockquote>
        <Blockquote variant="info">Info — This is an informational note. Use it to provide helpful context or tips.</Blockquote>
        <Blockquote variant="success">Success — Operation completed successfully. Your changes have been saved.</Blockquote>
        <Blockquote variant="warning">Warning — Proceed with caution. This action may have unintended side effects.</Blockquote>
        <Blockquote variant="danger">Danger — This action is irreversible. Please confirm before continuing.</Blockquote>
        <CodeBlock isDark={isDark} code={`
<blockquote>Default quote text</blockquote>
<Blockquote variant="info">Info message</Blockquote>
<Blockquote variant="success">Success message</Blockquote>
<Blockquote variant="warning">Warning message</Blockquote>
<Blockquote variant="danger">Danger message</Blockquote>
        `} />
      </Section>

      <Separator />

      {/* Button */}
      <Section title="Button" id="button" level={3}>
        <div className="row">
          <Button variant="primary">Primary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" asChild><a href="#top">Link</a></Button>
        </div>
        <div className="row" style={{ alignItems: "center" }}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="ghost" size="sm">Ghost sm</Button>
          <Button variant="ghost" size="lg">Ghost lg</Button>
        </div>
        <CodeBlock isDark={isDark} code={`
<Button variant="primary">Primary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="primary" disabled>Disabled</Button>
<Button variant="primary" asChild><a href="/page">Link</a></Button>

{/* size: "sm" | "md" (default) | "lg" */}
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>
        `} />
      </Section>

      <Separator />

      {/* LinkCard */}
      <Section title="LinkCard" id="link-card" level={3}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <LinkCard
            href="https://github.com/smngs/ui"
            title="smngs/ui — Radix UI based design system"
            description="A minimal component library built on Radix UI primitives with design tokens and dark mode support."
            favicon="https://github.com/favicon.ico"
          />
          <LinkCard
            href="https://www.radix-ui.com"
            title="Radix UI — Unstyled, accessible components for React"
            description="An open source component library optimized for fast development, easy maintenance, and accessibility."
            image="https://radix-ui.com/social/themes.png"
            favicon="https://www.radix-ui.com/favicon.png"
          />
        </div>
        <CodeBlock isDark={isDark} code={`
<LinkCard
  href="https://example.com"
  title="Page Title"
  description="A brief description of the linked page."
  image="https://example.com/ogp.png"
  favicon="https://example.com/favicon.ico"
/>
        `} />
      </Section>

      <Separator />

      {/* Badge */}
      <Section title="Badge" id="badge" level={3}>
        <div className="row">
          <Badge>Default</Badge>
          <Badge asChild><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></Badge>
          <Badge asChild><a href="https://orcid.org" target="_blank" rel="noreferrer">ORCID</a></Badge>
        </div>
        <div className="row" style={{ alignItems: "center" }}>
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
        <CodeBlock isDark={isDark} code={`
<Badge>Default</Badge>
<Badge asChild><a href="https://github.com">GitHub</a></Badge>

{/* size: "sm" | "md" (default) | "lg" */}
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
        `} />
      </Section>

      <Separator />

      {/* Avatar */}
      <Section title="Avatar" id="avatar" level={3}>
        <div className="row">
          <Tooltip content="sm"><Avatar fallback="SM" size="sm" /></Tooltip>
          <Tooltip content="md"><Avatar fallback="SM" size="md" /></Tooltip>
          <Tooltip content="lg"><Avatar fallback="SM" size="lg" /></Tooltip>
          <Avatar src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y" alt="Gravatar" size="lg" fallback="SM" />
        </div>
        <CodeBlock isDark={isDark} code={`
<Avatar fallback="SM" size="sm" />
<Avatar fallback="SM" size="md" />
<Avatar fallback="SM" size="lg" />
<Avatar src="https://example.com/photo.jpg" alt="User" size="lg" fallback="SM" />
        `} />
      </Section>

      <Separator />

      {/* Card */}
      <Section title="Card" id="card" level={3}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(24rem, 100%), 1fr))", gap: "var(--space-2)" }}>
          <Card>
            <CardHeader>User Profile</CardHeader>
            <CardBody>
              <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
                <Avatar fallback="AL" size="md" />
                <div>
                  <div style={{ fontWeight: "var(--font-bold)" }}>Alice Johnson</div>
                  <div style={{ fontSize: "var(--text-sm)", color: "var(--color-subtle)" }}>@alice</div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Statistics</CardHeader>
            <CardBody>
              <div style={{ fontSize: "var(--text-2xl)", fontWeight: "var(--font-bold)" }}>12,345</div>
              <div style={{ fontSize: "var(--text-sm)", color: "var(--color-muted)", marginTop: "var(--space-1)" }}>Monthly active users</div>
            </CardBody>
          </Card>
        </div>
        <CodeBlock isDark={isDark} code={`
<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content goes here.</CardBody>
</Card>
        `} />
      </Section>

      <Separator />

      {/* Tooltip */}
      <Section title="Tooltip" id="tooltip" level={3}>
        <div className="row">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Tooltip key={side} content={`Shows on ${side}`} side={side}>
              <Button variant="ghost">{side}</Button>
            </Tooltip>
          ))}
        </div>
        <CodeBlock isDark={isDark} code={`
<Tooltip content="Helpful hint" side="top">
  <Button variant="ghost">Hover me</Button>
</Tooltip>
        `} />
      </Section>

      <Separator />
    </>
  );
}
