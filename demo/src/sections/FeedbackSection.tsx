import { useState } from "react";
import { Button, Progress, Separator, Skeleton, Toast } from "@smngs/ui";
import { Section } from "../Section";
import { CodeBlock } from "../CodeBlock";

export function FeedbackSection({ isDark }: { isDark: boolean }) {
  const [toastOpen, setToastOpen] = useState(false);
  const progress = 65;

  return (
    <>
      <div className="section" id="feedback">
        <h2>Feedback</h2>
      </div>

      {/* Toast */}
      <Section title="Toast" id="toast" level={3}>
        <div className="row">
          <Button variant="primary" onClick={() => setToastOpen(true)}>
            Show Toast
          </Button>
        </div>
        <Toast
          open={toastOpen}
          onOpenChange={setToastOpen}
          title="Saved"
          description="Your changes have been saved successfully."
          variant="success"
        />
        <CodeBlock isDark={isDark} code={`
<ToastProvider>
  <Button onClick={() => setOpen(true)}>Show Toast</Button>
  <Toast
    open={open}
    onOpenChange={setOpen}
    title="Saved"
    description="Your changes have been saved."
    variant="success"
  />
  <ToastViewport />
</ToastProvider>
        `} />
      </Section>

      <Separator />

      {/* Progress */}
      <Section title="Progress" id="progress" level={3}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", maxWidth: "48rem" }}>
          <Progress value={progress} />
          <div style={{ fontSize: "var(--text-xs)", color: "var(--color-subtle)" }}>{progress}% complete</div>
          <Progress value={30} />
          <Progress value={90} />
        </div>
        <CodeBlock isDark={isDark} code={`<Progress value={65} />`} />
      </Section>

      {/* Skeleton */}
      <Section title="Skeleton" id="skeleton" level={3}>
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", maxWidth: "48rem" }}>
          <Skeleton variant="circle" width="4.8rem" height="4.8rem" />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <Skeleton variant="text" width="40%" height="1.4rem" />
            <Skeleton variant="text" width="100%" height="1rem" />
            <Skeleton variant="text" width="80%" height="1rem" />
          </div>
        </div>
        <div style={{ marginTop: "var(--space-4)" }}>
          <Skeleton width="100%" height="12rem" />
        </div>
        <CodeBlock isDark={isDark} code={`
<Skeleton variant="circle" width="4.8rem" height="4.8rem" />
<Skeleton variant="text" width="40%" height="1.4rem" />
<Skeleton width="100%" height="12rem" />

{/* variant: "rect" (default) | "text" | "circle" */}
        `} />
      </Section>

      <Separator />
    </>
  );
}
