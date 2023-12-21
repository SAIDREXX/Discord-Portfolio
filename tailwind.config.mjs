/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Sans", "sans-serif"],
      },
      colors: {
        topColor: "#1e1f22",
        channelColor: "#2b2d31",
        bottomChannelColor: "#232428",
        chatColor: "#313338",
        hoverColor: "#5865f2",
        searchColor: "#1e1f22",
        textColor: "#80848e",
      },
      gridTemplateColumns: {
        22: "repeat(22, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
      },
      gridTemplateRows: {
        22: "repeat(22, minmax(0, 1fr))",
      },
      gridRow: {
        "span-22": "span 22 / span 22",
      },
      boxShadow: {
        customShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
    },
  },
  plugins: [],
};
