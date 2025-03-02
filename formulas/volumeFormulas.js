export const volumeFormulas = {
  liter: {
    milliliter: {
      formula: (value) => value * 1000,
      description:
        "Multiply the volume value by 1000 to convert from liters to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 1000,
      description:
        "Divide the volume value by 1000 to convert from liters to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 1000,
      description:
        "Multiply the volume value by 1000 to convert from liters to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 1e12,
      description:
        "Divide the volume value by 1e12 to convert from liters to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 1e6,
      description:
        "Multiply the volume value by 1e6 to convert from liters to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 3.78541,
      description:
        "Divide the volume value by 3.78541 to convert from liters to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 4.54609,
      description:
        "Divide the volume value by 4.54609 to convert from liters to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 0.946353,
      description:
        "Divide the volume value by 0.946353 to convert from liters to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 1.13652,
      description:
        "Divide the volume value by 1.13652 to convert from liters to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 0.473176,
      description:
        "Divide the volume value by 0.473176 to convert from liters to US pints.",
    },
    ukPint: {
      formula: (value) => value / 0.568261,
      description:
        "Divide the volume value by 0.568261 to convert from liters to UK pints.",
    },
    usCup: {
      formula: (value) => value / 0.24,
      description:
        "Divide the volume value by 0.24 to convert from liters to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 33.814,
      description:
        "Multiply the volume value by 33.814 to convert from liters to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 35.1951,
      description:
        "Multiply the volume value by 35.1951 to convert from liters to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 61.0237,
      description:
        "Multiply the volume value by 61.0237 to convert from liters to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 28.3168,
      description:
        "Divide the volume value by 28.3168 to convert from liters to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 4.168e12,
      description:
        "Divide the volume value by 4.168e12 to convert from liters to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 764.555,
      description:
        "Divide the volume value by 764.555 to convert from liters to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 67.628,
      description:
        "Multiply the volume value by 67.628 to convert from liters to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 56.3121,
      description:
        "Multiply the volume value by 56.3121 to convert from liters to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 202.884,
      description:
        "Multiply the volume value by 202.884 to convert from liters to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 168.936,
      description:
        "Multiply the volume value by 168.936 to convert from liters to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 158.987,
      description:
        "Divide the volume value by 158.987 to convert from liters to oil barrels.",
    },
  },
  milliliter: {
    liter: {
      formula: (value) => value / 1000,
      description:
        "Divide the volume value by 1000 to convert from milliliters to liters.",
    },
    cubicMeter: {
      formula: (value) => value / 1e6,
      description:
        "Divide the volume value by 1e6 to convert from milliliters to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from milliliters to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 1e15,
      description:
        "Divide the volume value by 1e15 to convert from milliliters to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 1000,
      description:
        "Multiply the volume value by 1000 to convert from milliliters to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 3785.41,
      description:
        "Divide the volume value by 3785.41 to convert from milliliters to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 4546.09,
      description:
        "Divide the volume value by 4546.09 to convert from milliliters to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 946.353,
      description:
        "Divide the volume value by 946.353 to convert from milliliters to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 1136.52,
      description:
        "Divide the volume value by 1136.52 to convert from milliliters to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 473.176,
      description:
        "Divide the volume value by 473.176 to convert from milliliters to US pints.",
    },
    ukPint: {
      formula: (value) => value / 568.261,
      description:
        "Divide the volume value by 568.261 to convert from milliliters to UK pints.",
    },
    usCup: {
      formula: (value) => value / 240,
      description:
        "Divide the volume value by 240 to convert from milliliters to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value / 29.5735,
      description:
        "Divide the volume value by 29.5735 to convert from milliliters to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value / 28.4131,
      description:
        "Divide the volume value by 28.4131 to convert from milliliters to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value / 16.3871,
      description:
        "Divide the volume value by 16.3871 to convert from milliliters to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 28316.8,
      description:
        "Divide the volume value by 28316.8 to convert from milliliters to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 4.168e15,
      description:
        "Divide the volume value by 4.168e15 to convert from milliliters to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 764555,
      description:
        "Divide the volume value by 764555 to convert from milliliters to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value / 14.7868,
      description:
        "Divide the volume value by 14.7868 to convert from milliliters to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value / 17.7582,
      description:
        "Divide the volume value by 17.7582 to convert from milliliters to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value / 4.92892,
      description:
        "Divide the volume value by 4.92892 to convert from milliliters to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value / 5.91939,
      description:
        "Divide the volume value by 5.91939 to convert from milliliters to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 158987,
      description:
        "Divide the volume value by 158987 to convert from milliliters to oil barrels.",
    },
  },
  cubicMeter: {
    liter: {
      formula: (value) => value * 1000,
      description:
        "Multiply the volume value by 1000 to convert from cubic meters to liters.",
    },
    milliliter: {
      formula: (value) => value * 1e6,
      description:
        "Multiply the volume value by 1e6 to convert from cubic meters to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from cubic meters to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 1e6,
      description:
        "Multiply the volume value by 1e6 to convert from cubic meters to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 1e9,
      description:
        "Divide the volume value by 1e9 to convert from cubic meters to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 1e9,
      description:
        "Multiply the volume value by 1e9 to convert from cubic meters to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value * 264.172,
      description:
        "Multiply the volume value by 264.172 to convert from cubic meters to US gallons.",
    },
    ukGallon: {
      formula: (value) => value * 219.969,
      description:
        "Multiply the volume value by 219.969 to convert from cubic meters to UK gallons.",
    },
    usQuart: {
      formula: (value) => value * 1056.69,
      description:
        "Multiply the volume value by 1056.69 to convert from cubic meters to US quarts.",
    },
    ukQuart: {
      formula: (value) => value * 879.877,
      description:
        "Multiply the volume value by 879.877 to convert from cubic meters to UK quarts.",
    },
    usPint: {
      formula: (value) => value * 2113.38,
      description:
        "Multiply the volume value by 2113.38 to convert from cubic meters to US pints.",
    },
    ukPint: {
      formula: (value) => value * 1759.75,
      description:
        "Multiply the volume value by 1759.75 to convert from cubic meters to UK pints.",
    },
    usCup: {
      formula: (value) => value * 4226.75,
      description:
        "Multiply the volume value by 4226.75 to convert from cubic meters to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 33814,
      description:
        "Multiply the volume value by 33814 to convert from cubic meters to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 35195.1,
      description:
        "Multiply the volume value by 35195.1 to convert from cubic meters to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 61023.7,
      description:
        "Multiply the volume value by 61023.7 to convert from cubic meters to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value * 35.3147,
      description:
        "Multiply the volume value by 35.3147 to convert from cubic meters to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 4.168e9,
      description:
        "Divide the volume value by 4.168e9 to convert from cubic meters to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value * 1.30795,
      description:
        "Multiply the volume value by 1.30795 to convert from cubic meters to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 67628,
      description:
        "Multiply the volume value by 67628 to convert from cubic meters to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 56312.1,
      description:
        "Multiply the volume value by 56312.1 to convert from cubic meters to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 202884,
      description:
        "Multiply the volume value by 202884 to convert from cubic meters to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 168936,
      description:
        "Multiply the volume value by 168936 to convert from cubic meters to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value * 6.28981,
      description:
        "Multiply the volume value by 6.28981 to convert from cubic meters to oil barrels.",
    },
  },
  cubicCentimeter: {
    liter: {
      formula: (value) => value / 1000,
      description:
        "Divide the volume value by 1000 to convert from cubic centimeters to liters.",
    },
    milliliter: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from cubic centimeters to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 1e6,
      description:
        "Divide the volume value by 1e6 to convert from cubic centimeters to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from cubic centimeters to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 1e15,
      description:
        "Divide the volume value by 1e15 to convert from cubic centimeters to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 1000,
      description:
        "Multiply the volume value by 1000 to convert from cubic centimeters to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 3785.41,
      description:
        "Divide the volume value by 3785.41 to convert from cubic centimeters to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 4546.09,
      description:
        "Divide the volume value by 4546.09 to convert from cubic centimeters to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 946.353,
      description:
        "Divide the volume value by 946.353 to convert from cubic centimeters to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 1136.52,
      description:
        "Divide the volume value by 1136.52 to convert from cubic centimeters to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 473.176,
      description:
        "Divide the volume value by 473.176 to convert from cubic centimeters to US pints.",
    },
    ukPint: {
      formula: (value) => value / 568.261,
      description:
        "Divide the volume value by 568.261 to convert from cubic centimeters to UK pints.",
    },
    usCup: {
      formula: (value) => value / 240,
      description:
        "Divide the volume value by 240 to convert from cubic centimeters to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value / 29.5735,
      description:
        "Divide the volume value by 29.5735 to convert from cubic centimeters to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value / 28.4131,
      description:
        "Divide the volume value by 28.4131 to convert from cubic centimeters to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value / 16.3871,
      description:
        "Divide the volume value by 16.3871 to convert from cubic centimeters to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 28316.8,
      description:
        "Divide the volume value by 28316.8 to convert from cubic centimeters to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 4.168e15,
      description:
        "Divide the volume value by 4.168e15 to convert from cubic centimeters to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 764555,
      description:
        "Divide the volume value by 764555 to convert from cubic centimeters to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value / 14.7868,
      description:
        "Divide the volume value by 14.7868 to convert from cubic centimeters to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value / 17.7582,
      description:
        "Divide the volume value by 17.7582 to convert from cubic centimeters to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value / 4.92892,
      description:
        "Divide the volume value by 4.92892 to convert from cubic centimeters to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value / 5.91939,
      description:
        "Divide the volume value by 5.91939 to convert from cubic centimeters to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 158987,
      description:
        "Divide the volume value by 158987 to convert from cubic centimeters to oil barrels.",
    },
  },
  cubicKilometer: {
    liter: {
      formula: (value) => value * 1e12,
      description:
        "Multiply the volume value by 1e12 to convert from cubic kilometers to liters.",
    },
    milliliter: {
      formula: (value) => value * 1e15,
      description:
        "Multiply the volume value by 1e15 to convert from cubic kilometers to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value * 1e9,
      description:
        "Multiply the volume value by 1e9 to convert from cubic kilometers to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 1e15,
      description:
        "Multiply the volume value by 1e15 to convert from cubic kilometers to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from cubic kilometers to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 1e18,
      description:
        "Multiply the volume value by 1e18 to convert from cubic kilometers to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value * 2.64172e11,
      description:
        "Multiply the volume value by 2.64172e11 to convert from cubic kilometers to US gallons.",
    },
    ukGallon: {
      formula: (value) => value * 2.19969e11,
      description:
        "Multiply the volume value by 2.19969e11 to convert from cubic kilometers to UK gallons.",
    },
    usQuart: {
      formula: (value) => value * 1.05669e12,
      description:
        "Multiply the volume value by 1.05669e12 to convert from cubic kilometers to US quarts.",
    },
    ukQuart: {
      formula: (value) => value * 8.79877e11,
      description:
        "Multiply the volume value by 8.79877e11 to convert from cubic kilometers to UK quarts.",
    },
    usPint: {
      formula: (value) => value * 2.11338e12,
      description:
        "Multiply the volume value by 2.11338e12 to convert from cubic kilometers to US pints.",
    },
    ukPint: {
      formula: (value) => value * 1.75975e12,
      description:
        "Multiply the volume value by 1.75975e12 to convert from cubic kilometers to UK pints.",
    },
    usCup: {
      formula: (value) => value * 4.22675e12,
      description:
        "Multiply the volume value by 4.22675e12 to convert from cubic kilometers to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 3.3814e13,
      description:
        "Multiply the volume value by 3.3814e13 to convert from cubic kilometers to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 3.51951e13,
      description:
        "Multiply the volume value by 3.51951e13 to convert from cubic kilometers to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 6.10237e13,
      description:
        "Multiply the volume value by 6.10237e13 to convert from cubic kilometers to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value * 3.53147e10,
      description:
        "Multiply the volume value by 3.53147e10 to convert from cubic kilometers to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value * 0.239913,
      description:
        "Multiply the volume value by 0.239913 to convert from cubic kilometers to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value * 1.30795e9,
      description:
        "Multiply the volume value by 1.30795e9 to convert from cubic kilometers to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 6.7628e13,
      description:
        "Multiply the volume value by 6.7628e13 to convert from cubic kilometers to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 5.63121e13,
      description:
        "Multiply the volume value by 5.63121e13 to convert from cubic kilometers to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 2.02884e14,
      description:
        "Multiply the volume value by 2.02884e14 to convert from cubic kilometers to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 1.68936e14,
      description:
        "Multiply the volume value by 1.68936e14 to convert from cubic kilometers to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value * 6.28981e9,
      description:
        "Multiply the volume value by 6.28981e9 to convert from cubic kilometers to oil barrels.",
    },
  },
  cubicMillimeter: {
    liter: {
      formula: (value) => value / 1e6,
      description:
        "Divide the volume value by 1e6 to convert from cubic millimeters to liters.",
    },
    milliliter: {
      formula: (value) => value / 1000,
      description:
        "Divide the volume value by 1000 to convert from cubic millimeters to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 1e9,
      description:
        "Divide the volume value by 1e9 to convert from cubic millimeters to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value / 1000,
      description:
        "Divide the volume value by 1000 to convert from cubic millimeters to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 1e18,
      description:
        "Divide the volume value by 1e18 to convert from cubic millimeters to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from cubic millimeters to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 3.78541e6,
      description:
        "Divide the volume value by 3.78541e6 to convert from cubic millimeters to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 4.54609e6,
      description:
        "Divide the volume value by 4.54609e6 to convert from cubic millimeters to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 946353,
      description:
        "Divide the volume value by 946353 to convert from cubic millimeters to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 1.13652e6,
      description:
        "Divide the volume value by 1.13652e6 to convert from cubic millimeters to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 473176,
      description:
        "Divide the volume value by 473176 to convert from cubic millimeters to US pints.",
    },
    ukPint: {
      formula: (value) => value / 568261,
      description:
        "Divide the volume value by 568261 to convert from cubic millimeters to UK pints.",
    },
    usCup: {
      formula: (value) => value / 240000,
      description:
        "Divide the volume value by 240000 to convert from cubic millimeters to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value / 29573.5,
      description:
        "Divide the volume value by 29573.5 to convert from cubic millimeters to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value / 28413.1,
      description:
        "Divide the volume value by 28413.1 to convert from cubic millimeters to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value / 16387.1,
      description:
        "Divide the volume value by 16387.1 to convert from cubic millimeters to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 2.83168e7,
      description:
        "Divide the volume value by 2.83168e7 to convert from cubic millimeters to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 4.168e18,
      description:
        "Divide the volume value by 4.168e18 to convert from cubic millimeters to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 7.64555e8,
      description:
        "Divide the volume value by 7.64555e8 to convert from cubic millimeters to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value / 14786.8,
      description:
        "Divide the volume value by 14786.8 to convert from cubic millimeters to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value / 17758.2,
      description:
        "Divide the volume value by 17758.2 to convert from cubic millimeters to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value / 4928.92,
      description:
        "Divide the volume value by 4928.92 to convert from cubic millimeters to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value / 5919.39,
      description:
        "Divide the volume value by 5919.39 to convert from cubic millimeters to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 158987e6,
      description:
        "Divide the volume value by 158987e6 to convert from cubic millimeters to oil barrels.",
    },
  },
  usGallon: {
    liter: {
      formula: (value) => value * 3.78541,
      description:
        "Multiply the volume value by 3.78541 to convert from US gallons to liters.",
    },
    milliliter: {
      formula: (value) => value * 3785.41,
      description:
        "Multiply the volume value by 3785.41 to convert from US gallons to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 264.172,
      description:
        "Divide the volume value by 264.172 to convert from US gallons to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 3785.41,
      description:
        "Multiply the volume value by 3785.41 to convert from US gallons to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 2.64172e11,
      description:
        "Divide the volume value by 2.64172e11 to convert from US gallons to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 3.78541e6,
      description:
        "Multiply the volume value by 3.78541e6 to convert from US gallons to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from US gallons to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 1.20095,
      description:
        "Divide the volume value by 1.20095 to convert from US gallons to UK gallons.",
    },
    usQuart: {
      formula: (value) => value * 4,
      description:
        "Multiply the volume value by 4 to convert from US gallons to US quarts.",
    },
    ukQuart: {
      formula: (value) => value * 3.3307,
      description:
        "Multiply the volume value by 3.3307 to convert from US gallons to UK quarts.",
    },
    usPint: {
      formula: (value) => value * 8,
      description:
        "Multiply the volume value by 8 to convert from US gallons to US pints.",
    },
    ukPint: {
      formula: (value) => value * 6.6614,
      description:
        "Multiply the volume value by 6.6614 to convert from US gallons to UK pints.",
    },
    usCup: {
      formula: (value) => value * 16,
      description:
        "Multiply the volume value by 16 to convert from US gallons to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 128,
      description:
        "Multiply the volume value by 128 to convert from US gallons to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 133.228,
      description:
        "Multiply the volume value by 133.228 to convert from US gallons to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 231,
      description:
        "Multiply the volume value by 231 to convert from US gallons to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 7.48052,
      description:
        "Divide the volume value by 7.48052 to convert from US gallons to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 9.08168e11,
      description:
        "Divide the volume value by 9.08168e11 to convert from US gallons to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 201.974,
      description:
        "Divide the volume value by 201.974 to convert from US gallons to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 256,
      description:
        "Multiply the volume value by 256 to convert from US gallons to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 213.165,
      description:
        "Multiply the volume value by 213.165 to convert from US gallons to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 768,
      description:
        "Multiply the volume value by 768 to convert from US gallons to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 639.494,
      description:
        "Multiply the volume value by 639.494 to convert from US gallons to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 42,
      description:
        "Divide the volume value by 42 to convert from US gallons to oil barrels.",
    },
  },
  ukGallon: {
    liter: {
      formula: (value) => value * 4.54609,
      description:
        "Multiply the volume value by 4.54609 to convert from UK gallons to liters.",
    },
    milliliter: {
      formula: (value) => value * 4546.09,
      description:
        "Multiply the volume value by 4546.09 to convert from UK gallons to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 219.969,
      description:
        "Divide the volume value by 219.969 to convert from UK gallons to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 4546.09,
      description:
        "Multiply the volume value by 4546.09 to convert from UK gallons to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 2.19969e11,
      description:
        "Divide the volume value by 2.19969e11 to convert from UK gallons to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 4.54609e6,
      description:
        "Multiply the volume value by 4.54609e6 to convert from UK gallons to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value * 1.20095,
      description:
        "Multiply the volume value by 1.20095 to convert from UK gallons to US gallons.",
    },
    ukGallon: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from UK gallons to UK gallons.",
    },
    usQuart: {
      formula: (value) => value * 4.8038,
      description:
        "Multiply the volume value by 4.8038 to convert from UK gallons to US quarts.",
    },
    ukQuart: {
      formula: (value) => value * 4,
      description:
        "Multiply the volume value by 4 to convert from UK gallons to UK quarts.",
    },
    usPint: {
      formula: (value) => value * 9.6076,
      description:
        "Multiply the volume value by 9.6076 to convert from UK gallons to US pints.",
    },
    ukPint: {
      formula: (value) => value * 8,
      description:
        "Multiply the volume value by 8 to convert from UK gallons to UK pints.",
    },
    usCup: {
      formula: (value) => value * 19.2152,
      description:
        "Multiply the volume value by 19.2152 to convert from UK gallons to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 153.722,
      description:
        "Multiply the volume value by 153.722 to convert from UK gallons to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 160,
      description:
        "Multiply the volume value by 160 to convert from UK gallons to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 277.419,
      description:
        "Multiply the volume value by 277.419 to convert from UK gallons to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 6.22884,
      description:
        "Divide the volume value by 6.22884 to convert from UK gallons to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 8.1103e11,
      description:
        "Divide the volume value by 8.1103e11 to convert from UK gallons to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 168.178,
      description:
        "Divide the volume value by 168.178 to convert from UK gallons to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 307.443,
      description:
        "Multiply the volume value by 307.443 to convert from UK gallons to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 256,
      description:
        "Multiply the volume value by 256 to convert from UK gallons to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 922.33,
      description:
        "Multiply the volume value by 922.33 to convert from UK gallons to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 768,
      description:
        "Multiply the volume value by 768 to convert from UK gallons to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 7.3,
      description:
        "Divide the volume value by 7.3 to convert from UK gallons to oil barrels.",
    },
  },
  usQuart: {
    liter: {
      formula: (value) => value * 0.946353,
      description:
        "Multiply the volume value by 0.946353 to convert from US quarts to liters.",
    },
    milliliter: {
      formula: (value) => value * 946.353,
      description:
        "Multiply the volume value by 946.353 to convert from US quarts to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 1056.69,
      description:
        "Divide the volume value by 1056.69 to convert from US quarts to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 946.353,
      description:
        "Multiply the volume value by 946.353 to convert from US quarts to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 1.05669e12,
      description:
        "Divide the volume value by 1.05669e12 to convert from US quarts to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 946353,
      description:
        "Multiply the volume value by 946353 to convert from US quarts to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 4,
      description:
        "Divide the volume value by 4 to convert from US quarts to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 4.8038,
      description:
        "Divide the volume value by 4.8038 to convert from US quarts to UK gallons.",
    },
    usQuart: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from US quarts to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 1.20095,
      description:
        "Divide the volume value by 1.20095 to convert from US quarts to UK quarts.",
    },
    usPint: {
      formula: (value) => value * 2,
      description:
        "Multiply the volume value by 2 to convert from US quarts to US pints.",
    },
    ukPint: {
      formula: (value) => value / 2.4019,
      description:
        "Divide the volume value by 2.4019 to convert from US quarts to UK pints.",
    },
    usCup: {
      formula: (value) => value * 4,
      description:
        "Multiply the volume value by 4 to convert from US quarts to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 32,
      description:
        "Multiply the volume value by 32 to convert from US quarts to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 33.3069,
      description:
        "Multiply the volume value by 33.3069 to convert from US quarts to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 57.75,
      description:
        "Multiply the volume value by 57.75 to convert from US quarts to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 29.9221,
      description:
        "Divide the volume value by 29.9221 to convert from US quarts to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 2.2716e11,
      description:
        "Divide the volume value by 2.2716e11 to convert from US quarts to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 53.996,
      description:
        "Divide the volume value by 53.996 to convert from US quarts to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 64,
      description:
        "Multiply the volume value by 64 to convert from US quarts to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 53.2911,
      description:
        "Multiply the volume value by 53.2911 to convert from US quarts to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 192,
      description:
        "Multiply the volume value by 192 to convert from US quarts to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 159.873,
      description:
        "Multiply the volume value by 159.873 to convert from US quarts to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 168,
      description:
        "Divide the volume value by 168 to convert from US quarts to oil barrels.",
    },
  },
  ukQuart: {
    liter: {
      formula: (value) => value * 1.13652,
      description:
        "Multiply the volume value by 1.13652 to convert from UK quarts to liters.",
    },
    milliliter: {
      formula: (value) => value * 1136.52,
      description:
        "Multiply the volume value by 1136.52 to convert from UK quarts to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 879.877,
      description:
        "Divide the volume value by 879.877 to convert from UK quarts to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 1136.52,
      description:
        "Multiply the volume value by 1136.52 to convert from UK quarts to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 8.79877e11,
      description:
        "Divide the volume value by 8.79877e11 to convert from UK quarts to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 1.13652e6,
      description:
        "Multiply the volume value by 1.13652e6 to convert from UK quarts to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 4.8038,
      description:
        "Divide the volume value by 4.8038 to convert from UK quarts to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 4,
      description:
        "Divide the volume value by 4 to convert from UK quarts to UK gallons.",
    },
    usQuart: {
      formula: (value) => value * 1.20095,
      description:
        "Multiply the volume value by 1.20095 to convert from UK quarts to US quarts.",
    },
    ukQuart: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from UK quarts to UK quarts.",
    },
    usPint: {
      formula: (value) => value * 2.4019,
      description:
        "Multiply the volume value by 2.4019 to convert from UK quarts to US pints.",
    },
    ukPint: {
      formula: (value) => value * 2,
      description:
        "Multiply the volume value by 2 to convert from UK quarts to UK pints.",
    },
    usCup: {
      formula: (value) => value * 4.8038,
      description:
        "Multiply the volume value by 4.8038 to convert from UK quarts to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 38.3069,
      description:
        "Multiply the volume value by 38.3069 to convert from UK quarts to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 40,
      description:
        "Multiply the volume value by 40 to convert from UK quarts to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 69.3548,
      description:
        "Multiply the volume value by 69.3548 to convert from UK quarts to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 24.9155,
      description:
        "Divide the volume value by 24.9155 to convert from UK quarts to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 2.02758e11,
      description:
        "Divide the volume value by 2.02758e11 to convert from UK quarts to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 42.0445,
      description:
        "Divide the volume value by 42.0445 to convert from UK quarts to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 76.8608,
      description:
        "Multiply the volume value by 76.8608 to convert from UK quarts to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 64,
      description:
        "Multiply the volume value by 64 to convert from UK quarts to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 230.582,
      description:
        "Multiply the volume value by 230.582 to convert from UK quarts to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 192,
      description:
        "Multiply the volume value by 192 to convert from UK quarts to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 27.778,
      description:
        "Divide the volume value by 27.778 to convert from UK quarts to oil barrels.",
    },
  },
  usPint: {
    liter: {
      formula: (value) => value * 0.473176,
      description:
        "Multiply the volume value by 0.473176 to convert from US pints to liters.",
    },
    milliliter: {
      formula: (value) => value * 473.176,
      description:
        "Multiply the volume value by 473.176 to convert from US pints to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 2113.38,
      description:
        "Divide the volume value by 2113.38 to convert from US pints to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 473.176,
      description:
        "Multiply the volume value by 473.176 to convert from US pints to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 2.11338e12,
      description:
        "Divide the volume value by 2.11338e12 to convert from US pints to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 473176,
      description:
        "Multiply the volume value by 473176 to convert from US pints to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 8,
      description:
        "Divide the volume value by 8 to convert from US pints to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 9.6076,
      description:
        "Divide the volume value by 9.6076 to convert from US pints to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 2,
      description:
        "Divide the volume value by 2 to convert from US pints to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 4.8038,
      description:
        "Divide the volume value by 4.8038 to convert from US pints to UK quarts.",
    },
    usPint: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from US pints to US pints.",
    },
    ukPint: {
      formula: (value) => value / 2.4019,
      description:
        "Divide the volume value by 2.4019 to convert from US pints to UK pints.",
    },
    usCup: {
      formula: (value) => value * 2,
      description:
        "Multiply the volume value by 2 to convert from US pints to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 16,
      description:
        "Multiply the volume value by 16 to convert from US pints to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 19.2152,
      description:
        "Multiply the volume value by 19.2152 to convert from US pints to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 28.875,
      description:
        "Multiply the volume value by 28.875 to convert from US pints to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 59.8442,
      description:
        "Divide the volume value by 59.8442 to convert from US pints to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 4.5432e11,
      description:
        "Divide the volume value by 4.5432e11 to convert from US pints to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 107.992,
      description:
        "Divide the volume value by 107.992 to convert from US pints to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 32,
      description:
        "Multiply the volume value by 32 to convert from US pints to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 26.6455,
      description:
        "Multiply the volume value by 26.6455 to convert from US pints to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 96,
      description:
        "Multiply the volume value by 96 to convert from US pints to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 79.9363,
      description:
        "Multiply the volume value by 79.9363 to convert from US pints to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 336,
      description:
        "Divide the volume value by 336 to convert from US pints to oil barrels.",
    },
  },
  ukPint: {
    liter: {
      formula: (value) => value * 0.568261,
      description:
        "Multiply the volume value by 0.568261 to convert from UK pints to liters.",
    },
    milliliter: {
      formula: (value) => value * 568.261,
      description:
        "Multiply the volume value by 568.261 to convert from UK pints to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 1759.75,
      description:
        "Divide the volume value by 1759.75 to convert from UK pints to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 568.261,
      description:
        "Multiply the volume value by 568.261 to convert from UK pints to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 1.75975e12,
      description:
        "Divide the volume value by 1.75975e12 to convert from UK pints to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 568261,
      description:
        "Multiply the volume value by 568261 to convert from UK pints to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 9.6076,
      description:
        "Divide the volume value by 9.6076 to convert from UK pints to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 8,
      description:
        "Divide the volume value by 8 to convert from UK pints to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 4.8038,
      description:
        "Divide the volume value by 4.8038 to convert from UK pints to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 2,
      description:
        "Divide the volume value by 2 to convert from UK pints to UK quarts.",
    },
    usPint: {
      formula: (value) => value * 2.4019,
      description:
        "Multiply the volume value by 2.4019 to convert from UK pints to US pints.",
    },
    ukPint: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from UK pints to UK pints.",
    },
    usCup: {
      formula: (value) => value * 4.8038,
      description:
        "Multiply the volume value by 4.8038 to convert from UK pints to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 19.2152,
      description:
        "Multiply the volume value by 19.2152 to convert from UK pints to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 20,
      description:
        "Multiply the volume value by 20 to convert from UK pints to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 34.6774,
      description:
        "Multiply the volume value by 34.6774 to convert from UK pints to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 49.831,
      description:
        "Divide the volume value by 49.831 to convert from UK pints to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 1.01379e11,
      description:
        "Divide the volume value by 1.01379e11 to convert from UK pints to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 21.0223,
      description:
        "Divide the volume value by 21.0223 to convert from UK pints to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 38.4304,
      description:
        "Multiply the volume value by 38.4304 to convert from UK pints to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 32,
      description:
        "Multiply the volume value by 32 to convert from UK pints to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 115.291,
      description:
        "Multiply the volume value by 115.291 to convert from UK pints to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 96,
      description:
        "Multiply the volume value by 96 to convert from UK pints to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 55.556,
      description:
        "Divide the volume value by 55.556 to convert from UK pints to oil barrels.",
    },
  },
  usCup: {
    liter: {
      formula: (value) => value * 0.24,
      description:
        "Multiply the volume value by 0.24 to convert from US cups to liters.",
    },
    milliliter: {
      formula: (value) => value * 240,
      description:
        "Multiply the volume value by 240 to convert from US cups to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 4226.75,
      description:
        "Divide the volume value by 4226.75 to convert from US cups to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 240,
      description:
        "Multiply the volume value by 240 to convert from US cups to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 4.22675e12,
      description:
        "Divide the volume value by 4.22675e12 to convert from US cups to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 240000,
      description:
        "Multiply the volume value by 240000 to convert from US cups to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 16,
      description:
        "Divide the volume value by 16 to convert from US cups to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 19.2152,
      description:
        "Divide the volume value by 19.2152 to convert from US cups to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 4,
      description:
        "Divide the volume value by 4 to convert from US cups to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 4.8038,
      description:
        "Divide the volume value by 4.8038 to convert from US cups to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 2,
      description:
        "Divide the volume value by 2 to convert from US cups to US pints.",
    },
    ukPint: {
      formula: (value) => value / 9.6076,
      description:
        "Divide the volume value by 9.6076 to convert from US cups to UK pints.",
    },
    usCup: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from US cups to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 8,
      description:
        "Multiply the volume value by 8 to convert from US cups to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 8.32674,
      description:
        "Multiply the volume value by 8.32674 to convert from US cups to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 14.4375,
      description:
        "Multiply the volume value by 14.4375 to convert from US cups to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 118.294,
      description:
        "Divide the volume value by 118.294 to convert from US cups to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 4.168e12,
      description:
        "Divide the volume value by 4.168e12 to convert from US cups to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 3231.58,
      description:
        "Divide the volume value by 3231.58 to convert from US cups to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 16,
      description:
        "Multiply the volume value by 16 to convert from US cups to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 13.3267,
      description:
        "Multiply the volume value by 13.3267 to convert from US cups to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 48,
      description:
        "Multiply the volume value by 48 to convert from US cups to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 39.9801,
      description:
        "Multiply the volume value by 39.9801 to convert from US cups to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 672,
      description:
        "Divide the volume value by 672 to convert from US cups to oil barrels.",
    },
  },
  usFluidOunce: {
    liter: {
      formula: (value) => value * 0.0295735,
      description:
        "Multiply the volume value by 0.0295735 to convert from US fluid ounces to liters.",
    },
    milliliter: {
      formula: (value) => value * 29.5735,
      description:
        "Multiply the volume value by 29.5735 to convert from US fluid ounces to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 33814,
      description:
        "Divide the volume value by 33814 to convert from US fluid ounces to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 29.5735,
      description:
        "Multiply the volume value by 29.5735 to convert from US fluid ounces to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 3.3814e13,
      description:
        "Divide the volume value by 3.3814e13 to convert from US fluid ounces to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 29573.5,
      description:
        "Multiply the volume value by 29573.5 to convert from US fluid ounces to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 128,
      description:
        "Divide the volume value by 128 to convert from US fluid ounces to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 153.722,
      description:
        "Divide the volume value by 153.722 to convert from US fluid ounces to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 32,
      description:
        "Divide the volume value by 32 to convert from US fluid ounces to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 38.3069,
      description:
        "Divide the volume value by 38.3069 to convert from US fluid ounces to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 16,
      description:
        "Divide the volume value by 16 to convert from US fluid ounces to US pints.",
    },
    ukPint: {
      formula: (value) => value / 19.2152,
      description:
        "Divide the volume value by 19.2152 to convert from US fluid ounces to UK pints.",
    },
    usCup: {
      formula: (value) => value / 8,
      description:
        "Divide the volume value by 8 to convert from US fluid ounces to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from US fluid ounces to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 1.04084,
      description:
        "Multiply the volume value by 1.04084 to convert from US fluid ounces to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value / 1.80469,
      description:
        "Divide the volume value by 1.80469 to convert from US fluid ounces to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 957.506,
      description:
        "Divide the volume value by 957.506 to convert from US fluid ounces to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 4.168e15,
      description:
        "Divide the volume value by 4.168e15 to convert from US fluid ounces to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 25852.7,
      description:
        "Divide the volume value by 25852.7 to convert from US fluid ounces to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 2,
      description:
        "Multiply the volume value by 2 to convert from US fluid ounces to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 1.66535,
      description:
        "Multiply the volume value by 1.66535 to convert from US fluid ounces to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 6,
      description:
        "Multiply the volume value by 6 to convert from US fluid ounces to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 4.99605,
      description:
        "Multiply the volume value by 4.99605 to convert from US fluid ounces to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 5376,
      description:
        "Divide the volume value by 5376 to convert from US fluid ounces to oil barrels.",
    },
  },
  ukFluidOunce: {
    liter: {
      formula: (value) => value * 0.0284131,
      description:
        "Multiply the volume value by 0.0284131 to convert from UK fluid ounces to liters.",
    },
    milliliter: {
      formula: (value) => value * 28.4131,
      description:
        "Multiply the volume value by 28.4131 to convert from UK fluid ounces to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 35195.1,
      description:
        "Divide the volume value by 35195.1 to convert from UK fluid ounces to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 28.4131,
      description:
        "Multiply the volume value by 28.4131 to convert from UK fluid ounces to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 3.51951e13,
      description:
        "Divide the volume value by 3.51951e13 to convert from UK fluid ounces to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 28413.1,
      description:
        "Multiply the volume value by 28413.1 to convert from UK fluid ounces to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 133.228,
      description:
        "Divide the volume value by 133.228 to convert from UK fluid ounces to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 160,
      description:
        "Divide the volume value by 160 to convert from UK fluid ounces to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 33.3069,
      description:
        "Divide the volume value by 33.3069 to convert from UK fluid ounces to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 40,
      description:
        "Divide the volume value by 40 to convert from UK fluid ounces to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 19.2152,
      description:
        "Divide the volume value by 19.2152 to convert from UK fluid ounces to US pints.",
    },
    ukPint: {
      formula: (value) => value / 20,
      description:
        "Divide the volume value by 20 to convert from UK fluid ounces to UK pints.",
    },
    usCup: {
      formula: (value) => value / 8.32674,
      description:
        "Divide the volume value by 8.32674 to convert from UK fluid ounces to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value / 1.04084,
      description:
        "Divide the volume value by 1.04084 to convert from UK fluid ounces to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from UK fluid ounces to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value / 1.73387,
      description:
        "Divide the volume value by 1.73387 to convert from UK fluid ounces to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 996.615,
      description:
        "Divide the volume value by 996.615 to convert from UK fluid ounces to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 4.168e15,
      description:
        "Divide the volume value by 4.168e15 to convert from UK fluid ounces to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 25852.7,
      description:
        "Divide the volume value by 25852.7 to convert from UK fluid ounces to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 1.92269,
      description:
        "Multiply the volume value by 1.92269 to convert from UK fluid ounces to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 1.6,
      description:
        "Multiply the volume value by 1.6 to convert from UK fluid ounces to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 5.76807,
      description:
        "Multiply the volume value by 5.76807 to convert from UK fluid ounces to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 4.8,
      description:
        "Multiply the volume value by 4.8 to convert from UK fluid ounces to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 5600,
      description:
        "Divide the volume value by 5600 to convert from UK fluid ounces to oil barrels.",
    },
  },
  cubicInch: {
    liter: {
      formula: (value) => value * 0.0163871,
      description:
        "Multiply the volume value by 0.0163871 to convert from cubic inches to liters.",
    },
    milliliter: {
      formula: (value) => value * 16.3871,
      description:
        "Multiply the volume value by 16.3871 to convert from cubic inches to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 61023.7,
      description:
        "Divide the volume value by 61023.7 to convert from cubic inches to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 16.3871,
      description:
        "Multiply the volume value by 16.3871 to convert from cubic inches to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 6.10237e13,
      description:
        "Divide the volume value by 6.10237e13 to convert from cubic inches to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 16387.1,
      description:
        "Multiply the volume value by 16387.1 to convert from cubic inches to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 231,
      description:
        "Divide the volume value by 231 to convert from cubic inches to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 277.419,
      description:
        "Divide the volume value by 277.419 to convert from cubic inches to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 57.75,
      description:
        "Divide the volume value by 57.75 to convert from cubic inches to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 69.3548,
      description:
        "Divide the volume value by 69.3548 to convert from cubic inches to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 28.875,
      description:
        "Divide the volume value by 28.875 to convert from cubic inches to US pints.",
    },
    ukPint: {
      formula: (value) => value / 34.6774,
      description:
        "Divide the volume value by 34.6774 to convert from cubic inches to UK pints.",
    },
    usCup: {
      formula: (value) => value / 14.4375,
      description:
        "Divide the volume value by 14.4375 to convert from cubic inches to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 0.554113,
      description:
        "Multiply the volume value by 0.554113 to convert from cubic inches to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 0.576744,
      description:
        "Multiply the volume value by 0.576744 to convert from cubic inches to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from cubic inches to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 1728,
      description:
        "Divide the volume value by 1728 to convert from cubic inches to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 2.113e15,
      description:
        "Divide the volume value by 2.113e15 to convert from cubic inches to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 46656,
      description:
        "Divide the volume value by 46656 to convert from cubic inches to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 1.10823,
      description:
        "Multiply the volume value by 1.10823 to convert from cubic inches to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 0.96076,
      description:
        "Multiply the volume value by 0.96076 to convert from cubic inches to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 3.32468,
      description:
        "Multiply the volume value by 3.32468 to convert from cubic inches to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 2.88227,
      description:
        "Multiply the volume value by 2.88227 to convert from cubic inches to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 9702,
      description:
        "Divide the volume value by 9702 to convert from cubic inches to oil barrels.",
    },
  },
  cubicFoot: {
    liter: {
      formula: (value) => value * 28.3168,
      description:
        "Multiply the volume value by 28.3168 to convert from cubic feet to liters.",
    },
    milliliter: {
      formula: (value) => value * 28316.8,
      description:
        "Multiply the volume value by 28316.8 to convert from cubic feet to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 35.3147,
      description:
        "Divide the volume value by 35.3147 to convert from cubic feet to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 28316.8,
      description:
        "Multiply the volume value by 28316.8 to convert from cubic feet to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 3.53147e10,
      description:
        "Divide the volume value by 3.53147e10 to convert from cubic feet to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 2.83168e7,
      description:
        "Multiply the volume value by 2.83168e7 to convert from cubic feet to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value * 7.48052,
      description:
        "Multiply the volume value by 7.48052 to convert from cubic feet to US gallons.",
    },
    ukGallon: {
      formula: (value) => value * 6.22884,
      description:
        "Multiply the volume value by 6.22884 to convert from cubic feet to UK gallons.",
    },
    usQuart: {
      formula: (value) => value * 29.9221,
      description:
        "Multiply the volume value by 29.9221 to convert from cubic feet to US quarts.",
    },
    ukQuart: {
      formula: (value) => value * 24.9155,
      description:
        "Multiply the volume value by 24.9155 to convert from cubic feet to UK quarts.",
    },
    usPint: {
      formula: (value) => value * 59.8442,
      description:
        "Multiply the volume value by 59.8442 to convert from cubic feet to US pints.",
    },
    ukPint: {
      formula: (value) => value * 49.831,
      description:
        "Multiply the volume value by 49.831 to convert from cubic feet to UK pints.",
    },
    usCup: {
      formula: (value) => value * 118.294,
      description:
        "Multiply the volume value by 118.294 to convert from cubic feet to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 957.506,
      description:
        "Multiply the volume value by 957.506 to convert from cubic feet to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 996.615,
      description:
        "Multiply the volume value by 996.615 to convert from cubic feet to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 1728,
      description:
        "Multiply the volume value by 1728 to convert from cubic feet to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from cubic feet to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 1.47e11,
      description:
        "Divide the volume value by 1.47e11 to convert from cubic feet to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 27,
      description:
        "Divide the volume value by 27 to convert from cubic feet to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 1915.01,
      description:
        "Multiply the volume value by 1915.01 to convert from cubic feet to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 1594.58,
      description:
        "Multiply the volume value by 1594.58 to convert from cubic feet to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 5745.02,
      description:
        "Multiply the volume value by 5745.02 to convert from cubic feet to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 4783.75,
      description:
        "Multiply the volume value by 4783.75 to convert from cubic feet to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 5.61458,
      description:
        "Divide the volume value by 5.61458 to convert from cubic feet to oil barrels.",
    },
  },
  cubicMile: {
    liter: {
      formula: (value) => value * 4.16818e12,
      description:
        "Multiply the volume value by 4.16818e12 to convert from cubic miles to liters.",
    },
    milliliter: {
      formula: (value) => value * 4.16818e15,
      description:
        "Multiply the volume value by 4.16818e15 to convert from cubic miles to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value * 4.16818e9,
      description:
        "Multiply the volume value by 4.16818e9 to convert from cubic miles to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 4.16818e15,
      description:
        "Multiply the volume value by 4.16818e15 to convert from cubic miles to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value * 4.16818,
      description:
        "Multiply the volume value by 4.16818 to convert from cubic miles to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 4.16818e18,
      description:
        "Multiply the volume value by 4.16818e18 to convert from cubic miles to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value * 1.10113e12,
      description:
        "Multiply the volume value by 1.10113e12 to convert from cubic miles to US gallons.",
    },
    ukGallon: {
      formula: (value) => value * 9.16888e11,
      description:
        "Multiply the volume value by 9.16888e11 to convert from cubic miles to UK gallons.",
    },
    usQuart: {
      formula: (value) => value * 4.40452e12,
      description:
        "Multiply the volume value by 4.40452e12 to convert from cubic miles to US quarts.",
    },
    ukQuart: {
      formula: (value) => value * 3.66755e12,
      description:
        "Multiply the volume value by 3.66755e12 to convert from cubic miles to UK quarts.",
    },
    usPint: {
      formula: (value) => value * 8.80903e12,
      description:
        "Multiply the volume value by 8.80903e12 to convert from cubic miles to US pints.",
    },
    ukPint: {
      formula: (value) => value * 7.3351e12,
      description:
        "Multiply the volume value by 7.3351e12 to convert from cubic miles to UK pints.",
    },
    usCup: {
      formula: (value) => value * 1.76181e13,
      description:
        "Multiply the volume value by 1.76181e13 to convert from cubic miles to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 1.40945e14,
      description:
        "Multiply the volume value by 1.40945e14 to convert from cubic miles to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 1.46696e14,
      description:
        "Multiply the volume value by 1.46696e14 to convert from cubic miles to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 2.54431e14,
      description:
        "Multiply the volume value by 2.54431e14 to convert from cubic miles to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value * 1.47198e11,
      description:
        "Multiply the volume value by 1.47198e11 to convert from cubic miles to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from cubic miles to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value * 5.45177e9,
      description:
        "Multiply the volume value by 5.45177e9 to convert from cubic miles to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 2.81891e14,
      description:
        "Multiply the volume value by 2.81891e14 to convert from cubic miles to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 2.34536e14,
      description:
        "Multiply the volume value by 2.34536e14 to convert from cubic miles to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 8.45673e14,
      description:
        "Multiply the volume value by 8.45673e14 to convert from cubic miles to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 7.03608e14,
      description:
        "Multiply the volume value by 7.03608e14 to convert from cubic miles to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value * 2.51989e10,
      description:
        "Multiply the volume value by 2.51989e10 to convert from cubic miles to oil barrels.",
    },
  },
  cubicYard: {
    liter: {
      formula: (value) => value * 764.555,
      description:
        "Multiply the volume value by 764.555 to convert from cubic yards to liters.",
    },
    milliliter: {
      formula: (value) => value * 764555,
      description:
        "Multiply the volume value by 764555 to convert from cubic yards to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 1.30795,
      description:
        "Divide the volume value by 1.30795 to convert from cubic yards to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 764555,
      description:
        "Multiply the volume value by 764555 to convert from cubic yards to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 1.30795e9,
      description:
        "Divide the volume value by 1.30795e9 to convert from cubic yards to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 7.64555e8,
      description:
        "Multiply the volume value by 7.64555e8 to convert from cubic yards to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value * 201.974,
      description:
        "Multiply the volume value by 201.974 to convert from cubic yards to US gallons.",
    },
    ukGallon: {
      formula: (value) => value * 168.178,
      description:
        "Multiply the volume value by 168.178 to convert from cubic yards to UK gallons.",
    },
    usQuart: {
      formula: (value) => value * 807.897,
      description:
        "Multiply the volume value by 807.897 to convert from cubic yards to US quarts.",
    },
    ukQuart: {
      formula: (value) => value * 672.712,
      description:
        "Multiply the volume value by 672.712 to convert from cubic yards to UK quarts.",
    },
    usPint: {
      formula: (value) => value * 1615.79,
      description:
        "Multiply the volume value by 1615.79 to convert from cubic yards to US pints.",
    },
    ukPint: {
      formula: (value) => value * 1345.42,
      description:
        "Multiply the volume value by 1345.42 to convert from cubic yards to UK pints.",
    },
    usCup: {
      formula: (value) => value * 3231.58,
      description:
        "Multiply the volume value by 3231.58 to convert from cubic yards to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 25852.7,
      description:
        "Multiply the volume value by 25852.7 to convert from cubic yards to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 26818.4,
      description:
        "Multiply the volume value by 26818.4 to convert from cubic yards to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 46656,
      description:
        "Multiply the volume value by 46656 to convert from cubic yards to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value * 27,
      description:
        "Multiply the volume value by 27 to convert from cubic yards to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 5.45177e9,
      description:
        "Divide the volume value by 5.45177e9 to convert from cubic yards to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from cubic yards to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 51705.3,
      description:
        "Multiply the volume value by 51705.3 to convert from cubic yards to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 43091.8,
      description:
        "Multiply the volume value by 43091.8 to convert from cubic yards to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 155116,
      description:
        "Multiply the volume value by 155116 to convert from cubic yards to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 129275,
      description:
        "Multiply the volume value by 129275 to convert from cubic yards to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value * 4.8089,
      description:
        "Multiply the volume value by 4.8089 to convert from cubic yards to oil barrels.",
    },
  },
  usTablespoon: {
    liter: {
      formula: (value) => value * 0.0147868,
      description:
        "Multiply the volume value by 0.0147868 to convert from US tablespoons to liters.",
    },
    milliliter: {
      formula: (value) => value * 14.7868,
      description:
        "Multiply the volume value by 14.7868 to convert from US tablespoons to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 67628,
      description:
        "Divide the volume value by 67628 to convert from US tablespoons to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 14.7868,
      description:
        "Multiply the volume value by 14.7868 to convert from US tablespoons to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 6.7628e13,
      description:
        "Divide the volume value by 6.7628e13 to convert from US tablespoons to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 14786.8,
      description:
        "Multiply the volume value by 14786.8 to convert from US tablespoons to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 256,
      description:
        "Divide the volume value by 256 to convert from US tablespoons to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 307.443,
      description:
        "Divide the volume value by 307.443 to convert from US tablespoons to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 64,
      description:
        "Divide the volume value by 64 to convert from US tablespoons to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 76.8608,
      description:
        "Divide the volume value by 76.8608 to convert from US tablespoons to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 32,
      description:
        "Divide the volume value by 32 to convert from US tablespoons to US pints.",
    },
    ukPint: {
      formula: (value) => value / 38.4304,
      description:
        "Divide the volume value by 38.4304 to convert from US tablespoons to UK pints.",
    },
    usCup: {
      formula: (value) => value / 16,
      description:
        "Divide the volume value by 16 to convert from US tablespoons to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value / 2,
      description:
        "Divide the volume value by 2 to convert from US tablespoons to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 0.96076,
      description:
        "Multiply the volume value by 0.96076 to convert from US tablespoons to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value / 1.10823,
      description:
        "Divide the volume value by 1.10823 to convert from US tablespoons to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 1915.01,
      description:
        "Divide the volume value by 1915.01 to convert from US tablespoons to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 2.81891e14,
      description:
        "Divide the volume value by 2.81891e14 to convert from US tablespoons to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 51705.3,
      description:
        "Divide the volume value by 51705.3 to convert from US tablespoons to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from US tablespoons to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 0.96076,
      description:
        "Multiply the volume value by 0.96076 to convert from US tablespoons to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 3,
      description:
        "Multiply the volume value by 3 to convert from US tablespoons to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 2.88227,
      description:
        "Multiply the volume value by 2.88227 to convert from US tablespoons to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 5376,
      description:
        "Divide the volume value by 5376 to convert from US tablespoons to oil barrels.",
    },
  },
  ukTablespoon: {
    liter: {
      formula: (value) => value * 0.0177582,
      description:
        "Multiply the volume value by 0.0177582 to convert from UK tablespoons to liters.",
    },
    milliliter: {
      formula: (value) => value * 17.7582,
      description:
        "Multiply the volume value by 17.7582 to convert from UK tablespoons to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 56312.1,
      description:
        "Divide the volume value by 56312.1 to convert from UK tablespoons to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 17.7582,
      description:
        "Multiply the volume value by 17.7582 to convert from UK tablespoons to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 5.63121e13,
      description:
        "Divide the volume value by 5.63121e13 to convert from UK tablespoons to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 17758.2,
      description:
        "Multiply the volume value by 17758.2 to convert from UK tablespoons to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 307.443,
      description:
        "Divide the volume value by 307.443 to convert from UK tablespoons to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 256,
      description:
        "Divide the volume value by 256 to convert from UK tablespoons to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 76.8608,
      description:
        "Divide the volume value by 76.8608 to convert from UK tablespoons to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 64,
      description:
        "Divide the volume value by 64 to convert from UK tablespoons to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 38.4304,
      description:
        "Divide the volume value by 38.4304 to convert from UK tablespoons to US pints.",
    },
    ukPint: {
      formula: (value) => value / 32,
      description:
        "Divide the volume value by 32 to convert from UK tablespoons to UK pints.",
    },
    usCup: {
      formula: (value) => value / 19.2152,
      description:
        "Divide the volume value by 19.2152 to convert from UK tablespoons to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value / 1.66535,
      description:
        "Divide the volume value by 1.66535 to convert from UK tablespoons to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value / 1.6,
      description:
        "Divide the volume value by 1.6 to convert from UK tablespoons to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value / 1.04084,
      description:
        "Divide the volume value by 1.04084 to convert from UK tablespoons to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 1594.58,
      description:
        "Divide the volume value by 1594.58 to convert from UK tablespoons to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 2.34536e14,
      description:
        "Divide the volume value by 2.34536e14 to convert from UK tablespoons to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 43091.8,
      description:
        "Divide the volume value by 43091.8 to convert from UK tablespoons to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 1.04084,
      description:
        "Multiply the volume value by 1.04084 to convert from UK tablespoons to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from UK tablespoons to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 3.12252,
      description:
        "Multiply the volume value by 3.12252 to convert from UK tablespoons to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 3,
      description:
        "Multiply the volume value by 3 to convert from UK tablespoons to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 5376,
      description:
        "Divide the volume value by 5376 to convert from UK tablespoons to oil barrels.",
    },
  },
  usTeaspoon: {
    liter: {
      formula: (value) => value * 0.00492892,
      description:
        "Multiply the volume value by 0.00492892 to convert from US teaspoons to liters.",
    },
    milliliter: {
      formula: (value) => value * 4.92892,
      description:
        "Multiply the volume value by 4.92892 to convert from US teaspoons to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 202884,
      description:
        "Divide the volume value by 202884 to convert from US teaspoons to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 4.92892,
      description:
        "Multiply the volume value by 4.92892 to convert from US teaspoons to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 2.02884e14,
      description:
        "Divide the volume value by 2.02884e14 to convert from US teaspoons to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 4928.92,
      description:
        "Multiply the volume value by 4928.92 to convert from US teaspoons to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 768,
      description:
        "Divide the volume value by 768 to convert from US teaspoons to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 922.33,
      description:
        "Divide the volume value by 922.33 to convert from US teaspoons to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 192,
      description:
        "Divide the volume value by 192 to convert from US teaspoons to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 230.582,
      description:
        "Divide the volume value by 230.582 to convert from US teaspoons to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 96,
      description:
        "Divide the volume value by 96 to convert from US teaspoons to US pints.",
    },
    ukPint: {
      formula: (value) => value / 115.291,
      description:
        "Divide the volume value by 115.291 to convert from US teaspoons to UK pints.",
    },
    usCup: {
      formula: (value) => value / 48,
      description:
        "Divide the volume value by 48 to convert from US teaspoons to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value / 6,
      description:
        "Divide the volume value by 6 to convert from US teaspoons to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 0.96076,
      description:
        "Multiply the volume value by 0.96076 to convert from US teaspoons to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value / 0.300781,
      description:
        "Divide the volume value by 0.300781 to convert from US teaspoons to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 5745.02,
      description:
        "Divide the volume value by 5745.02 to convert from US teaspoons to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 8.45673e14,
      description:
        "Divide the volume value by 8.45673e14 to convert from US teaspoons to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 155116,
      description:
        "Divide the volume value by 155116 to convert from US teaspoons to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value / 3,
      description:
        "Divide the volume value by 3 to convert from US teaspoons to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value / 3.12252,
      description:
        "Divide the volume value by 3.12252 to convert from US teaspoons to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from US teaspoons to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 0.96076,
      description:
        "Multiply the volume value by 0.96076 to convert from US teaspoons to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 16128,
      description:
        "Divide the volume value by 16128 to convert from US teaspoons to oil barrels.",
    },
  },
  ukTeaspoon: {
    liter: {
      formula: (value) => value * 0.00591939,
      description:
        "Multiply the volume value by 0.00591939 to convert from UK teaspoons to liters.",
    },
    milliliter: {
      formula: (value) => value * 5.91939,
      description:
        "Multiply the volume value by 5.91939 to convert from UK teaspoons to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 168936,
      description:
        "Divide the volume value by 168936 to convert from UK teaspoons to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 5.91939,
      description:
        "Multiply the volume value by 5.91939 to convert from UK teaspoons to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 1.68936e14,
      description:
        "Divide the volume value by 1.68936e14 to convert from UK teaspoons to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 5919.39,
      description:
        "Multiply the volume value by 5919.39 to convert from UK teaspoons to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value / 767.052,
      description:
        "Divide the volume value by 767.052 to convert from UK teaspoons to US gallons.",
    },
    ukGallon: {
      formula: (value) => value / 768,
      description:
        "Divide the volume value by 768 to convert from UK teaspoons to UK gallons.",
    },
    usQuart: {
      formula: (value) => value / 191.763,
      description:
        "Divide the volume value by 191.763 to convert from UK teaspoons to US quarts.",
    },
    ukQuart: {
      formula: (value) => value / 192,
      description:
        "Divide the volume value by 192 to convert from UK teaspoons to UK quarts.",
    },
    usPint: {
      formula: (value) => value / 95.8819,
      description:
        "Divide the volume value by 95.8819 to convert from UK teaspoons to US pints.",
    },
    ukPint: {
      formula: (value) => value / 96,
      description:
        "Divide the volume value by 96 to convert from UK teaspoons to UK pints.",
    },
    usCup: {
      formula: (value) => value / 47.9409,
      description:
        "Divide the volume value by 47.9409 to convert from UK teaspoons to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value / 4.99605,
      description:
        "Divide the volume value by 4.99605 to convert from UK teaspoons to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value / 4.8,
      description:
        "Divide the volume value by 4.8 to convert from UK teaspoons to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value / 0.300781,
      description:
        "Divide the volume value by 0.300781 to convert from UK teaspoons to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value / 4783.75,
      description:
        "Divide the volume value by 4783.75 to convert from UK teaspoons to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 7.03608e14,
      description:
        "Divide the volume value by 7.03608e14 to convert from UK teaspoons to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 129275,
      description:
        "Divide the volume value by 129275 to convert from UK teaspoons to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value / 3.12252,
      description:
        "Divide the volume value by 3.12252 to convert from UK teaspoons to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value / 3,
      description:
        "Divide the volume value by 3 to convert from UK teaspoons to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 1.04084,
      description:
        "Multiply the volume value by 1.04084 to convert from UK teaspoons to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from UK teaspoons to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value / 16128,
      description:
        "Divide the volume value by 16128 to convert from UK teaspoons to oil barrels.",
    },
  },
  oilBarrel: {
    liter: {
      formula: (value) => value * 158.987,
      description:
        "Multiply the volume value by 158.987 to convert from oil barrels to liters.",
    },
    milliliter: {
      formula: (value) => value * 158987,
      description:
        "Multiply the volume value by 158987 to convert from oil barrels to milliliters.",
    },
    cubicMeter: {
      formula: (value) => value / 6.28981,
      description:
        "Divide the volume value by 6.28981 to convert from oil barrels to cubic meters.",
    },
    cubicCentimeter: {
      formula: (value) => value * 158987,
      description:
        "Multiply the volume value by 158987 to convert from oil barrels to cubic centimeters.",
    },
    cubicKilometer: {
      formula: (value) => value / 6.28981e9,
      description:
        "Divide the volume value by 6.28981e9 to convert from oil barrels to cubic kilometers.",
    },
    cubicMillimeter: {
      formula: (value) => value * 1.58987e8,
      description:
        "Multiply the volume value by 1.58987e8 to convert from oil barrels to cubic millimeters.",
    },
    usGallon: {
      formula: (value) => value * 42,
      description:
        "Multiply the volume value by 42 to convert from oil barrels to US gallons.",
    },
    ukGallon: {
      formula: (value) => value * 34.9723,
      description:
        "Multiply the volume value by 34.9723 to convert from oil barrels to UK gallons.",
    },
    usQuart: {
      formula: (value) => value * 168,
      description:
        "Multiply the volume value by 168 to convert from oil barrels to US quarts.",
    },
    ukQuart: {
      formula: (value) => value * 139.889,
      description:
        "Multiply the volume value by 139.889 to convert from oil barrels to UK quarts.",
    },
    usPint: {
      formula: (value) => value * 336,
      description:
        "Multiply the volume value by 336 to convert from oil barrels to US pints.",
    },
    ukPint: {
      formula: (value) => value * 279.778,
      description:
        "Multiply the volume value by 279.778 to convert from oil barrels to UK pints.",
    },
    usCup: {
      formula: (value) => value * 672,
      description:
        "Multiply the volume value by 672 to convert from oil barrels to US cups.",
    },
    usFluidOunce: {
      formula: (value) => value * 5376,
      description:
        "Multiply the volume value by 5376 to convert from oil barrels to US fluid ounces.",
    },
    ukFluidOunce: {
      formula: (value) => value * 5595.56,
      description:
        "Multiply the volume value by 5595.56 to convert from oil barrels to UK fluid ounces.",
    },
    cubicInch: {
      formula: (value) => value * 9702,
      description:
        "Multiply the volume value by 9702 to convert from oil barrels to cubic inches.",
    },
    cubicFoot: {
      formula: (value) => value * 5.61458,
      description:
        "Multiply the volume value by 5.61458 to convert from oil barrels to cubic feet.",
    },
    cubicMile: {
      formula: (value) => value / 2.51989e10,
      description:
        "Divide the volume value by 2.51989e10 to convert from oil barrels to cubic miles.",
    },
    cubicYard: {
      formula: (value) => value / 4.8089,
      description:
        "Divide the volume value by 4.8089 to convert from oil barrels to cubic yards.",
    },
    usTablespoon: {
      formula: (value) => value * 8192,
      description:
        "Multiply the volume value by 8192 to convert from oil barrels to US tablespoons.",
    },
    ukTablespoon: {
      formula: (value) => value * 6825.84,
      description:
        "Multiply the volume value by 6825.84 to convert from oil barrels to UK tablespoons.",
    },
    usTeaspoon: {
      formula: (value) => value * 24576,
      description:
        "Multiply the volume value by 24576 to convert from oil barrels to US teaspoons.",
    },
    ukTeaspoon: {
      formula: (value) => value * 20477.5,
      description:
        "Multiply the volume value by 20477.5 to convert from oil barrels to UK teaspoons.",
    },
    oilBarrel: {
      formula: (value) => value,
      description:
        "The volume value remains the same to convert from oil barrels to oil barrels.",
    },
  },
};
