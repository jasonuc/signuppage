/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inconsolata': ['Inconsolata', 'monospace', 'ui-sans'],
        'kanit': ['Kanit', 'ui-sans']
      }
    },
  },
  plugins: [],
}

