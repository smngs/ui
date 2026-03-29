import { Separator } from "@smngs/ui";
import { Section } from "../Section";

const SPACING = [
  { token: "--space-1", value: "0.5rem", px: "8px" },
  { token: "--space-2", value: "1rem",   px: "16px" },
  { token: "--space-3", value: "1.5rem", px: "24px" },
  { token: "--space-4", value: "2rem",   px: "32px" },
  { token: "--space-5", value: "3rem",   px: "48px" },
];

const RADIUS = [
  { token: "--radius-sm", value: "4px" },
  { token: "--radius-md", value: "6px" },
  { token: "--radius-lg", value: "10px" },
];

const TYPE_SCALE = [
  { token: "--text-xs",   value: "1.2rem", label: "Xs — Label / Tag" },
  { token: "--text-sm",   value: "1.4rem", label: "Sm — Caption / Secondary" },
  { token: "--text-base", value: "1.6rem", label: "Base — Body text" },
  { token: "--text-lg",   value: "1.8rem", label: "Lg — Subtitle / Card title" },
  { token: "--text-xl",   value: "2.4rem", label: "Xl — Section heading" },
  { token: "--text-2xl",  value: "3.6rem", label: "2Xl — Page heading" },
];

export function DesignTokensSection() {
  return (
    <>
      <Section title="Design Tokens" id="design-tokens" level={1}>

        {/* Spacing */}
        <div className="section-label" style={{ marginBottom: "var(--space-2)" }}>Spacing</div>
        <div className="tokens-spacing">
          {SPACING.map(({ token, value, px }) => (
            <div key={token} className="tokens-spacing-row">
              <div className="tokens-spacing-bar-wrap">
                <div className="tokens-spacing-bar" style={{ width: `var(${token})`, height: `var(${token})` }} />
              </div>
              <code className="tokens-token">{token}</code>
              <span className="tokens-value">{value} <span className="tokens-px">({px})</span></span>
            </div>
          ))}
        </div>

        {/* Border Radius */}
        <div className="section-label" style={{ margin: "var(--space-4) 0 var(--space-2)" }}>Border Radius</div>
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
        <div className="section-label" style={{ margin: "var(--space-4) 0 var(--space-2)" }}>Type Scale</div>
        <div className="tokens-type">
          {TYPE_SCALE.map(({ token, value, label }) => (
            <div key={token} className="tokens-type-row">
              <span className="tokens-type-sample" style={{ fontSize: `var(${token})` }}>Ag</span>
              <div className="tokens-type-info">
                <code className="tokens-token">{token}</code>
                <span className="tokens-value">{value} — {label}</span>
              </div>
            </div>
          ))}
        </div>

      </Section>
      <Separator />
    </>
  );
}
