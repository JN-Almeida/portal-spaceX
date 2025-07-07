import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'cosmic-spin': 'cosmic-spin 1s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'sparkle': 'sparkle 10s linear infinite',
      },
      keyframes: {
        'cosmic-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
        },
        'sparkle': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100px)' },
        },
      },
      colors: {
        'space-blue': {
          200: 'rgba(59, 130, 246, 0.2)',
          300: 'rgba(59, 130, 246, 0.3)',
          500: 'rgba(59, 130, 246, 0.5)',
          800: 'rgba(59, 130, 246, 0.8)',
        },
        'space-purple': {
          500: 'rgba(147, 51, 234, 0.5)',
          800: 'rgba(147, 51, 234, 0.8)',
        },
        'space-green': {
          200: 'rgba(34, 197, 94, 0.2)',
          500: 'rgba(34, 197, 94, 0.5)',
        },
        'space-red': {
          200: 'rgba(239, 68, 68, 0.2)',
          500: 'rgba(239, 68, 68, 0.5)',
        },
        'space-gray': {
          200: 'rgba(156, 163, 175, 0.2)',
          500: 'rgba(156, 163, 175, 0.5)',
        },
      },
      backdropBlur: {
        'space': '10px',
      },
      boxShadow: {
        'space-glow': '0 0 10px rgba(59, 130, 246, 0.3)',
        'space-hover': '0 10px 30px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'button-glow': '0 5px 15px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2)',
        'green-glow': '0 0 10px rgba(34, 197, 94, 0.3)',
        'red-glow': '0 0 10px rgba(239, 68, 68, 0.3)',
        'gray-glow': '0 0 10px rgba(156, 163, 175, 0.3)',
      },
    },
  },
}

export default config 