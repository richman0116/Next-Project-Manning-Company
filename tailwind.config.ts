import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/assets/Hero.jpeg')", // Adjust the path based on your project structure
      },
      fontFamily: {
        SaolDisplay: ["var(--font-SaolDisplay)"],
        SaolDisplayR: ["var(--font-SaolDisplayR)"],
        Akzidenz: ["var(--font-Akzidenz)"],
        Akzidenzpc: ["var(--font-Akzidenzpc)"],
        Akzidenzlc: ["var(--font-Akzidenzlc)"],
        SaolDisplayl: ["var(--font-SaolDisplayl)"],
        Apercu: ["var(--font-Apercu_Regular)"],
      },
      screens: {
        sm: "350px",
        md: "700px",
        lg: "1077px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
