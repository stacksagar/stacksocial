module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'

  screens: { 
    '3xs': "300px",
    '2xs': "450px",
    'xs': "550px",
    sm: "	640px",
    md: "	768px",
    '1k': "1000px",
    lg: "	1024px",
    xl: "	1280px",
    "2xl": "1536px",
    "2k": "1920px",
    "4k": "1920px",
  },

  theme: {
    extend: {
      minHeight: {
        header: "60px",
        minus_header: "calc(100vh - 60px)",
        minus_header_dbl: "calc(100vh - 120px)",
      },
      maxHeight: {
        header: "60px",
        minus_header: "calc(100vh - 60px)",
        minus_header_dbl: "calc(100vh - 120px)",
      },
      spacing: {
        header: "60px",
        minus_header: "calc(100vh - 60px)",
        minus_header_dbl: "calc(100vh - 120px)",
        0.1: "0.1px",
        0.2: "0.2px",
        0.3: "0.3px",
        0.4: "0.4px",
        0.5: "0.5px",
        0.6: "0.6px",
        0.7: "0.7px",
        0.8: "0.8px",
        0.9: "0.9px",
        "1p": "1px",
        1.2: "1.2px",
        1.3: "1.3px",
        1.4: "1.4px",
        1.5: "1.5px",
        1.6: "1.6px",
        1.7: "1.7px",
        1.8: "1.8px",
        1.9: "1.9px",
        "2p": "2px",
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover', 'group-hover'],
      dark: ['screens'],
      screens: ['dark'],
    },
  },
  plugins: [],
};
