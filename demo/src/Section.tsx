import React from "react";

export function Section({ title, id, level = 2, children }: { title: string; id?: string; level?: 1 | 2 | 3; children: React.ReactNode }) {
  const Heading = `h${level}` as "h1" | "h2" | "h3";
  return (
    <div className="section" id={id}>
      <Heading>{title}</Heading>
      {children}
    </div>
  );
}
