import { useState } from "react";
import {
  ArticleCard,
  ArticleHero,
  ArticleListCard,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Calendar,
  Card, CardBody, CardHeader,
  LinkCard,
  Separator,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  Toggle,
  ToggleGroup, ToggleGroupItem,
  Tooltip,
} from "@smngs/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold, faItalic, faUnderline, faStrikethrough,
  faAlignLeft, faAlignCenter, faAlignRight,
} from "@fortawesome/free-solid-svg-icons";
import { Section } from "../Section";
import { CodeBlock } from "../CodeBlock";

export function DisplaySection({ isDark }: { isDark: boolean }) {
  const [alignment, setAlignment] = useState("left");
  const [formats, setFormats] = useState<string[]>([]);

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

      {/* ArticleCard */}
      <Section title="ArticleCard" id="article-card" level={3}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(22rem, 100%), 1fr))", gap: "var(--space-3)" }}>
          <ArticleCard
            href="#"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
            imageAlt="Code on a dark screen"
            title="Getting Started with React Server Components"
            category="Engineering"
            tags={["React", "Next.js", "Performance"]}
            date="2026-03-30"
          />
          <ArticleCard
            href="#"
            image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80"
            imageAlt="JavaScript code"
            title="TypeScript Tips for Large Codebases"
            category="Engineering"
            tags={["TypeScript", "DX"]}
            date="2026-02-28"
          />
          <ArticleCard
            href="#"
            title="Understanding CSS Grid Layout"
            category="Design"
            tags={["CSS", "Layout", "Web"]}
            date="2026-03-15"
          />
          <ArticleCard
            href="#"
            compact
            title="A Quick Note on Flexbox"
            category="Design"
            date="2026-03-10"
          />
          <ArticleCard
            href="#"
            compact
            title="Naming Conventions in TypeScript Projects"
            category="Engineering"
            tags={["TypeScript"]}
            date="2026-03-05"
          />
        </div>
        <CodeBlock isDark={isDark} code={`
{/* With image */}
<ArticleCard
  href="/blog/post-slug"
  image="https://example.com/thumbnail.jpg"
  imageAlt="Thumbnail"
  title="Post Title"
  category="Engineering"
  tags={["React", "Next.js"]}
  date="2026-03-30"
/>

{/* Compact (no image) */}
<ArticleCard
  href="/blog/post-slug"
  compact
  title="A Short Post Title"
  category="Design"
  date="2026-03-10"
/>
        `} />
      </Section>

      <Separator />

      {/* ArticleListCard */}
      <Section title="ArticleListCard" id="article-list-card" level={3}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <ArticleListCard
            href="#"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
            imageAlt="Code on a dark screen"
            title="Getting Started with React Server Components"
            description="A deep dive into React Server Components — what they are, how they work, and how to start using them in your Next.js app."
            category="Engineering"
            tags={["React", "Next.js", "Performance"]}
            date="2026-03-30"
          />
          <ArticleListCard
            href="#"
            image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80"
            imageAlt="JavaScript code"
            title="TypeScript Tips for Large Codebases"
            description="Practical patterns for keeping TypeScript maintainable as your project grows beyond the initial prototype phase."
            category="Engineering"
            tags={["TypeScript", "DX"]}
            date="2026-02-28"
          />
          <ArticleListCard
            href="#"
            title="Understanding CSS Grid Layout"
            description="Everything you need to know about CSS Grid — from basic rows and columns to complex responsive layouts."
            category="Design"
            tags={["CSS", "Layout"]}
            date="2026-03-15"
          />
        </div>
        <CodeBlock isDark={isDark} code={`
<ArticleListCard
  href="/blog/post-slug"
  image="https://example.com/thumbnail.jpg"
  imageAlt="Thumbnail"
  title="Post Title"
  description="A brief description of the article."
  category="Engineering"
  tags={["React", "Next.js"]}
  date="2026-03-30"
/>
        `} />
      </Section>

      <Separator />

      {/* Calendar */}
      <Section title="Calendar" id="calendar" level={3}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(32rem, 100%), 1fr))", gap: "var(--space-3)" }}>
          <Calendar
            dates={["2026-03-05", "2026-03-12", "2026-03-19", "2026-03-26", "2026-04-02"]}
            defaultMonth="2026-03"
            onDateClick={(date) => alert(`Clicked: ${date}`)}
          />
          <Calendar
            dates={["2026-04-01", "2026-04-08", "2026-04-15"]}
          />
        </div>
        <CodeBlock isDark={isDark} code={`
<Calendar
  dates={["2026-03-05", "2026-03-12", "2026-03-19", "2026-03-26"]}
  defaultMonth="2026-03"
  onDateClick={(date) => console.log(date)}
/>

{/* No defaultMonth — shows current month */}
<Calendar
  dates={["2026-04-01", "2026-04-08", "2026-04-15"]}
/>
        `} />
      </Section>

      <Separator />

      {/* ArticleHero */}
      <Section title="ArticleHero" id="article-hero" level={3}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <ArticleHero
          image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
          imageAlt="Code on a dark screen"
          title="Getting Started with React Server Components"
          description="A deep dive into React Server Components — what they are, how they work, and how to start using them in your Next.js application today."
          category="Engineering"
          tags={["React", "Next.js", "Performance"]}
          date="2026-03-30"
        />
        <ArticleHero
          title="Understanding CSS Grid Layout"
          description="Everything you need to know about CSS Grid — from basic rows and columns to complex responsive layouts without a framework."
          category="Design"
          tags={["CSS", "Layout", "Web"]}
          date="2026-03-15"
        />
        </div>
        <CodeBlock isDark={isDark} code={`
{/* With image */}
<ArticleHero
  image="https://example.com/thumbnail.jpg"
  imageAlt="Thumbnail"
  title="Post Title"
  description="A brief description of the article."
  category="Engineering"
  tags={["React", "Next.js"]}
  date="2026-03-30"
/>

{/* Without image */}
<ArticleHero
  title="Post Title"
  description="A brief description of the article."
  category="Design"
  date="2026-03-15"
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

      {/* Table */}
      <Section title="Table" id="table" level={3}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>Alice Johnson</TableCell><TableCell>Engineer</TableCell><TableCell>Active</TableCell></TableRow>
            <TableRow><TableCell>Bob Smith</TableCell><TableCell>Designer</TableCell><TableCell>Away</TableCell></TableRow>
            <TableRow><TableCell>Carol Lee</TableCell><TableCell>PM</TableCell><TableCell>Active</TableCell></TableRow>
          </TableBody>
        </Table>
        <CodeBlock isDark={isDark} code={`
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Role</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Alice Johnson</TableCell>
      <TableCell>Engineer</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
        `} />
      </Section>

      <Separator />

      {/* Toggle */}
      <Section title="Toggle" id="toggle" level={3}>
        <div className="row">
          <Toggle aria-label="Bold"><FontAwesomeIcon icon={faBold} /></Toggle>
          <Toggle variant="outline" defaultPressed aria-label="Italic"><FontAwesomeIcon icon={faItalic} /></Toggle>
          <Toggle variant="outline" disabled aria-label="Strikethrough"><FontAwesomeIcon icon={faStrikethrough} /></Toggle>
        </div>
        <div className="row">
          <Toggle size="sm" aria-label="Small">Small</Toggle>
          <Toggle size="md" aria-label="Medium">Medium</Toggle>
          <Toggle size="lg" aria-label="Large">Large</Toggle>
        </div>
        <CodeBlock isDark={isDark} code={`
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faItalic, faStrikethrough } from "@fortawesome/free-solid-svg-icons";

