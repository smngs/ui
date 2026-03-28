import type { Preview } from "@storybook/react";
import "@fontsource/m-plus-1/index.css";
import "../src/tokens.css";
import "../src/styles.css";
import "./preview.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "site",
      values: [
        { name: "site", value: "#f6f6f6" },
        { name: "white", value: "#ffffff" },
        { name: "dark", value: "#2f2f2f" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
  },
};

export default preview;
