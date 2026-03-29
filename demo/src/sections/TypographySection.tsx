import { Separator } from "@smngs/ui";
import { Section } from "../Section";

export function TypographySection() {
  return (
    <>
      <Section title="Typography" id="typography" level={1}>
        <h1>Heading 1 — The quick brown fox</h1>
        <h2>Heading 2 — The quick brown fox</h2>
        <h3>Heading 3 — The quick brown fox</h3>
        <h4>Heading 4 — The quick brown fox</h4>
        <p>Body text — The quick brown fox jumps over the lazy dog. Use this to check baseline text size, line height, and color.</p>
        <p>
          This sentence contains a <a href="#">hyperlink</a>, <strong>bold text</strong>, <em>italic text</em>, and <small>small text</small>.
          Inline <code>code</code> can appear mid-sentence too.
        </p>
        <blockquote>
          Design is not just what it looks like and feels like. Design is how it works. — Steve Jobs
        </blockquote>
        <pre><code>{`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}`}</code></pre>
        <ul>
          <li>Unordered list item one</li>
          <li>Unordered list item two</li>
          <li>Unordered list item three</li>
        </ul>
        <ol>
          <li>Ordered list item one</li>
          <li>Ordered list item two</li>
          <li>Ordered list item three</li>
        </ol>
      </Section>
      <Separator />
    </>
  );
}
