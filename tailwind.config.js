module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./components/**/*.{html,js,ts,tsx}",
    "./pages/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    backgroundOpacity: false,
  },
};
