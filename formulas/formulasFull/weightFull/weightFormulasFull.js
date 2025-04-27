// weightCategories.js - Comprehensive weight conversion system
// All conversions based on kilogram as the base unit

// Standard Weight Units - includes metric and imperial units
export const standardWeightFormulas = {
  "group_Metric System (SI)": 0,
  "kilogram [kg]": 1, // Base unit
  "gram [g]": 0.001, // 1 g = 0.001 kg
  "milligram [mg]": 0.000001, // 1 mg = 0.000001 kg
  "microgram [μg]": 0.000000001, // 1 μg = 1e-9 kg
  "nanogram [ng]": 0.000000000001, // 1 ng = 1e-12 kg
  "picogram [pg]": 0.000000000000001, // 1 pg = 1e-15 kg
  "femtogram [fg]": 0.000000000000000001, // 1 fg = 1e-18 kg
  "metric ton (tonne) [t]": 1000, // 1 t = 1000 kg
  "quintal [q]": 100, // 1 q = 100 kg
  "hectogram [hg]": 0.1, // 1 hg = 0.1 kg
  "decagram [dag]": 0.01, // 1 dag = 0.01 kg
  "decigram [dg]": 0.0001, // 1 dg = 0.0001 kg
  "centigram [cg]": 0.00001, // 1 cg = 0.00001 kg
  "kiloton [kt]": 1000000, // 1 kt = 1,000,000 kg
  "megaton [Mt]": 1000000000, // 1 Mt = 1,000,000,000 kg
  "gigaton [Gt]": 1000000000000, // 1 Gt = 1,000,000,000,000 kg
  
  "group_Imperial System": 0,
  "pound [lb]": 0.45359237, // 1 lb = 0.45359237 kg
  "ounce [oz]": 0.0283495231, // 1 oz = 0.0283495231 kg
  "stone [st]": 6.35029318, // 1 stone = 6.35029318 kg
  "ton (short) [ton, US ton]": 907.18474, // 1 short ton = 907.18474 kg
  "ton (long) [long tn, UK ton]": 1016.0469088, // 1 long ton = 1016.0469088 kg
  "hundredweight (US) [cwt US]": 45.359237, // 1 US cwt = 45.359237 kg
  "hundredweight (UK) [cwt UK]": 50.80234544, // 1 UK cwt = 50.80234544 kg
  "quarter (US) [qr US]": 11.33980925, // 1 US quarter = 11.33980925 kg
  "quarter (UK) [qr UK]": 12.70058636, // 1 UK quarter = 12.70058636 kg
  "dram [dr]": 0.0017718452, // 1 dram = 0.0017718452 kg
  "grain [gr]": 0.00006479891, // 1 grain = 0.00006479891 kg
  "pennyweight [dwt, pwt]": 0.00155517384, // 1 pennyweight = 0.00155517384 kg
  
  "group_Apothecary and Troy": 0,
  "troy ounce [oz t]": 0.0311034768, // 1 troy ounce = 0.0311034768 kg
  "troy pound [lb t]": 0.3732417216, // 1 troy pound = 0.3732417216 kg
  "scruple [s.ap]": 0.00129598, // 1 scruple = 0.00129598 kg
  "apothecary dram [dr ap]": 0.0038879, // 1 apothecary dram = 0.0038879 kg
  "apothecary ounce [oz ap]": 0.0311034768, // 1 apothecary ounce = 0.0311034768 kg
  "apothecary pound [lb ap]": 0.3732417216 // 1 apothecary pound = 0.3732417216 kg
};

