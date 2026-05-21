/** @type {import('tailwindcss').Config} */
// Tailwind 4 — tokens definidos via @theme em src/styles/global.css
// Este arquivo existe por compatibilidade e documentação.
// O @tailwindcss/vite plugin lê automaticamente o @theme do CSS.
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
};
