/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'telugu': ['Noto Sans Telugu', 'sans-serif'],
        'hindi': ['Noto Sans Devanagari', 'sans-serif'],
        'crispy': ['Poppins', 'Nunito', 'Inter', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'],
      },
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fdecd3',
          200: '#fbd5a5',
          300: '#f7b96d',
          400: '#f39332',
          500: '#f0750a',
          600: '#e15a00',
          700: '#ba4302',
          800: '#943508',
          900: '#782d09',
        },
        peanut: {
          50: '#fef9f3',
          100: '#fef0e1',
          200: '#fcddc2',
          300: '#f9c498',
          400: '#f5a16c',
          500: '#f18548',
          600: '#e36d2d',
          700: '#bc5424',
          800: '#964424',
          900: '#7a3a21',
        },
        chocolate: {
          50: '#f7f3f0',
          100: '#ede4dc',
          200: '#dbc8b9',
          300: '#c4a690',
          400: '#ad8469',
          500: '#9c6f4f',
          600: '#8a5d43',
          700: '#724c39',
          800: '#5e4032',
          900: '#4e352a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'bounce-gentle': 'bounce-gentle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};