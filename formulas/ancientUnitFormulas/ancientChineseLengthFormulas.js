// ancientChineseLengthFormulas.js

const shangDynasty = {
  // Ancient Chinese Units
  "Fen (分)": 0.001695, // 1 Fen = 0.001695 meters
  "Cun (寸)": 0.01695,  // 1 Cun = 0.01695 meters
  "Chi (尺)": 0.1695,   // 1 Chi = 0.1695 meters
  "Zhang (丈)": 1.695,   // 1 Zhang = 1.695 meters
  "Bu (步)": 0.339,      // 1 Bu = 0.339 meters
  "Li (里)": 101.7,      // 1 Li = 101.7 meters

  // Modern Units
  "Centimeter [cm]": 0.01, // 1 Centimeter = 0.01 meters
  "Meter [m]": 1,          // 1 Meter = 1 meter
  "Kilometer [km]": 1000,  // 1 Kilometer = 1000 meters
  "Inch [in]": 0.0254,     // 1 Inch = 0.0254 meters
  "Foot [ft]": 0.3048,     // 1 Foot = 0.3048 meters
  "Yard [yd]": 0.9144      // 1 Yard = 0.9144 meters
};

const zhouDynasty = {
  // Ancient Chinese Units
  "Fen (分)": 0.00199,   // 1 Fen = 0.00199 meters (early Zhou)
  "Cun (寸)": 0.0199,    // 1 Cun = 0.0199 meters (early Zhou)
  "Chi (尺)": 0.199,     // 1 Chi = 0.199 meters (early Zhou)
  "Zhang (丈)": 1.99,     // 1 Zhang = 1.99 meters (early Zhou)
  "Bu (步)": 1.19,       // 1 Bu = 1.19 meters (early Zhou)
  "Li (里)": 357,         // 1 Li = 357 meters (early Zhou)

  // Modern Units
  "Centimeter [cm]": 0.01, // 1 Centimeter = 0.01 meters
  "Meter [m]": 1,          // 1 Meter = 1 meter
  "Kilometer [km]": 1000,  // 1 Kilometer = 1000 meters
  "Inch [in]": 0.0254,     // 1 Inch = 0.0254 meters
  "Foot [ft]": 0.3048,     // 1 Foot = 0.3048 meters
  "Yard [yd]": 0.9144      // 1 Yard = 0.9144 meters
};

const qinDynasty = {
  // Ancient Chinese Units
  "Fen (分)": 0.00231,   // 1 Fen = 0.00231 meters
  "Cun (寸)": 0.0231,    // 1 Cun = 0.0231 meters
  "Chi (尺)": 0.231,     // 1 Chi = 0.231 meters
  "Zhang (丈)": 2.31,     // 1 Zhang = 2.31 meters
  "Bu (步)": 1.39,       // 1 Bu = 1.39 meters
  "Li (里)": 417,         // 1 Li = 417 meters

  // Modern Units
  "Centimeter [cm]": 0.01, // 1 Centimeter = 0.01 meters
  "Meter [m]": 1,          // 1 Meter = 1 meter
  "Kilometer [km]": 1000,  // 1 Kilometer = 1000 meters
  "Inch [in]": 0.0254,     // 1 Inch = 0.0254 meters
  "Foot [ft]": 0.3048,     // 1 Foot = 0.3048 meters
  "Yard [yd]": 0.9144      // 1 Yard = 0.9144 meters
};

const hanDynasty = {
  // Ancient Chinese Units
  "Fen (分)": 0.00231,   // 1 Fen = 0.00231 meters (early Han)
  "Cun (寸)": 0.0231,    // 1 Cun = 0.0231 meters (early Han)
  "Chi (尺)": 0.231,     // 1 Chi = 0.231 meters (early Han)
  "Zhang (丈)": 2.31,     // 1 Zhang = 2.31 meters (early Han)
  "Bu (步)": 1.39,       // 1 Bu = 1.39 meters (early Han)
  "Li (里)": 417,         // 1 Li = 417 meters (early Han)

  // Modern Units
  "Centimeter [cm]": 0.01, // 1 Centimeter = 0.01 meters
  "Meter [m]": 1,          // 1 Meter = 1 meter
  "Kilometer [km]": 1000,  // 1 Kilometer = 1000 meters
  "Inch [in]": 0.0254,     // 1 Inch = 0.0254 meters
  "Foot [ft]": 0.3048,     // 1 Foot = 0.3048 meters
  "Yard [yd]": 0.9144      // 1 Yard = 0.9144 meters
};

