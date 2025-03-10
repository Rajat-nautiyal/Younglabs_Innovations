/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs': '420px',
    },
    extend: {
      fontFamily:{
        poppinsLight : ['Poppins-light', 'sans-serif'],
        poppinsRegular : ['Poppins-regular', 'sans-serif'],
        poppinsmedium : ['Poppins-medium', 'sans-serif'],
        poppins : ['Poppins', 'sans-serif'],


      }
    },
  },
  plugins: [],
}

