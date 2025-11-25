module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sneha-pink': '#FF9EB5',
        'sneha-soft': '#FFC0CB',
        'sneha-rose': '#FF6F91',
        'charcoal': '#111111'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
}