const tangDynasty = {
  // Ancient Chinese Units
  "Fen (分)": 0.00307,   // 1 Fen = 0.00307 meters
  "Cun (寸)": 0.0307,    // 1 Cun = 0.0307 meters
  "Chi (尺)": 0.307,     // 1 Chi = 0.307 meters
  "Zhang (丈)": 3.07,     // 1 Zhang = 3.07 meters
  "Bu (步)": 1.54,       // 1 Bu = 1.54 meters
  "Li (里)": 554,         // 1 Li = 554 meters

  // Modern Units
  "Centimeter [cm]": 0.01, // 1 Centimeter = 0.01 meters
  "Meter [m]": 1,          // 1 Meter = 1 meter
  "Kilometer [km]": 1000,  // 1 Kilometer = 1000 meters
  "Inch [in]": 0.0254,     // 1 Inch = 0.0254 meters
  "Foot [ft]": 0.3048,     // 1 Foot = 0.3048 meters
  "Yard [yd]": 0.9144      // 1 Yard = 0.9144 meters
};

const songDynasty = {
  // Ancient Chinese Units
  "Fen (分)": 0.00312,   // 1 Fen = 0.00312 meters
  "Cun (寸)": 0.0312,    // 1 Cun = 0.0312 meters
  "Chi (尺)": 0.312,     // 1 Chi = 0.312 meters
  "Zhang (丈)": 3.12,     // 1 Zhang = 3.12 meters
  "Bu (步)": 1.56,       // 1 Bu = 1.56 meters
  "Li (里)": 561,         // 1 Li = 561 meters

  // Modern Units
  "Centimeter [cm]": 0.01, // 1 Centimeter = 0.01 meters
  "Meter [m]": 1,          // 1 Meter = 1 meter
  "Kilometer [km]": 1000,  // 1 Kilometer = 1000 meters
  "Inch [in]": 0.0254,     // 1 Inch = 0.0254 meters
  "Foot [ft]": 0.3048,     // 1 Foot = 0.3048 meters
  "Yard [yd]": 0.9144      // 1 Yard = 0.9144 meters
};

const mingDynasty = {
  // Ancient Chinese Units
  "Fen (分)": 0.00320,   // 1 Fen = 0.00320 meters
  "Cun (寸)": 0.0320,    // 1 Cun = 0.0320 meters
  "Chi (尺)": 0.320,     // 1 Chi = 0.320 meters
  "Zhang (丈)": 3.20,     // 1 Zhang = 3.20 meters
  "Bu (步)": 1.60,       // 1 Bu = 1.60 meters
  "Li (里)": 576,         // 1 Li = 576 meters

  // Modern Units
  "Centimeter [cm]": 0.01, // 1 Centimeter = 0.01 meters
  "Meter [m]": 1,          // 1 Meter = 1 meter
  "Kilometer [km]": 1000,  // 1 Kilometer = 1000 meters
  "Inch [in]": 0.0254,     // 1 Inch = 0.0254 meters
  "Foot [ft]": 0.3048,     // 1 Foot = 0.3048 meters
  "Yard [yd]": 0.9144      // 1 Yard = 0.9144 meters
};

const qingDynasty = {
  // Ancient Chinese Units
  "Fen (分)": 0.00320,   // 1 Fen = 0.00320 meters
  "Cun (寸)": 0.0320,    // 1 Cun = 0.0320 meters
  "Chi (尺)": 0.320,     // 1 Chi = 0.320 meters
  "Zhang (丈)": 3.20,     // 1 Zhang = 3.20 meters
  "Bu (步)": 1.60,       // 1 Bu = 1.60 meters
  "Li (里)": 576,         // 1 Li = 576 meters

  // Modern Units
  "Centimeter [cm]": 0.01, // 1 Centimeter = 0.01 meters
  "Meter [m]": 1,          // 1 Meter = 1 meter
  "Kilometer [km]": 1000,  // 1 Kilometer = 1000 meters
  "Inch [in]": 0.0254,     // 1 Inch = 0.0254 meters
  "Foot [ft]": 0.3048,     // 1 Foot = 0.3048 meters
  "Yard [yd]": 0.9144      // 1 Yard = 0.9144 meters
};

// Export all dynasty objects
export {
  shangDynasty,
  zhouDynasty,
  qinDynasty,
  hanDynasty,
  tangDynasty,
  songDynasty,
  mingDynasty,
  qingDynasty
};