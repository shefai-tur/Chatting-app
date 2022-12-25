/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#844F50",
        page: "#F0B7A4",
      },
    },
    fontFamily: {
      'nuni': ['Nunito', 'sans-serif',],  
      'pop': ['Poppins', 'sans-serif',],  
      },
  },
};
