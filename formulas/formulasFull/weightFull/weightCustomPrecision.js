// weightMassCustomPrecision.js
export const weightMassCustomPrecision = {
  // Standard Weight Units
  standardWeight: {
    // Metric System (SI)
    "kilogram [kg]": 2, // Base unit
    "gram [g]": 2,
    "milligram [mg]": 0,
    "microgram [μg]": 0,
    "nanogram [ng]": 0,
    "picogram [pg]": 0,
    "femtogram [fg]": 0,
    "metric ton (tonne) [t]": 3,
    "quintal [q]": 2,
    "hectogram [hg]": 2,
    "decagram [dag]": 2,
    "decigram [dg]": 3,
    "centigram [cg]": 3,
    "kiloton [kt]": 3,
    "megaton [Mt]": 3,
    "gigaton [Gt]": 3,
    
    // Imperial System
    "pound [lb]": 2,
    "ounce [oz]": 2,
    "stone [st]": 2,
    "ton (short) [ton, US ton]": 3,
    "ton (long) [long tn, UK ton]": 3,
    "hundredweight (US) [cwt US]": 2,
    "hundredweight (UK) [cwt UK]": 2,
    "quarter (US) [qr US]": 2,
    "quarter (UK) [qr UK]": 2,
    "dram [dr]": 3,
    "grain [gr]": 2,
    "pennyweight [dwt, pwt]": 2,
    
    // Apothecary and Troy
    "troy ounce [oz t]": 2,
    "troy pound [lb t]": 2,
    "scruple [s.ap]": 3,
    "apothecary dram [dr ap]": 3,
    "apothecary ounce [oz ap]": 2,
    "apothecary pound [lb ap]": 2
  },
  
  // East Asian Weight Units
  asianWeight: {
    // Common Modern Units
    "kilogram [kg]": 2,
    "gram [g]": 2,
    "pound [lb]": 2,
    "ounce [oz]": 2,
    
    // Chinese Units
    "jin (Chinese pound) [jin]": 2,
    "liang (Chinese tael) [liang]": 2,
    "qian (Chinese mace) [qian]": 3,
    "fen (Chinese candareen) [fen]": 3,
    "li (Chinese cash) [li]": 4,
    "hao [hao]": 5,
    "si [si]": 6,
    "hu [hu]": 7,
    "dan (Chinese picul) [dan]": 2,
    
    // Japanese Units
    "kan [kan]": 2,
    "momme [momme]": 3,
    "kin [kin]": 2,
    "ryō [ryō]": 3,
    "monme [monme]": 3,
    "fun [fun]": 4,
    "hyakkin [hyakkin]": 2,
    
    // Korean Units
    "geun [geun]": 2,
    "don [don]": 3,
    "nyang [nyang]": 3,
    
    // Thai Units
    "chang [chang]": 2,
    "tamlung [tamlung]": 3,
    "baht [baht]": 3,
    "salueng [salueng]": 4,
    "fuang [fuang]": 4,
    "hoi [hoi]": 4,
    
    // Indian Units
    "seer [seer]": 2,
    "tola [tola]": 3,
    "maund [maund]": 2,
    "dharan [dharan]": 4,
    "rattī [ratti]": 4,
    "lāl [lal]": 5,
    "chatak [chatak]": 3,
    "tola [tola]": 3
  },
  
  // Historical Weight Units
  historicalWeight: {
    // Common Modern Units
    "kilogram [kg]": 2,
    "gram [g]": 2,
    "pound [lb]": 2,
    "ounce [oz]": 2,
    "metric ton (tonne) [t]": 3,
    
    // Ancient Roman
    "libra (Roman pound) [libra]": 2,
    "uncia (Roman ounce) [uncia]": 3,
    "scrupulum [scrupulum]": 4,
    "sextula [sextula]": 4,
    "sicilicus [sicilicus]": 4,
    "duella [duella]": 4,
    "semuncia [semuncia]": 4,
    
    // Ancient Greek
    "talent [talent]": 2,
    "mina [mina]": 3,
    "tetradrachm [tetradrachm]": 4,
    "drachma [drachma]": 4,
    "obol [obol]": 5,
    
    // Medieval European
    "mark [mark]": 3,
    "tower pound [tower lb]": 2,
    "merchants' pound [merch lb]": 2,
    "wool pound [wool lb]": 2,
    "paris pound [paris lb]": 2,
    "cologne mark [cologne mk]": 3,
    "vienna pound [vienna lb]": 2,
    "arroba [arroba]": 2,
    
    // Old Russian
    "berkovets [berkovets]": 2,
    "pood [pood]": 2,
    "funt [funt]": 3,
    "lot [lot]": 4,
    "zolotnik [zolotnik]": 4,
    "dolya [dolya]": 5,
    
    // Other Historical
    "shekel (Biblical) [shekel]": 3,
    "mina (Biblical) [mina bibl]": 2,
    "talent (Biblical) [talent bibl]": 2,
    "kakkab (Mesopotamian) [kakkab]": 4,
    "gin (Mesopotamian) [gin]": 4,
    "mana (Mesopotamian) [mana]": 2,
    "biltu (Mesopotamian) [biltu]": 1,
    "deben (Egyptian) [deben]": 3,
    "kite (Egyptian) [kite]": 4
  },
  
  // Scientific and Specialized Weight Units
  scientificWeight: {
    // Common Units
    "kilogram [kg]": 2,
    "gram [g]": 2, 
    "milligram [mg]": 0,
    "microgram [μg]": 0,
    "pound [lb]": 2,
    "ounce [oz]": 2,
    
    // Scientific Units
    "atomic mass unit [u, AMU]": 8,
    "dalton [Da]": 8,
    "electron mass [me]": 10,
    "proton mass [mp]": 10,
    "neutron mass [mn]": 10,
    "planck mass [mₚ]": 8,
    "solar mass [M☉]": 5,
    "earth mass [M⊕]": 5,
    "lunar mass [ML]": 5,
    "jupiter mass [MJ]": 5,
    
    // Unusual Units
    "slug [slug]": 3,
    "poundal [pdl]": 4,
    "atomic mass unit [u, AMU]": 8,
    "gamma [γ]": 4,
    "earth gravitational mass [EGM]": 3
  },
  
  // Jeweler's and Precious Metal Units
  preciousMetal: {
    // Common Units
    "kilogram [kg]": 2,
    "gram [g]": 2,
    "milligram [mg]": 0,
    "ounce [oz]": 2,
    "pound [lb]": 2,
    
    // Jeweler's Weight
    "carat (metric) [ct]": 2,
    "point (carat) [pt]": 3,
    "grain [gr]": 3,
    "troy ounce [oz t]": 2,
    "troy pound [lb t]": 2,
    "pennyweight [dwt, pwt]": 3,
    "masha (Indian) [masha]": 3,
    
    // Pearl Weights
    "pearl grain [pearl gr]": 3,
    "pearl carat [pearl ct]": 3,
    "momme (pearl) [momme]": 3,
    "kan (pearl) [kan]": 2
  },
  
  // Commercial and Food Weight Units
  commercialWeight: {
    // Food & Cooking
    "kilogram [kg]": 2,
    "pound [lb]": 2,
    "ounce [oz]": 2,
    "gram [g]": 2,
    "milligram [mg]": 0,
    "pinch [pinch]": 1,
    "dash [dash]": 1,
    "drop [drop]": 1,
    "teaspoon [tsp]": 2,
    "tablespoon [tbsp]": 2,
    "cup [cup]": 2,
    
    // Commercial Packaging
    "metric ton (tonne) [t]": 3,
    "ton (short) [ton, US ton]": 3,
    "ton (long) [long tn, UK ton]": 3,
    "gross ton [GT]": 3,
    "net ton [NT]": 3,
    "hundredweight (US) [cwt US]": 2,
    "hundredweight (UK) [cwt UK]": 2,
    "quarter (US) [qr US]": 2,
    "quarter (UK) [qr UK]": 2,
    "barrel bulk [bbl]": 2,
    "bag (cement) [bag]": 2,
    "pallet (standard) [pallet]": 0,
    "freight ton [freight ton]": 2
  },
  
// Reference weight precision settings

referenceWeight: {
  // Common Units
  "kilogram [kg]": 2,
  "gram [g]": 2,
  "milligram [mg]": 0,
  "pound [lb]": 2,
  "ounce [oz]": 2,
  "ton (short) [ton, US ton]": 3,
  "metric ton (tonne) [t]": 3,
  
  // Common Objects
  "paper clip [paperclip]": 3,
  "thumbtack [thumbtack]": 3,
  "pencil [pencil]": 2,
  "smartphone [smartphone]": 2,
  "laptop computer [laptop]": 1,
  "desktop computer [desktop]": 1,
  "house cat [cat]": 1,
  "microwave oven [microwave]": 1,
  "refrigerator [refrigerator]": 1,
  "washing machine [washer]": 1,
  "car (compact) [compact car]": 2,
  "car (SUV) [SUV]": 2,
  
  // Human Weight
  "adult male (average) [adult male]": 1,
  "adult female (average) [adult female]": 1,
  "child (10 years, average) [child 10yr]": 1,
  "newborn baby (average) [newborn]": 1,
  "human brain [brain]": 1,
  "human heart [heart]": 1,
  
  // Animal Weight
  "mouse [mouse]": 2,
  "rat [rat]": 1,
  "rabbit [rabbit]": 1,
  "chicken [chicken]": 1,
  "domestic cat [cat]": 1,
  "domestic dog (medium) [dog medium]": 1,
  "pig [pig]": 0,
  "sheep [sheep]": 0,
  "cow [cow]": 0,
  "horse [horse]": 0,
  "elephant (African) [elephant]": 0,
  "blue whale [blue whale]": 5,
  
  // Food Weight
  "apple [apple]": 1,
  "banana [banana]": 2,
  "orange [orange]": 2,
  "potato [potato]": 2,
  "loaf of bread [bread loaf]": 1,
  "egg [egg]": 2,
  "stick of butter [butter stick]": 2,
  "bag of flour (standard) [flour bag]": 2,
  "bag of sugar (standard) [sugar bag]": 2,
  "gallon of milk [milk gallon]": 2,
  
  // Modern Tech Devices
  "smartphone (iPhone 15) [iphone]": 2,
  "smartphone (Samsung Galaxy S23) [galaxy]": 2,
  "tablet (iPad) [ipad]": 2,
  "smartwatch (Apple Watch) [smartwatch]": 3,
  "wireless earbuds (AirPods) [airpods]": 3,
  "gaming console (PlayStation 5) [ps5]": 1,
  "gaming console (Xbox Series X) [xbox]": 1,
  "gaming console (Nintendo Switch) [switch]": 2,
  "laptop (MacBook Air) [macbook air]": 2,
  "laptop (Dell XPS 13) [dell xps]": 2,
  "e-reader (Kindle) [kindle]": 2,
  "wireless headphones [headphones]": 2,
  "smart speaker (Amazon Echo) [echo]": 2,
  "drone (consumer) [drone]": 2,

  // Sports Equipment
  "basketball [basketball]": 2,
  "soccer ball [soccer ball]": 2,
  "tennis ball [tennis ball]": 3,
  "baseball [baseball]": 2,
  "american football [football]": 2,
  "golf ball [golf ball]": 3,
  "yoga mat [yoga mat]": 1,
  "dumbell (5 lb) [5lb dumbell]": 2,
  "kettlebell (standard) [kettlebell]": 1,
  "bicycle (road) [road bike]": 1,
  "tennis racket [tennis racket]": 2,

  // Modern Packaged Items
  "bottled water (500ml) [water bottle]": 2,
  "soda can (330ml) [soda can]": 2,
  "coffee mug (full) [coffee mug]": 2,
  "book (paperback) [paperback]": 2,
  "book (hardcover) [hardcover]": 1,
  "magazine [magazine]": 2,
  "box of cereal [cereal box]": 1,
  "pair of jeans [jeans]": 1,
  "t-shirt [t-shirt]": 2,
  "sneakers (pair) [sneakers]": 1,
  "backpack (empty) [backpack]": 1,
  "backpack (loaded) [loaded backpack]": 1,
  "carry-on luggage (empty) [carry-on]": 1,
  "carry-on luggage (packed) [packed carry-on]": 1
}
};