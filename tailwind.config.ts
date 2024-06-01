
import type { Config } from "tailwindcss";
import "tailwindcss/defaultTheme";
import "tailwindcss/colors";

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
      },
    },
    fontSize: {
      xxlg: "45px",
      xlg: "32px",
      lg: "30px",
      xmd: "25px",
      md: "20px",
      sm:"16px",
      xsm:"15px",
      xxsm:"11px"
    },
    colors:{
      primary:"#000000",
      secondary:"#FFFFFF",
      aquaMarina:"#66CDAA",
      blue:"#000033"
    },screens: {
      sm: '200px',
      md: '768px',
      lg: '1300px',
      xl: '1440px',
    },
  },
  plugins: [],
};


export default config;
