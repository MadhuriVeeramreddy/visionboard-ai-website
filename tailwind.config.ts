import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vision-mint': '#B8E6D5',
        'vision-blue': '#87CEEB',
        'vision-pink': '#E8B4D4',
        'vision-purple': '#D8A4D4',
        'vision-orange': '#FFB347',
        'vision-yellow': '#FFE66D',
        'vision-dark': '#1A1A2E',
        'vision-navy': '#2C2C3E',
      },
      fontFamily: {
        'display': ['SF Pro Display', 'system-ui', 'sans-serif'],
        'text': ['SF Pro Text', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-vision': 'linear-gradient(135deg, #B8E6D5 0%, #87CEEB 20%, #E8B4D4 40%, #D8A4D4 50%, #FFB347 75%, #FFE66D 100%)',
      },
    },
  },
  plugins: [],
}
export default config

