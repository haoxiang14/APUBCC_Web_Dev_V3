/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        },
      },
    },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#2959DB",
                  
          "secondary": "#84A1F5",
                  
          "accent": "#396EFE",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

