import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        surface: {
          glass: "rgb(15 23 42 / 0.6)",
          elevated: "rgb(30 41 59 / 0.5)",
          border: "rgb(51 65 85 / 0.4)",
          ring: "rgb(14 165 233 / 0.3)",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      animation: {
        "pulse-glass": "pulse-glass 6s ease-in-out infinite",
        "card-hover": "card-hover 0.35s ease-out forwards",
        float: "float 8s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        "pulse-glass": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.5" },
        },
        "card-hover": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgb(14 165 233 / 0.1)" },
          "100%": { boxShadow: "0 0 40px rgb(14 165 233 / 0.25)" },
        },
      },
      backdropBlur: {
        glass: "16px",
      },
      borderRadius: {
        glass: "1rem",
        bento: "1.25rem",
      },
    },
  },
};

export default config;