// East Asian Weight Units
export const asianWeightFormulas = {
  "group_Common Modern Units": 0,
  "kilogram [kg]": 1, // Base unit
  "gram [g]": 0.001, // 1 g = 0.001 kg
  "pound [lb]": 0.45359237, // 1 lb = 0.45359237 kg
  "ounce [oz]": 0.0283495231, // 1 oz = 0.0283495231 kg
  
  "group_Chinese Units": 0,
  "jin (Chinese pound) [jin]": 0.5, // 1 jin = 0.5 kg
  "liang (Chinese tael) [liang]": 0.05, // 1 liang = 0.05 kg
  "qian (Chinese mace) [qian]": 0.005, // 1 qian = 0.005 kg
  "fen (Chinese candareen) [fen]": 0.0005, // 1 fen = 0.0005 kg
  "li (Chinese cash) [li]": 0.00005, // 1 li = 0.00005 kg
  "hao [hao]": 0.000005, // 1 hao = 0.000005 kg
  "si [si]": 0.0000005, // 1 si = 0.0000005 kg
  "hu [hu]": 0.00000005, // 1 hu = 0.00000005 kg
  "dan (Chinese picul) [dan]": 50, // 1 dan = 50 kg
  
  "group_Japanese Units": 0,
  "kan [kan]": 3.75, // 1 kan = 3.75 kg
  "momme [momme]": 0.00375, // 1 momme = 0.00375 kg
  "kin [kin]": 0.6, // 1 kin = 0.6 kg
  "ryō [ryō]": 0.0375, // 1 ryō = 0.0375 kg
  "monme [monme]": 0.00375, // 1 monme = 0.00375 kg
  "fun [fun]": 0.000375, // 1 fun = 0.000375 kg
  "hyakkin [hyakkin]": 60, // 1 hyakkin = 60 kg
  
  "group_Korean Units": 0,
  "geun [geun]": 0.6, // 1 geun = 0.6 kg
  "don [don]": 0.00375, // 1 don = 0.00375 kg
  "nyang [nyang]": 0.0375, // 1 nyang = 0.0375 kg

  "group_Thai Units": 0,
  "chang [chang]": 1.2, // 1 chang = 1.2 kg
  "tamlung [tamlung]": 0.06, // 1 tamlung = 0.06 kg
  "baht [baht]": 0.015, // 1 baht = 0.015 kg
  "salueng [salueng]": 0.00375, // 1 salueng = 0.00375 kg
  "fuang [fuang]": 0.0075, // 1 fuang = 0.0075 kg
  "hoi [hoi]": 0.00099, // 1 hoi = 0.00099 kg

  "group_Indian Units": 0,
  "seer [seer]": 0.9331593, // 1 seer = 0.9331593 kg
  "tola [tola]": 0.01166, // 1 tola = 0.01166 kg
  "maund [maund]": 37.3242, // 1 maund = 37.3242 kg
  "dharan [dharan]": 0.00233, // 1 dharan = 0.00233 kg
  "rattī [ratti]": 0.00121, // 1 rattī = 0.00121 kg
  "lāl [lal]": 0.0001215, // 1 lāl = 0.0001215 kg
  "chatak [chatak]": 0.0583125, // 1 chatak = 0.0583125 kg
  "tola [tola]": 0.01166 // 1 tola = 0.01166 kg
};

