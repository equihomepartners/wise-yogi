import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf0de',
          200: '#bbdfbe',
          300: '#92c896',
          400: '#68ac6d',
          500: '#4c904f',
          600: '#3b733e',
          700: '#315c33',
          800: '#2a492c',
          900: '#243d26',
        },
        earth: {
          100: '#f7f3e9',
          200: '#ede3cc',
          300: '#dac7a3',
          400: '#c4a97d',
          500: '#b08b5e',
          600: '#96714d',
          700: '#7c5c42',
          800: '#654b3a',
          900: '#534035',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        'arialbd': ['arialbd', 'Arial', 'sans-serif'],
        'avenir-black': ['Avenir-Black', 'Arial', 'sans-serif'],
        'bebas': ['Bebas-Regular', 'Arial', 'sans-serif'],
        'itc-avant-garde': ['ITCAvantGardeStd-Md', 'Arial', 'sans-serif'],
        'knockout': ['Knockout-HTF28-JuniorFeatherwt', 'Arial', 'sans-serif'],
        'manta': ['Manta Style Script DEMO', 'cursive'],
        'myriad-pro': ['MyriadPro-Regular', 'Arial', 'sans-serif'],
        'poppins': ['Poppins-Regular', 'Arial', 'sans-serif'],
        'poppins-medium': ['Poppins-Medium', 'Arial', 'sans-serif'],
        'poppins-semibold': ['Poppins-SemiBold', 'Arial', 'sans-serif'],
        'poppins-bold': ['Poppins-Bold', 'Arial', 'sans-serif'],
        'raillinc': ['Raillinc', 'Arial', 'sans-serif'],
        'teko': ['Teko-Medium', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 