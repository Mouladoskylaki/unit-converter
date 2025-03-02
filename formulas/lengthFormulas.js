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
        },
        micrometers: {
            formula: (value) => value * 1e6,
            description: "Multiply the length value by 1,000,000."
        },
        nanometers: {
            formula: (value) => value * 1e9,
            description: "Multiply the length value by 1,000,000,000."
        },
        miles: {
            formula: (value) => value / 1609.344,
            description: "Divide the length value by 1609.344."
        },
        yards: {
            formula: (value) => value * 1.093613,
            description: "Multiply the length value by 1.093613."
        },
        feet: {
            formula: (value) => value * 3.28084,
            description: "Multiply the length value by 3.28084."
        },
        inches: {
            formula: (value) => value * 39.3701,
            description: "Multiply the length value by 39.3701."
        },
        nauticalMiles: {
            formula: (value) => value / 1852,
            description: "Divide the length value by 1852."
        },
        lightYears: {
            formula: (value) => value / 9.461e15,
            description: "Divide the length value by 9.461e+15."
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
        },
        micrometers: {
            formula: (value) => value * 1e9,
            description: "Multiply the length value by 1,000,000,000."
        },
        nanometers: {
            formula: (value) => value * 1e12,
            description: "Multiply the length value by 1,000,000,000,000."
        },
        miles: {
            formula: (value) => value / 1.609344,
            description: "Divide the length value by 1.609344."
        },
        yards: {
            formula: (value) => value * 1093.613,
            description: "Multiply the length value by 1093.613."
        },
        feet: {
            formula: (value) => value * 3280.84,
            description: "Multiply the length value by 3280.84."
        },
        inches: {
            formula: (value) => value * 39370.1,
            description: "Multiply the length value by 39370.1."
        },
        nauticalMiles: {
            formula: (value) => value / 1.852,
            description: "Divide the length value by 1.852."
        },
        lightYears: {
            formula: (value) => value / 9.461e12,
            description: "Divide the length value by 9.461e+12."
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
        },
        micrometers: {
            formula: (value) => value * 10000,
            description: "Multiply the length value by 10,000."
        },
        nanometers: {
            formula: (value) => value * 1e7,
            description: "Multiply the length value by 10,000,000."
        },
        miles: {
            formula: (value) => value / 160934.4,
            description: "Divide the length value by 160,934.4."
        },
        yards: {
            formula: (value) => value / 91.44,
            description: "Divide the length value by 91.44."
        },
        feet: {
            formula: (value) => value / 30.48,
            description: "Divide the length value by 30.48."
        },
        inches: {
            formula: (value) => value / 2.54,
            description: "Divide the length value by 2.54."
        },
        nauticalMiles: {
            formula: (value) => value / 185200,
            description: "Divide the length value by 185,200."
        },
        lightYears: {
            formula: (value) => value / 9.461e17,
            description: "Divide the length value by 9.461e+17."
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
        },
        micrometers: {
            formula: (value) => value * 1000,
            description: "Multiply the length value by 1000."
        },
        nanometers: {
            formula: (value) => value * 1e6,
            description: "Multiply the length value by 1,000,000."
        },
        miles: {
            formula: (value) => value / 1.609e6,
            description: "Divide the length value by 1,609,344."
        },
        yards: {
            formula: (value) => value / 914.4,
            description: "Divide the length value by 914.4."
        },
        feet: {
            formula: (value) => value / 304.8,
            description: "Divide the length value by 304.8."
        },
        inches: {
            formula: (value) => value / 25.4,
            description: "Divide the length value by 25.4."
        },
        nauticalMiles: {
            formula: (value) => value / 1.852e6,
            description: "Divide the length value by 1,852,000."
        },
        lightYears: {
            formula: (value) => value / 9.461e18,
            description: "Divide the length value by 9.461e+18."
        }
    },
    micrometers: {
        meters: {
            formula: (value) => value / 1e6,
            description: "Divide the length value by 1,000,000."
        },
        kilometers: {
            formula: (value) => value / 1e9,
            description: "Divide the length value by 1,000,000,000."
        },
        centimeters: {
            formula: (value) => value / 10000,
            description: "Divide the length value by 10,000."
        },
        millimeters: {
            formula: (value) => value / 1000,
            description: "Divide the length value by 1000."
        },
        nanometers: {
            formula: (value) => value * 1000,
            description: "Multiply the length value by 1000."
        },
        miles: {
            formula: (value) => value / 1.609e9,
            description: "Divide the length value by 1,609,000,000."
        },
        yards: {
            formula: (value) => value / 914400,
            description: "Divide the length value by 914,400."
        },
        feet: {
            formula: (value) => value / 304800,
            description: "Divide the length value by 304,800."
        },
        inches: {
            formula: (value) => value / 25400,
            description: "Divide the length value by 25,400."
        },
        nauticalMiles: {
            formula: (value) => value / 1.852e9,
            description: "Divide the length value by 1,852,000,000."
        },
        lightYears: {
            formula: (value) => value / 9.461e21,
            description: "Divide the length value by 9.461e+21."
        }
    },
    nanometers: {
        meters: {
            formula: (value) => value / 1e9,
            description: "Divide the length value by 1,000,000,000."
        },
        kilometers: {
            formula: (value) => value / 1e12,
            description: "Divide the length value by 1,000,000,000,000."
        },
        centimeters: {
            formula: (value) => value / 1e7,
            description: "Divide the length value by 10,000,000."
        },
        millimeters: {
            formula: (value) => value / 1e6,
            description: "Divide the length value by 1,000,000."
        },
        micrometers: {
            formula: (value) => value / 1000,
            description: "Divide the length value by 1000."
        },
        miles: {
            formula: (value) => value / 1.609e12,
            description: "Divide the length value by 1,609,000,000,000."
        },
        yards: {
            formula: (value) => value / 9.144e8,
            description: "Divide the length value by 914,400,000."
        },
        feet: {
            formula: (value) => value / 3.048e8,
            description: "Divide the length value by 304,800,000."
        },
        inches: {
            formula: (value) => value / 2.54e7,
            description: "Divide the length value by 25,400,000."
        },
        nauticalMiles: {
            formula: (value) => value / 1.852e12,
            description: "Divide the length value by 1,852,000,000,000."
        },
        lightYears: {
            formula: (value) => value / 9.461e24,
            description: "Divide the length value by 9.461e+24."
        }
    },
    miles: {
        meters: {
            formula: (value) => value * 1609.344,
            description: "Multiply the length value by 1609.344."
        },
        kilometers: {
            formula: (value) => value * 1.609344,
            description: "Multiply the length value by 1.609344."
        },
        centimeters: {
            formula: (value) => value * 160934.4,
            description: "Multiply the length value by 160,934.4."
        },
        millimeters: {
            formula: (value) => value * 1.609e6,
            description: "Multiply the length value by 1,609,000."
        },
        micrometers: {
            formula: (value) => value * 1.609e9,
            description: "Multiply the length value by 1,609,000,000."
        },
        nanometers: {
            formula: (value) => value * 1.609e12,
            description: "Multiply the length value by 1,609,000,000,000."
        },
        yards: {
            formula: (value) => value * 1760,
            description: "Multiply the length value by 1760."
        },
        feet: {
            formula: (value) => value * 5280,
            description: "Multiply the length value by 5280."
        },
        inches: {
            formula: (value) => value * 63360,
            description: "Multiply the length value by 63,360."
        },
        nauticalMiles: {
            formula: (value) => value / 1.150779,
            description: "Divide the length value by 1.150779."
        },
        lightYears: {
            formula: (value) => value / 5.879e12,
            description: "Divide the length value by 5.879e+12."
        }
    },
    yards: {
        meters: {
            formula: (value) => value / 1.093613,
            description: "Divide the length value by 1.093613."
        },
        kilometers: {
            formula: (value) => value / 1093.613,
            description: "Divide the length value by 1093.613."
        },
        centimeters: {
            formula: (value) => value * 91.44,
            description: "Multiply the length value by 91.44."
        },
        millimeters: {
            formula: (value) => value * 914.4,
            description: "Multiply the length value by 914.4."
        },
        micrometers: {
            formula: (value) => value * 914400,
            description: "Multiply the length value by 914,400."
        },
        nanometers: {
            formula: (value) => value * 9.144e8,
            description: "Multiply the length value by 914,400,000."
        },
        miles: {
            formula: (value) => value / 1760,
            description: "Divide the length value by 1760."
        },
        feet: {
            formula: (value) => value * 3,
            description: "Multiply the length value by 3."
        },
        inches: {
            formula: (value) => value * 36,
            description: "Multiply the length value by 36."
        },
        nauticalMiles: {
            formula: (value) => value / 2025.372,
            description: "Divide the length value by 2025.372."
        },
        lightYears: {
            formula: (value) => value / 1.035e16,
            description: "Divide the length value by 1.035e+16."
        }
    },
    feet: {
        meters: {
            formula: (value) => value / 3.28084,
            description: "Divide the length value by 3.28084."
        },
        kilometers: {
            formula: (value) => value / 3280.84,
            description: "Divide the length value by 3280.84."
        },
        centimeters: {
            formula: (value) => value * 30.48,
            description: "Multiply the length value by 30.48."
        },
        millimeters: {
            formula: (value) => value * 304.8,
            description: "Multiply the length value by 304.8."
        },
        micrometers: {
            formula: (value) => value * 304800,
            description: "Multiply the length value by 304,800."
        },
        nanometers: {
            formula: (value) => value * 3.048e8,
            description: "Multiply the length value by 304,800,000."
        },
        miles: {
            formula: (value) => value / 5280,
            description: "Divide the length value by 5280."
        },
        yards: {
            formula: (value) => value / 3,
            description: "Divide the length value by 3."
        },
        inches: {
            formula: (value) => value * 12,
            description: "Multiply the length value by 12."
        },
        nauticalMiles: {
            formula: (value) => value / 6076.115,
            description: "Divide the length value by 6076.115."
        },
        lightYears: {
            formula: (value) => value / 3.104e16,
            description: "Divide the length value by 3.104e+16."
        }
    },
    inches: {
        meters: {
            formula: (value) => value / 39.3701,
            description: "Divide the length value by 39.3701."
        },
        kilometers: {
            formula: (value) => value / 39370.1,
            description: "Divide the length value by 39370.1."
        },
        centimeters: {
            formula: (value) => value * 2.54,
            description: "Multiply the length value by 2.54."
        },
        millimeters: {
            formula: (value) => value * 25.4,
            description: "Multiply the length value by 25.4."
        },
        micrometers: {
            formula: (value) => value * 25400,
            description: "Multiply the length value by 25,400."
        },
        nanometers: {
            formula: (value) => value * 2.54e7,
            description: "Multiply the length value by 25,400,000."
        },
        miles: {
            formula: (value) => value / 63360,
            description: "Divide the length value by 63,360."
        },
        yards: {
            formula: (value) => value / 36,
            description: "Divide the length value by 36."
        },
        feet: {
            formula: (value) => value / 12,
            description: "Divide the length value by 12."
        },
        nauticalMiles: {
            formula: (value) => value / 72913.39,
            description: "Divide the length value by 72,913.39."
        },
        lightYears: {
            formula: (value) => value / 3.725e17,
            description: "Divide the length value by 3.725e+17."
        }
    },
    nauticalMiles: {
        meters: {
            formula: (value) => value * 1852,
            description: "Multiply the length value by 1852."
        },
        kilometers: {
            formula: (value) => value * 1.852,
            description: "Multiply the length value by 1.852."
        },
        centimeters: {
            formula: (value) => value * 185200,
            description: "Multiply the length value by 185,200."
        },
        millimeters: {
            formula: (value) => value * 1.852e6,
            description: "Multiply the length value by 1,852,000."
        },
        micrometers: {
            formula: (value) => value * 1.852e9,
            description: "Multiply the length value by 1,852,000,000."
        },
        nanometers: {
            formula: (value) => value * 1.852e12,
            description: "Multiply the length value by 1,852,000,000,000."
        },
        miles: {
            formula: (value) => value * 1.150779,
            description: "Multiply the length value by 1.150779."
        },
        yards: {
            formula: (value) => value * 2025.372,
            description: "Multiply the length value by 2025.372."
        },
        feet: {
            formula: (value) => value * 6076.115,
            description: "Multiply the length value by 6076.115."
        },
        inches: {
            formula: (value) => value * 72913.39,
            description: "Multiply the length value by 72,913.39."
        },
        lightYears: {
            formula: (value) => value / 5.108e12,
            description: "Divide the length value by 5.108e+12."
        }
    },
    lightYears: {
        meters: {
            formula: (value) => value * 9.461e15,
            description: "Multiply the length value by 9.461e+15."
        },
        kilometers: {
            formula: (value) => value * 9.461e12,
            description: "Multiply the length value by 9.461e+12."
        },
        centimeters: {
            formula: (value) => value * 9.461e17,
            description: "Multiply the length value by 9.461e+17."
        },
        millimeters: {
            formula: (value) => value * 9.461e18,
            description: "Multiply the length value by 9.461e+18."
        },
        micrometers: {
            formula: (value) => value * 9.461e21,
            description: "Multiply the length value by 9.461e+21."
        },
        nanometers: {
            formula: (value) => value * 9.461e24,
            description: "Multiply the length value by 9.461e+24."
        },
        miles: {
            formula: (value) => value * 5.879e12,
            description: "Multiply the length value by 5.879e+12."
        },
        yards: {
            formula: (value) => value * 1.035e16,
            description: "Multiply the length value by 1.035e+16."
        },
        feet: {
            formula: (value) => value * 3.104e16,
            description: "Multiply the length value by 3.104e+16."
        },
        inches: {
            formula: (value) => value * 3.725e17,
            description: "Multiply the length value by 3.725e+17."
        },
        nauticalMiles: {
            formula: (value) => value * 5.108e12,
            description: "Multiply the length value by 5.108e+12."
        }
    }
}