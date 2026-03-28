# @smngs/ui

**Demo: https://smngs.github.io/ui/**

A Radix UI-based design system built on CSS custom properties (design tokens), providing accessible components out of the box.

## Installation

```bash
npm install @smngs/ui
```

React and react-dom are peer dependencies (version 18 or higher required).

```bash
npm install react react-dom
```

## Setup

Import two CSS files at your app's entry point.

```ts
import "@smngs/ui/tokens.css"; // Design tokens (CSS custom properties)
import "@smngs/ui/styles.css"; // Component styles
```

## Components

### Button

A polymorphic button component using `@radix-ui/react-slot`. Use `asChild` to apply styles to any element such as `<a>`.

```tsx
import { Button } from "@smngs/ui";

// variant: "primary" | "ghost" | "nav" | "nav-active"
<Button variant="primary">Submit</Button>
<Button variant="ghost">Cancel</Button>

// Render as a link with asChild
<Button variant="primary" asChild>
  <a href="/blog">Read the blog</a>
</Button>
```

### Badge

A badge component for labels, tags, and social links. Use `asChild` to render as a link.

```tsx
import { Badge } from "@smngs/ui";

<Badge>TypeScript</Badge>

<Badge asChild>
  <a href="https://github.com/smngs" target="_blank" rel="noreferrer">
    GitHub
  </a>
</Badge>
```

### Avatar

An avatar component using `@radix-ui/react-avatar`. Displays fallback text when the image fails to load.

```tsx
import { Avatar } from "@smngs/ui";

// size: "sm" | "md" | "lg"
<Avatar src="/profile.jpg" alt="Profile" size="lg" fallback="SM" />

// Fallback only (no image)
<Avatar fallback="SM" size="md" />
```

### Card

A card layout component. Use `CardHeader` and `CardBody` together.

```tsx
import { Card, CardHeader, CardBody } from "@smngs/ui";

<Card>
  <CardHeader>Profile</CardHeader>
  <CardBody>
    <p>Card body content goes here.</p>
  </CardBody>
</Card>
```

### Separator

A divider component using `@radix-ui/react-separator`.

```tsx
import { Separator } from "@smngs/ui";

// Horizontal (default)
<Separator />

// Vertical
<div style={{ display: "flex", alignItems: "center", height: "3rem" }}>
  <span>Left</span>
  <Separator orientation="vertical" />
  <span>Right</span>
</div>
```

### Tooltip

A tooltip component using `@radix-ui/react-tooltip`. Use `side` to control placement.

```tsx
import { Button, Tooltip } from "@smngs/ui";

// side: "top" | "right" | "bottom" | "left" (default: "top")
<Tooltip content="More info" side="top">
  <Button>Hover me</Button>
</Tooltip>
```

## Design Tokens

CSS custom properties defined in `tokens.css` can be used directly in your styles.

```css
.my-component {
  background-color: var(--color-brand);
  border-radius: var(--radius-lg);
  padding: var(--space-3);
  font-size: var(--text-sm);
  transition: background-color var(--ease-fast);
}
```

### Colors

| Token | Value | Usage |
|---|---|---|
| `--color-brand` | `#30a3b3` | Brand color |
| `--color-text` | `#2f2f2f` | Body text |
| `--color-muted` | `#555555` | Secondary text |
| `--color-subtle` | `#888888` | Dates, meta info |
| `--color-bg` | `#f6f6f6` | Page background |
| `--color-bg-code` | `#f4f5f6` | Code background |
| `--color-badge` | `#5e5e5e` | Badge background |
| `--color-badge-hover` | `#777777` | Badge hover |
| `--color-border` | `#cccccc` | Borders |
| `--color-divider` | `#e0e0e0` | Dividers |
| `--color-white` | `#ffffff` | White |
| `--color-success` | `#30b582` | Success |
| `--color-warning` | `#ef9243` | Warning |
| `--color-info` | `#3063b5` | Info |
| `--color-danger` | `#e03c3c` | Danger / Error |

### Spacing

| Token | Value |
|---|---|
| `--space-1` | `0.5rem` |
| `--space-2` | `1rem` |
| `--space-3` | `1.5rem` |
| `--space-4` | `2rem` |
| `--space-5` | `3rem` |

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Buttons, badges, inline code |
| `--radius-md` | `6px` | Code blocks |
| `--radius-lg` | `10px` | Cards, headers |

### Typography

| Token | Value |
|---|---|
| `--text-xs` | `1.2rem` |
| `--text-sm` | `1.4rem` |
| `--text-base` | `1.6rem` |
| `--text-lg` | `1.8rem` |
| `--text-xl` | `2.4rem` |
| `--text-2xl` | `3.6rem` |
| `--font-normal` | `400` |
| `--font-medium` | `500` |
| `--font-bold` | `700` |

> **Note:** Typography tokens assume `html { font-size: 62.5% }` (1rem = 10px).

## Demo

```bash
cd demo
npm install
npm run dev
# → http://localhost:5173
```

## License

MIT
