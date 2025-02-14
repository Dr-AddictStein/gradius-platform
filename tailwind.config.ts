import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      rotate: {
        'y-180': '180deg',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          'perspective': '1000px'
        },
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d'
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden'
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)'
        }
      })
    }
  ],
} satisfies Config;