module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        principalLightBg:
          "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        principalDarkBg: "linear-gradient(to right, #ece9e6, #ffffff)",
        secondBg: "linear-gradient(to right, #232526, #414345)",
        colorButtonBg: "#686de0",
      },
      screens: {
        exsm: { max: "400px" },
        esm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
