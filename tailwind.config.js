/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
     404: '172px',
     '404p': '42px',
     'heading': '80px',
     'sm': '14px'
    },
    extend: {
      screens: {
        'xsm': '320px',
        // => @media (min-width: 320px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
        'Header': '0 10px 30px 11px rgb(0 0 0 / 5%)',
      },
      colors: {
        'baseFont': '#E78901',
      },
      backgroundColor: {
        'bgcolor': '#FEFCF9',
        'hoverbg': '#000024'
      },
      lineHeight: {
         '404': '182px',
         '404p': '52px',
         'heading': '90px'
      },
    },
  },
  plugins: [],
}