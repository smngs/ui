import React from "react";
import { Highlight } from "prism-react-renderer";
import { lightTheme, darkTheme } from "./codeTheme";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@smngs/ui";

export function CodeBlock({ code, isDark }: { code: string; isDark: boolean }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button className="code-block-trigger">
          <span>Usage</span>
          <span className="code-block-chevron" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Highlight theme={isDark ? darkTheme : lightTheme} code={code.trim()} language="tsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                borderRadius: "0 0 var(--radius-md) var(--radius-md)",
                padding: "var(--space-3)",
                overflowX: "auto",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--leading-loose)",
                margin: 0,
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </CollapsibleContent>
    </Collapsible>
  );
}
