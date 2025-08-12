// areaFormulasFull.js - Full Area Converter
// Comprehensive area units organized by meaningful categories

// Standard Metric Units - most commonly used metric area measurements
export const standardMetricFormulas = {
  "group_Standard Metric Units": 0,
  "square meter [m²]": 1, // Base unit
  "square centimeter [cm²]": 0.0001,
  "square millimeter [mm²]": 0.000001,
  "square kilometer [km²]": 1000000,
  "square decimeter [dm²]": 0.01,
  "square dekameter [dam²]": 100,
  "square hectometer [hm²]": 10000,
  "hectare [ha]": 10000,
  "are [a]": 100,
  "centiare [ca]": 1,
  "decare [daa]": 1000,
  "square megameter [Mm²]": 1000000000000,
  "square gigameter [Gm²]": 1000000000000000000
};

// US Customary System - imperial and survey measurements
export const usCustomaryFormulas = {
  // Standard metric units for conversion
  "square meter [m²]": 1,
  "square centimeter [cm²]": 0.0001,
  "hectare [ha]": 10000,
  "square kilometer [km²]": 1000000,
  
  "group_US Imperial Units": 0,
  "square inch [in²]": 0.00064516,
  "square foot [ft²]": 0.09290304,
  "square yard [yd²]": 0.83612736,
  "square mile [mi²]": 2589988.110336,
  "acre [ac]": 4046.8564224,
  "square rod [rd²]": 25.29285264,
  "square chain [ch²]": 404.68564224,
  "section [section]": 2589988.110336,
  "township [twp]": 93239571.972,
  
  "group_US Survey Units": 0,
  "square foot (US survey) [ft² US]": 0.092903411613,
  "acre (US survey) [ac US]": 4046.87260987,
  "square mile (US survey) [mi² US]": 2589998.47032,
  "rood [rood]": 1011.7141056,
  "square perch [perch²]": 25.29285264,
  "square pole [pole²]": 25.29285264,
  "homestead [homestead]": 647497.027584,
  "quarter section [1/4 section]": 647497.027584,
  
  "group_Construction US": 0,
  "square mil [mil²]": 6.4516e-10,
  "circular mil [cmil]": 5.067075e-10,
  "circular inch [circ in]": 0.0005067074790975,
  "square (roofing) [sq roof]": 9.290304
};

// Imperial British System - official UK measurements
export const imperialFormulas = {
  // Standard metric units for conversion
  "square meter [m²]": 1,
  "square centimeter [cm²]": 0.0001,
  "hectare [ha]": 10000,
  "square kilometer [km²]": 1000000,
  
  "group_Imperial British Units": 0,
  "square inch (Imperial) [in² UK]": 0.00064516,
  "square foot (Imperial) [ft² UK]": 0.09290304,
  "square yard (Imperial) [yd² UK]": 0.83612736,
  "square mile (Imperial) [mi² UK]": 2589988.110336,
  "acre (Imperial) [ac UK]": 4046.8564224,
  "square furlong [fur²]": 40468.564224,
  "square chain (Imperial) [ch² UK]": 404.68564224,
  "square link [lnk²]": 0.0404686,
  
  "group_Historical British": 0,
  "rood (Imperial) [rood UK]": 1011.7141056,
  "perch (Imperial) [perch UK]": 25.29285264,
  "pole (Imperial) [pole UK]": 25.29285264,
  "hide [hide]": 485622.77,
  "virgate [virgate]": 121405.69,
  "yardland [yardland]": 121405.69,
  "bovate [bovate]": 60702.85,
  "carucate [carucate]": 485622.77,
  "oxgang [oxgang]": 60702.85
};

