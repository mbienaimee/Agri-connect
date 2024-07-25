/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans - serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      animation: {
        "hover-from-bottom": "hover-from-bottom 0.5s ease-in-out forwards",
      },
      keyframes: {
        "hover-from-bottom": {
          from: {
            opacity: 0,
            transform: "translateY(100%)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
          backgroundImage: {
            myBackground: `url('./slider-01.jpg')`, // Replace with your image name
          },
        },
      },
    },
    plugins: [],
  },
};


