import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enables dark mode via the "dark" class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "move-horizontal": "moveX 4s ease-in infinite",
        "move-horizontal-reverse": "moveXReverse 4s ease-in infinite",
        "move-vertical-up": "moveYUp 4s ease-in infinite",
        "move-vertical-down": "moveYDown 4s ease-in infinite",
        "glare": "glare 2s ease-in-out",
      },
      keyframes: {
        moveX: {
          "0%": { transform: "translateX(-500%)", opacity:"0.0" },
          "50%": { opacity:"1.0" },
          "100%": { transform: "translateX(500%)", opacity:"0.0" },
        },
        moveXReverse: {
          "0%": { transform: "translateX(500%)", opacity:"0.0" },
          "50%": { opacity:"1.0" },
          "100%": { transform: "translateX(-500%)", opacity:"0.0" },
        },
        moveYUp: {
          "0%": { transform: "translateY(250%)", opacity:"0.0" },
          "50%": { opacity:"1.0" },
          "100%": { transform: "translateY(-200%)", opacity:"0.0" },
        },
        moveYDown: {
          "0%": { transform: "translateY(-200%)", opacity:"0.0" },
          "50%": { opacity:"1.0" },
          "100%": { transform: "translateY(250%)", opacity:"0.0" },
        },
        glare: {
          "0%": { left: "-100%", opacity: "0" },
          "20%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "100%": { left: "100%", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"], // DaisyUI theme
  },
} satisfies Config;