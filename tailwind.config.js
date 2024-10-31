/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary))",
      secondary: "rgb(var(--color-secondary) / 0.5)",
      accent: "rgb(var(--color-accent) / <alpha-value>)",
    },
  },
  plugins: [
    ({ addBase }) =>
      addBase({
        ":root": {
          "--color-primary": "0 0 0",
          "--color-secondary": "63 63 63",
          "--color-accent": "255 255 255",
        },
      }),
  ],
};
