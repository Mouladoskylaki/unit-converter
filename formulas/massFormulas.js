export const massFormulas = {
  tonne: {
    kilogram: {
      formula: (value) => value * 1000,
      description: "Multiply the mass value by 1000.",
    },
    gram: {
      formula: (value) => value * 1e6,
      description: "Multiply the mass value by 1,000,000.",
    },
    milligram: {
      formula: (value) => value * 1e9,
      description: "Multiply the mass value by 1,000,000,000.",
    },
    microgram: {
      formula: (value) => value * 1e12,
      description: "Multiply the mass value by 1,000,000,000,000.",
    },
    imperialTon: {
      formula: (value) => value / 1.016,
      description: "Divide the mass value by 1.016.",
    },
    usTon: {
      formula: (value) => value / 1.102,
      description: "Divide the mass value by 1.102.",
    },
    stone: {
      formula: (value) => value * 157.473,
      description: "Multiply the mass value by 157.473.",
    },
    pound: {
      formula: (value) => value * 2204.62,
      description: "Multiply the mass value by 2204.62.",
    },
    ounce: {
      formula: (value) => value * 35273.96,
      description: "Multiply the mass value by 35,273.96.",
    },
    carat: {
      formula: (value) => value * 5e6,
      description: "Multiply the mass value by 5,000,000.",
    },
    atomicMassUnit: {
      formula: (value) => value * 6.022e26,
      description: "Multiply the mass value by 6.022e+26.",
    },
  },
  kilogram: {
    tonne: {
      formula: (value) => value / 1000,
      description: "Divide the mass value by 1000.",
    },
    gram: {
      formula: (value) => value * 1000,
      description: "Multiply the mass value by 1000.",
    },
    milligram: {
      formula: (value) => value * 1e6,
      description: "Multiply the mass value by 1,000,000.",
    },
    microgram: {
      formula: (value) => value * 1e9,
      description: "Multiply the mass value by 1,000,000,000.",
    },
    imperialTon: {
      formula: (value) => value / 1016.047,
      description: "Divide the mass value by 1016.047.",
    },
    usTon: {
      formula: (value) => value / 907.185,
      description: "Divide the mass value by 907.185.",
    },
    stone: {
      formula: (value) => value / 6.35,
      description: "Divide the mass value by 6.35.",
    },
    pound: {
      formula: (value) => value * 2.20462,
      description: "Multiply the mass value by 2.20462.",
    },
    ounce: {
      formula: (value) => value * 35.27396,
      description: "Multiply the mass value by 35.27396.",
    },
    carat: {
      formula: (value) => value * 5000,
      description: "Multiply the mass value by 5000.",
    },
    atomicMassUnit: {
      formula: (value) => value * 6.022e26,
      description: "Multiply the mass value by 6.022e+26.",
    },
  },
  gram: {
    tonne: {
      formula: (value) => value / 1e6,
      description: "Divide the mass value by 1,000,000.",
    },
    kilogram: {
      formula: (value) => value / 1000,
      description: "Divide the mass value by 1000.",
    },
    milligram: {
      formula: (value) => value * 1000,
      description: "Multiply the mass value by 1000.",
    },
    microgram: {
      formula: (value) => value * 1e6,
      description: "Multiply the mass value by 1,000,000.",
    },
    imperialTon: {
      formula: (value) => value / 1.016e6,
      description: "Divide the mass value by 1,016,000.",
    },
    usTon: {
      formula: (value) => value / 907185,
      description: "Divide the mass value by 907,185.",
    },
    stone: {
      formula: (value) => value / 6350.293,
      description: "Divide the mass value by 6350.293.",
    },
    pound: {
      formula: (value) => value / 453.592,
      description: "Divide the mass value by 453.592.",
    },
    ounce: {
      formula: (value) => value / 28.3495,
      description: "Divide the mass value by 28.3495.",
    },
    carat: {
      formula: (value) => value * 5,
      description: "Multiply the mass value by 5.",
    },
    atomicMassUnit: {
      formula: (value) => value * 6.022e23,
      description: "Multiply the mass value by 6.022e+23.",
    },
  },
  milligram: {
    tonne: {
      formula: (value) => value / 1e9,
      description: "Divide the mass value by 1,000,000,000.",
    },
    kilogram: {
      formula: (value) => value / 1e6,
      description: "Divide the mass value by 1,000,000.",
    },
    gram: {
      formula: (value) => value / 1000,
      description: "Divide the mass value by 1000.",
    },
    microgram: {
      formula: (value) => value * 1000,
      description: "Multiply the mass value by 1000.",
    },
    imperialTon: {
      formula: (value) => value / 1.016e9,
      description: "Divide the mass value by 1,016,000,000.",
    },
    usTon: {
      formula: (value) => value / 9.072e8,
      description: "Divide the mass value by 907,200,000.",
    },
    stone: {
      formula: (value) => value / 6.35e6,
      description: "Divide the mass value by 6,350,000.",
    },
    pound: {
      formula: (value) => value / 453592,
      description: "Divide the mass value by 453,592.",
    },
    ounce: {
      formula: (value) => value / 28349.5,
      description: "Divide the mass value by 28,349.5.",
    },
    carat: {
      formula: (value) => value / 200,
      description: "Divide the mass value by 200.",
    },
    atomicMassUnit: {
      formula: (value) => value * 6.022e20,
      description: "Multiply the mass value by 6.022e+20.",
    },
  },
  microgram: {
    tonne: {
      formula: (value) => value / 1e12,
      description: "Divide the mass value by 1,000,000,000,000.",
    },
    kilogram: {
      formula: (value) => value / 1e9,
      description: "Divide the mass value by 1,000,000,000.",
    },
    gram: {
      formula: (value) => value / 1e6,
      description: "Divide the mass value by 1,000,000.",
    },
    milligram: {
      formula: (value) => value / 1000,
      description: "Divide the mass value by 1000.",
    },
    imperialTon: {
      formula: (value) => value / 1.016e12,
      description: "Divide the mass value by 1,016,000,000,000.",
    },
    usTon: {
      formula: (value) => value / 9.072e11,
      description: "Divide the mass value by 907,200,000,000.",
    },
    stone: {
      formula: (value) => value / 6.35e9,
      description: "Divide the mass value by 6,350,000,000.",
    },
    pound: {
      formula: (value) => value / 4.536e8,
      description: "Divide the mass value by 453,600,000.",
    },
    ounce: {
      formula: (value) => value / 2.835e7,
      description: "Divide the mass value by 28,350,000.",
    },
    carat: {
      formula: (value) => value / 200000,
      description: "Divide the mass value by 200,000.",
    },
    atomicMassUnit: {
      formula: (value) => value * 6.022e17,
      description: "Multiply the mass value by 6.022e+17.",
    },
  },
  imperialTon: {
    tonne: {
      formula: (value) => value * 1.016,
      description: "Multiply the mass value by 1.016.",
    },
    kilogram: {
      formula: (value) => value * 1016.047,
      description: "Multiply the mass value by 1016.047.",
    },
    gram: {
      formula: (value) => value * 1.016e6,
      description: "Multiply the mass value by 1,016,000.",
    },
    milligram: {
      formula: (value) => value * 1.016e9,
      description: "Multiply the mass value by 1,016,000,000.",
    },
    microgram: {
      formula: (value) => value * 1.016e12,
      description: "Multiply the mass value by 1,016,000,000,000.",
    },
    usTon: {
      formula: (value) => value * 1.12,
      description: "Multiply the mass value by 1.12.",
    },
    stone: {
      formula: (value) => value * 160,
      description: "Multiply the mass value by 160.",
    },
    pound: {
      formula: (value) => value * 2240,
      description: "Multiply the mass value by 2240.",
    },
    ounce: {
      formula: (value) => value * 35840,
      description: "Multiply the mass value by 35,840.",
    },
    carat: {
      formula: (value) => value * 5.08e6,
      description: "Multiply the mass value by 5,080,000.",
    },
    atomicMassUnit: {
      formula: (value) => value * 6.022e29,
      description: "Multiply the mass value by 6.022e+29.",
    },
  },
  usTon: {
    tonne: {
      formula: (value) => value * 0.907185,
      description: "Multiply the mass value by 0.907185.",
    },
    kilogram: {
      formula: (value) => value * 907.185,
      description: "Multiply the mass value by 907.185.",
    },
    gram: {
      formula: (value) => value * 907185,
      description: "Multiply the mass value by 907,185.",
    },
    milligram: {
      formula: (value) => value * 9.072e8,
      description: "Multiply the mass value by 907,200,000.",
    },
    microgram: {
      formula: (value) => value * 9.072e11,
      description: "Multiply the mass value by 907,200,000,000.",
    },
    imperialTon: {
      formula: (value) => value / 1.12,
      description: "Divide the mass value by 1.12.",
    },
    stone: {
      formula: (value) => value * 142.857,
      description: "Multiply the mass value by 142.857.",
    },
    pound: {
      formula: (value) => value * 2000,
      description: "Multiply the mass value by 2000.",
    },
    ounce: {
      formula: (value) => value * 32000,
      description: "Multiply the mass value by 32,000.",
    },
    carat: {
      formula: (value) => value * 4.536e6,
      description: "Multiply the mass value by 4,536,000.",
    },
    atomicMassUnit: {
      formula: (value) => value * 5.976e29,
      description: "Multiply the mass value by 5.976e+29.",
    },
  },
  stone: {
    tonne: {
      formula: (value) => value / 157.473,
      description: "Divide the mass value by 157.473.",
    },
    kilogram: {
      formula: (value) => value * 6.35,
      description: "Multiply the mass value by 6.35.",
    },
    gram: {
      formula: (value) => value * 6350.293,
      description: "Multiply the mass value by 6350.293.",
    },
    milligram: {
      formula: (value) => value * 6.35e6,
      description: "Multiply the mass value by 6,350,000.",
    },
    microgram: {
      formula: (value) => value * 6.35e9,
      description: "Multiply the mass value by 6,350,000,000.",
    },
    imperialTon: {
      formula: (value) => value / 160,
      description: "Divide the mass value by 160.",
    },
    usTon: {
      formula: (value) => value / 142.857,
      description: "Divide the mass value by 142.857.",
    },
    pound: {
      formula: (value) => value * 14,
      description: "Multiply the mass value by 14.",
    },
    ounce: {
      formula: (value) => value * 224,
      description: "Multiply the mass value by 224.",
    },
    carat: {
      formula: (value) => value * 31750,
      description: "Multiply the mass value by 31750.",
    },
    atomicMassUnit: {
      formula: (value) => value * 3.543e27,
      description: "Multiply the mass value by 3.543e+27.",
    },
  },
  pound: {
    tonne: {
      formula: (value) => value / 2204.62,
      description: "Divide the mass value by 2204.62.",
    },
    kilogram: {
      formula: (value) => value / 2.20462,
      description: "Divide the mass value by 2.20462.",
    },
    gram: {
      formula: (value) => value * 453.592,
      description: "Multiply the mass value by 453.592.",
    },
    milligram: {
      formula: (value) => value * 453592,
      description: "Multiply the mass value by 453,592.",
    },
    microgram: {
      formula: (value) => value * 4.536e8,
      description: "Multiply the mass value by 453,600,000.",
    },
    imperialTon: {
      formula: (value) => value / 2240,
      description: "Divide the mass value by 2240.",
    },
    usTon: {
      formula: (value) => value / 2000,
      description: "Divide the mass value by 2000.",
    },
    stone: {
      formula: (value) => value / 14,
      description: "Divide the mass value by 14.",
    },
    ounce: {
      formula: (value) => value * 16,
      description: "Multiply the mass value by 16.",
    },
    carat: {
      formula: (value) => value * 2267.96,
      description: "Multiply the mass value by 2267.96.",
    },
    atomicMassUnit: {
      formula: (value) => value * 2.732e26,
      description: "Multiply the mass value by 2.732e+26.",
    },
  },
  ounce: {
    tonne: {
      formula: (value) => value / 35273.96,
      description: "Divide the mass value by 35273.96.",
    },
    kilogram: {
      formula: (value) => value / 35.27396,
      description: "Divide the mass value by 35.27396.",
    },
    gram: {
      formula: (value) => value * 28.3495,
      description: "Multiply the mass value by 28.3495.",
    },
    milligram: {
      formula: (value) => value * 28349.5,
      description: "Multiply the mass value by 28,349.5.",
    },
    microgram: {
      formula: (value) => value * 2.835e7,
      description: "Multiply the mass value by 28,350,000.",
    },
    imperialTon: {
      formula: (value) => value / 35840,
      description: "Divide the mass value by 35840.",
    },
    usTon: {
      formula: (value) => value / 32000,
      description: "Divide the mass value by 32000.",
    },
    stone: {
      formula: (value) => value / 224,
      description: "Divide the mass value by 224.",
    },
    pound: {
      formula: (value) => value / 16,
      description: "Divide the mass value by 16.",
    },
    carat: {
      formula: (value) => value * 141.748,
      description: "Multiply the mass value by 141.748.",
    },
    atomicMassUnit: {
      formula: (value) => value * 1.709e25,
      description: "Multiply the mass value by 1.709e+25.",
    },
  },
  carat: {
    tonne: {
      formula: (value) => value / 5e6,
      description: "Divide the mass value by 5,000,000.",
    },
    kilogram: {
      formula: (value) => value / 5000,
      description: "Divide the mass value by 5000.",
    },
    gram: {
      formula: (value) => value / 5,
      description: "Divide the mass value by 5.",
    },
    milligram: {
      formula: (value) => value * 200,
      description: "Multiply the mass value by 200.",
    },
    microgram: {
      formula: (value) => value * 2e5,
      description: "Multiply the mass value by 200,000.",
    },
    imperialTon: {
      formula: (value) => value / 5.08e6,
      description: "Divide the mass value by 5,080,000.",
    },
    usTon: {
      formula: (value) => value / 4.536e6,
      description: "Divide the mass value by 4,536,000.",
    },
    stone: {
      formula: (value) => value / 31750,
      description: "Divide the mass value by 31750.",
    },
    pound: {
      formula: (value) => value / 2267.96,
      description: "Divide the mass value by 2267.96.",
    },
    ounce: {
      formula: (value) => value / 141.748,
      description: "Divide the mass value by 141.748.",
    },
    atomicMassUnit: {
      formula: (value) => value * 1.204e23,
      description: "Multiply the mass value by 1.204e+23.",
    },
  },
  atomicMassUnit: {
    tonne: {
      formula: (value) => value / 6.022e26,
      description: "Divide the mass value by 6.022e+26.",
    },
    kilogram: {
      formula: (value) => value / 6.022e26,
      description: "Divide the mass value by 6.022e+26.",
    },
    gram: {
      formula: (value) => value / 6.022e23,
      description: "Divide the mass value by 6.022e+23.",
    },
    milligram: {
      formula: (value) => value / 6.022e20,
      description: "Divide the mass value by 6.022e+20.",
    },
    microgram: {
      formula: (value) => value / 6.022e17,
      description: "Divide the mass value by 6.022e+17.",
    },
    imperialTon: {
      formula: (value) => value / 6.022e29,
      description: "Divide the mass value by 6.022e+29.",
    },
    usTon: {
      formula: (value) => value / 5.976e29,
      description: "Divide the mass value by 5.976e+29.",
    },
    stone: {
      formula: (value) => value / 3.543e27,
      description: "Divide the mass value by 3.543e+27.",
    },
    pound: {
      formula: (value) => value / 2.732e26,
      description: "Divide the mass value by 2.732e+26.",
    },
    ounce: {
      formula: (value) => value / 1.709e25,
      description: "Divide the mass value by 1.709e+25.",
    },
    carat: {
      formula: (value) => value / 1.204e23,
      description: "Divide the mass value by 1.204e+23.",
    },
  },
};
