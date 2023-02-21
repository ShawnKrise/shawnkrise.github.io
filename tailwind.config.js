/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        "deep-greyblue": "#11141a",
        "deep-dark-grey": "#111111",
        blue: "#2CBCE9",
        red: "e31e3a",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00bce5 7.21%, #ffcc60 45.05%, #ffcc60 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #00bce5 14.53%, #ffcc60 69.36%, #ffcc60 117.73%)",
      }),
      fontFamily: {
        Roboto: ["Roboto", "serif"],
        opensans: ["Roboto", "sans-serif"],
      },
      content: {
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
        person4: "url('./assets/person-4.png')",
        person5: "url('./assets/person-5.png')",
        person6: "url('./assets/person-6.png')",
        project1: "url('./assets/project-1.png')",
        project2: "url('./assets/project-2.png')",
        project3: "url('./assets/project-3.png')",
        project4: "url('./assets/project-4.png')",
        project5: "url('./assets/project-5.png')",
        project6: "url('./assets/project-6.png')",
        project7: "url('./assets/project-7.png')",
        project8: "url('./assets/project-8.png')",
        project9: "url('./assets/project-9.png')",
        project10: "url('./assets/project-10.png')",
        project11: "url('./assets/project-11.png')",
        project12: "url('./assets/project-12.png')",
        project13: "url('./assets/project-13.png')",
        project14: "url('./assets/project-14.png')",
        project15: "url('./assets/project-15.png')",
        project16: "url('./assets/project-16.png')",
        project17: "url('./assets/project-17.png')",
        project18: "url('./assets/project-18.png')",
        project19: "url('./assets/project-19.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
