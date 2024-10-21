/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      margin: {
        '10': '10rem',
      },
      lineHeight:{
        tight: 1.25,
      },
      backgroundColor:{
        primary: '#f6f6f6!important',
        second: 'rgba(75, 193, 210, 0.20)',
        input:'#dbf3f645!important',
        button:'#4BC1D2'

      },
      borderColor:{
        input: '#4BC1D2!important',
      },
      borderWidth: {
        input: '1px',
        input2: '2px!important',
      }
    },
  },
  plugins: [],
};
