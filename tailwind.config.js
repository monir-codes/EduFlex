module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        accent: {
          indigo: "#6366f1",
          violet: "#a855f7",
        },
      },
    },
  },
  plugins: [],
};