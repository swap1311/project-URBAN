/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      screens:{
        "1300px":"1300px"
      }
    },
    
  },
  plugins: [],
}

