import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-900": "#000000",
        "black-800": "#111111",
        "black-700": "#282828",
        "black-600": "#383838",
        "black-500": "#4B4B4B",
        "black-400": "#9D9FA1",
        "black-300": "#BDBDBD",
        "black-200": "#DDDDDD",
        "black-100": "#F2F2F2",
        "black-50": "#F9F9F9",

        white: "#fff",

        "orange-900": "#6B250D",
        "orange-800": "#8C3111",
        "orange-700": "#B53F15",
        "orange-600": "#F5551B",
        "orange-500": "#FD5322",
        "orange-400": "#FF7A4B",
        "orange-300": "#FF9068",
        "orange-200": "#FFB398",
        "orange-100": "#FFCCB9",
        "orange-50": "#FFEEE9",
      },
      fontSize: {
        "page-title": "clamp(1.875rem, 1.2rem + 3.375vw, 5.25rem)",
        "section-title": "clamp(1.875rem, 1.575rem + 1.5vw, 3.375rem)",
        "big-title": "clamp(1.875rem, 1.4625rem + 2.0625vw, 3.9375rem)",
        "2xl": "36px",
        xl: "20px",
        l: "18px",
        m: "16px",
        s: "14px",
        xs: "12px",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
      backgroundImage: {
        "orange-linear":
          "linear-gradient(180deg, rgba(251,67,44,1) 0%, rgba(255,89,30,1) 100%)",
      },
      borderRadius: {
        "btn-default": "39px",
      },
      transitionDuration: {
        standart: 'all .15s ease'
      }
    },
  },
  plugins: [],
};
export default config;
