/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT ({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
   plugins: [
    require("rippleui"),
    require("flowbite/plugin")
  ],
   theme: {
    extend: {
      colors: {
        default: '#ffffff',
      }
    }
  },
  rippleui: {
    removetheme: ["dark"]
  }
});