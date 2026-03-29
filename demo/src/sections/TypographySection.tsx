import { Separator } from "@smngs/ui";
import { Section } from "../Section";

export function TypographySection() {
  return (
    <>
      <Section title="Typography" id="typography" level={1}>
        <h1>Heading 1 — The quick brown fox jumps over the lazy dog</h1>
        <h2>Heading 2 — The quick brown fox jumps over the lazy dog</h2>
        <h3>Heading 3 — The quick brown fox jumps over the lazy dog</h3>
        <h4>Heading 4 — The quick brown fox jumps over the lazy dog</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <p>
          This paragraph demonstrates inline elements: a <a href="#">hyperlink</a>,{" "}
          <strong>bold text</strong>, <em>italic text</em>, <small>small text</small>, and
          inline <code>code</code>. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <blockquote>
          Design is not just what it looks like and feels like. Design is how it works. — Steve Jobs
        </blockquote>
        <p>
          Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo, in commodo orci. Mauris
          pretium aliquam erat, nec euismod odio posuere ut. Etiam nec lorem vel turpis consequat
          facilisis a sit amet nisl.
        </p>
        <pre><code>{`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Curabitur pretium tincidunt lacus
const result = [1, 2, 3]
  .map((n) => n * 2)
  .filter((n) => n > 2);`}</code></pre>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
          <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco</li>
          <li>Duis aute irure dolor in reprehenderit in voluptate velit</li>
        </ul>
        <ol>
          <li>Excepteur sint occaecat cupidatat non proident</li>
          <li>Sunt in culpa qui officia deserunt mollit anim id est laborum</li>
          <li>Pellentesque habitant morbi tristique senectus et netus</li>
          <li>Malesuada fames ac turpis egestas vestibulum</li>
        </ol>
        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit
          aliquet.
        </p>
      </Section>
      <Separator />
    </>
  );
}
