/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#295FC2', // Primary Blue
        accent: '#275BC3',  // Accent Sky Blue
        white: '#FFFFFF',   // Neutral White
        grayLight: '#F5F5F5', // Soft Gray
        grayMedium: '#B0B0B0', // Medium Gray (new color)
        error: '#FF6B6B',   // Error Red
        success: '#28A745', // Success Green
        warning: '#FFCC00', // Warning Yellow
        grayDark: '#9093a1', // Dark Gray
        divider: '#ECEFF1', // Light Gray
        black: '#000000',   // Text Black
        lightFrost: '#F9FBFC',   // Text Black
      },
    },
  },
  plugins: [],
}
