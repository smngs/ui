import React from "react";
import * as FormPrimitive from "@radix-ui/react-form";

export function Form({
  children,
  onSubmit,
  className = "",
}: {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}) {
  return (
    <FormPrimitive.Root
      className={`smngs-form ${className}`.trim()}
      onSubmit={onSubmit}
    >
      {children}
    </FormPrimitive.Root>
  );
}

export function FormField({
  name,
  children,
  className = "",
}: {
  name: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FormPrimitive.Field
      name={name}
      className={`smngs-form-field ${className}`.trim()}
    >
      {children}
    </FormPrimitive.Field>
  );
}

export function FormLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FormPrimitive.Label className={`smngs-form-label ${className}`.trim()}>
      {children}
    </FormPrimitive.Label>
  );
}

export function FormControl({ children }: { children: React.ReactNode }) {
  return <FormPrimitive.Control asChild>{children}</FormPrimitive.Control>;
}

export function FormMessage({
  children,
  match,
  className = "",
}: {
  children?: React.ReactNode;
  match?: "valueMissing" | "typeMismatch" | "patternMismatch" | "tooShort" | "tooLong" | "rangeUnderflow" | "rangeOverflow" | "stepMismatch" | "valid" | ((value: string, formData: FormData) => boolean);
  className?: string;
}) {
  return (
    <FormPrimitive.Message
      className={`smngs-form-message ${className}`.trim()}
      match={match}
    >
      {children}
    </FormPrimitive.Message>
  );
}

export function FormValidityState({
  children,
}: {
  children: (validity: ValidityState | undefined) => React.ReactNode;
}) {
  return <FormPrimitive.ValidityState>{children}</FormPrimitive.ValidityState>;
}

export function FormSubmit({
  children,
  asChild,
  className = "",
}: {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}) {
  return (
    <FormPrimitive.Submit asChild={asChild} className={`smngs-form-submit ${className}`.trim()}>
      {children}
    </FormPrimitive.Submit>
  );
}
