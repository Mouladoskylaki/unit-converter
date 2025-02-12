// lengthFormulas.js

export const lengthFormulas = {
    meters: {
      kilometers: (value) => value / 1000,
      centimeters: (value) => value * 100,
      millimeters: (value) => value * 1000,
    },
    kilometers: {
      meters: (value) => value * 1000,
      centimeters: (value) => value * 100000,
      millimeters: (value) => value * 1000000,
    },
    centimeters: {
      meters: (value) => value / 100,
      kilometers: (value) => value / 100000,
      millimeters: (value) => value * 10,
    },
    millimeters: {
      meters: (value) => value / 1000,
      kilometers: (value) => value / 1000000,
      centimeters: (value) => value / 10,
    },
  };