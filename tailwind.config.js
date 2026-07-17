/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff00ff',
          cyan: '#00ffff',
          green: '#00ff00',
          yellow: '#ffff00',
          purple: '#bf00ff',
        },
        dark: {
          bg: '#0a0a0f',
          card: '#12121a',
          border: '#1f1f2e',
        }
      },
      fontFamily: {
        arcade: ['"Press Start 2P"', 'cursive', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'flicker': 'flicker 0.5s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff' },
          '50%': { boxShadow: '0 0 20px #00ffff, 0 0 40px #00ffff' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

