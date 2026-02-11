import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        surface: "#141414",
        border: "rgba(255,255,255,0.08)",
        textPrimary: "#FFFFFF",
        textSecondary: "rgba(255,255,255,0.6)",
        accent: "#4F7CFF",
      },
    },
  },
  plugins: [],
};

export default config;
