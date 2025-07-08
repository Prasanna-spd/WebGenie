import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.7" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        "rotate-pingpong": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(45deg)" },
          "50%": { transform: "rotate(-45deg)" },
          "75%": { transform: "rotate(45deg)" },
        },
      },
      animation: {
        ripple: "ripple 4s ease-out infinite",
        "rotate-pingpong": "rotate-pingpong 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