// Asian Traditional Units - measurements from Asian countries
export const asianFormulas = {
  // Standard metric units for conversion
  "square meter [m²]": 1,
  "square centimeter [cm²]": 0.0001,
  "hectare [ha]": 10000,
  "acre [ac]": 4046.8564224,
  
  "group_Japanese Units": 0,
  "tsubo (Japan) [tsubo]": 3.30579,
  "tan (Japan) [tan]": 991.74,
  "cho (Japan) [cho]": 9917.4,
  "se (Japan) [se]": 99.174,
  "shaku² (Japan) [shaku²]": 0.009182,
  "ken² (Japan) [ken²]": 3.305785,
  "tatami [tatami]": 1.652893,
  
  "group_Chinese Units": 0,
  "mu (China) [mu]": 666.67,
  "qing (China) [qing]": 66667,
  "li² (China) [li²]": 250000,
  "chi² (China) [chi²]": 0.1111,
  "zhang² (China) [zhang²]": 11.11,
  "fen (China) [fen]": 66.667,
  
  "group_Other Asian Units": 0,
  "ping (Taiwan) [ping]": 3.30579,
  "pyeong (Korea) [pyeong]": 3.30579,
  "dan (Korea) [dan]": 991.74,
  "rai (Thailand) [rai]": 1600,
  "ngan (Thailand) [ngan]": 400,
  "wah² (Thailand) [wah²]": 4,
  "jerib (Persia) [jerib]": 2000,
  "bigha (India) [bigha]": 2529
};

// Agricultural and Land Management - farming and land use
export const agriculturalFormulas = {
  // Standard metric units for conversion
  "square meter [m²]": 1,
  "hectare [ha]": 10000,
  "acre [ac]": 4046.8564224,
  "square kilometer [km²]": 1000000,
  
  "group_International Agriculture": 0,
  "dunam [dunam]": 1000,
  "stremmata [stremmata]": 1000,
  "feddan (Egypt) [feddan]": 4200,
  "manzana (Central America) [manzana]": 6988,
  "caballería (Spain) [caballería]": 389105,
  "fanega (Spain) [fanega]": 6440,
  "hectárea (Spanish) [hectárea]": 10000,
  
  "group_Indian Subcontinent": 0,
  "bigha (Bengal) [bigha Bengal]": 1338,
  "bigha (Bihar) [bigha Bihar]": 2529,
  "katha (Bengal) [katha]": 66.9,
  "cottah [cottah]": 66.9,
  "gunta [gunta]": 101.17,
  "cent [cent]": 40.47,
  "ground [ground]": 222.97,
  "ropani (Nepal) [ropani]": 508.74,
  
  "group_Farm Plot Sizes": 0,
  "plot (residential) [plot res]": 1000,
  "plot (commercial) [plot comm]": 5000,
  "garden plot [garden]": 100,
  "allotment [allotment]": 250,
  "smallholding [smallholding]": 20234,
  "quarter acre [1/4 ac]": 1011.71,
  "half acre [1/2 ac]": 2023.43
};

// Construction and Architecture - building industry measurements
export const constructionFormulas = {
  // Standard metric units for conversion
  "square meter [m²]": 1,
  "square centimeter [cm²]": 0.0001,
  "square foot [ft²]": 0.09290304,
  "square inch [in²]": 0.00064516,
  
  "group_Building Materials": 0,
  "square (roofing) [square]": 9.290304,
  "bundle (shingles) [bundle]": 2.787091,
  "sheet (drywall 4x8) [sheet 4x8]": 2.973,
  "sheet (drywall 4x12) [sheet 4x12]": 4.459,
  "sheet (plywood 4x8) [plywood]": 2.973,
  "brick face [brick]": 0.0387,
  "block face (CMU) [block]": 0.111,
  
  "group_Flooring & Tiling": 0,
  "tile (12x12 inch) [tile 12]": 0.09290304,
  "tile (6x6 inch) [tile 6]": 0.02322576,
  "tile (ceramic) [tile ceramic]": 0.04,
  "plank (hardwood) [plank]": 0.0464515,
  "roll (carpet 12ft) [carpet roll]": 11.148,
  "square yard (carpet) [yd² carpet]": 0.83612736,
  "square foot (flooring) [ft² floor]": 0.09290304,
  
  "group_Architectural Drawing": 0,
  "architectural unit [arch]": 0.09290304,
  "CAD unit [CAD]": 0.0001,
  "drawing square [draw sq]": 1
};

