import type { Config } from "tailwindcss";

const config: Config = {
  content: [

    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          "10": "#12416B",
          "20": "#0B2B47"
        },
        orange: {
          "10": "#F7941D",
          "5": "#FFB55C"
        },
        gray: {
          "3": "#F4F4F4",
          "5": "#6E6E73",
          "10": "#666C89"
        }
      }
    },
  },
  plugins: [],
};
export default config;
