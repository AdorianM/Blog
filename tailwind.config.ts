import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        lilita: ['var(--font-lilita-one)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'camel-yellow': {
          'light': '#EFB954',
          'light-soft': '#C5A466',
          'dark-soft': '#706A5F',
          'dark': '#464037',
          'dark-strong': '#332C1F'
        },
        'camel-indigo': {
          'light': '#5467F0',
          'dark': '#5F6170'
        },
        'camel-sky': {
          'light': '#54CAF0',
          'dark': '#5F6C70'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
export default config;
