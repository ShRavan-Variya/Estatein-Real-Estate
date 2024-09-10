/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BgPurple: "#703BF7",
        BgWhite: "#FFFFFF",
        BgLightPurple:"#f5f2fd "
      },
      boxShadow: {
        custom: "0 0 20px 0 rgba(0, 0, 0, .20)",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
