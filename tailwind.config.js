module.exports = {
  prefix: 'tw-',
  content: [
    'portal/templates/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6e44fe',
          100: '#f0ebff'
        },
        secondary: {
          500: '#ff4979',
          100: '#ffeff2'
        },
        light: {
          100: '#fbfcfd',
          200: '#f3f4f7',
          300: '#edeef3',
        },
        success: {
          100: '#dff8f0',
          500: '#27ce9c',
        },
        error: {
          500: '#ff5252'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
