module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dosis: "'Dosis', sans-serif",
        titillium: "'Titillium Web', sans-serif"
      },
      colors: {
        dotred: '#f16667',
        dotyellow: '#ffce34',
        dotgreen: '#50b648',
      },
      strokeWidth: {
        '15': '15',
       },
      fill: {
        none: 'none',
      }, 
      animation: {
        blob: "blob 7s infinite",
        scroll: "scroll ease 2s infinite",
        wiggle: 'wiggle 7s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.2)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.8)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        },
        scroll: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(60px)" }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