// Scientific and Technical - laboratory and research measurements
export const scientificFormulas = {
  // Standard metric units for conversion
  "square meter [m²]": 1,
  "square centimeter [cm²]": 0.0001,
  "square millimeter [mm²]": 0.000001,
  "square kilometer [km²]": 1000000,
  
  "group_Microscopic Areas": 0,
  "square micrometer [μm²]": 1e-12,
  "square nanometer [nm²]": 1e-18,
  "square picometer [pm²]": 1e-24,
  "square femtometer [fm²]": 1e-30,
  "square angstrom [Ų]": 1e-20,
  "barn [b]": 1e-28,
  "shed [shed]": 1e-52,
  "outhouse [outhouse]": 1e-34,
  
  "group_Laboratory Equipment": 0,
  "petri dish (standard) [petri]": 0.008042,
  "petri dish (small) [petri small]": 0.002124,
  "microscope slide [slide]": 0.00193548,
  "coverslip (18mm) [coverslip 18]": 0.0002545,
  "coverslip (22mm) [coverslip 22]": 0.00038,
  "well (96-well plate) [well 96]": 0.000032,
  "well (384-well plate) [well 384]": 0.000008,
  
  "group_Astronomical Areas": 0,
  "square astronomical unit [AU²]": 2.2379523e22,
  "square light-year [ly²]": 8.9505412e31,
  "square parsec [pc²]": 9.52107e32,
  "square degree [deg²]": 0.0003046174,
  "square arcminute [arcmin²]": 8.46159e-9,
  "square arcsecond [arcsec²]": 2.35044e-14,
  
  "group_Nuclear Physics": 0,
  "cross section [σ]": 1e-28,
  "millibarn [mb]": 1e-31,
  "microbarn [μb]": 1e-34,
  "Thomson cross section [σT]": 6.652e-29,
  "nuclear cross section [σn]": 1e-28
};

// Textile and Manufacturing - fabric and industrial measurements
export const textileFormulas = {
  // Standard metric units for conversion
  "square meter [m²]": 1,
  "square centimeter [cm²]": 0.0001,
  "square inch [in²]": 0.00064516,
  "square foot [ft²]": 0.09290304,
  
  "group_Fabric Measurements": 0,
  "bolt (fabric) [bolt]": 36.42,
  "yard² (fabric) [yd² fabric]": 0.83612736,
  "roll (fabric 45 inch) [roll 45]": 25.806,
  "roll (fabric 60 inch) [roll 60]": 34.408,
  "panel (fabric) [panel]": 2.787,
  "cutting table [cut table]": 4.645,
  
  "group_Garment Pieces": 0,
  "pattern piece (large) [pattern L]": 0.5574,
  "pattern piece (medium) [pattern M]": 0.2787,
  "pattern piece (small) [pattern S]": 0.1394,
  "interfacing sheet [interface]": 0.8361,
  "lining panel [lining]": 1.394,
  
  "group_Industrial Textiles": 0,
  "canvas roll [canvas]": 92.903,
  "felt sheet [felt]": 0.8361,
  "leather hide [hide leather]": 1.858,
  "vinyl sheet [vinyl]": 2.787,
  "carpet tile [carpet tile]": 0.8361
};

// Real Estate and Property - property measurements
export const realEstateFormulas = {
  // Standard metric units for conversion
  "square meter [m²]": 1,
  "square foot [ft²]": 0.09290304,
  "acre [ac]": 4046.8564224,
  "hectare [ha]": 10000,
  
  "group_Residential Areas": 0,
  "house lot (standard) [lot std]": 836.13,
  "house lot (large) [lot large]": 2023.43,
  "apartment [apt]": 92.90,
  "studio apartment [studio]": 37.16,
  "townhouse [townhouse]": 139.35,
  "condominium [condo]": 111.48,
  "mobile home pad [mobile pad]": 372.6,
  
  "group_Commercial Property": 0,
  "office space [office]": 92.90,
  "retail space [retail]": 185.81,
  "warehouse [warehouse]": 929.03,
  "shopping center [shop center]": 9290.3,
  "parking space [parking]": 13.94,
  "loading dock [loading]": 111.48,
  
  "group_Development Parcels": 0,
  "city lot [city lot]": 557.42,
  "suburban lot [suburb lot]": 1011.71,
  "rural parcel [rural]": 4046.86,
  "commercial parcel [comm parcel]": 8093.71,
  "industrial site [industrial]": 40468.6,
  "development tract [tract]": 404686
};

