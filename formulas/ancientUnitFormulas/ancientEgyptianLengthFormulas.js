export const ancientEgyptianLengthFormulas = {
  digit: {
    palm: {
      formula: (value) => value / 4,
      description: "Divide the length value by 4 to convert to palms.",
    },
    cubit: {
      formula: (value) => value / 28,
      description: "Divide the length value by 28 to convert to cubits.",
    },
    royalCubit: {
      formula: (value) => value / 28.2,
      description:
        "Divide the length value by 28.2 to convert to royal cubits.",
    },
    khet: {
      formula: (value) => (value * 1.875) / 5230,
      description: "Multiply by 1.875 then divide by 5230 to convert to khet.",
    },
    iteru: {
      formula: (value) => (value * 1.875) / 1050000,
      description:
        "Multiply by 1.875 then divide by 1,050,000 to convert to iteru.",
    },
    centimeter: {
      formula: (value) => value * 1.875,
      description:
        "Multiply the length value by 1.875 to convert to centimeters.",
    },
    meter: {
      formula: (value) => (value * 1.875) / 100,
      description: "Multiply by 1.875 then divide by 100 to convert to meters.",
    },
    kilometer: {
      formula: (value) => (value * 1.875) / 100000,
      description:
        "Multiply by 1.875 then divide by 100,000 to convert to kilometers.",
    },
    inch: {
      formula: (value) => (value * 1.875) / 2.54,
      description:
        "Multiply by 1.875 then divide by 2.54 to convert to inches.",
    },
    foot: {
      formula: (value) => (value * 1.875) / 30.48,
      description: "Multiply by 1.875 then divide by 30.48 to convert to feet.",
    },
    yard: {
      formula: (value) => (value * 1.875) / 91.44,
      description:
        "Multiply by 1.875 then divide by 91.44 to convert to yards.",
    },
  },
  palm: {
    digit: {
      formula: (value) => value * 4,
      description: "Multiply the length value by 4 to convert to digits.",
    },
    cubit: {
      formula: (value) => value / 7,
      description: "Divide the length value by 7 to convert to cubits.",
    },
    royalCubit: {
      formula: (value) => value / 7.05,
      description:
        "Divide the length value by 7.05 to convert to royal cubits.",
    },
    khet: {
      formula: (value) => (value * 7.5) / 5230,
      description: "Multiply by 7.5 then divide by 5230 to convert to khet.",
    },
    iteru: {
      formula: (value) => (value * 7.5) / 1050000,
      description:
        "Multiply by 7.5 then divide by 1,050,000 to convert to iteru.",
    },
    centimeter: {
      formula: (value) => value * 7.5,
      description:
        "Multiply the length value by 7.5 to convert to centimeters.",
    },
    meter: {
      formula: (value) => (value * 7.5) / 100,
      description: "Multiply by 7.5 then divide by 100 to convert to meters.",
    },
    kilometer: {
      formula: (value) => (value * 7.5) / 100000,
      description:
        "Multiply by 7.5 then divide by 100,000 to convert to kilometers.",
    },
    inch: {
      formula: (value) => (value * 7.5) / 2.54,
      description: "Multiply by 7.5 then divide by 2.54 to convert to inches.",
    },
    foot: {
      formula: (value) => (value * 7.5) / 30.48,
      description: "Multiply by 7.5 then divide by 30.48 to convert to feet.",
    },
    yard: {
      formula: (value) => (value * 7.5) / 91.44,
      description: "Multiply by 7.5 then divide by 91.44 to convert to yards.",
    },
  },
  cubit: {
    digit: {
      formula: (value) => value * 28,
      description: "Multiply the length value by 28 to convert to digits.",
    },
    palm: {
      formula: (value) => value * 7,
      description: "Multiply the length value by 7 to convert to palms.",
    },
    royalCubit: {
      formula: (value) => value * (52.3 / 52.9),
      description: "Multiply by 52.3/52.9 to convert to royal cubits.",
    },
    khet: {
      formula: (value) => value / 100,
      description: "Divide the length value by 100 to convert to khet.",
    },
    iteru: {
      formula: (value) => (value * 52.3) / 1050000,
      description:
        "Multiply by 52.3 then divide by 1,050,000 to convert to iteru.",
    },
    centimeter: {
      formula: (value) => value * 52.3,
      description:
        "Multiply the length value by 52.3 to convert to centimeters.",
    },
    meter: {
      formula: (value) => (value * 52.3) / 100,
      description: "Multiply by 52.3 then divide by 100 to convert to meters.",
    },
    kilometer: {
      formula: (value) => (value * 52.3) / 100000,
      description:
        "Multiply by 52.3 then divide by 100,000 to convert to kilometers.",
    },
    inch: {
      formula: (value) => (value * 52.3) / 2.54,
      description: "Multiply by 52.3 then divide by 2.54 to convert to inches.",
    },
    foot: {
      formula: (value) => (value * 52.3) / 30.48,
      description: "Multiply by 52.3 then divide by 30.48 to convert to feet.",
    },
    yard: {
      formula: (value) => (value * 52.3) / 91.44,
      description: "Multiply by 52.3 then divide by 91.44 to convert to yards.",
    },
  },
  royalCubit: {
    digit: {
      formula: (value) => value * 28.2,
      description: "Multiply the length value by 28.2 to convert to digits.",
    },
    palm: {
      formula: (value) => value * 7.05,
      description: "Multiply the length value by 7.05 to convert to palms.",
    },
    cubit: {
      formula: (value) => value * (52.9 / 52.3),
      description: "Multiply by 52.9/52.3 to convert to cubits.",
    },
    khet: {
      formula: (value) => value / 100,
      description: "Divide the length value by 100 to convert to khet.",
    },
    iteru: {
      formula: (value) => (value * 52.9) / 1050000,
      description:
        "Multiply by 52.9 then divide by 1,050,000 to convert to iteru.",
    },
    centimeter: {
      formula: (value) => value * 52.9,
      description:
        "Multiply the length value by 52.9 to convert to centimeters.",
    },
    meter: {
      formula: (value) => (value * 52.9) / 100,
      description: "Multiply by 52.9 then divide by 100 to convert to meters.",
    },
    kilometer: {
      formula: (value) => (value * 52.9) / 100000,
      description:
        "Multiply by 52.9 then divide by 100,000 to convert to kilometers.",
    },
    inch: {
      formula: (value) => (value * 52.9) / 2.54,
      description: "Multiply by 52.9 then divide by 2.54 to convert to inches.",
    },
    foot: {
      formula: (value) => (value * 52.9) / 30.48,
      description: "Multiply by 52.9 then divide by 30.48 to convert to feet.",
    },
    yard: {
      formula: (value) => (value * 52.9) / 91.44,
      description: "Multiply by 52.9 then divide by 91.44 to convert to yards.",
    },
  },
  khet: {
    digit: {
      formula: (value) => (value * 5230) / 1.875,
      description:
        "Multiply by 5230 then divide by 1.875 to convert to digits.",
    },
    palm: {
      formula: (value) => (value * 5230) / 7.5,
      description: "Multiply by 5230 then divide by 7.5 to convert to palms.",
    },
    cubit: {
      formula: (value) => value * 100,
      description: "Multiply the length value by 100 to convert to cubits.",
    },
    royalCubit: {
      formula: (value) => value * 100,
      description:
        "Multiply the length value by 100 to convert to royal cubits.",
    },
    iteru: {
      formula: (value) => value / 20,
      description: "Divide the length value by 20 to convert to iteru.",
    },
    centimeter: {
      formula: (value) => value * 5230,
      description:
        "Multiply the length value by 5230 to convert to centimeters.",
    },
    meter: {
      formula: (value) => value * 52.3,
      description: "Multiply the length value by 52.3 to convert to meters.",
    },
    kilometer: {
      formula: (value) => value * 0.0523,
      description:
        "Multiply the length value by 0.0523 to convert to kilometers.",
    },
    inch: {
      formula: (value) => (value * 5230) / 2.54,
      description: "Multiply by 5230 then divide by 2.54 to convert to inches.",
    },
    foot: {
      formula: (value) => (value * 5230) / 30.48,
      description: "Multiply by 5230 then divide by 30.48 to convert to feet.",
    },
    yard: {
      formula: (value) => (value * 5230) / 91.44,
      description: "Multiply by 5230 then divide by 91.44 to convert to yards.",
    },
  },
  iteru: {
    digit: {
      formula: (value) => (value * 1050000) / 1.875,
      description:
        "Multiply by 1,050,000 then divide by 1.875 to convert to digits.",
    },
    palm: {
      formula: (value) => (value * 1050000) / 7.5,
      description:
        "Multiply by 1,050,000 then divide by 7.5 to convert to palms.",
    },
    cubit: {
      formula: (value) => (value * 1050000) / 52.3,
      description:
        "Multiply by 1,050,000 then divide by 52.3 to convert to cubits.",
    },
    royalCubit: {
      formula: (value) => (value * 1050000) / 52.9,
      description:
        "Multiply by 1,050,000 then divide by 52.9 to convert to royal cubits.",
    },
    khet: {
      formula: (value) => value * 20,
      description: "Multiply the length value by 20 to convert to khet.",
    },
    centimeter: {
      formula: (value) => value * 1050000,
      description:
        "Multiply the length value by 1,050,000 to convert to centimeters.",
    },
    meter: {
      formula: (value) => value * 10500,
      description: "Multiply the length value by 10,500 to convert to meters.",
    },
    kilometer: {
      formula: (value) => value * 10.5,
      description:
        "Multiply the length value by 10.5 to convert to kilometers.",
    },
    inch: {
      formula: (value) => (value * 1050000) / 2.54,
      description:
        "Multiply by 1,050,000 then divide by 2.54 to convert to inches.",
    },
    foot: {
      formula: (value) => (value * 1050000) / 30.48,
      description:
        "Multiply by 1,050,000 then divide by 30.48 to convert to feet.",
    },
    yard: {
      formula: (value) => (value * 1050000) / 91.44,
      description:
        "Multiply by 1,050,000 then divide by 91.44 to convert to yards.",
    },
  },
  centimeter: {
    digit: {
      formula: (value) => value / 1.875,
      description: "Divide the length value by 1.875 to convert to digits.",
    },
    palm: {
      formula: (value) => value / 7.5,
      description: "Divide the length value by 7.5 to convert to palms.",
    },
    cubit: {
      formula: (value) => value / 52.3,
      description: "Divide the length value by 52.3 to convert to cubits.",
    },
    royalCubit: {
      formula: (value) => value / 52.9,
      description:
        "Divide the length value by 52.9 to convert to royal cubits.",
    },
    khet: {
      formula: (value) => value / 5230,
      description: "Divide the length value by 5230 to convert to khet.",
    },
    iteru: {
      formula: (value) => value / 1050000,
      description: "Divide the length value by 1,050,000 to convert to iteru.",
    },
    meter: {
      formula: (value) => value / 100,
      description: "Divide the length value by 100 to convert to meters.",
    },
    kilometer: {
      formula: (value) => value / 100000,
      description:
        "Divide the length value by 100,000 to convert to kilometers.",
    },
    inch: {
      formula: (value) => value / 2.54,
      description: "Divide the length value by 2.54 to convert to inches.",
    },
    foot: {
      formula: (value) => value / 30.48,
      description: "Divide the length value by 30.48 to convert to feet.",
    },
    yard: {
      formula: (value) => value / 91.44,
      description: "Divide the length value by 91.44 to convert to yards.",
    },
  },
  meter: {
    digit: {
      formula: (value) => (value * 100) / 1.875,
      description: "Multiply by 100 then divide by 1.875 to convert to digits.",
    },
    palm: {
      formula: (value) => (value * 100) / 7.5,
      description: "Multiply by 100 then divide by 7.5 to convert to palms.",
    },
    cubit: {
      formula: (value) => (value * 100) / 52.3,
      description: "Multiply by 100 then divide by 52.3 to convert to cubits.",
    },
    royalCubit: {
      formula: (value) => (value * 100) / 52.9,
      description:
        "Multiply by 100 then divide by 52.9 to convert to royal cubits.",
    },
    khet: {
      formula: (value) => (value * 100) / 5230,
      description: "Multiply by 100 then divide by 5230 to convert to khet.",
    },
    iteru: {
      formula: (value) => (value * 100) / 1050000,
      description:
        "Multiply by 100 then divide by 1,050,000 to convert to iteru.",
    },
    centimeter: {
      formula: (value) => value * 100,
      description:
        "Multiply the length value by 100 to convert to centimeters.",
    },
    kilometer: {
      formula: (value) => value / 1000,
      description: "Divide the length value by 1000 to convert to kilometers.",
    },
    inch: {
      formula: (value) => (value * 100) / 2.54,
      description: "Multiply by 100 then divide by 2.54 to convert to inches.",
    },
    foot: {
      formula: (value) => (value * 100) / 30.48,
      description: "Multiply by 100 then divide by 30.48 to convert to feet.",
    },
    yard: {
      formula: (value) => (value * 100) / 91.44,
      description: "Multiply by 100 then divide by 91.44 to convert to yards.",
    },
  },

  kilometer: {
    digit: {
      formula: (value) => (value * 100000) / 1.875,
      description:
        "Multiply by 100,000 then divide by 1.875 to convert to digits.",
    },
    palm: {
      formula: (value) => (value * 100000) / 7.5,
      description:
        "Multiply by 100,000 then divide by 7.5 to convert to palms.",
    },
    cubit: {
      formula: (value) => (value * 100000) / 52.3,
      description:
        "Multiply by 100,000 then divide by 52.3 to convert to cubits.",
    },
    royalCubit: {
      formula: (value) => (value * 100000) / 52.9,
      description:
        "Multiply by 100,000 then divide by 52.9 to convert to royal cubits.",
    },
    khet: {
      formula: (value) => value * 2000,
      description: "Multiply the length value by 2,000 to convert to khet.",
    },
    centimeter: {
      formula: (value) => value * 100000,
      description:
        "Multiply the length value by 100,000 to convert to centimeters.",
    },
    meter: {
      formula: (value) => value * 1000,
      description: "Multiply the length value by 1,000 to convert to meters.",
    },
    kilometer: {
      formula: (value) => value * 1,
      description: "The value is already in kilometers.",
    },
    inch: {
      formula: (value) => (value * 100000) / 2.54,
      description:
        "Multiply by 100,000 then divide by 2.54 to convert to inches.",
    },
    foot: {
      formula: (value) => (value * 100000) / 30.48,
      description:
        "Multiply by 100,000 then divide by 30.48 to convert to feet.",
    },
    yard: {
      formula: (value) => (value * 100000) / 91.44,
      description:
        "Multiply by 100,000 then divide by 91.44 to convert to yards.",
    },
  },
  inch: {
    digit: {
      formula: (value) => (value * 100000) / 1.875,
      description:
        "Multiply by 100,000 then divide by 1.875 to convert to digits.",
    },
    palm: {
      formula: (value) => (value * 100000) / 7.5,
      description:
        "Multiply by 100,000 then divide by 7.5 to convert to palms.",
    },
    cubit: {
      formula: (value) => (value * 100000) / 52.3,
      description:
        "Multiply by 100,000 then divide by 52.3 to convert to cubits.",
    },
    royalCubit: {
      formula: (value) => (value * 100000) / 52.9,
      description:
        "Multiply by 100,000 then divide by 52.9 to convert to royal cubits.",
    },
    khet: {
      formula: (value) => value * 2000,
      description: "Multiply the length value by 2,000 to convert to khet.",
    },
    centimeter: {
      formula: (value) => (value * 100000) / 2.54,
      description:
        "Multiply the length value by 100,000 then divide by 2.54 to convert to centimeters.",
    },
    meter: {
      formula: (value) => (value * 100000) / 2.54 / 100,
      description:
        "Multiply the length value by 100,000, divide by 2.54, then divide by 100 to convert to meters.",
    },
    kilometer: {
      formula: (value) => (value * 100000) / 2.54 / 1000,
      description:
        "Multiply the length value by 100,000, divide by 2.54, then divide by 1,000 to convert to kilometers.",
    },
    inch: {
      formula: (value) => value * 1,
      description: "The value is already in inches.",
    },
    foot: {
      formula: (value) => value / 12,
      description: "Divide the length value by 12 to convert to feet.",
    },
    yard: {
      formula: (value) => value / 36,
      description: "Divide the length value by 36 to convert to yards.",
    },
  },
  foot: {
    digit: {
      formula: (value) => (value * 100000) / 1.875,
      description:
        "Multiply by 100,000 then divide by 1.875 to convert to digits.",
    },
    palm: {
      formula: (value) => (value * 100000) / 7.5,
      description:
        "Multiply by 100,000 then divide by 7.5 to convert to palms.",
    },
    cubit: {
      formula: (value) => (value * 100000) / 52.3,
      description:
        "Multiply by 100,000 then divide by 52.3 to convert to cubits.",
    },
    royalCubit: {
      formula: (value) => (value * 100000) / 52.9,
      description:
        "Multiply by 100,000 then divide by 52.9 to convert to royal cubits.",
    },
    khet: {
      formula: (value) => value * 2000,
      description: "Multiply the length value by 2,000 to convert to khet.",
    },
    centimeter: {
      formula: (value) => (value * 100000) / 30.48,
      description:
        "Multiply the length value by 100,000 then divide by 30.48 to convert to centimeters.",
    },
    meter: {
      formula: (value) => (value * 100000) / 30.48 / 100,
      description:
        "Multiply the length value by 100,000, divide by 30.48, then divide by 100 to convert to meters.",
    },
    kilometer: {
      formula: (value) => (value * 100000) / 30.48 / 1000,
      description:
        "Multiply the length value by 100,000, divide by 30.48, then divide by 1,000 to convert to kilometers.",
    },
    inch: {
      formula: (value) => (value * 100000) / 30.48 / 2.54,
      description:
        "Multiply the length value by 100,000, divide by 30.48, then divide by 2.54 to convert to inches.",
    },
    foot: {
      formula: (value) => value * 1,
      description: "The value is already in feet.",
    },
    yard: {
      formula: (value) => value / 3,
      description: "Divide the length value by 3 to convert to yards.",
    },
  },
  yard: {
    digit: {
      formula: (value) => (value * 100000) / 1.875,
      description:
        "Multiply by 100,000 then divide by 1.875 to convert to digits.",
    },
    palm: {
      formula: (value) => (value * 100000) / 7.5,
      description:
        "Multiply by 100,000 then divide by 7.5 to convert to palms.",
    },
    cubit: {
      formula: (value) => (value * 100000) / 52.3,
      description:
        "Multiply by 100,000 then divide by 52.3 to convert to cubits.",
    },
    royalCubit: {
      formula: (value) => (value * 100000) / 52.9,
      description:
        "Multiply by 100,000 then divide by 52.9 to convert to royal cubits.",
    },
    khet: {
      formula: (value) => value * 2000,
      description: "Multiply the length value by 2,000 to convert to khet.",
    },
    centimeter: {
      formula: (value) => (value * 100000) / 91.44,
      description:
        "Multiply the length value by 100,000 then divide by 91.44 to convert to centimeters.",
    },
    meter: {
      formula: (value) => (value * 100000) / 91.44 / 100,
      description:
        "Multiply the length value by 100,000, divide by 91.44, then divide by 100 to convert to meters.",
    },
    kilometer: {
      formula: (value) => (value * 100000) / 91.44 / 1000,
      description:
        "Multiply the length value by 100,000, divide by 91.44, then divide by 1,000 to convert to kilometers.",
    },
    inch: {
      formula: (value) => (value * 100000) / 91.44 / 2.54,
      description:
        "Multiply the length value by 100,000, divide by 91.44, then divide by 2.54 to convert to inches.",
    },
    foot: {
      formula: (value) => value * 3,
      description: "Multiply the length value by 3 to convert to feet.",
    },
    yard: {
      formula: (value) => value * 1,
      description: "The value is already in yards.",
    },
  },
};
