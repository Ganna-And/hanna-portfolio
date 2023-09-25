/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s linear infinite',
      },
      colors: {
        primary: "#4eb814"
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
        lora: ['Lora', 'serif'],
      },
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark","light"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme:"dark",
    base: true, // applies background color and foreground color for root element by default
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

