/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E4488', // Primary Blue
        accent: '#63CBEC',  // Accent Sky Blue
        white: '#FFFFFF',   // Neutral White
        grayLight: '#F5F5F5', // Soft Gray
        error: '#FF6B6B',   // Error Red
        success: '#28A745', // Success Green
        warning: '#FFCC00', // Warning Yellow
        grayDark: '#34495E', // Dark Gray
        divider: '#ECEFF1', // Light Gray
        black: '#000000',   // Text Black
      },
    },
  },
  plugins: [],
}