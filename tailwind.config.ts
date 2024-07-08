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
        borderCustom1: '1px 1px 2px 1px',
        borderCustom2: '1px 1px 3px 1px',
        borderCustom3: '0.5px 0.5px 4px 0.5px',
        borderCustom4: '0.5px 0.5px 2px 0.5px'
      },
      boxShadow: {
        custom: '0px 0px 54.84px 0px rgba(0, 0, 0, 0.05)',
        custom1: '-2px 4px 0px 0px #000000'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, #1A1E28 0%, rgba(26, 30, 40, 0) 100%)',
        'custom-gradient1': 'linear-gradient(180deg, #1A1E28 0%, rgba(26, 30, 40, 0) 100%)',
        'custom-gradient2': ' linear-gradient(270deg, #ECCC7B -24.02%, rgba(236, 204, 123, 0) 91.46%);',
      },
    },
  },
  plugins: [],
};
export default config;
