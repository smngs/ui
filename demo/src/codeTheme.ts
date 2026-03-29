import type { PrismTheme } from "prism-react-renderer";

// Color palette:
// --color-brand:   #30a3b3
// --color-accent:  #EA9B56  (new)
// --color-info:    #4a7fd4
// --color-success: #34c98f
// --color-danger:  #f05555
//
// Light: bg=#e8eaec, text=#2f2f2f, muted=#555555, subtle=#888888
// Dark:  bg=#333333, text=#e8e8e8, muted=#aaaaaa, subtle=#777777

export const lightTheme: PrismTheme = {
  plain: {
    backgroundColor: "#e8eaec",
    color: "#2f2f2f",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#888888", fontStyle: "italic" },
    },
    {
      types: ["punctuation"],
      style: { color: "#555555" },
    },
    {
      types: ["namespace"],
      style: { opacity: 0.7 },
    },
    {
      types: ["property", "boolean", "number", "constant", "symbol", "deleted"],
      style: { color: "#4a7fd4" },
    },
    {
      types: ["string", "char", "attr-value", "inserted"],
      style: { color: "#EA9B56" },
    },
    {
      types: ["selector", "attr-name", "builtin"],
      style: { color: "#30a3b3" },
    },
    {
      types: ["operator", "entity", "url"],
      style: { color: "#555555" },
    },
    {
      types: ["keyword", "atrule"],
      style: { color: "#30a3b3", fontWeight: "bold" },
    },
    {
      types: ["function", "class-name"],
      style: { color: "#4a7fd4" },
    },
    {
      types: ["tag"],
      style: { color: "#30a3b3" },
    },
    {
      types: ["regex", "variable"],
      style: { color: "#EA9B56" },
    },
    {
      types: ["important"],
      style: { color: "#f05555", fontWeight: "bold" },
    },
  ],
};

export const darkTheme: PrismTheme = {
  plain: {
    backgroundColor: "#333333",
    color: "#e8e8e8",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#777777", fontStyle: "italic" },
    },
    {
      types: ["punctuation"],
      style: { color: "#aaaaaa" },
    },
    {
      types: ["namespace"],
      style: { opacity: 0.7 },
    },
    {
      types: ["property", "boolean", "number", "constant", "symbol", "deleted"],
      style: { color: "#6fa3e8" },
    },
    {
      types: ["string", "char", "attr-value", "inserted"],
      style: { color: "#EA9B56" },
    },
    {
      types: ["selector", "attr-name", "builtin"],
      style: { color: "#4ec4d4" },
    },
    {
      types: ["operator", "entity", "url"],
      style: { color: "#aaaaaa" },
    },
    {
      types: ["keyword", "atrule"],
      style: { color: "#4ec4d4", fontWeight: "bold" },
    },
    {
      types: ["function", "class-name"],
      style: { color: "#6fa3e8" },
    },
    {
      types: ["tag"],
      style: { color: "#4ec4d4" },
    },
    {
      types: ["regex", "variable"],
      style: { color: "#EA9B56" },
    },
    {
      types: ["important"],
      style: { color: "#f07070", fontWeight: "bold" },
    },
  ],
};
