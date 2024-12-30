import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#222526",
        text: "#E0E0E0",
        border: "#E0E0E0",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
