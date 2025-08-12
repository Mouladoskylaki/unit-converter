// areaPrecision.js - Complete
// Precision settings to match the updated area category format

export const areaPrecision = {
  // Standard Metric Units
  "standardMetric": {
    "square meter [m²]": 2,
    "square centimeter [cm²]": 1,
    "square millimeter [mm²]": 0,
    "square kilometer [km²]": 4,
    "square decimeter [dm²]": 2,
    "square dekameter [dam²]": 2,
    "square hectometer [hm²]": 3,
    "hectare [ha]": 3,
    "are [a]": 2,
    "centiare [ca]": 2,
    "decare [daa]": 3,
    "square megameter [Mm²]": 6,
    "square gigameter [Gm²]": 8
  },
  
  // US Customary System
  "usCustomary": {
    // US Imperial Units
    "square inch [in²]": 3,
    "square foot [ft²]": 2,
    "square yard [yd²]": 2,
    "square mile [mi²]": 4,
    "acre [ac]": 3,
    "square rod [rd²]": 2,
    "square chain [ch²]": 2,
    "section [section]": 4,
    "township [twp]": 5,
    
    // US Survey Units
    "square foot (US survey) [ft² US]": 3,
    "acre (US survey) [ac US]": 3,
    "square mile (US survey) [mi² US]": 4,
    "rood [rood]": 3,
    "square perch [perch²]": 2,
    "square pole [pole²]": 2,
    "homestead [homestead]": 4,
    "quarter section [1/4 section]": 4,
    
    // Construction US
    "square mil [mil²]": 8,
    "circular mil [cmil]": 8,
    "circular inch [circ in]": 4,
    "square (roofing) [sq roof]": 2,
    "board foot [bf]": 3
  },
  
  // Imperial British System
  "imperial": {
    // Imperial British Units
    "square inch (Imperial) [in² UK]": 3,
    "square foot (Imperial) [ft² UK]": 2,
    "square yard (Imperial) [yd² UK]": 2,
    "square mile (Imperial) [mi² UK]": 4,
    "acre (Imperial) [ac UK]": 3,
    "square furlong [fur²]": 3,
    "square chain (Imperial) [ch² UK]": 2,
    "square link [lnk²]": 3,
    
    // Historical British
    "rood (Imperial) [rood UK]": 3,
    "perch (Imperial) [perch UK]": 2,
    "pole (Imperial) [pole UK]": 2,
    "hide [hide]": 4,
    "virgate [virgate]": 4,
    "yardland [yardland]": 4,
    "bovate [bovate]": 4,
    "carucate [carucate]": 4,
    "oxgang [oxgang]": 4
  },
  
  // Asian Traditional Units
  "asian": {
    // Japanese Units
    "tsubo (Japan) [tsubo]": 2,
    "tan (Japan) [tan]": 2,
    "cho (Japan) [cho]": 2,
    "se (Japan) [se]": 2,
    "shaku² (Japan) [shaku²]": 3,
    "ken² (Japan) [ken²]": 2,
    "tatami [tatami]": 2,
    
    // Chinese Units
    "mu (China) [mu]": 2,
    "qing (China) [qing]": 3,
    "li² (China) [li²]": 4,
    "chi² (China) [chi²]": 3,
    "zhang² (China) [zhang²]": 2,
    "fen (China) [fen]": 2,
    
    // Other Asian Units
    "ping (Taiwan) [ping]": 2,
    "pyeong (Korea) [pyeong]": 2,
    "dan (Korea) [dan]": 2,
    "rai (Thailand) [rai]": 2,
    "ngan (Thailand) [ngan]": 2,
    "wah² (Thailand) [wah²]": 2,
    "jerib (Persia) [jerib]": 2,
    "bigha (India) [bigha]": 2
  },
  
  // Agricultural and Land Management
  "agricultural": {
    // International Agriculture
    "dunam [dunam]": 2,
    "stremmata [stremmata]": 2,
    "feddan (Egypt) [feddan]": 2,
    "manzana (Central America) [manzana]": 3,
    "caballería (Spain) [caballería]": 4,
    "fanega (Spain) [fanega]": 3,
    "hectárea (Spanish) [hectárea]": 3,
    
    // Indian Subcontinent
    "bigha (Bengal) [bigha Bengal]": 2,
    "bigha (Bihar) [bigha Bihar]": 2,
    "katha (Bengal) [katha]": 2,
    "cottah [cottah]": 2,
    "gunta [gunta]": 2,
    "cent [cent]": 2,
    "ground [ground]": 2,
    "ropani (Nepal) [ropani]": 2,
    
    // Farm Plot Sizes
    "plot (residential) [plot res]": 2,
    "plot (commercial) [plot comm]": 3,
    "garden plot [garden]": 2,
    "allotment [allotment]": 2,
    "smallholding [smallholding]": 3,
    "quarter acre [1/4 ac]": 2,
    "half acre [1/2 ac]": 2
  },
  
  // Construction and Architecture
  "construction": {
    // Building Materials
    "square (roofing) [square]": 2,
    "bundle (shingles) [bundle]": 2,
    "sheet (drywall 4x8) [sheet 4x8]": 2,
    "sheet (drywall 4x12) [sheet 4x12]": 2,
    "sheet (plywood 4x8) [plywood]": 2,
    "brick face [brick]": 3,
    "block face (CMU) [block]": 3,
    
    // Flooring & Tiling
    "tile (12x12 inch) [tile 12]": 2,
    "tile (6x6 inch) [tile 6]": 2,
    "tile (ceramic) [tile ceramic]": 2,
    "plank (hardwood) [plank]": 2,
    "roll (carpet 12ft) [carpet roll]": 2,
    "square yard (carpet) [yd² carpet]": 2,
    "square foot (flooring) [ft² floor]": 2,
    
    // Architectural Drawing
    "architectural unit [arch]": 2,
    "CAD unit [CAD]": 3,
    "drawing square [draw sq]": 2
  },
  
  // Scientific and Technical
  "scientific": {
    // Microscopic Areas
    "square micrometer [μm²]": 6,
    "square nanometer [nm²]": 8,
    "square picometer [pm²]": 10,
    "square femtometer [fm²]": 12,
    "square angstrom [Ų]": 8,
    "barn [b]": 10,
    "shed [shed]": 15,
    "outhouse [outhouse]": 12,
    
    // Laboratory Equipment
    "petri dish (standard) [petri]": 3,
    "petri dish (small) [petri small]": 3,
    "microscope slide [slide]": 3,
    "coverslip (18mm) [coverslip 18]": 4,
    "coverslip (22mm) [coverslip 22]": 4,
    "well (96-well plate) [well 96]": 5,
    "well (384-well plate) [well 384]": 6,
    
    // Astronomical Areas
    "square astronomical unit [AU²]": 8,
    "square light-year [ly²]": 8,
    "square parsec [pc²]": 8,
    "square degree [deg²]": 6,
    "square arcminute [arcmin²]": 8,
    "square arcsecond [arcsec²]": 10,
    
    // Nuclear Physics
    "cross section [σ]": 10,
    "millibarn [mb]": 10,
    "microbarn [μb]": 10,
    "Thomson cross section [σT]": 10,
    "nuclear cross section [σn]": 10
  },
  
  // Textile and Manufacturing
  "textile": {
    // Fabric Measurements
    "bolt (fabric) [bolt]": 2,
    "yard² (fabric) [yd² fabric]": 2,
    "roll (fabric 45 inch) [roll 45]": 2,
    "roll (fabric 60 inch) [roll 60]": 2,
    "panel (fabric) [panel]": 2,
    "cutting table [cut table]": 2,
    
    // Garment Pieces
    "pattern piece (large) [pattern L]": 2,
    "pattern piece (medium) [pattern M]": 2,
    "pattern piece (small) [pattern S]": 3,
    "interfacing sheet [interface]": 2,
    "lining panel [lining]": 2,
    
    // Industrial Textiles
    "canvas roll [canvas]": 2,
    "felt sheet [felt]": 2,
    "leather hide [hide leather]": 2,
    "vinyl sheet [vinyl]": 2,
    "carpet tile [carpet tile]": 2
  },
  
  // Real Estate and Property
  "realEstate": {
    // Residential Areas
    "house lot (standard) [lot std]": 2,
    "house lot (large) [lot large]": 2,
    "apartment [apt]": 2,
    "studio apartment [studio]": 2,
    "townhouse [townhouse]": 2,
    "condominium [condo]": 2,
    "mobile home pad [mobile pad]": 2,
    
    // Commercial Property
    "office space [office]": 2,
    "retail space [retail]": 2,
    "warehouse [warehouse]": 2,
    "shopping center [shop center]": 3,
    "parking space [parking]": 2,
    "loading dock [loading]": 2,
    
    // Development Parcels
    "city lot [city lot]": 2,
    "suburban lot [suburb lot]": 2,
    "rural parcel [rural]": 3,
    "commercial parcel [comm parcel]": 3,
    "industrial site [industrial]": 4,
    "development tract [tract]": 4
  },
  
  // Sports and Recreation
  "sports": {
    // Playing Fields
    "football field (American) [football]": 2,
    "soccer field (FIFA) [soccer FIFA]": 2,
    "baseball field [baseball]": 3,
    "basketball court [basketball]": 2,
    "tennis court [tennis]": 2,
    "volleyball court [volleyball]": 2,
    "badminton court [badminton]": 2,
    "squash court [squash]": 2,
    
    // Track & Field
    "athletics track (inner) [track inner]": 2,
    "athletics field [athletics]": 3,
    "long jump pit [long jump]": 2,
    "shot put circle [shot put]": 2,
    "discus circle [discus]": 2,
    "pole vault area [pole vault]": 2,
    
    // Recreational Areas
    "swimming pool (Olympic) [pool Olympic]": 2,
    "swimming pool (standard) [pool std]": 2,
    "golf tee [golf tee]": 2,
    "golf green [golf green]": 2,
    "putting green [putting]": 2,
    "driving range bay [drive bay]": 2,
    "bowling lane [bowling]": 2,
    "ice hockey rink [hockey]": 2
  },
  
  // Transportation and Infrastructure
  "transportation": {
    // Road Infrastructure
    "lane mile [lane mi]": 2,
    "highway lane [highway lane]": 2,
    "parking lot [parking lot]": 2,
    "intersection [intersection]": 2,
    "roundabout [roundabout]": 2,
    "sidewalk (per mile) [sidewalk mi]": 2,
    "bike lane (per mile) [bike mi]": 2,
    
    // Aviation Areas
    "runway (large) [runway L]": 4,
    "runway (medium) [runway M]": 4,
    "runway (small) [runway S]": 4,
    "taxiway [taxiway]": 4,
    "apron (aircraft) [apron]": 4,
    "helipad [helipad]": 2,
    "hangar [hangar]": 3,
    
    // Maritime Areas
    "ship berth [berth]": 3,
    "dock (loading) [dock]": 3,
    "marina slip [marina]": 2,
    "port terminal [terminal]": 4,
    "container yard [container]": 4,
    "dry dock [dry dock]": 4
  },
  
  // Environmental and Geographic
  "environmental": {
    // Conservation Areas
    "nature reserve [reserve]": 5,
    "national park [park]": 6,
    "wildlife sanctuary [sanctuary]": 6,
    "forest preserve [preserve]": 5,
    "wetland area [wetland]": 4,
    "conservation easement [easement]": 4,
    
    // Water Bodies
    "pond [pond]": 3,
    "small lake [lake small]": 4,
    "reservoir [reservoir]": 4,
    "watershed [watershed]": 5,
    "river basin [basin]": 6,
    "estuary [estuary]": 5,
    
    // Geographic Features
    "island (small) [island S]": 4,
    "island (medium) [island M]": 5,
    "valley floor [valley]": 5,
    "plateau [plateau]": 6,
    "coastal area [coastal]": 5,
    "mountain face [mountain]": 5,
    "desert area [desert]": 6
  }
};