// Sports and Recreation - athletic and recreational areas
export const sportsFormulas = {
  // Standard metric units for conversion
  "square meter [m²]": 1,
  "square foot [ft²]": 0.09290304,
  "acre [ac]": 4046.8564224,
  "hectare [ha]": 10000,
  
  "group_Playing Fields": 0,
  "football field (American) [football]": 5351.22,
  "soccer field (FIFA) [soccer FIFA]": 7140,
  "baseball field [baseball]": 10117.14,
  "basketball court [basketball]": 420.4,
  "tennis court [tennis]": 260.87,
  "volleyball court [volleyball]": 162,
  "badminton court [badminton]": 81.75,
  "squash court [squash]": 62.06,
  
  "group_Track & Field": 0,
  "athletics track (inner) [track inner]": 6380,
  "athletics field [athletics]": 10746,
  "long jump pit [long jump]": 27.87,
  "shot put circle [shot put]": 12.57,
  "discus circle [discus]": 12.57,
  "pole vault area [pole vault]": 372.6,
  
  "group_Recreational Areas": 0,
  "swimming pool (Olympic) [pool Olympic]": 1250,
  "swimming pool (standard) [pool std]": 372.6,
  "golf tee [golf tee]": 139.35,
  "golf green [golf green]": 557.42,
  "putting green [putting]": 185.81,
  "driving range bay [drive bay]": 41.81,
  "bowling lane [bowling]": 19.22,
  "ice hockey rink [hockey]": 1516.13
};

// Transportation and Infrastructure - roads, airports, etc.
export const transportationFormulas = {
  // Standard metric units for conversion
  "square meter [m²]": 1,
  "square foot [ft²]": 0.09290304,
  "square kilometer [km²]": 1000000,
  "hectare [ha]": 10000,
  
  "group_Road Infrastructure": 0,
  "lane mile [lane mi]": 9308.88,
  "highway lane [highway lane]": 4654.44,
  "parking lot [parking lot]": 2787.09,
  "intersection [intersection]": 1858.06,
  "roundabout [roundabout]": 2827.43,
  "sidewalk (per mile) [sidewalk mi]": 4459.15,
  "bike lane (per mile) [bike mi]": 2229.58,
  
  "group_Aviation Areas": 0,
  "runway (large) [runway L]": 458838,
  "runway (medium) [runway M]": 229419,
  "runway (small) [runway S]": 114710,
  "taxiway [taxiway]": 114710,
  "apron (aircraft) [apron]": 92903,
  "helipad [helipad]": 706.86,
  "hangar [hangar]": 5574.2,
  
  "group_Maritime Areas": 0,
  "ship berth [berth]": 4645.15,
  "dock (loading) [dock]": 1858.06,
  "marina slip [marina]": 92.90,
  "port terminal [terminal]": 46451.5,
  "container yard [container]": 23225.8,
  "dry dock [dry dock]": 11612.9
};

// Environmental and Geographic - natural area measurements
export const environmentalFormulas = {
  // Standard metric units for conversion
  "square meter [m²]": 1,
  "square kilometer [km²]": 1000000,
  "hectare [ha]": 10000,
  "acre [ac]": 4046.8564224,
  
  "group_Conservation Areas": 0,
  "nature reserve [reserve]": 1000000,
  "national park [park]": 100000000,
  "wildlife sanctuary [sanctuary]": 10000000,
  "forest preserve [preserve]": 4046856,
  "wetland area [wetland]": 404686,
  "conservation easement [easement]": 40469,
  
  "group_Water Bodies": 0,
  "pond [pond]": 4047,
  "small lake [lake small]": 40469,
  "reservoir [reservoir]": 404686,
  "watershed [watershed]": 25899881,
  "river basin [basin]": 259998811,
  "estuary [estuary]": 1000000,
  
  "group_Geographic Features": 0,
  "island (small) [island S]": 100000,
  "island (medium) [island M]": 10000000,
  "valley floor [valley]": 25899881,
  "plateau [plateau]": 259998811,
  "coastal area [coastal]": 1000000,
  "mountain face [mountain]": 2589988,
  "desert area [desert]": 2589988110
};