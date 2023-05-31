/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-kanit)'],
        light: ['var(--font-kanit2)'],
        title: ['var(--font-ibm)'],
      },
      colors: {
        gray: {
          900: '#1E2228',
          700: '#222831',
          500: '#2C323A',
          300: '#69778C',
          50: '#EEEEEE',
        },
        cyan: {
          500: '#00ADB5',
          700: '#009BA3',
        },
      },
      
      blur: {
        full: '194px',
      },
      backgroundImage: {
        'gradient-primary': `linear-gradient(to bottom, #37F399 -5.76%, #00ADB5 104.66%)`,
      },
    },
  },
  plugins: [],
}
