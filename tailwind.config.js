/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        red: "#FC4747",
        darkBlue: "#10141E",
        greyishBlue: "#5A698F",
        semiDarkBlue: "#161D2F",
        white: "#FFFFFF",
      },
      maxWidth: {
        container: "1325px",
      },
      backgroundColor: {
        opacity: "rgba(128, 128, 128, 0.4)",
      },
      screens: {
        sm: "380px",
        md: "768px",
        lg: "1280px",
      },
      backgroundImage: {
        "gradient-to-r":
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))",
      },
    },
  },
  plugins: [],
};
