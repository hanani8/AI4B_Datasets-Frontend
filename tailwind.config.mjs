import { m } from "./dist/astro/runtime-core.esm-bundler.SOExKC07";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      "retro",
      {
        mytheme: {
          primary: "#FF6600", // A vibrant orange to create a strong brand impression.
          secondary: "#1A1A1A", // A deep charcoal gray to complement the primary color, adding sophistication.
          accent: "#FFD700", // A bright gold for highlighting key elements like buttons and active states.
          neutral: "#2E2E2E", // A dark gray for borders, dividers, and less prominent text.
          "base-100": "#FFFFFF", // Pure white for backgrounds, ensuring a clean and readable display.
          info: "#1E90FF", // A medium blue for informational alerts and links, adding a calm contrast.
          success: "#00C851", // A vivid green to indicate success states, like form submissions.
          warning: "#FFBB33", // A soft amber for warning notifications, grabbing attention without being harsh.
          error: "#FF4444", // A bold red to clearly signal errors and require user action.
        },
      },
    ],
  },
};
