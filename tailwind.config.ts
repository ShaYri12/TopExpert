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
      },
      boxShadow: {
        'custom-black': '-5px 7px 0px 0px #000000',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, #1A1E28 0%, rgba(26, 30, 40, 0) 100%)',
        'custom-gradient1': 'linear-gradient(180deg, #1A1E28 0%, rgba(26, 30, 40, 0) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
