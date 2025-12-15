/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Matte Yellow & Black Theme
        primary: {
          DEFAULT: '#FCDA69', // Matte Yellow
          hover: '#E5C558',
          light: '#FDE48B',
        },
        background: {
          dark: '#000000', // Deep Black
          card: '#111111', // Dark Grey Surface
          light: '#FFFFFF',
        },
        surface: {
          DEFAULT: '#111111',
          hover: '#1A1A1A',
        },
        // Mapping legacy names to new palette to prevent breakage
        navy: {
          primary: '#000000',
          secondary: '#111111',
          dark: '#000000',
        },
        accent: {
          cyan: '#FCDA69',
          purple: '#FFFFFF',
        },
        neutral: {
          slate: '#9CA3AF',
          light: '#F3F4F6',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
        logo: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at center, rgba(252, 218, 105, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
        // Legacy gradients mapped to solid/subtle
        'gradient-cta': 'linear-gradient(135deg, #FCDA69 0%, #E5C558 100%)',
        'mesh-bg': 'radial-gradient(at 0% 0%, rgba(252, 218, 105, 0.05) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(252, 218, 105, 0.15)',
        'glow-lg': '0 0 40px rgba(252, 218, 105, 0.2)',
        'glow-sm': '0 0 10px rgba(252, 218, 105, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}