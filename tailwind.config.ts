import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': {
        900: "#4078FF",
        800: "#5C83FF",
        700: "#728FFF",
        600: "#869AFF",
        500: "#97A6FF",
        400: "#A8B2FF",
        300: "#B7BFFF",
        200: "#E3E5FF",
        100: "#F0F1FF"
      },
      'black': {
        900: "#0E1422",
        800: "#202533",
        700: "#333845",
        600: "#474B57",
        500: "#5C5F6A",
        400: "#71747E",
        300: "#878A92",
        200: "#B6B7BC",
        100: "#E6E7E8"
      },
      'white': {
        900: "#FFFFFF",
        200: "#E9E9EB",
        100: "#F6F6F6"
      },
      'blue': {
        900: "#306CEF",
        800: "#477CF1",
        700: "#5E8CF3",
        600: "#759DF4",
        500: "#8CADF6",
        400: "#A3BEF8",
        300: "#BACEFA",
        200: "#D1DEFB",
        100: "#E8EFFD"
      },
      'green': {
        900: "#057234",
        800: "#2C7F45",
        700: "#458B56",
        600: "#5A9868",
        500: "#6FA479",
        400: "#83B18B",
        300: "#98BE9E",
        200: "#C1D8C4",
        100: "#D5E5D7"
      },
      'red': {
        900: "#BE1313",
        800: "#C83727",
        700: "#D14F3A",
        600: "#D9644E",
        500: "#E17862",
        400: "#E88C77",
        300: "#EE9F8D",
        200: "#F8C5B9",
        100: "#FBD9D0"
      },
      "yellow": {
        900: "#F3B40A",
        800: "#F6BB33",
        700: "#F9C14C",
        600: "#FBC862",
        500: "#FDCF76",
        400: "#FFD58A",
        300: "#FFDC9E",
        200: "#FFEAC4",
        100: "#FFF1D8"
      }
    },
    spacing: {
      '1': '4px',
      '2': '6px',
      '3': '8px',
      '4': '12px',
      '5': '16px',
      '6': '24px',
      '7': '32px',
      '8': '40px',
      '9': '48px',
      '10': '56px',
      '11': '64px',
      '12': '72px',
      '13': '80px',
      '14': '88px',
      '15': '96px',
      '16': '104px',
      '17': '112px',
      '18': '120px',
      '19': '128px',
      '20': '136px',
      '21': '144px',
      '22': '152px',
      '23': '160px',
      '24': '168px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