// Historical Weight Units
export const historicalWeightFormulas = {
  "group_Common Modern Units": 0,
  "kilogram [kg]": 1, // Base unit
  "gram [g]": 0.001, // 1 g = 0.001 kg
  "pound [lb]": 0.45359237, // 1 lb = 0.45359237 kg
  "ounce [oz]": 0.0283495231, // 1 oz = 0.0283495231 kg
  "metric ton (tonne) [t]": 1000, // 1 t = 1000 kg
  
  "group_Ancient Roman": 0,
  "libra (Roman pound) [libra]": 0.328, // 1 libra = 0.328 kg
  "uncia (Roman ounce) [uncia]": 0.02734, // 1 uncia = 0.02734 kg
  "scrupulum [scrupulum]": 0.00114, // 1 scrupulum = 0.00114 kg
  "sextula [sextula]": 0.00455, // 1 sextula = 0.00455 kg
  "sicilicus [sicilicus]": 0.00684, // 1 sicilicus = 0.00684 kg
  "duella [duella]": 0.00911, // 1 duella = 0.00911 kg
  "semuncia [semuncia]": 0.01367, // 1 semuncia = 0.01367 kg
  
  "group_Ancient Greek": 0,
  "talent [talent]": 26.2, // 1 talent = 26.2 kg
  "mina [mina]": 0.436, // 1 mina = 0.436 kg
  "tetradrachm [tetradrachm]": 0.01744, // 1 tetradrachm = 0.01744 kg
  "drachma [drachma]": 0.00436, // 1 drachma = 0.00436 kg
  "obol [obol]": 0.000726, // 1 obol = 0.000726 kg
  
  "group_Medieval European": 0,
  "mark [mark]": 0.2484, // 1 mark = 0.2484 kg
  "tower pound [tower lb]": 0.35, // 1 tower pound = 0.35 kg
  "merchants' pound [merch lb]": 0.437, // 1 merchants' pound = 0.437 kg
  "wool pound [wool lb]": 0.3696, // 1 wool pound = 0.3696 kg
  "paris pound [paris lb]": 0.4895, // 1 paris pound = 0.4895 kg
  "cologne mark [cologne mk]": 0.2335, // 1 cologne mark = 0.2335 kg
  "vienna pound [vienna lb]": 0.56, // 1 vienna pound = 0.56 kg
  "arroba [arroba]": 11.5026, // 1 arroba = 11.5026 kg
  
  "group_Old Russian": 0,
  "berkovets [berkovets]": 163.8, // 1 berkovets = 163.8 kg
  "pood [pood]": 16.38, // 1 pood = 16.38 kg
  "funt [funt]": 0.4095, // 1 funt = 0.4095 kg
  "lot [lot]": 0.012797, // 1 lot = 0.012797 kg
  "zolotnik [zolotnik]": 0.004266, // 1 zolotnik = 0.004266 kg
  "dolya [dolya]": 0.000044, // 1 dolya = 0.000044 kg
  
  "group_Other Historical": 0,
  "shekel (Biblical) [shekel]": 0.01143, // 1 Biblical shekel = 0.01143 kg
  "mina (Biblical) [mina bibl]": 0.571, // 1 Biblical mina = 0.571 kg
  "talent (Biblical) [talent bibl]": 34.3, // 1 Biblical talent = 34.3 kg
  "kakkab (Mesopotamian) [kakkab]": 0.00833, // 1 kakkab = 0.00833 kg
  "gin (Mesopotamian) [gin]": 0.0083, // 1 gin = 0.0083 kg
  "mana (Mesopotamian) [mana]": 0.5, // 1 mana = 0.5 kg
  "biltu (Mesopotamian) [biltu]": 30, // 1 biltu = 30 kg
  "deben (Egyptian) [deben]": 0.091, // 1 deben = 0.091 kg
  "kite (Egyptian) [kite]": 0.0091 // 1 kite = 0.0091 kg
};

// Specialized and Scientific Weight Units
export const scientificWeightFormulas = {
  "group_Common Units": 0,
  "kilogram [kg]": 1, // Base unit
  "gram [g]": 0.001, // 1 g = 0.001 kg
  "milligram [mg]": 0.000001, // 1 mg = 0.000001 kg
  "microgram [μg]": 0.000000001, // 1 μg = 1e-9 kg
  "pound [lb]": 0.45359237, // 1 lb = 0.45359237 kg
  "ounce [oz]": 0.0283495231, // 1 oz = 0.0283495231 kg
  
  "group_Scientific Units": 0,
  "atomic mass unit [u, AMU]": 1.66053906660e-27, // 1 AMU = 1.66053906660e-27 kg
  "dalton [Da]": 1.66053906660e-27, // 1 Da = 1.66053906660e-27 kg
  "electron mass [me]": 9.1093837015e-31, // 1 me = 9.1093837015e-31 kg
  "proton mass [mp]": 1.67262192369e-27, // 1 mp = 1.67262192369e-27 kg
  "neutron mass [mn]": 1.67492749804e-27, // 1 mn = 1.67492749804e-27 kg
  "planck mass [mₚ]": 2.176434e-8, // 1 planck mass = 2.176434e-8 kg
  "solar mass [M☉]": 1.989e+30, // 1 solar mass = 1.989e+30 kg
  "earth mass [M⊕]": 5.9722e+24, // 1 earth mass = 5.9722e+24 kg
  "lunar mass [ML]": 7.342e+22, // 1 lunar mass = 7.342e+22 kg
  "jupiter mass [MJ]": 1.898e+27, // 1 jupiter mass = 1.898e+27 kg
  
  "group_Unusual Units": 0,
  "slug [slug]": 14.5939, // 1 slug = 14.5939 kg
  "poundal [pdl]": 0.0140867, // 1 poundal = 0.0140867 kg
  "atomic mass unit [u, AMU]": 1.66053906660e-27, // 1 AMU = 1.66053906660e-27 kg
  "gamma [γ]": 0.000000001, // 1 gamma = 1e-9 kg (equals 1 µg)
  "earth gravitational mass [EGM]": 5.9722e+24 // 1 EGM = 5.9722e+24 kg
};

