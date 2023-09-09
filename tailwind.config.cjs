/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        pink: "#ff52bf",
        cyan: "#ebfbff",
        "cyan-dark": "#00252e",
        gray: "#808d99",
      },
      boxShadow: {
        xl: "rgba(3, 4, 7, 0.12) 0px -2px 5px 2px,rgba(3, 4, 7, 0.13) 0px 1px 1px -2px, rgba(3, 4, 7, 0.03) 0px 2px 2px -2px,rgba(3, 4, 7, 0.04) 0px 5px 5px -2px, rgba(3, 4, 7, 0.05) 0px 9px 9px -2px",
      },
      gridTemplateColumns: {
        footer: "auto 1fr",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
