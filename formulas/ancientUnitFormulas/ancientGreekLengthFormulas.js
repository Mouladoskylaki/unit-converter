export const ancientGreekLengthFormulas = {
    // Modern Units
    meters: {
      centimeters: {
        formula: (value) => value * 100,
        description: "Multiply the length value by 100.",
      },
      kilometers: {
        formula: (value) => value / 1000,
        description: "Divide the length value by 1000.",
      },
      feet: {
        formula: (value) => value * 3.28084,
        description: "Multiply the length value by 3.28084 to convert to feet.",
      },
      inches: {
        formula: (value) => value * 39.3701,
        description: "Multiply the length value by 39.3701 to convert to inches.",
      },
      yards: {
        formula: (value) => value * 1.09361,
        description: "Multiply the length value by 1.09361 to convert to yards.",
      },
      pous: {
        formula: (value) => value * 3.08642,
        description:
          "Multiply the length value by 3.08642 to convert to pous (Greek foot).",
      },
      orgyia: {
        formula: (value) => value * 0.514403,
        description:
          "Multiply the length value by 0.514403 to convert to orgyia (Greek fathom).",
      },
      stadion: {
        formula: (value) => value * 0.00694444,
        description:
          "Multiply the length value by 0.00694444 to convert to stadion (Greek stadium).",
      },
      plethron: {
        formula: (value) => value * 0.000694444,
        description:
          "Multiply the length value by 0.000694444 to convert to plethron (Greek measure of land).",
      },
      schoenus: {
        formula: (value) => value * 0.000173611,
        description:
          "Multiply the length value by 0.000173611 to convert to schoenus (Greek measure of distance).",
      },
    },
    centimeters: {
      meters: {
        formula: (value) => value / 100,
        description: "Divide the length value by 100.",
      },
      kilometers: {
        formula: (value) => value / 100000,
        description: "Divide the length value by 100,000.",
      },
      feet: {
        formula: (value) => value * 0.0328084,
        description: "Multiply the length value by 0.0328084 to convert to feet.",
      },
      inches: {
        formula: (value) => value * 0.393701,
        description:
          "Multiply the length value by 0.393701 to convert to inches.",
      },
      yards: {
        formula: (value) => value * 0.0109361,
        description:
          "Multiply the length value by 0.0109361 to convert to yards.",
      },
      pous: {
        formula: (value) => value * 0.0308642,
        description:
          "Multiply the length value by 0.0308642 to convert to pous (Greek foot).",
      },
      orgyia: {
        formula: (value) => value * 0.00514403,
        description:
          "Multiply the length value by 0.00514403 to convert to orgyia (Greek fathom).",
      },
      stadion: {
        formula: (value) => value * 0.0000694444,
        description:
          "Multiply the length value by 0.0000694444 to convert to stadion (Greek stadium).",
      },
      plethron: {
        formula: (value) => value * 0.00000694444,
        description:
          "Multiply the length value by 0.00000694444 to convert to plethron (Greek measure of land).",
      },
      schoenus: {
        formula: (value) => value * 0.00000173611,
        description:
          "Multiply the length value by 0.00000173611 to convert to schoenus (Greek measure of distance).",
      },
    },
    kilometers: {
      meters: {
        formula: (value) => value * 1000,
        description: "Multiply the length value by 1000.",
      },
      centimeters: {
        formula: (value) => value * 100000,
        description: "Multiply the length value by 100,000.",
      },
      feet: {
        formula: (value) => value * 3280.84,
        description: "Multiply the length value by 3280.84 to convert to feet.",
      },
      inches: {
        formula: (value) => value * 39370.1,
        description: "Multiply the length value by 39370.1 to convert to inches.",
      },
      yards: {
        formula: (value) => value * 1093.61,
        description: "Multiply the length value by 1093.61 to convert to yards.",
      },
      pous: {
        formula: (value) => value * 3086.42,
        description:
          "Multiply the length value by 3086.42 to convert to pous (Greek foot).",
      },
      orgyia: {
        formula: (value) => value * 514.403,
        description:
          "Multiply the length value by 514.403 to convert to orgyia (Greek fathom).",
      },
      stadion: {
        formula: (value) => value * 6.94444,
        description:
          "Multiply the length value by 6.94444 to convert to stadion (Greek stadium).",
      },
      plethron: {
        formula: (value) => value * 0.694444,
        description:
          "Multiply the length value by 0.694444 to convert to plethron (Greek measure of land).",
      },
      schoenus: {
        formula: (value) => value * 0.173611,
        description:
          "Multiply the length value by 0.173611 to convert to schoenus (Greek measure of distance).",
      },
    },
    feet: {
      meters: {
        formula: (value) => value * 0.3048,
        description: "Multiply the length value by 0.3048 to convert to meters.",
      },
      centimeters: {
        formula: (value) => value * 30.48,
        description:
          "Multiply the length value by 30.48 to convert to centimeters.",
      },
      kilometers: {
        formula: (value) => value * 0.0003048,
        description:
          "Multiply the length value by 0.0003048 to convert to kilometers.",
      },
      inches: {
        formula: (value) => value * 12,
        description: "Multiply the length value by 12 to convert to inches.",
      },
      yards: {
        formula: (value) => value * 0.333333,
        description: "Multiply the length value by 0.333333 to convert to yards.",
      },
      pous: {
        formula: (value) => value * 0.942,
        description:
          "Multiply the length value by 0.942 to convert to pous (Greek foot).",
      },
      orgyia: {
        formula: (value) => value * 0.157,
        description:
          "Multiply the length value by 0.157 to convert to orgyia (Greek fathom).",
      },
      stadion: {
        formula: (value) => value * 0.00212,
        description:
          "Multiply the length value by 0.00212 to convert to stadion (Greek stadium).",
      },
      plethron: {
        formula: (value) => value * 0.000212,
        description:
          "Multiply the length value by 0.000212 to convert to plethron (Greek measure of land).",
      },
      schoenus: {
        formula: (value) => value * 0.000053,
        description:
          "Multiply the length value by 0.000053 to convert to schoenus (Greek measure of distance).",
      },
    },
    inches: {
      meters: {
        formula: (value) => value * 0.0254,
        description: "Multiply the length value by 0.0254 to convert to meters.",
      },
      centimeters: {
        formula: (value) => value * 2.54,
        description:
          "Multiply the length value by 2.54 to convert to centimeters.",
      },
      kilometers: {
        formula: (value) => value * 0.0000254,
        description:
          "Multiply the length value by 0.0000254 to convert to kilometers.",
      },
      feet: {
        formula: (value) => value * 0.0833333,
        description: "Multiply the length value by 0.0833333 to convert to feet.",
      },
      yards: {
        formula: (value) => value * 0.0277778,
        description:
          "Multiply the length value by 0.0277778 to convert to yards.",
      },
      pous: {
        formula: (value) => value * 0.0785,
        description:
          "Multiply the length value by 0.0785 to convert to pous (Greek foot).",
      },
      orgyia: {
        formula: (value) => value * 0.0131,
        description:
          "Multiply the length value by 0.0131 to convert to orgyia (Greek fathom).",
      },
      stadion: {
        formula: (value) => value * 0.000176,
        description:
          "Multiply the length value by 0.000176 to convert to stadion (Greek stadium).",
      },
      plethron: {
        formula: (value) => value * 0.0000176,
        description:
          "Multiply the length value by 0.0000176 to convert to plethron (Greek measure of land).",
      },
      schoenus: {
        formula: (value) => value * 0.0000044,
        description:
          "Multiply the length value by 0.0000044 to convert to schoenus (Greek measure of distance).",
      },
    },
    yards: {
      meters: {
        formula: (value) => value * 0.9144,
        description: "Multiply the length value by 0.9144 to convert to meters.",
      },
      centimeters: {
        formula: (value) => value * 91.44,
        description:
          "Multiply the length value by 91.44 to convert to centimeters.",
      },
      kilometers: {
        formula: (value) => value * 0.0009144,
        description:
          "Multiply the length value by 0.0009144 to convert to kilometers.",
      },
      feet: {
        formula: (value) => value * 3,
        description: "Multiply the length value by 3 to convert to feet.",
      },
      inches: {
        formula: (value) => value * 36,
        description: "Multiply the length value by 36 to convert to inches.",
      },
      pous: {
        formula: (value) => value * 2.827,
        description:
          "Multiply the length value by 2.827 to convert to pous (Greek foot).",
      },
      orgyia: {
        formula: (value) => value * 0.471,
        description:
          "Multiply the length value by 0.471 to convert to orgyia (Greek fathom).",
      },
      stadion: {
        formula: (value) => value * 0.00635,
        description:
          "Multiply the length value by 0.00635 to convert to stadion (Greek stadium).",
      },
      plethron: {
        formula: (value) => value * 0.000635,
        description:
          "Multiply the length value by 0.000635 to convert to plethron (Greek measure of land).",
      },
      schoenus: {
        formula: (value) => value * 0.000159,
        description:
          "Multiply the length value by 0.000159 to convert to schoenus (Greek measure of distance).",
      },
    },
    // Ancient Greek Units
    pous: {
      meters: {
        formula: (value) => value * 0.308642,
        description:
          "Multiply the length value by 0.308642 to convert to meters.",
      },
      centimeters: {
        formula: (value) => value * 30.8642,
        description:
          "Multiply the length value by 30.8642 to convert to centimeters.",
      },
      kilometers: {
        formula: (value) => value * 0.000308642,
        description:
          "Multiply the length value by 0.000308642 to convert to kilometers.",
      },
      feet: {
        formula: (value) => value * 1.012,
        description: "Multiply the length value by 1.012 to convert to feet.",
      },
      inches: {
        formula: (value) => value * 12.144,
        description: "Multiply the length value by 12.144 to convert to inches.",
      },
      yards: {
        formula: (value) => value * 0.337,
        description: "Multiply the length value by 0.337 to convert to yards.",
      },
      orgyia: {
        formula: (value) => value * 0.166667,
        description:
          "Multiply the length value by 0.166667 to convert to orgyia (Greek fathom).",
      },
      stadion: {
        formula: (value) => value * 0.00225,
        description:
          "Multiply the length value by 0.00225 to convert to stadion (Greek stadium).",
      },
      plethron: {
        formula: (value) => value * 0.000225,
        description:
          "Multiply the length value by 0.000225 to convert to plethron (Greek measure of land).",
      },
      schoenus: {
        formula: (value) => value * 0.00005625,
        description:
          "Multiply the length value by 0.00005625 to convert to schoenus (Greek measure of distance).",
      },
    },
    orgyia: {
      meters: {
        formula: (value) => value * 1.85185,
        description: "Multiply the length value by 1.85185 to convert to meters.",
      },
      centimeters: {
        formula: (value) => value * 185.185,
        description:
          "Multiply the length value by 185.185 to convert to centimeters.",
      },
      kilometers: {
        formula: (value) => value * 0.00185185,
        description:
          "Multiply the length value by 0.00185185 to convert to kilometers.",
      },
      feet: {
        formula: (value) => value * 6.076,
        description: "Multiply the length value by 6.076 to convert to feet.",
      },
      inches: {
        formula: (value) => value * 72.91,
        description: "Multiply the length value by 72.91 to convert to inches.",
      },
      yards: {
        formula: (value) => value * 2.025,
        description: "Multiply the length value by 2.025 to convert to yards.",
      },
      pous: {
        formula: (value) => value * 6,
        description:
          "Multiply the length value by 6 to convert to pous (Greek foot).",
      },
      stadion: {
        formula: (value) => value * 0.0135,
        description:
          "Multiply the length value by 0.0135 to convert to stadion (Greek stadium).",
      },
      plethron: {
        formula: (value) => value * 0.00135,
        description:
          "Multiply the length value by 0.00135 to convert to plethron (Greek measure of land).",
      },
      schoenus: {
        formula: (value) => value * 0.0003375,
        description:
          "Multiply the length value by 0.0003375 to convert to schoenus (Greek measure of distance).",
      },
    },
    stadion: {
      meters: {
        formula: (value) => value * 185.185,
        description: "Multiply the length value by 185.185 to convert to meters.",
      },
      centimeters: {
        formula: (value) => value * 18518.5,
        description:
          "Multiply the length value by 18518.5 to convert to centimeters.",
      },
      kilometers: {
        formula: (value) => value * 0.185185,
        description:
          "Multiply the length value by 0.185185 to convert to kilometers.",
      },
      feet: {
        formula: (value) => value * 607.6,
        description: "Multiply the length value by 607.6 to convert to feet.",
      },
      inches: {
        formula: (value) => value * 7291,
        description: "Multiply the length value by 7291 to convert to inches.",
      },
      yards: {
        formula: (value) => value * 202.5,
        description: "Multiply the length value by 202.5 to convert to yards.",
      },
      pous: {
        formula: (value) => value * 600,
        description:
          "Multiply the length value by 600 to convert to pous (Greek foot).",
      },
      orgyia: {
        formula: (value) => value * 100,
        description:
          "Multiply the length value by 100 to convert to orgyia (Greek fathom).",
      },
      plethron: {
        formula: (value) => value * 0.1,
        description:
          "Multiply the length value by 0.1 to convert to plethron (Greek measure of land).",
      },
      schoenus: {
        formula: (value) => value * 0.025,
        description:
          "Multiply the length value by 0.025 to convert to schoenus (Greek measure of distance).",
      },
    },
    plethron: {
      meters: {
        formula: (value) => value * 1851.85,
        description: "Multiply the length value by 1851.85 to convert to meters.",
      },
      centimeters: {
        formula: (value) => value * 185185,
        description:
          "Multiply the length value by 185185 to convert to centimeters.",
      },
      kilometers: {
        formula: (value) => value * 1.85185,
        description:
          "Multiply the length value by 1.85185 to convert to kilometers.",
      },
      feet: {
        formula: (value) => value * 6076,
        description: "Multiply the length value by 6076 to convert to feet.",
      },
      inches: {
        formula: (value) => value * 72910,
        description: "Multiply the length value by 72910 to convert to inches.",
      },
      yards: {
        formula: (value) => value * 2025,
        description: "Multiply the length value by 2025 to convert to yards.",
      },
      pous: {
        formula: (value) => value * 6000,
        description:
          "Multiply the length value by 6000 to convert to pous (Greek foot).",
      },
      orgyia: {
        formula: (value) => value * 1000,
        description:
          "Multiply the length value by 1000 to convert to orgyia (Greek fathom).",
      },
      stadion: {
        formula: (value) => value * 10,
        description:
          "Multiply the length value by 10 to convert to stadion (Greek stadium).",
      },
      schoenus: {
        formula: (value) => value * 0.25,
        description:
          "Multiply the length value by 0.25 to convert to schoenus (Greek measure of distance).",
      },
    },
    schoenus: {
      meters: {
        formula: (value) => value * 74074,
        description: "Multiply the length value by 74074 to convert to meters.",
      },
      centimeters: {
        formula: (value) => value * 7407400,
        description:
          "Multiply the length value by 7407400 to convert to centimeters.",
      },
      kilometers: {
        formula: (value) => value * 74.074,
        description:
          "Multiply the length value by 74.074 to convert to kilometers.",
      },
      feet: {
        formula: (value) => value * 243040,
        description: "Multiply the length value by 243040 to convert to feet.",
      },
      inches: {
        formula: (value) => value * 2916480,
        description: "Multiply the length value by 2916480 to convert to inches.",
      },
      yards: {
        formula: (value) => value * 81013.3,
        description: "Multiply the length value by 81013.3 to convert to yards.",
      },
      pous: {
        formula: (value) => value * 240000,
        description:
          "Multiply the length value by 240000 to convert to pous (Greek foot).",
      },
      orgyia: {
        formula: (value) => value * 40000,
        description:
          "Multiply the length value by 40000 to convert to orgyia (Greek fathom).",
      },
      stadion: {
        formula: (value) => value * 400,
        description:
          "Multiply the length value by 400 to convert to stadion (Greek stadium).",
      },
      plethron: {
        formula: (value) => value * 4,
        description:
          "Multiply the length value by 4 to convert to plethron (Greek measure of land).",
      },
    },
  };
  