// Jeweler's and Precious Metal Units
export const preciousMetalFormulas = {
  "group_Common Units": 0,
  "kilogram [kg]": 1, // Base unit
  "gram [g]": 0.001, // 1 g = 0.001 kg
  "milligram [mg]": 0.000001, // 1 mg = 0.000001 kg
  "ounce [oz]": 0.0283495231, // 1 oz = 0.0283495231 kg
  "pound [lb]": 0.45359237, // 1 lb = 0.45359237 kg
  
  "group_Jeweler's Weight": 0,
  "carat (metric) [ct]": 0.0002, // 1 carat = 0.0002 kg
  "point (carat) [pt]": 0.000002, // 1 point = 0.000002 kg
  "grain [gr]": 0.00006479891, // 1 grain = 0.00006479891 kg
  "troy ounce [oz t]": 0.0311034768, // 1 troy ounce = 0.0311034768 kg
  "troy pound [lb t]": 0.3732417216, // 1 troy pound = 0.3732417216 kg
  "pennyweight [dwt, pwt]": 0.00155517384, // 1 pennyweight = 0.00155517384 kg
  "masha (Indian) [masha]": 0.00097, // 1 masha = 0.00097 kg
  
  "group_Pearl Weights": 0,
  "pearl grain [pearl gr]": 0.00005, // 1 pearl grain = 0.00005 kg
  "pearl carat [pearl ct]": 0.000205, // 1 pearl carat = 0.000205 kg
  "momme (pearl) [momme]": 0.00375, // 1 momme = 0.00375 kg
  "kan (pearl) [kan]": 3.75 // 1 kan = 3.75 kg
};

// Commercial and Food Weight Units
export const commercialWeightFormulas = {
  "group_Food & Cooking": 0,
  "kilogram [kg]": 1, // Base unit
  "pound [lb]": 0.45359237, // 1 lb = 0.45359237 kg
  "ounce [oz]": 0.0283495231, // 1 oz = 0.0283495231 kg
  "gram [g]": 0.001, // 1 g = 0.001 kg
  "milligram [mg]": 0.000001, // 1 mg = 0.000001 kg
  "pinch [pinch]": 0.0000005, // 1 pinch ≈ 0.0000005 kg
  "dash [dash]": 0.0000008, // 1 dash ≈ 0.0000008 kg
  "drop [drop]": 0.00000005, // 1 drop ≈ 0.00000005 kg
  "teaspoon [tsp]": 0.000005, // 1 tsp ≈ 0.000005 kg
  "tablespoon [tbsp]": 0.000015, // 1 tbsp ≈ 0.000015 kg
  "cup [cup]": 0.00024, // 1 cup ≈ 0.00024 kg (for water/typical ingredients)
  
  "group_Commercial Packaging": 0,
  "metric ton (tonne) [t]": 1000, // 1 t = 1000 kg
  "ton (short) [ton, US ton]": 907.18474, // 1 short ton = 907.18474 kg
  "ton (long) [long tn, UK ton]": 1016.0469088, // 1 long ton = 1016.0469088 kg
  "gross ton [GT]": 1016.0469088, // Same as long ton
  "net ton [NT]": 907.18474, // Same as short ton
  "hundredweight (US) [cwt US]": 45.359237, // 1 US cwt = 45.359237 kg
  "hundredweight (UK) [cwt UK]": 50.80234544, // 1 UK cwt = 50.80234544 kg
  "quarter (US) [qr US]": 11.33980925, // 1 US quarter = 11.33980925 kg
  "quarter (UK) [qr UK]": 12.70058636, // 1 UK quarter = 12.70058636 kg
  "barrel bulk [bbl]": 158.9873, // 1 barrel ≈ 158.9873 kg (varies by material)
  "bag (cement) [bag]": 42.6377, // 1 cement bag ≈ 42.6377 kg
  "pallet (standard) [pallet]": 1000, // 1 standard pallet ≈ 1000 kg (varies)
  "freight ton [freight ton]": 1016.0469088 // 1 freight ton = 1016.0469088 kg (same as long ton)
};

