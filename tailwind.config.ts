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
        amber: "#E2A33B",
        glow: "rgba(47, 111, 94, 0.15)"
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
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(30px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" }
        }
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        reveal: "reveal 0.8s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
