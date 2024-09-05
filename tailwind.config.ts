import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-gradient":
          "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 100%)",
      },
      keyframes: {
        radialGradientMove: {
          "0%": { transform: "translate(-30%, 0%) rotate(-20deg)" },
          "25%": {
            transform: "translate(0%, 0%) skew(-15deg, -15deg) rotate(80deg)",
          },
          "50%": { transform: "translate(30%, 0%) rotate(180deg)" },
          "75%": {
            transform: "translate(-30%, 0%) skew(15deg, 15deg) rotate(240deg)",
          },
          "100%": { transform: "translate(-30%, 0%) rotate(-20deg)" },
        },
        radialGradientMove2: {
          "0%": { transform: "translate(20%, 0%) rotate(-20deg)" },
          "20%": {
            transform: "translate(0%, 0%) skew(-15deg, -15deg) rotate(80deg)",
          },
          "40%": { transform: "translate(-40%, 0%) rotate(180deg)" },
          "60%": {
            transform: "translate(-20%, 0%) skew(15deg, 15deg) rotate(80deg)",
          },
          "80%": {
            transform: "translate(10%, 0%) rotate(180deg)",
          },
          "100%": { transform: "translate(20%, 0%) rotate(340deg)" },
        },
      },
      animation: {
        radialGradientMove: "radialGradientMove 20s linear infinite",
        radialGradientMove2: "radialGradientMove2 15s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
