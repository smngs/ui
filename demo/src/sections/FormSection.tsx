import { useState } from "react";
import {
  Button,
  Checkbox,
  Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit,
  Label,
  RadioGroup, RadioGroupItem,
  Select,
  Separator,
  Slider,
  Switch,
} from "@smngs/ui";
import { Section } from "../Section";
import { CodeBlock } from "../CodeBlock";

export function FormSection({ isDark }: { isDark: boolean }) {
  const [checkA, setCheckA] = useState<boolean | "indeterminate">(false);
  const [radioVal, setRadioVal] = useState("react");
  const [switchOn, setSwitchOn] = useState(false);
  const [sliderVal, setSliderVal] = useState([40]);

  return (
    <>
      <div className="section" id="form">
        <h2>Form</h2>
      </div>

      {/* Checkbox */}
      <Section title="Checkbox" id="checkbox" level={3}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <Checkbox id="chk-a" checked={checkA} onCheckedChange={setCheckA} />
            <Label htmlFor="chk-a">I agree to the terms of service</Label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <Checkbox id="chk-b" defaultChecked />
            <Label htmlFor="chk-b">Checked by default</Label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <Checkbox id="chk-c" disabled />
            <Label htmlFor="chk-c">Disabled</Label>
          </div>
        </div>
        <CodeBlock isDark={isDark} code={`
<Checkbox id="chk" checked={checked} onCheckedChange={setChecked} />
<Label htmlFor="chk">Accept terms</Label>

{/* Checked by default */}
<Checkbox id="chk2" defaultChecked />

{/* Disabled */}
<Checkbox id="chk3" disabled />
<Label htmlFor="chk3">Disabled</Label>
        `} />
      </Section>

      <Separator />

      {/* RadioGroup */}
      <Section title="RadioGroup" id="radio-group" level={3}>
        <RadioGroup value={radioVal} onValueChange={setRadioVal}>
          {[
            { value: "react", label: "React" },
            { value: "vue", label: "Vue" },
            { value: "svelte", label: "Svelte" },
          ].map((opt) => (
            <div key={opt.value} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
              <RadioGroupItem value={opt.value} id={`radio-${opt.value}`} />
              <Label htmlFor={`radio-${opt.value}`}>{opt.label}</Label>
            </div>
          ))}
        </RadioGroup>
        <CodeBlock isDark={isDark} code={`
<RadioGroup value={val} onValueChange={setVal}>
  <RadioGroupItem value="a" id="r-a" />
  <Label htmlFor="r-a">Option A</Label>
  <RadioGroupItem value="b" id="r-b" />
  <Label htmlFor="r-b">Option B</Label>
</RadioGroup>
        `} />
      </Section>

      <Separator />

      {/* Switch */}
      <Section title="Switch" id="switch" level={3}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <Switch id="sw-1" checked={switchOn} onCheckedChange={setSwitchOn} />
          <Label htmlFor="sw-1">{switchOn ? "ON" : "OFF"}</Label>
        </div>
        <CodeBlock isDark={isDark} code={`
<Switch id="sw" checked={on} onCheckedChange={setOn} />
<Label htmlFor="sw">Enable</Label>
        `} />
      </Section>

      <Separator />

      {/* Select */}
      <Section title="Select" id="select" level={3}>
        <Select
          placeholder="Select a language..."
          groups={[
            { label: "Frontend", options: [{ value: "react", label: "React" }, { value: "vue", label: "Vue" }, { value: "svelte", label: "Svelte" }] },
            { label: "Backend", options: [{ value: "go", label: "Go" }, { value: "rust", label: "Rust" }, { value: "python", label: "Python" }] },
          ]}
        />
        <CodeBlock isDark={isDark} code={`
<Select
  placeholder="Select..."
  groups={[
    { label: "Frontend", options: [{ value: "react", label: "React" }] },
    { label: "Backend",  options: [{ value: "go",    label: "Go"    }] },
  ]}
/>
        `} />
      </Section>

      <Separator />

      {/* Slider */}
      <Section title="Slider" id="slider" level={3}>
        <div style={{ maxWidth: "24rem" }}>
          <div style={{ fontSize: "var(--text-sm)", color: "var(--color-subtle)", marginBottom: "var(--space-2)" }}>Value: {sliderVal[0]}</div>
          <Slider value={sliderVal} onValueChange={setSliderVal} />
        </div>
        <CodeBlock isDark={isDark} code={`<Slider value={[40]} onValueChange={setVal} />`} />
      </Section>

      <Separator />

      {/* Label */}
      <Section title="Label" id="label" level={3}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <Checkbox id="label-demo-chk" />
            <Label htmlFor="label-demo-chk">Remember me</Label>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            <Label htmlFor="label-demo-input">Email address</Label>
            <input
              id="label-demo-input"
              type="email"
              placeholder="you@example.com"
              style={{ padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "var(--color-bg-code)", color: "var(--color-text)", fontSize: "var(--text-sm)", width: "16rem" }}
            />
          </div>
        </div>
        <CodeBlock isDark={isDark} code={`
<Label htmlFor="field">Email address</Label>
<input id="field" type="email" />
        `} />
      </Section>

      <Separator />

      {/* Form (validation) */}
      <Section title="Form (validation)" id="form-field" level={3}>
        <div style={{ maxWidth: "28rem" }}>
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormField name="email">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  style={{ width: "100%", padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "var(--color-bg-code)", color: "var(--color-text)", fontSize: "var(--text-sm)", fontFamily: "inherit" }}
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
                  required
                  minLength={8}
                  placeholder="••••••••"
                  style={{ width: "100%", padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "var(--color-bg-code)", color: "var(--color-text)", fontSize: "var(--text-sm)", fontFamily: "inherit" }}
                />
              </FormControl>
              <FormMessage match="valueMissing">Password is required.</FormMessage>
              <FormMessage match="tooShort">Must be at least 8 characters.</FormMessage>
            </FormField>
            <FormSubmit asChild>
              <Button variant="primary">Sign In</Button>
            </FormSubmit>
          </Form>
        </div>
        <CodeBlock isDark={isDark} code={`
<Form onSubmit={handleSubmit}>
  <FormField name="email">
    <FormLabel>Email</FormLabel>
    <FormControl>
      <input type="email" required placeholder="you@example.com" />
    </FormControl>
    <FormMessage match="valueMissing">Email is required.</FormMessage>
    <FormMessage match="typeMismatch">Invalid email address.</FormMessage>
  </FormField>
  <FormSubmit asChild>
    <Button variant="primary">Submit</Button>
  </FormSubmit>
</Form>
        `} />
      </Section>

      <Separator />
    </>
  );
}
