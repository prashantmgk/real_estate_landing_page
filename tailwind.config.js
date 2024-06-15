/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        revue: ['Revue', 'sans-serif'],
        nepali: ['Nepali', 'sans-serif'],
      },
      fontSize: {
        h1: '48px',
        h2: '40px',
        h3: '33px',
        h4: '28px',
        h5: '23px',
        h6: '19px',
        p: '16px',
      },
      colors: {
        brand: {
          100: '#2D3194',
          200: '#3D4A99',
          300: '#4D639E',
          400: '#5D7CA3',
          500: '#6D95A8',
          600: '#7DAEAD',
          700: '#8DC7B2',
          800: '#9DE0B7',
          900: '#ADE9B9',
        },
        accent: {
          100: '#01A85A',
          200: '#01B96D',
          300: '#01CA80',
          400: '#01DB93',
          500: '#01ECA6',
          600: '#01FDA9',
          700: '#01FEBC',
          800: '#01FFCF',
          900: '#01FFDF',
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      } 
    },
  },
  plugins: [],
}

