// temperatureFormulas.js

export const temperatureFormulas = {
  "celsius [°C]": {
    "fahrenheit [°F]": {
      formula: (value) => (value * 9/5) + 32,
      description: "Multiply the temperature by 9/5 and add 32.",
    },
    "kelvin [K]": {
      formula: (value) => value + 273.15,
      description: "Add 273.15 to the temperature.",
    },
    "rankine [°R]": {
      formula: (value) => (value + 273.15) * 9/5,
      description: "Add 273.15 to the temperature and multiply by 9/5.",
    },
    "reaumur [°Ré]": {
      formula: (value) => value * 4/5,
      description: "Multiply the temperature by 4/5.",
    },
    "delisle [°De]": {
      formula: (value) => (100 - value) * 3/2,
      description: "Subtract the temperature from 100 and multiply by 3/2.",
    },
    "newton [°N]": {
      formula: (value) => value * 33/100,
      description: "Multiply the temperature by 33/100.",
    },
    "romer [°Rø]": {
      formula: (value) => value * 21/40 + 7.5,
      description: "Multiply the temperature by 21/40 and add 7.5.",
    },
    "gasMark [GM]": {
      formula: (value) => (value - 121) / 14,
      description: "Subtract 121 from the temperature and divide by 14.",
    },
    "its90 [ITS-90]": {
      formula: (value) => value,
      description: "No conversion needed; ITS-90 is based on Celsius.",
    },
  },
  "fahrenheit [°F]": {
    "celsius [°C]": {
      formula: (value) => (value - 32) * 5/9,
      description: "Subtract 32 from the temperature and multiply by 5/9.",
    },
    "kelvin [K]": {
      formula: (value) => (value - 32) * 5/9 + 273.15,
      description: "Subtract 32 from the temperature, multiply by 5/9, and add 273.15.",
    },
    "rankine [°R]": {
      formula: (value) => value + 459.67,
      description: "Add 459.67 to the temperature.",
    },
    "reaumur [°Ré]": {
      formula: (value) => (value - 32) * 4/9,
      description: "Subtract 32 from the temperature and multiply by 4/9.",
    },
    "delisle [°De]": {
      formula: (value) => (212 - value) * 5/6,
      description: "Subtract the temperature from 212 and multiply by 5/6.",
    },
    "newton [°N]": {
      formula: (value) => (value - 32) * 11/60,
      description: "Subtract 32 from the temperature and multiply by 11/60.",
    },
    "romer [°Rø]": {
      formula: (value) => (value - 32) * 7/24 + 7.5,
      description: "Subtract 32 from the temperature, multiply by 7/24, and add 7.5.",
    },
    "gasMark [GM]": {
      formula: (value) => (value - 32) * 5/9 / 14 + 1,
      description: "Convert to Celsius, divide by 14, and add 1.",
    },
    "its90 [ITS-90]": {
      formula: (value) => (value - 32) * 5/9,
      description: "Convert to Celsius (ITS-90 is based on Celsius).",
    },
  },
  "kelvin [K]": {
    "celsius [°C]": {
      formula: (value) => value - 273.15,
      description: "Subtract 273.15 from the temperature.",
    },
    "fahrenheit [°F]": {
      formula: (value) => (value - 273.15) * 9/5 + 32,
      description: "Subtract 273.15 from the temperature, multiply by 9/5, and add 32.",
    },
    "rankine [°R]": {
      formula: (value) => value * 9/5,
      description: "Multiply the temperature by 9/5.",
    },
    "reaumur [°Ré]": {
      formula: (value) => (value - 273.15) * 4/5,
      description: "Subtract 273.15 from the temperature and multiply by 4/5.",
    },
    "delisle [°De]": {
      formula: (value) => (373.15 - value) * 3/2,
      description: "Subtract the temperature from 373.15 and multiply by 3/2.",
    },
    "newton [°N]": {
      formula: (value) => (value - 273.15) * 33/100,
      description: "Subtract 273.15 from the temperature and multiply by 33/100.",
    },
    "romer [°Rø]": {
      formula: (value) => (value - 273.15) * 21/40 + 7.5,
      description: "Subtract 273.15 from the temperature, multiply by 21/40, and add 7.5.",
    },
    "gasMark [GM]": {
      formula: (value) => (value - 273.15 - 121) / 14,
      description: "Convert to Celsius, subtract 121, and divide by 14.",
    },
    "its90 [ITS-90]": {
      formula: (value) => value - 273.15,
      description: "Convert to Celsius (ITS-90 is based on Celsius).",
    },
  },
  "rankine [°R]": {
    "celsius [°C]": {
      formula: (value) => (value - 491.67) * 5/9,
      description: "Subtract 491.67 from the temperature and multiply by 5/9.",
    },
    "fahrenheit [°F]": {
      formula: (value) => value - 459.67,
      description: "Subtract 459.67 from the temperature.",
    },
    "kelvin [K]": {
      formula: (value) => value * 5/9,
      description: "Multiply the temperature by 5/9.",
    },
    "reaumur [°Ré]": {
      formula: (value) => (value - 491.67) * 4/9,
      description: "Subtract 491.67 from the temperature and multiply by 4/9.",
    },
    "delisle [°De]": {
      formula: (value) => (671.67 - value) * 5/6,
      description: "Subtract the temperature from 671.67 and multiply by 5/6.",
    },
    "newton [°N]": {
      formula: (value) => (value - 491.67) * 11/60,
      description: "Subtract 491.67 from the temperature and multiply by 11/60.",
    },
    "romer [°Rø]": {
      formula: (value) => (value - 491.67) * 7/24 + 7.5,
      description: "Subtract 491.67 from the temperature, multiply by 7/24, and add 7.5.",
    },
    "gasMark [GM]": {
      formula: (value) => (value - 491.67 - 121) * 5/9 / 14 + 1,
      description: "Convert to Celsius, subtract 121, divide by 14, and add 1.",
    },
    "its90 [ITS-90]": {
      formula: (value) => (value - 491.67) * 5/9,
      description: "Convert to Celsius (ITS-90 is based on Celsius).",
    },
  },
  "reaumur [°Ré]": {
    "celsius [°C]": {
      formula: (value) => value * 5/4,
      description: "Multiply the temperature by 5/4.",
    },
    "fahrenheit [°F]": {
      formula: (value) => value * 9/4 + 32,
      description: "Multiply the temperature by 9/4 and add 32.",
    },
    "kelvin [K]": {
      formula: (value) => value * 5/4 + 273.15,
      description: "Multiply the temperature by 5/4 and add 273.15.",
    },
    "rankine [°R]": {
      formula: (value) => value * 9/4 + 491.67,
      description: "Multiply the temperature by 9/4 and add 491.67.",
    },
    "delisle [°De]": {
      formula: (value) => (80 - value) * 15/8,
      description: "Subtract the temperature from 80 and multiply by 15/8.",
    },
    "newton [°N]": {
      formula: (value) => value * 33/80,
      description: "Multiply the temperature by 33/80.",
    },
    "romer [°Rø]": {
      formula: (value) => value * 21/32 + 7.5,
      description: "Multiply the temperature by 21/32 and add 7.5.",
    },
    "gasMark [GM]": {
      formula: (value) => (value * 5/4 - 121) / 14,
      description: "Convert to Celsius, subtract 121, and divide by 14.",
    },
    "its90 [ITS-90]": {
      formula: (value) => value * 5/4,
      description: "Convert to Celsius (ITS-90 is based on Celsius).",
    },
  },
  "delisle [°De]": {
    "celsius [°C]": {
      formula: (value) => 100 - value * 2/3,
      description: "Subtract the temperature multiplied by 2/3 from 100.",
    },
    "fahrenheit [°F]": {
      formula: (value) => 212 - value * 6/5,
      description: "Subtract the temperature multiplied by 6/5 from 212.",
    },
    "kelvin [K]": {
      formula: (value) => 373.15 - value * 2/3,
      description: "Subtract the temperature multiplied by 2/3 from 373.15.",
    },
    "rankine [°R]": {
      formula: (value) => 671.67 - value * 6/5,
      description: "Subtract the temperature multiplied by 6/5 from 671.67.",
    },
    "reaumur [°Ré]": {
      formula: (value) => 80 - value * 8/15,
      description: "Subtract the temperature multiplied by 8/15 from 80.",
    },
    "newton [°N]": {
      formula: (value) => 33 - value * 11/50,
      description: "Subtract the temperature multiplied by 11/50 from 33.",
    },
    "romer [°Rø]": {
      formula: (value) => 60 - value * 7/20,
      description: "Subtract the temperature multiplied by 7/20 from 60.",
    },
    "gasMark [GM]": {
      formula: (value) => (100 - value * 2/3 - 121) / 14,
      description: "Convert to Celsius, subtract 121, and divide by 14.",
    },
    "its90 [ITS-90]": {
      formula: (value) => 100 - value * 2/3,
      description: "Convert to Celsius (ITS-90 is based on Celsius).",
    },
  },
  "newton [°N]": {
    "celsius [°C]": {
      formula: (value) => value * 100/33,
      description: "Multiply the temperature by 100/33.",
    },
    "fahrenheit [°F]": {
      formula: (value) => value * 60/11 + 32,
      description: "Multiply the temperature by 60/11 and add 32.",
    },
    "kelvin [K]": {
      formula: (value) => value * 100/33 + 273.15,
      description: "Multiply the temperature by 100/33 and add 273.15.",
    },
    "rankine [°R]": {
      formula: (value) => value * 60/11 + 491.67,
      description: "Multiply the temperature by 60/11 and add 491.67.",
    },
    "reaumur [°Ré]": {
      formula: (value) => value * 80/33,
      description: "Multiply the temperature by 80/33.",
    },
    "delisle [°De]": {
      formula: (value) => (33 - value) * 50/11,
      description: "Subtract the temperature from 33 and multiply by 50/11.",
    },
    "romer [°Rø]": {
      formula: (value) => value * 35/22 + 7.5,
      description: "Multiply the temperature by 35/22 and add 7.5.",
    },
    "gasMark [GM]": {
      formula: (value) => (value * 100/33 - 121) / 14,
      description: "Convert to Celsius, subtract 121, and divide by 14.",
    },
    "its90 [ITS-90]": {
      formula: (value) => value * 100/33,
      description: "Convert to Celsius (ITS-90 is based on Celsius).",
    },
  },
  "romer [°Rø]": {
    "celsius [°C]": {
      formula: (value) => (value - 7.5) * 40/21,
      description: "Subtract 7.5 from the temperature and multiply by 40/21.",
    },
    "fahrenheit [°F]": {
      formula: (value) => (value - 7.5) * 24/7 + 32,
      description: "Subtract 7.5 from the temperature, multiply by 24/7, and add 32.",
    },
    "kelvin [K]": {
      formula: (value) => (value - 7.5) * 40/21 + 273.15,
      description: "Subtract 7.5 from the temperature, multiply by 40/21, and add 273.15.",
    },
    "rankine [°R]": {
      formula: (value) => (value - 7.5) * 24/7 + 491.67,
      description: "Subtract 7.5 from the temperature, multiply by 24/7, and add 491.67.",
    },
    "reaumur [°Ré]": {
      formula: (value) => (value - 7.5) * 32/21,
      description: "Subtract 7.5 from the temperature and multiply by 32/21.",
    },
    "delisle [°De]": {
      formula: (value) => (60 - value) * 20/7,
      description: "Subtract the temperature from 60 and multiply by 20/7.",
    },
    "newton [°N]": {
      formula: (value) => (value - 7.5) * 22/35,
      description: "Subtract 7.5 from the temperature and multiply by 22/35.",
    },
    "gasMark [GM]": {
      formula: (value) => ((value - 7.5) * 40/21 - 121) / 14,
      description: "Convert to Celsius, subtract 121, and divide by 14.",
    },
    "its90 [ITS-90]": {
      formula: (value) => (value - 7.5) * 40/21,
      description: "Convert to Celsius (ITS-90 is based on Celsius).",
    },
  },
  "gasMark [GM]": {
    "celsius [°C]": {
      formula: (value) => value * 14 + 121,
      description: "Multiply the temperature by 14 and add 121.",
    },
    "fahrenheit [°F]": {
      formula: (value) => value * 25.2 + 249.8,
      description: "Multiply the temperature by 25.2 and add 249.8.",
    },
    "kelvin [K]": {
      formula: (value) => value * 14 + 394.15,
      description: "Multiply the temperature by 14 and add 394.15.",
    },
    "rankine [°R]": {
      formula: (value) => value * 25.2 + 670.47,
      description: "Multiply the temperature by 25.2 and add 670.47.",
    },
    "reaumur [°Ré]": {
      formula: (value) => value * 11.2 + 96.8,
      description: "Multiply the temperature by 11.2 and add 96.8.",
    },
    "delisle [°De]": {
      formula: (value) => (121 - value * 14) * 3/2,
      description: "Subtract the temperature multiplied by 14 from 121 and multiply by 3/2.",
    },
    "newton [°N]": {
      formula: (value) => (value * 14 + 121) * 33/100,
      description: "Convert to Celsius and multiply by 33/100.",
    },
    "romer [°Rø]": {
      formula: (value) => (value * 14 + 121) * 21/40 + 7.5,
      description: "Convert to Celsius, multiply by 21/40, and add 7.5.",
    },
    "its90 [ITS-90]": {
      formula: (value) => value * 14 + 121,
      description: "Convert to Celsius (ITS-90 is based on Celsius).",
    },
  },
  "its90 [ITS-90]": {
    "celsius [°C]": {
      formula: (value) => value,
      description: "No conversion needed; ITS-90 is based on Celsius.",
    },
    "fahrenheit [°F]": {
      formula: (value) => value * 9/5 + 32,
      description: "Multiply the temperature by 9/5 and add 32.",
    },
    "kelvin [K]": {
      formula: (value) => value + 273.15,
      description: "Add 273.15 to the temperature.",
    },
    "rankine [°R]": {
      formula: (value) => (value + 273.15) * 9/5,
      description: "Add 273.15 to the temperature and multiply by 9/5.",
    },
    "reaumur [°Ré]": {
      formula: (value) => value * 4/5,
      description: "Multiply the temperature by 4/5.",
    },
    "delisle [°De]": {
      formula: (value) => (100 - value) * 3/2,
      description: "Subtract the temperature from 100 and multiply by 3/2.",
    },
    "newton [°N]": {
      formula: (value) => value * 33/100,
      description: "Multiply the temperature by 33/100.",
    },
    "romer [°Rø]": {
      formula: (value) => value * 21/40 + 7.5,
      description: "Multiply the temperature by 21/40 and add 7.5.",
    },
    "gasMark [GM]": {
      formula: (value) => (value - 121) / 14,
      description: "Subtract 121 from the temperature and divide by 14.",
    },
  },
};