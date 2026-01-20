/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#EF4444',    // Rojo vibrante
        secondary: '#F97316',  // Naranja
        accent: '#FBBF24',     // Amarillo
        info: '#3B82F6',       // Azul
        success: '#10B981',    // Verde
        dark: '#000000',
        light: '#FFFFFF',
      },
      fontFamily: {
        display: ['Courier New', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
