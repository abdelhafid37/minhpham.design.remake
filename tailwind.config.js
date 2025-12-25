/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ui-red": "#eb5939",
        "ui-white": "#b7ab98",
        "ui-gray": "#4d4d4d",
        "ui-black": "#0d0d0d",
      },
      fontFamily: {
        "ui-mona": ["MonaSans", "sans-serif", "serif"],
        "ui-wf-regular": ["WFVisualSansRegular", "sans-serif", "serif"],
        "ui-wf-bold": ["WFVisualSansSemiBold", "sans-serif", "serif"],
      },
      letterSpacing: {
        "ui-text": ".05em",
      },
    },
  },
  plugins: [],
};
