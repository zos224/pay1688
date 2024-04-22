import { height } from "@fortawesome/free-brands-svg-icons/faFacebook";
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
      },
      width: {
        100: "400px"
      },
      keyframes: {
        "left-to-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "right-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        }
      },
      animation: {
        "left-to-right": "left-to-right 0.2s ease-in-out",
        "right-to-left": "right-to-left 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