// Reference Weights and Practical Examples
export const referenceWeightFormulas = {
  "group_Common Units": 0,
  "kilogram [kg]": 1, // Base unit
  "gram [g]": 0.001, // 1 g = 0.001 kg
  "milligram [mg]": 0.000001, // 1 mg = 0.000001 kg
  "pound [lb]": 0.45359237, // 1 lb = 0.45359237 kg
  "ounce [oz]": 0.0283495231, // 1 oz = 0.0283495231 kg
  "ton (short) [ton, US ton]": 907.18474, // 1 short ton = 907.18474 kg
  "metric ton (tonne) [t]": 1000, // 1 t = 1000 kg
  
  "group_Common Objects": 0,
  "paper clip [paperclip]": 0.00001, // 1 paper clip ≈ 0.00001 kg
  "thumbtack [thumbtack]": 0.000004, // 1 thumbtack ≈ 0.000004 kg
  "pencil [pencil]": 0.007, // 1 pencil ≈ 0.007 kg
  "smartphone [smartphone]": 0.17, // 1 smartphone ≈ 0.17 kg
  "laptop computer [laptop]": 2.0, // 1 laptop ≈ 2.0 kg
  "desktop computer [desktop]": 10.0, // 1 desktop ≈ 10.0 kg
  "house cat [cat]": 4.5, // 1 house cat ≈ 4.5 kg
  "microwave oven [microwave]": 12.0, // 1 microwave ≈ 12.0 kg
  "refrigerator [refrigerator]": 100.0, // 1 refrigerator ≈ 100.0 kg
  "washing machine [washer]": 70.0, // 1 washing machine ≈ 70.0 kg
  "car (compact) [compact car]": 1200.0, // 1 compact car ≈ 1200.0 kg
  "car (SUV) [SUV]": 2000.0, // 1 SUV ≈ 2000.0 kg
  
  "group_Human Weight": 0,
  "adult male (average) [adult male]": 80.0, // Average adult male ≈ 80.0 kg
  "adult female (average) [adult female]": 65.0, // Average adult female ≈ 65.0 kg
  "child (10 years, average) [child 10yr]": 35.0, // Average 10-year-old ≈ 35.0 kg
  "newborn baby (average) [newborn]": 3.5, // Average newborn ≈ 3.5 kg
  "human brain [brain]": 1.4, // Human brain ≈ 1.4 kg
  "human heart [heart]": 0.3, // Human heart ≈ 0.3 kg
  
  "group_Animal Weight": 0,
  "mouse [mouse]": 0.02, // Mouse ≈ 0.02 kg
  "rat [rat]": 0.3, // Rat ≈ 0.3 kg
  "rabbit [rabbit]": 2.0, // Rabbit ≈ 2.0 kg
  "chicken [chicken]": 2.5, // Chicken ≈ 2.5 kg
  "domestic cat [cat]": 4.5, // Domestic cat ≈ 4.5 kg
  "domestic dog (medium) [dog medium]": 20.0, // Medium dog ≈ 20.0 kg
  "pig [pig]": 150.0, // Pig ≈ 150.0 kg
  "sheep [sheep]": 80.0, // Sheep ≈ 80.0 kg
  "cow [cow]": 750.0, // Cow ≈ 750.0 kg
  "horse [horse]": 500.0, // Horse ≈ 500.0 kg
  "elephant (African) [elephant]": 6000.0, // African elephant ≈ 6000.0 kg
  "blue whale [blue whale]": 190000.0, // Blue whale ≈ 190000.0 kg
  
  "group_Food Weight": 0,
  "apple [apple]": 0.2, // Apple ≈ 0.2 kg
  "banana [banana]": 0.12, // Banana ≈ 0.12 kg
  "orange [orange]": 0.18, // Orange ≈ 0.18 kg
  "potato [potato]": 0.15, // Potato ≈ 0.15 kg
  "loaf of bread [bread loaf]": 0.5, // Bread loaf ≈ 0.5 kg
  "egg [egg]": 0.06, // Egg ≈ 0.06 kg
  "stick of butter [butter stick]": 0.113, // Stick of butter ≈ 0.113 kg
  "bag of flour (standard) [flour bag]": 2.26796, // Bag of flour ≈ 2.26796 kg (5 lb)
  "bag of sugar (standard) [sugar bag]": 2.26796, // Bag of sugar ≈ 2.26796 kg (5 lb)
  "gallon of milk [milk gallon]": 3.78, // Gallon of milk ≈ 3.78 kg
  // Modern reference units to add to referenceWeightFormulas

"group_Modern Tech Devices": 0,
"smartphone (iPhone 15) [iphone]": 0.171, // Average iPhone 15 ≈ 0.171 kg
"smartphone (Samsung Galaxy S23) [galaxy]": 0.168, // Samsung Galaxy S23 ≈ 0.168 kg
"tablet (iPad) [ipad]": 0.469, // iPad 10th gen ≈ 0.469 kg
"smartwatch (Apple Watch) [smartwatch]": 0.032, // Apple Watch ≈ 0.032 kg
"wireless earbuds (AirPods) [airpods]": 0.004, // AirPods ≈ 0.004 kg
"gaming console (PlayStation 5) [ps5]": 4.5, // PS5 ≈ 4.5 kg
"gaming console (Xbox Series X) [xbox]": 4.45, // Xbox Series X ≈ 4.45 kg
"gaming console (Nintendo Switch) [switch]": 0.297, // Nintendo Switch ≈ 0.297 kg
"laptop (MacBook Air) [macbook air]": 1.24, // MacBook Air ≈ 1.24 kg
"laptop (Dell XPS 13) [dell xps]": 1.29, // Dell XPS 13 ≈ 1.29 kg
"e-reader (Kindle) [kindle]": 0.174, // Kindle Paperwhite ≈ 0.174 kg
"wireless headphones [headphones]": 0.25, // Average wireless headphones ≈ 0.25 kg
"smart speaker (Amazon Echo) [echo]": 0.97, // Amazon Echo ≈ 0.97 kg
"drone (consumer) [drone]": 0.249, // DJI Mini 2 drone ≈ 0.249 kg

"group_Sports Equipment": 0,
"basketball [basketball]": 0.624, // Regulation basketball ≈ 0.624 kg
"soccer ball [soccer ball]": 0.45, // FIFA regulation soccer ball ≈ 0.45 kg
"tennis ball [tennis ball]": 0.057, // Tennis ball ≈ 0.057 kg
"baseball [baseball]": 0.145, // MLB baseball ≈ 0.145 kg
"american football [football]": 0.41, // NFL football ≈ 0.41 kg
"golf ball [golf ball]": 0.046, // Golf ball ≈ 0.046 kg
"yoga mat [yoga mat]": 1.1, // Standard yoga mat ≈ 1.1 kg
"dumbell (5 lb) [5lb dumbell]": 2.27, // 5 lb dumbell ≈ 2.27 kg
"kettlebell (standard) [kettlebell]": 8.0, // Standard kettlebell ≈ 8.0 kg
"bicycle (road) [road bike]": 8.0, // Average road bike ≈ 8.0 kg
"tennis racket [tennis racket]": 0.34, // Tennis racket ≈ 0.34 kg

"group_Modern Packaged Items": 0,
"bottled water (500ml) [water bottle]": 0.5, // 500ml water bottle ≈ 0.5 kg
"soda can (330ml) [soda can]": 0.35, // 330ml soda can ≈ 0.35 kg
"coffee mug (full) [coffee mug]": 0.35, // Full coffee mug ≈ 0.35 kg
"book (paperback) [paperback]": 0.25, // Average paperback book ≈ 0.25 kg
"book (hardcover) [hardcover]": 0.6, // Average hardcover book ≈ 0.6 kg
"magazine [magazine]": 0.12, // Average magazine ≈ 0.12 kg
"box of cereal [cereal box]": 0.4, // Average cereal box ≈ 0.4 kg
"pair of jeans [jeans]": 0.7, // Pair of jeans ≈ 0.7 kg
"t-shirt [t-shirt]": 0.15, // T-shirt ≈ 0.15 kg
"sneakers (pair) [sneakers]": 0.6, // Pair of sneakers ≈ 0.6 kg
"backpack (empty) [backpack]": 0.5, // Empty backpack ≈ 0.5 kg
"backpack (loaded) [loaded backpack]": 3.5, // Loaded backpack ≈ 3.5 kg
"carry-on luggage (empty) [carry-on]": 2.8, // Empty carry-on luggage ≈ 2.8 kg
"carry-on luggage (packed) [packed carry-on]": 10.0 // Packed carry-on luggage ≈ 10.0 kg
};