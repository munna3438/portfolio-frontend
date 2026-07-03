import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F6F3",
        surface: "#EBEDE7",
        surface2: "#E1E4DC",
        ink: "#13202A",
        muted: "#5B6B66",
        line: "#D6DAD1",
        pine: "#2F6F5E",
        pineDark: "#1F4F42",
        amber: "#E2A33B"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"]
      },
      maxWidth: {
        content: "1180px"
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        }
      },
      animation: {
        blink: "blink 1.1s step-end infinite"
      }
    }
  },
  plugins: []
};

export default config;
