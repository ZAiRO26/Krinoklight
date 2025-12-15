/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Corporate Navy Palette
        navy: {
          primary: '#023776',      // Deep Royal Blue - trust, stability
          secondary: '#0347A2',    // Vibrant Corporate Blue - CTAs
          dark: '#011B3D',         // Darker navy for depth
          light: '#0A4A8C',        // Lighter accent
        },
        accent: {
          cyan: '#4BA3DA',         // Innovation/Tech highlight
          glow: '#60B8E8',         // Glow effects
        },
        neutral: {
          slate: '#4A5660',        // Body text (softer than black)
          muted: '#6B7280',        // Secondary text
        },
        background: {
          dark: '#040404',         // Rich Black
          card: '#0A0A0A',         // Card backgrounds
          elevated: '#111111',     // Elevated surfaces
        },
        // Legacy support
        freekiwebsite: {
          blue: '#023776',
          dark: '#040404',
          gray: '#4A5660',
          light: '#111111',
          white: '#ffffff',
          accent: '#4BA3DA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        logo: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(75, 163, 218, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(75, 163, 218, 0.6)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-navy': 'linear-gradient(135deg, #040404 0%, #023776 50%, #011B3D 100%)',
        'gradient-navy-dark': 'linear-gradient(180deg, #040404 0%, #011B3D 100%)',
        'gradient-cta': 'linear-gradient(135deg, #0347A2 0%, #4BA3DA 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(75, 163, 218, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(3, 71, 162, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(2, 55, 118, 0.15) 0px, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(75, 163, 218, 0.3)',
        'glow-sm': '0 0 20px rgba(75, 163, 218, 0.2)',
        'glow-lg': '0 0 60px rgba(75, 163, 218, 0.4)',
        'navy': '0 4px 30px rgba(2, 55, 118, 0.3)',
      },
    },
  },
  plugins: [],
}