<Toggle aria-label="Bold"><FontAwesomeIcon icon={faBold} /></Toggle>
<Toggle variant="outline" defaultPressed aria-label="Italic"><FontAwesomeIcon icon={faItalic} /></Toggle>
<Toggle disabled aria-label="Strikethrough"><FontAwesomeIcon icon={faStrikethrough} /></Toggle>

{/* size: "sm" | "md" (default) | "lg" */}
{/* variant: "default" | "outline" */}
        `} />
      </Section>

      <Separator />

      {/* ToggleGroup */}
      <Section title="ToggleGroup" id="toggle-group" level={3}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <div>
            <div className="section-label" style={{ marginBottom: "var(--space-2)" }}>
              type="single" — alignment: <strong>{alignment}</strong>
            </div>
            <ToggleGroup type="single" value={alignment} onValueChange={(v) => v && setAlignment(v)}>
              <ToggleGroupItem value="left" aria-label="Align left"><FontAwesomeIcon icon={faAlignLeft} /></ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center"><FontAwesomeIcon icon={faAlignCenter} /></ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right"><FontAwesomeIcon icon={faAlignRight} /></ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: "var(--space-2)" }}>
              type="multiple" — formats: <strong>{formats.length ? formats.join(", ") : "none"}</strong>
            </div>
            <ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
              <ToggleGroupItem value="bold" aria-label="Bold"><FontAwesomeIcon icon={faBold} /></ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic"><FontAwesomeIcon icon={faItalic} /></ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline"><FontAwesomeIcon icon={faUnderline} /></ToggleGroupItem>
              <ToggleGroupItem value="strikethrough" aria-label="Strikethrough"><FontAwesomeIcon icon={faStrikethrough} /></ToggleGroupItem>
            </ToggleGroup>
          </div>
          <ToggleGroup type="single" variant="outline" defaultValue="md">
            <ToggleGroupItem value="sm">S</ToggleGroupItem>
            <ToggleGroupItem value="md">M</ToggleGroupItem>
            <ToggleGroupItem value="lg">L</ToggleGroupItem>
            <ToggleGroupItem value="xl">XL</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <CodeBlock isDark={isDark} code={`
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faItalic, faUnderline, faAlignLeft, faAlignCenter, faAlignRight } from "@fortawesome/free-solid-svg-icons";

{/* Single selection */}
<ToggleGroup type="single" value={val} onValueChange={(v) => v && setVal(v)}>
  <ToggleGroupItem value="left" aria-label="Align left"><FontAwesomeIcon icon={faAlignLeft} /></ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center"><FontAwesomeIcon icon={faAlignCenter} /></ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right"><FontAwesomeIcon icon={faAlignRight} /></ToggleGroupItem>
</ToggleGroup>

{/* Multiple selection */}
<ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
  <ToggleGroupItem value="bold" aria-label="Bold"><FontAwesomeIcon icon={faBold} /></ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic"><FontAwesomeIcon icon={faItalic} /></ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Underline"><FontAwesomeIcon icon={faUnderline} /></ToggleGroupItem>
</ToggleGroup>

{/* variant: "default" | "outline", size: "sm" | "md" | "lg" */}
        `} />
      </Section>

      <Separator />
    </>
  );
}
