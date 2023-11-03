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
      },
      colors: {
        primary: '#3498db',      // Primary Color (Blue)
        secondary: '#2ecc71',    // Secondary Color (Green)
        accent: '#e74c3c',       // Accent Color (Red)
        background: '#ecf0f1',   // Background Color (Light Grayish-Blue)
        text: '#2c3e50',         // Text Color (Dark Charcoal)
      },
    },
  },
  plugins: [],
}

