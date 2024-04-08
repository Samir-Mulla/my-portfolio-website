/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["urbanist", "sans-serif"],
      },
      colors: {
        primaryColor: "#FCB8BB",
        headingColor: "#081e21",
        smallTextColor: "#193256",
      },
      animation: {
        "fade-in": "fadeIn 5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      backgroundImage: {
        background1: "url('/bg1.svg')",
        background2: "url('/bg2.svg')",
        background3: "url('/bg3.svg')",
        background4: "url('/bgfooterwave.svg')",
      },
    },
    plugins: [],
  },
};
