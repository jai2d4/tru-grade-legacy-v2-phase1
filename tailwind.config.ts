import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17212b",
        paper: "#f7f8fa",
        brand: "#2563eb"
      }
    }
  },
  plugins: []
};

export default config;
