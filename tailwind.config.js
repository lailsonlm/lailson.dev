/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#EEEEEE',
          700: '#222831',
          900: '#1E2228',
        },
        cyan: {
          500: '#00ADB5',
          700: '#009BA3',
        },
      },
      
      blur: {
        full: '194px',
      },
    },
  },
  plugins: [],
}
