import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            lightgray: "#F7F7F7",
          }
        },
        dark: {
          colors: {
            midnightblue: "#161A30",
            silver:"#EDEDED",
            lightgray:"#F7F7F7"
          }
        },
      },
    }),
  ],
};
export default config;
