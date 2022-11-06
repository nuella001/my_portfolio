/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'twitter-blue':'#1F4EC4',
      'instagram-purple':'#8A6BAB',
      "gray-0":'#28262E',
     " facebook-green":'#05B06E',
     " btn-blue":'#4B85FE',
     " love-pink":'#FE998C',
     text:'#6F6C7C',
    }
    },
  },
  plugins: [],
}
