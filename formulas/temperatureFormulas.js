// temperatureFormulas.js

export const temperatureFormulas = {
  celsius: {
    fahrenheit: {
      formula: (value) => (value * 9/5) + 32,
      description: "Multiply the temperature by 9/5 and add 32.",
    },
    kelvin: {
      formula: (value) => value + 273.15,
      description: "Add 273.15 to the temperature.",
    },
  },
  fahrenheit: {
    celsius: {
      formula: (value) => (value - 32) * 5/9,
      description: "Subtract 32 from the temperature and multiply by 5/9.",
    },
    kelvin: {
      formula: (value) => (value - 32) * 5/9 + 273.15,
      description: "Subtract 32 from the temperature, multiply by 5/9, and add 273.15.",
    },
  },
  kelvin: {
    celsius: {
      formula: (value) => value - 273.15,
      description: "Subtract 273.15 from the temperature.",
    },
    fahrenheit: {
      formula: (value) => (value - 273.15) * 9/5 + 32,
      description: "Subtract 273.15 from the temperature, multiply by 9/5, and add 32.",
    },
  },
};
