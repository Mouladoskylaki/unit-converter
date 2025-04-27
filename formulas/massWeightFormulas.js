// weightMassConverterShowcase.js
// A showcase of common weight/mass units for the converter

export const massWeightFormulas = {
  // Metric System Units
  "group_Metric System": 0,
  "kilogram [kg]": 1, // Base unit
  "gram [g]": 0.001, // 1 g = 0.001 kg
  "milligram [mg]": 0.000001, // 1 mg = 0.000001 kg
  "microgram [μg]": 0.000000001, // 1 μg = 1e-9 kg
  "metric ton (tonne) [t]": 1000, // 1 t = 1000 kg
  "quintal [q]": 100, // 1 q = 100 kg
  
  // Imperial & US Customary Units
  "group_Imperial System": 0,
  "pound [lb]": 0.45359237, // 1 lb = 0.45359237 kg
  "ounce [oz]": 0.0283495231, // 1 oz = 0.0283495231 kg
  "stone [st]": 6.35029318, // 1 stone = 6.35029318 kg
  "ton (short) [ton, US ton]": 907.18474, // 1 short ton = 907.18474 kg
  "ton (long) [long tn, UK ton]": 1016.0469088, // 1 long ton = 1016.0469088 kg
  
  // Common East Asian Units
  "group_East Asian Units": 0,
  "jin (Chinese pound) [jin]": 0.5, // 1 jin = 0.5 kg
  "liang (Chinese tael) [liang]": 0.05, // 1 liang = 0.05 kg
  "kan (Japanese) [kan]": 3.75, // 1 kan = 3.75 kg
  "momme (Japanese) [momme]": 0.00375, // 1 momme = 0.00375 kg
  "tola (Indian) [tola]": 0.01166, // 1 tola = 0.01166 kg
  
  // Jeweler's & Precious Metal Units
  "group_Jeweler's Weight": 0,
  "carat (metric) [ct]": 0.0002, // 1 carat = 0.0002 kg
  "grain [gr]": 0.00006479891, // 1 grain = 0.00006479891 kg
  "troy ounce [oz t]": 0.0311034768, // 1 troy ounce = 0.0311034768 kg
  "pennyweight [dwt, pwt]": 0.00155517384, // 1 pennyweight = 0.00155517384 kg
  
  // Historical Highlights
  "group_Historical Units": 0,
  "drachma (Ancient Greek) [drachma]": 0.00436, // 1 drachma = 0.00436 kg
  "talent (Ancient Greek) [talent]": 26.2, // 1 talent = 26.2 kg
  "libra (Roman pound) [libra]": 0.328, // 1 libra = 0.328 kg
  "pood (Old Russian) [pood]": 16.38, // 1 pood = 16.38 kg
  
  // Scientific Units
  "group_Scientific Units": 0,
  "atomic mass unit [u, AMU]": 1.66053906660e-27, // 1 AMU = 1.66053906660e-27 kg
  "earth mass [M⊕]": 5.9722e+24, // 1 earth mass = 5.9722e+24 kg
  "solar mass [M☉]": 1.989e+30 // 1 solar mass = 1.989e+30 kg
};