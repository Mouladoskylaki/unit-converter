// areaConverterShowcase.js
// A showcase of common area units for the converter

export const areaFormulas = {
    // Metric System Units
    "group_Metric System": 0,
    "square meter [m²]": 1, // Base unit
    "square kilometer [km²]": 1000000, // 1 km² = 1,000,000 m²
    "square centimeter [cm²]": 0.0001, // 1 cm² = 0.0001 m²
    "square millimeter [mm²]": 0.000001, // 1 mm² = 0.000001 m²
    "hectare [ha]": 10000, // 1 ha = 10,000 m²
    "are [a]": 100, // 1 are = 100 m²
    
    // Imperial & US Customary Units
    "group_Imperial System": 0,
    "square foot [ft²]": 0.09290304, // 1 ft² = 0.09290304 m²
    "square inch [in²]": 0.00064516, // 1 in² = 0.00064516 m²
    "square yard [yd²]": 0.83612736, // 1 yd² = 0.83612736 m²
    "square mile [mi²]": 2589988.110336, // 1 mi² = 2,589,988.110336 m²
    "acre [ac]": 4046.8564224, // 1 acre = 4,046.8564224 m²
    
    // Real Estate & Land Units
    "group_Real Estate": 0,
    "square rod [rod²]": 25.29285264, // 1 rod² = 25.29285264 m²
    "perch [perch]": 25.29285264, // 1 perch = 25.29285264 m² (same as rod²)
    "rood [rood]": 1011.7141056, // 1 rood = 1,011.7141056 m²
    "township [township]": 93239571.972, // 1 township = 93,239,571.972 m²
    "section [section]": 2589988.110336, // 1 section = 2,589,988.110336 m² (same as mi²)
    
    // Asian Units
    "group_Asian Units": 0,
    "ping (Taiwan) [ping]": 3.30579, // 1 ping = 3.30579 m²
    "tsubo (Japan) [tsubo]": 3.30579, // 1 tsubo = 3.30579 m² (same as ping)
    "tan (Japan) [tan]": 991.74, // 1 tan = 991.74 m²
    "rai (Thailand) [rai]": 1600, // 1 rai = 1,600 m²
    "ngan (Thailand) [ngan]": 400, // 1 ngan = 400 m²
    
    // Construction & Textiles
    "group_Construction": 0,
    "square (construction) [sq]": 9.290304, // 1 square = 9.290304 m² (100 ft²)
    "circular mil [cmil]": 5.067074790975e-10, // 1 cmil = 5.067074790975e-10 m²
    "circular inch [circ in]": 0.0005067074790975, // 1 circ in = 0.0005067074790975 m²
    
    // Agricultural Units
    "group_Agricultural": 0,
    "dunam [dunam]": 1000, // 1 dunam = 1,000 m²
    "jerib [jerib]": 2000, // 1 jerib = 2,000 m² (Persian)
    "feddan [feddan]": 4200, // 1 feddan = 4,200 m² (Egyptian)
    "bigha (India) [bigha]": 2529, // 1 bigha = 2,529 m² (varies by region)
    
    // Historical Units
    "group_Historical Units": 0,
    "yardland [yardland]": 121405.69, // 1 yardland = 121,405.69 m² (30 acres)
    "hide [hide]": 485623, // 1 hide = 485,623 m² (120 acres)
    "carucate [carucate]": 485623, // 1 carucate = 485,623 m² (similar to hide)
    "morgen [morgen]": 8565, // 1 morgen = 8,565 m² (historical German)
    
    // Scientific Units
    "group_Scientific Units": 0,
    "barn [b]": 1e-28, // 1 barn = 1e-28 m² (nuclear physics)
    "square astronomical unit [au²]": 2.2379523e+22, // 1 au² = 2.2379523e+22 m²
    "square light year [ly²]": 8.9505412e+31, // 1 ly² = 8.9505412e+31 m²
    
    // Small Scale Units
    "group_Small Scale": 0,
    "square micrometer [μm²]": 1e-12, // 1 μm² = 1e-12 m²
    "square nanometer [nm²]": 1e-18, // 1 nm² = 1e-18 m²
    "square angstrom [Ų]": 1e-20 // 1 Ų = 1e-20 m²
  };