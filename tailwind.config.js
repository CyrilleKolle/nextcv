module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./components/**/*.{html,js,ts,tsx}",
    "./pages/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pinkish': '#C39EA0',
        'softblack':'#151516',
        'gold':'#D4AF37',
        'pantone': '#FF6C2F',
        'coal':'#333333'
      },
      backgroundImage: {
        'hero': "url('/ai_ml.png')",
      }
    },
  },
  plugins: [],
  corePlugins: {
    backgroundOpacity: false,
  },
};
