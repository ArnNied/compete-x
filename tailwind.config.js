/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BB4D4F",
        secondary: "#EEBA58",
        light: "#F3F7F2",
        dark: "#959CAA",
        darker: "#283F5E",
      },
    },
  },
  plugins: [],
}
