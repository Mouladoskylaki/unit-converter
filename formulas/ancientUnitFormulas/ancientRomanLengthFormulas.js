export const ancientRomanLengthFormulas = {
    // Modern Units
    meters: {
        centimeters: {
            formula: (value) => value * 100,
            description: "Multiply the length value by 100."
        },
        kilometers: {
            formula: (value) => value / 1000,
            description: "Divide the length value by 1000."
        },
        feet: {
            formula: (value) => value * 3.28084,
            description: "Multiply the length value by 3.28084 to convert to feet."
        },
        inches: {
            formula: (value) => value * 39.3701,
            description: "Multiply the length value by 39.3701 to convert to inches."
        },
        yards: {
            formula: (value) => value * 1.09361,
            description: "Multiply the length value by 1.09361 to convert to yards."
        },
        digitus: {
            formula: (value) => value * 54.054,
            description: "Multiply the length value by 54.054 to convert to digitus (Roman finger width)."
        },
        uncia: {
            formula: (value) => value * 40.65,
            description: "Multiply the length value by 40.65 to convert to uncia (Roman inch)."
        },
        pes: {
            formula: (value) => value * 3.378,
            description: "Multiply the length value by 3.378 to convert to pes (Roman foot)."
        },
        palmus: {
            formula: (value) => value * 13.514,
            description: "Multiply the length value by 13.514 to convert to palmus (Roman palm width)."
        },
        cubit: {
            formula: (value) => value * 2.252,
            description: "Multiply the length value by 2.252 to convert to cubit (Roman cubitus)."
        },
        passus: {
            formula: (value) => value * 0.6757,
            description: "Multiply the length value by 0.6757 to convert to passus (Roman pace)."
        },
        millePassus: {
            formula: (value) => value * 0.0006757,
            description: "Multiply the length value by 0.0006757 to convert to mille passus (Roman mile)."
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
        feet: {
            formula: (value) => value * 0.0328084,
            description: "Multiply the length value by 0.0328084 to convert to feet."
        },
        inches: {
            formula: (value) => value * 0.393701,
            description: "Multiply the length value by 0.393701 to convert to inches."
        },
        yards: {
            formula: (value) => value * 0.0109361,
            description: "Multiply the length value by 0.0109361 to convert to yards."
        },
        digitus: {
            formula: (value) => value * 0.54054,
            description: "Multiply the length value by 0.54054 to convert to digitus (Roman finger width)."
        },
        uncia: {
            formula: (value) => value * 0.4065,
            description: "Multiply the length value by 0.4065 to convert to uncia (Roman inch)."
        },
        pes: {
            formula: (value) => value * 0.03378,
            description: "Multiply the length value by 0.03378 to convert to pes (Roman foot)."
        },
        palmus: {
            formula: (value) => value * 0.13514,
            description: "Multiply the length value by 0.13514 to convert to palmus (Roman palm width)."
        },
        cubit: {
            formula: (value) => value * 0.02252,
            description: "Multiply the length value by 0.02252 to convert to cubit (Roman cubitus)."
        },
        passus: {
            formula: (value) => value * 0.006757,
            description: "Multiply the length value by 0.006757 to convert to passus (Roman pace)."
        },
        millePassus: {
            formula: (value) => value * 0.000006757,
            description: "Multiply the length value by 0.000006757 to convert to mille passus (Roman mile)."
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
        feet: {
            formula: (value) => value * 3280.84,
            description: "Multiply the length value by 3280.84 to convert to feet."
        },
        inches: {
            formula: (value) => value * 39370.1,
            description: "Multiply the length value by 39370.1 to convert to inches."
        },
        yards: {
            formula: (value) => value * 1093.61,
            description: "Multiply the length value by 1093.61 to convert to yards."
        },
        digitus: {
            formula: (value) => value * 54054,
            description: "Multiply the length value by 54054 to convert to digitus (Roman finger width)."
        },
        uncia: {
            formula: (value) => value * 40650,
            description: "Multiply the length value by 40650 to convert to uncia (Roman inch)."
        },
        pes: {
            formula: (value) => value * 3378,
            description: "Multiply the length value by 3378 to convert to pes (Roman foot)."
        },
        palmus: {
            formula: (value) => value * 13514,
            description: "Multiply the length value by 13514 to convert to palmus (Roman palm width)."
        },
        cubit: {
            formula: (value) => value * 2252,
            description: "Multiply the length value by 2252 to convert to cubit (Roman cubitus)."
        },
        passus: {
            formula: (value) => value * 675.7,
            description: "Multiply the length value by 675.7 to convert to passus (Roman pace)."
        },
        millePassus: {
            formula: (value) => value * 0.6757,
            description: "Multiply the length value by 0.6757 to convert to mille passus (Roman mile)."
        }
    },
    feet: {
        meters: {
            formula: (value) => value * 0.3048,
            description: "Multiply the length value by 0.3048 to convert to meters."
        },
        centimeters: {
            formula: (value) => value * 30.48,
            description: "Multiply the length value by 30.48 to convert to centimeters."
        },
        kilometers: {
            formula: (value) => value * 0.0003048,
            description: "Multiply the length value by 0.0003048 to convert to kilometers."
        },
        inches: {
            formula: (value) => value * 12,
            description: "Multiply the length value by 12 to convert to inches."
        },
        yards: {
            formula: (value) => value * 0.333333,
            description: "Multiply the length value by 0.333333 to convert to yards."
        },
        digitus: {
            formula: (value) => value * 16.48,
            description: "Multiply the length value by 16.48 to convert to digitus (Roman finger width)."
        },
        uncia: {
            formula: (value) => value * 12.36,
            description: "Multiply the length value by 12.36 to convert to uncia (Roman inch)."
        },
        pes: {
            formula: (value) => value * 1.028,
            description: "Multiply the length value by 1.028 to convert to pes (Roman foot)."
        },
        palmus: {
            formula: (value) => value * 4.112,
            description: "Multiply the length value by 4.112 to convert to palmus (Roman palm width)."
        },
        cubit: {
            formula: (value) => value * 0.6857,
            description: "Multiply the length value by 0.6857 to convert to cubit (Roman cubitus)."
        },
        passus: {
            formula: (value) => value * 0.2057,
            description: "Multiply the length value by 0.2057 to convert to passus (Roman pace)."
        },
        millePassus: {
            formula: (value) => value * 0.0002057,
            description: "Multiply the length value by 0.0002057 to convert to mille passus (Roman mile)."
        }
    },
    inches: {
        meters: {
            formula: (value) => value * 0.0254,
            description: "Multiply the length value by 0.0254 to convert to meters."
        },
        centimeters: {
            formula: (value) => value * 2.54,
            description: "Multiply the length value by 2.54 to convert to centimeters."
        },
        kilometers: {
            formula: (value) => value * 0.0000254,
            description: "Multiply the length value by 0.0000254 to convert to kilometers."
        },
        feet: {
            formula: (value) => value * 0.0833333,
            description: "Multiply the length value by 0.0833333 to convert to feet."
        },
        yards: {
            formula: (value) => value * 0.0277778,
            description: "Multiply the length value by 0.0277778 to convert to yards."
        },
        digitus: {
            formula: (value) => value * 1.373,
            description: "Multiply the length value by 1.373 to convert to digitus (Roman finger width)."
        },
        uncia: {
            formula: (value) => value * 1.03,
            description: "Multiply the length value by 1.03 to convert to uncia (Roman inch)."
        },
        pes: {
            formula: (value) => value * 0.0857,
            description: "Multiply the length value by 0.0857 to convert to pes (Roman foot)."
        },
        palmus: {
            formula: (value) => value * 0.3428,
            description: "Multiply the length value by 0.3428 to convert to palmus (Roman palm width)."
        },
        cubit: {
            formula: (value) => value * 0.05714,
            description: "Multiply the length value by 0.05714 to convert to cubit (Roman cubitus)."
        },
        passus: {
            formula: (value) => value * 0.01714,
            description: "Multiply the length value by 0.01714 to convert to passus (Roman pace)."
        },
        millePassus: {
            formula: (value) => value * 0.00001714,
            description: "Multiply the length value by 0.00001714 to convert to mille passus (Roman mile)."
        }
    },
    yards: {
        meters: {
            formula: (value) => value * 0.9144,
            description: "Multiply the length value by 0.9144 to convert to meters."
        },
        centimeters: {
            formula: (value) => value * 91.44,
            description: "Multiply the length value by 91.44 to convert to centimeters."
        },
        kilometers: {
            formula: (value) => value * 0.0009144,
            description: "Multiply the length value by 0.0009144 to convert to kilometers."
        },
        feet: {
            formula: (value) => value * 3,
            description: "Multiply the length value by 3 to convert to feet."
        },
        inches: {
            formula: (value) => value * 36,
            description: "Multiply the length value by 36 to convert to inches."
        },
        digitus: {
            formula: (value) => value * 49.44,
            description: "Multiply the length value by 49.44 to convert to digitus (Roman finger width)."
        },
        uncia: {
            formula: (value) => value * 37.08,
            description: "Multiply the length value by 37.08 to convert to uncia (Roman inch)."
        },
        pes: {
            formula: (value) => value * 3.084,
            description: "Multiply the length value by 3.084 to convert to pes (Roman foot)."
        },
        palmus: {
            formula: (value) => value * 12.336,
            description: "Multiply the length value by 12.336 to convert to palmus (Roman palm width)."
        },
        cubit: {
            formula: (value) => value * 2.056,
            description: "Multiply the length value by 2.056 to convert to cubit (Roman cubitus)."
        },
        passus: {
            formula: (value) => value * 0.617,
            description: "Multiply the length value by 0.617 to convert to passus (Roman pace)."
        },
        millePassus: {
            formula: (value) => value * 0.000617,
            description: "Multiply the length value by 0.000617 to convert to mille passus (Roman mile)."
        }
    },
    // Ancient Roman Units
    digitus: {
        meters: {
            formula: (value) => value * 0.0185,
            description: "Multiply the length value by 0.0185 to convert to meters."
        },
        centimeters: {
            formula: (value) => value * 1.85,
            description: "Multiply the length value by 1.85 to convert to centimeters."
        },
        kilometers: {
            formula: (value) => value * 0.0000185,
            description: "Multiply the length value by 0.0000185 to convert to kilometers."
        },
        feet: {
            formula: (value) => value * 0.0607,
            description: "Multiply the length value by 0.0607 to convert to feet."
        },
        inches: {
            formula: (value) => value * 0.728,
            description: "Multiply the length value by 0.728 to convert to inches."
        },
        yards: {
            formula: (value) => value * 0.0202,
            description: "Multiply the length value by 0.0202 to convert to yards."
        },
        uncia: {
            formula: (value) => value * 0.75,
            description: "Multiply the length value by 0.75 to convert to uncia (Roman inch)."
        },
        pes: {
            formula: (value) => value * 0.0625,
            description: "Multiply the length value by 0.0625 to convert to pes (Roman foot)."
        },
        palmus: {
            formula: (value) => value * 0.25,
            description: "Multiply the length value by 0.25 to convert to palmus (Roman palm width)."
        },
        cubit: {
            formula: (value) => value * 0.04167,
            description: "Multiply the length value by 0.04167 to convert to cubit (Roman cubitus)."
        },
        passus: {
            formula: (value) => value * 0.0125,
            description: "Multiply the length value by 0.0125 to convert to passus (Roman pace)."
        },
        millePassus: {
            formula: (value) => value * 0.0000125,
            description: "Multiply the length value by 0.0000125 to convert to mille passus (Roman mile)."
        }
    },
    uncia: {
        meters: {
            formula: (value) => value * 0.0246,
            description: "Multiply the length value by 0.0246 to convert to meters."
        },
        centimeters: {
            formula: (value) => value * 2.46,
            description: "Multiply the length value by 2.46 to convert to centimeters."
        },
        kilometers: {
            formula: (value) => value * 0.0000246,
            description: "Multiply the length value by 0.0000246 to convert to kilometers."
        },
        feet: {
            formula: (value) => value * 0.0807,
            description: "Multiply the length value by 0.0807 to convert to feet."
        },
        inches: {
            formula: (value) => value * 0.968,
            description: "Multiply the length value by 0.968 to convert to inches."
        },
        yards: {
            formula: (value) => value * 0.0269,
            description: "Multiply the length value by 0.0269 to convert to yards."
        },
        digitus: {
            formula: (value) => value * 1.333,
            description: "Multiply the length value by 1.333 to convert to digitus (Roman finger width)."
        },
        pes: {
            formula: (value) => value * 0.0833,
            description: "Multiply the length value by 0.0833 to convert to pes (Roman foot)."
        },
        palmus: {
            formula: (value) => value * 0.333,
            description: "Multiply the length value by 0.333 to convert to palmus (Roman palm width)."
        },
        cubit: {
            formula: (value) => value * 0.0556,
            description: "Multiply the length value by 0.0556 to convert to cubit (Roman cubitus)."
        },
        passus: {
            formula: (value) => value * 0.0167,
            description: "Multiply the length value by 0.0167 to convert to passus (Roman pace)."
        },
        millePassus: {
            formula: (value) => value * 0.0000167,
            description: "Multiply the length value by 0.0000167 to convert to mille passus (Roman mile)."
        }
    },
    pes: {
        meters: {
            formula: (value) => value * 0.296,
            description: "Multiply the length value by 0.296 to convert to meters."
        },
        centimeters: {
            formula: (value) => value * 29.6,
            description: "Multiply the length value by 29.6 to convert to centimeters."
        },
        kilometers: {
            formula: (value) => value * 0.000296,
            description: "Multiply the length value by 0.000296 to convert to kilometers."
        },
        feet: {
            formula: (value) => value * 0.971,
            description: "Multiply the length value by 0.971 to convert to feet."
        },
        inches: {
            formula: (value) => value * 11.65,
            description: "Multiply the length value by 11.65 to convert to inches."
        },
        yards: {
            formula: (value) => value * 0.323,
            description: "Multiply the length value by 0.323 to convert to yards."
        },
        digitus: {
            formula: (value) => value * 16,
            description: "Multiply the length value by 16 to convert to digitus (Roman finger width)."
        },
        uncia: {
            formula: (value) => value * 12,
            description: "Multiply the length value by 12 to convert to uncia (Roman inch)."
        },
        palmus: {
            formula: (value) => value * 4,
            description: "Multiply the length value by 4 to convert to palmus (Roman palm width)."
        },
        cubit: {
            formula: (value) => value * 0.6667,
            description: "Multiply the length value by 0.6667 to convert to cubit (Roman cubitus)."
        },
        passus: {
            formula: (value) => value * 0.2,
            description: "Multiply the length value by 0.2 to convert to passus (Roman pace)."
        },
        millePassus: {
            formula: (value) => value * 0.0002,
            description: "Multiply the length value by 0.0002 to convert to mille passus (Roman mile)."
        }
    },
    palmus: {
        meters: {
            formula: (value) => value * 0.074,
            description: "Multiply the length value by 0.074 to convert to meters."
        },
        centimeters: {
            formula: (value) => value * 7.4,
            description: "Multiply the length value by 7.4 to convert to centimeters."
        },
        kilometers: {
            formula: (value) => value * 0.000074,
            description: "Multiply the length value by 0.000074 to convert to kilometers."
        },
        feet: {
            formula: (value) => value * 0.243,
            description: "Multiply the length value by 0.243 to convert to feet."
        },
        inches: {
            formula: (value) => value * 2.913,
            description: "Multiply the length value by 2.913 to convert to inches."
        },
        yards: {
            formula: (value) => value * 0.0809,
            description: "Multiply the length value by 0.0809 to convert to yards."
        },
        digitus: {
            formula: (value) => value * 4,
            description: "Multiply the length value by 4 to convert to digitus (Roman finger width)."
        },
        uncia: {
            formula: (value) => value * 3,
            description: "Multiply the length value by 3 to convert to uncia (Roman inch)."
        },
        pes: {
            formula: (value) => value * 0.25,
            description: "Multiply the length value by 0.25 to convert to pes (Roman foot)."
        },
        cubit: {
            formula: (value) => value * 0.1667,
            description: "Multiply the length value by 0.1667 to convert to cubit (Roman cubitus)."
        },
        passus: {
            formula: (value) => value * 0.05,
            description: "Multiply the length value by 0.05 to convert to passus (Roman pace)."
        },
        millePassus: {
            formula: (value) => value * 0.00005,
            description: "Multiply the length value by 0.00005 to convert to mille passus (Roman mile)."
        }
    },
    cubit: {
        meters: {
            formula: (value) => value * 0.444,
            description: "Multiply the length value by 0.444 to convert to meters."
        },
        centimeters: {
            formula: (value) => value * 44.4,
            description: "Multiply the length value by 44.4 to convert to centimeters."
        },
        kilometers: {
            formula: (value) => value * 0.000444,
            description: "Multiply the length value by 0.000444 to convert to kilometers."
        },
        feet: {
            formula: (value) => value * 1.457,
            description: "Multiply the length value by 1.457 to convert to feet."
        },
        inches: {
            formula: (value) => value * 17.48,
            description: "Multiply the length value by 17.48 to convert to inches."
        },
        yards: {
            formula: (value) => value * 0.4856,
            description: "Multiply the length value by 0.4856 to convert to yards."
        },
        digitus: {
            formula: (value) => value * 24,
            description: "Multiply the length value by 24 to convert to digitus (Roman finger width)."
        },
        uncia: {
            formula: (value) => value * 18,
            description: "Multiply the length value by 18 to convert to uncia (Roman inch)."
        },
        pes: {
            formula: (value) => value * 1.5,
            description: "Multiply the length value by 1.5 to convert to pes (Roman foot)."
        },
        palmus: {
            formula: (value) => value * 6,
            description: "Multiply the length value by 6 to convert to palmus (Roman palm width)."
        },
        passus: {
            formula: (value) => value * 0.3,
            description: "Multiply the length value by 0.3 to convert to passus (Roman pace)."
        },
        millePassus: {
            formula: (value) => value * 0.0003,
            description: "Multiply the length value by 0.0003 to convert to mille passus (Roman mile)."
        }
    },
    passus: {
        meters: {
            formula: (value) => value * 1.48,
            description: "Multiply the length value by 1.48 to convert to meters."
        },
        centimeters: {
            formula: (value) => value * 148,
            description: "Multiply the length value by 148 to convert to centimeters."
        },
        kilometers: {
            formula: (value) => value * 0.00148,
            description: "Multiply the length value by 0.00148 to convert to kilometers."
        },
        feet: {
            formula: (value) => value * 4.856,
            description: "Multiply the length value by 4.856 to convert to feet."
        },
        inches: {
            formula: (value) => value * 58.27,
            description: "Multiply the length value by 58.27 to convert to inches."
        },
        yards: {
            formula: (value) => value * 1.618,
            description: "Multiply the length value by 1.618 to convert to yards."
        },
        digitus: {
            formula: (value) => value * 80,
            description: "Multiply the length value by 80 to convert to digitus (Roman finger width)."
        },
        uncia: {
            formula: (value) => value * 60,
            description: "Multiply the length value by 60 to convert to uncia (Roman inch)."
        },
        pes: {
            formula: (value) => value * 5,
            description: "Multiply the length value by 5 to convert to pes (Roman foot)."
        },
        palmus: {
            formula: (value) => value * 20,
            description: "Multiply the length value by 20 to convert to palmus (Roman palm width)."
        },
        cubit: {
            formula: (value) => value * 3.333,
            description: "Multiply the length value by 3.333 to convert to cubit (Roman cubitus)."
        },
        millePassus: {
            formula: (value) => value * 0.001,
            description: "Multiply the length value by 0.001 to convert to mille passus (Roman mile)."
        }
    },
    millePassus: {
        meters: {
            formula: (value) => value * 1480,
            description: "Multiply the length value by 1480 to convert to meters."
        },
        centimeters: {
            formula: (value) => value * 148000,
            description: "Multiply the length value by 148000 to convert to centimeters."
        },
        kilometers: {
            formula: (value) => value * 1.48,
            description: "Multiply the length value by 1.48 to convert to kilometers."
        },
        feet: {
            formula: (value) => value * 4856,
            description: "Multiply the length value by 4856 to convert to feet."
        },
        inches: {
            formula: (value) => value * 58270,
            description: "Multiply the length value by 58270 to convert to inches."
        },
        yards: {
            formula: (value) => value * 1618,
            description: "Multiply the length value by 1618 to convert to yards."
        },
        digitus: {
            formula: (value) => value * 80000,
            description: "Multiply the length value by 80000 to convert to digitus (Roman finger width)."
        },
        uncia: {
            formula: (value) => value * 60000,
            description: "Multiply the length value by 60000 to convert to uncia (Roman inch)."
        },
        pes: {
            formula: (value) => value * 5000,
            description: "Multiply the length value by 5000 to convert to pes (Roman foot)."
        },
        palmus: {
            formula: (value) => value * 20000,
            description: "Multiply the length value by 20000 to convert to palmus (Roman palm width)."
        },
        cubit: {
            formula: (value) => value * 3333.333,
            description: "Multiply the length value by 3333.333 to convert to cubit (Roman cubitus)."
        },
        passus: {
            formula: (value) => value * 1000,
            description: "Multiply the length value by 1000 to convert to passus (Roman pace)."
        }
    }
};