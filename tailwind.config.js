/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        'bg-soft': '#0f0f0f',
        ink: '#f5f5f5',
        'ink-dim': '#8a8a8a',
        'ink-faint': '#545454',
        line: 'rgba(255, 255, 255, 0.09)',
        glass: 'rgba(255, 255, 255, 0.035)',
        'glass-strong': 'rgba(255, 255, 255, 0.06)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
