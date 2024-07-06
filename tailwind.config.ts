import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        borderCustom: '1px 1px 4px 1px',
        borderCustom1: '1px 1px 2px 1px'
      }
    },
  },
  plugins: [],
};
export default config;
