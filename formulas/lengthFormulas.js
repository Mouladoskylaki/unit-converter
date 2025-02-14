// lengthFormulas.js

export const lengthFormulas = {
  meters: {
      kilometers: {
          formula: (value) => value / 1000,
          description: "Divide the length value by 1000."
      },
      centimeters: {
          formula: (value) => value * 100,
          description: "Multiply the length value by 100."
      },
      millimeters: {
          formula: (value) => value * 1000,
          description: "Multiply the length value by 1000."
      }
  },
  kilometers: {
      meters: {
          formula: (value) => value * 1000,
          description: "Multiply the length value by 1000."
      },
      centimeters: {
          formula: (value) => value * 100000,
          description: "Multiply the length value by 100,000."
      },
      millimeters: {
          formula: (value) => value * 1000000,
          description: "Multiply the length value by 1,000,000."
      }
  },
  centimeters: {
      meters: {
          formula: (value) => value / 100,
          description: "Divide the length value by 100."
      },
      kilometers: {
          formula: (value) => value / 100000,
          description: "Divide the length value by 100,000."
      },
      millimeters: {
          formula: (value) => value * 10,
          description: "Multiply the length value by 10."
      }
  },
  millimeters: {
      meters: {
          formula: (value) => value / 1000,
          description: "Divide the length value by 1000."
      },
      kilometers: {
          formula: (value) => value / 1000000,
          description: "Divide the length value by 1,000,000."
      },
      centimeters: {
          formula: (value) => value / 10,
          description: "Divide the length value by 10."
      }
  }
};


