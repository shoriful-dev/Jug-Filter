/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(1%)' },
          '50%': { transform: 'translateY(2%)' },
        },
      },
      animation: {
        wave: 'wave 1s infinite',
      },
    },
  },
  plugins: [],
};

