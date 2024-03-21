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
        'hero': "url('/assets/Hero.jpeg')", // Adjust the path based on your project structure
      },
      fontFamily: {
        SaolDisplay: ["Saol Display"],
        Akzidenz: ["Akzidenz-Grotesk Pro"],
      },
      screens: {
        sm: '350px',
        md: '700px',
        lg: '1077px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
