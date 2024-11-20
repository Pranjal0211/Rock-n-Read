/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Blue
        cblue: '#CBEEF3', //cyan blue
        accentYellow: '#FEC107', // Bright Yellow
        accentRed: '#E94E77', // Soft Red
        neutralGray: '#F5F5F5', // Light Gray
        textGray: '#3C3C3C', // Dark Gray
        successGreen: '#A8E10C', // Green
        vibrantOrange: '#FF6F3C', // Orange

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
