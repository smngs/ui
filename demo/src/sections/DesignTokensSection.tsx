import {
  Separator,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@smngs/ui";
import { Section } from "../Section";

const SPACING = [
  { token: "--space-1", value: "0.4rem", px: "4px" },
  { token: "--space-2", value: "0.8rem", px: "8px" },
  { token: "--space-3", value: "1.2rem", px: "12px" },
  { token: "--space-4", value: "1.6rem", px: "16px" },
  { token: "--space-5", value: "2.4rem", px: "24px" },
  { token: "--space-6", value: "3.2rem", px: "32px" },
  { token: "--space-7", value: "4.8rem", px: "48px" },
  { token: "--space-8", value: "6.4rem", px: "64px" },
];

const RADIUS = [
  { token: "--radius-sm",   value: "4px" },
  { token: "--radius-md",   value: "6px" },
  { token: "--radius-lg",   value: "10px" },
  { token: "--radius-xl",   value: "14px" },
  { token: "--radius-full", value: "9999px" },
];

const TYPE_SCALE = [
  { token: "--text-xs",   value: "1.2rem", label: "Label / Tag" },
  { token: "--text-sm",   value: "1.4rem", label: "Caption / Secondary" },
  { token: "--text-base", value: "1.6rem", label: "Body text" },
  { token: "--text-lg",   value: "1.8rem", label: "Subtitle / Card title" },
  { token: "--text-xl",   value: "2rem",   label: "Section heading" },
  { token: "--text-2xl",  value: "2.4rem", label: "Sub-page heading" },
  { token: "--text-3xl",  value: "3rem",   label: "Page heading" },
  { token: "--text-4xl",  value: "3.6rem", label: "Hero heading" },
  { token: "--text-5xl",  value: "4.8rem", label: "Display" },
];

export function DesignTokensSection() {
  return (
    <>
      <Section title="Design Tokens" id="design-tokens" level={1}>

        {/* Spacing */}
        <div className="section-label" style={{ marginBottom: "var(--space-3)" }}>Spacing</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Preview</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SPACING.map(({ token, value, px }) => (
              <TableRow key={token}>
                <TableCell><code className="tokens-token">{token}</code></TableCell>
                <TableCell><span className="tokens-value">{value} <span className="tokens-px">({px})</span></span></TableCell>
                <TableCell>
                  <div className="tokens-spacing-bar" style={{ width: `var(${token})`, height: `var(${token})` }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Border Radius */}
        <div className="section-label" style={{ margin: "var(--space-6) 0 var(--space-3)" }}>Border Radius</div>
        <div className="tokens-radius-row">
          {RADIUS.map(({ token, value }) => (
            <div key={token} className="tokens-radius-item">
              <div className="tokens-radius-box" style={{ borderRadius: `var(${token})` }} />
              <code className="tokens-token">{token}</code>
              <span className="tokens-value">{value}</span>
            </div>
          ))}
        </div>

        {/* Type Scale */}
        <div className="section-label" style={{ margin: "var(--space-6) 0 var(--space-3)" }}>Type Scale</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sample</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TYPE_SCALE.map(({ token, value, label }) => (
              <TableRow key={token}>
                <TableCell>
                  <span style={{ fontSize: `var(${token})`, fontWeight: "var(--font-bold)", lineHeight: 1 }}>Ag</span>
                </TableCell>
                <TableCell><code className="tokens-token">{token}</code></TableCell>
                <TableCell><span className="tokens-value">{value} — {label}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </Section>
      <Separator />
    </>
  );
}
