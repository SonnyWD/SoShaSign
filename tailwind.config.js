/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,css}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        },
        colors: {
          beige: '#fffcf7',
          bleu: '#1A202C',
          beigeBloc: '#f7f3f0',
          cta: '#cf6850',
          hoverCta: '#b04f39'
        },
      },
    },
    plugins: [],
  }