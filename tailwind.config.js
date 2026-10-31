/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0B132B',
          dark: '#0F172A',
          slate: '#1E293B',
          muted: '#64748B',
          light: '#F8FAFC',
          border: '#E2E8F0',
          emerald: '#059669',
          'emerald-hover': '#047857',
          'emerald-light': '#ECFDF5',
          'emerald-border': '#A7F3D0',
          blue: '#0284C7',
          'blue-light': '#F0F9FF',
          amber: '#F59E0B'
        }
      },
      boxShadow: {
        'card': '0 2px 10px -2px rgba(15, 23, 42, 0.05), 0 10px 25px -5px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 35px -8px rgba(15, 23, 42, 0.09), 0 1px 3px rgba(15, 23, 42, 0.05)',
        'terminal': '0 30px 60px -12px rgba(11, 19, 43, 0.28), 0 18px 36px -18px rgba(11, 19, 43, 0.2)',
        'glow-emerald': '0 0 25px rgba(5, 150, 105, 0.35)',
        'glow-blue': '0 0 25px rgba(2, 132, 199, 0.35)',
      }
    },
  },
  plugins: [],
}

