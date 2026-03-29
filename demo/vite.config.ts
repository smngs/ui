import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ui/",
  optimizeDeps: {
    include: ["tiptap-markdown", "markdown-it", "markdown-it-task-lists", "prosemirror-markdown"],
  },
});
