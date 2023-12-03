/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "active-input-border-primary":"linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%))",
        "middle-washed-purple":'hsl(249, 99%, 64%)',
        "dark-violet":'hsl(278, 94%, 30%)',
        "red-input-errors-primary": "hsl(0, 100%, 66%)",
        white: "hsl(0, 0%, 100%)",
        "light-grayish-violet-neutral": "hsl(270, 3%, 87%)",
        "dark-grayish-violet-neutral": "hsl(279, 6%, 55%)",
        "very-dark-violet-neutral": "hsl(278, 68%, 11%)",
      },
      fontFamily: {
        ["sans"]: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "main-desktop": "url('/images/bg-main-desktop.png')",
        "main-mobile": "url('/images/bg-main-mobile.png')",
        "card-back": "url('/images/bg-card-back.png')",
        "card-front": "url('/images/bg-card-front.png')",
      },
    },
  },
  plugins: [],
};
