// volumePrecision.js - Complete
// Precision settings to match the updated volume category format

export const volumePrecision = {
  // Standard Metric Units
  "standardmetric": {
    "liter [L]": 2,
    "milliliter [mL]": 1,
    "centiliter [cL]": 2,
    "deciliter [dL]": 2,
    "kiloliter [kL]": 3,
    "hectoliter [hL]": 2,
    "megaliter [ML]": 4,
    "gigaliter [GL]": 4,
    
    // Cubic Metric Units
    "cubic meter [m³]": 3,
    "cubic decimeter [dm³]": 2,
    "cubic centimeter [cm³]": 1,
    "cubic millimeter [mm³]": 0,
    "cubic kilometer [km³]": 6,
    "cubic hectometer [hm³]": 4,
    "cubic dekameter [dam³]": 4
  },
  
  // US Customary System
  "uscustomary": {
    // US Liquid Volume
    "gallon (US liquid) [gal]": 3,
    "quart (US liquid) [qt]": 2,
    "pint (US liquid) [pt]": 2,
    "cup (US) [cup]": 2,
    "gill (US) [gi]": 2,
    "fluid ounce (US) [fl oz]": 2,
    "tablespoon (US) [tbsp]": 2,
    "teaspoon (US) [tsp]": 2,
    "fluid dram (US) [fl dr]": 3,
    "minim (US) [min]": 4,
    
    // US Dry Volume
    "barrel (US dry) [bbl dry]": 3,
    "bushel (US) [bu]": 3,
    "peck (US) [pk]": 2,
    "gallon (US dry) [gal dry]": 2,
    "quart (US dry) [qt dry]": 2,
    "pint (US dry) [pt dry]": 2,
    "cup (US dry) [cup dry]": 2,
    
    // US Fractional Cooking
    "1/4 teaspoon [1/4 tsp]": 3,
    "1/2 teaspoon [1/2 tsp]": 3,
    "1/4 tablespoon [1/4 tbsp]": 3,
    "1/2 tablespoon [1/2 tbsp]": 3,
    "1/8 cup [1/8 cup]": 2,
    "1/4 cup [1/4 cup]": 2,
    "1/3 cup [1/3 cup]": 2,
    "1/2 cup [1/2 cup]": 2,
    "2/3 cup [2/3 cup]": 2,
    "3/4 cup [3/4 cup]": 2
  },
  
  // Imperial British System
  "imperial": {
    // Imperial Liquid Volume
    "gallon (Imperial) [gal UK]": 3,
    "quart (Imperial) [qt UK]": 2,
    "pint (Imperial) [pt UK]": 2,
    "gill (Imperial) [gi UK]": 2,
    "fluid ounce (Imperial) [fl oz UK]": 2,
    "tablespoon (Imperial) [tbsp UK]": 2,
    "dessertspoon (Imperial) [dsp UK]": 2,
    "teaspoon (Imperial) [tsp UK]": 3,
    "fluid dram (Imperial) [fl dr UK]": 3,
    "minim (Imperial) [min UK]": 4,
    
    // Imperial Dry Volume
    "quarter (Imperial) [qr UK]": 3,
    "bushel (Imperial) [bu UK]": 3,
    "peck (Imperial) [pk UK]": 2,
    "gallon (Imperial dry) [gal dry UK]": 2,
    "quart (Imperial dry) [qt dry UK]": 2,
    "pint (Imperial dry) [pt dry UK]": 2
  },
  
  // International Cooking Units
  "internationalcooking": {
    // Metric Cooking Units
    "cup (metric) [cup metric]": 2,
    "tablespoon (metric) [tbsp metric]": 2,
    "teaspoon (metric) [tsp metric]": 2,
    "dessertspoon (metric) [dsp metric]": 2,
    
    // International Variations
    "cup (Japanese) [cup JP]": 2,
    "cup (Australian) [cup AU]": 2,
    "tablespoon (Australian) [tbsp AU]": 2,
    "cup (Canadian) [cup CA]": 2,
    "cup (legal US) [cup legal]": 2,
    "tablespoon (UK old) [tbsp UK old]": 2,
    "wineglass [wineglass]": 2,
    "coffee cup [coffee cup]": 2,
    "tea cup [tea cup]": 2,
    
    // European Cooking
    "deciliter [dL]": 2,
    "centiliter [cL]": 2,
    "Scandinavian cup [cup Nordic]": 2,
    "German cup [cup DE]": 2,
    "Italian cup [cup IT]": 2
  },
  
  // Pharmaceutical and Medical Units
  "pharmaceutical": {
    // Apothecary Liquid Volume
    "fluid ounce (apothecary) [fl oz ap]": 2,
    "fluid dram (apothecary) [fl dr ap]": 3,
    "minim (apothecary) [min ap]": 4,
    "scruple (fluid) [fl sc]": 3,
    
    // Medical Dosage Units
    "drop (medical) [gtt]": 4,
    "drop (metric) [drop metric]": 4,
    "dose cup [dose]": 2,
    "medicine cup [med cup]": 2,
    "syringe (1mL) [syr1]": 2,
    "syringe (5mL) [syr5]": 2,
    "syringe (10mL) [syr10]": 2,
    "vial (standard) [vial]": 2,
    "ampoule [amp]": 2
  },
  
  // Biblical and Ancient Units
  "historical": {
    // Biblical Volume Units
    "bath (Hebrew) [bath]": 2,
    "hin (Hebrew) [hin]": 2,
    "kab (Hebrew) [kab]": 2,
    "log (Hebrew) [log]": 2,
    "omer (Hebrew) [omer]": 2,
    
    // Ancient Greek & Roman
    "amphora (Roman) [amphora]": 2,
    "urna (Roman) [urna]": 2,
    "congius (Roman) [congius]": 2,
    "sextarius (Roman) [sextarius]": 2,
    "cyathus (Roman) [cyathus]": 3,
    "kotyle (Greek) [kotyle]": 2,
    "chous (Greek) [chous]": 2,
    "metretes (Greek) [metretes]": 2,
    
    // Medieval Units
    "tun [tun]": 2,
    "pipe [pipe]": 2,
    "hogshead [hhd]": 2,
    "tierce [tierce]": 2,
    "rundlet [rundlet]": 2,
    "kilderkin [kilderkin]": 2,
    "firkin [firkin]": 2,
    "pin [pin]": 2
  },
  
  // Industrial and Commercial Units
  "industrial": {
    // Petroleum & Oil
    "barrel (petroleum) [bbl oil]": 3,
    "barrel (US liquid) [bbl US]": 3,
    "barrel (Imperial) [bbl UK]": 3,
    "drum (55-gallon) [drum55]": 2,
    "drum (44-gallon) [drum44]": 2,
    "jerrycan (20L) [jerrycan]": 2,
    "jerrycan (5gal) [jerrycan5]": 2,
    
    // Brewing & Distilling
    "beer barrel (US) [bbl beer]": 3,
    "beer keg (half barrel) [keg]": 2,
    "pony keg (quarter barrel) [pony]": 2,
    "sixth barrel [sixtel]": 2,
    "growler [growler]": 2,
    "bottle (beer 12oz) [beer12]": 3,
    "bottle (wine 750mL) [wine750]": 2,
    "magnum (wine) [magnum]": 2,
    "jeroboam (wine) [jeroboam]": 2,
    
    // Chemical & Laboratory
    "cubic decimeter [dm³]": 2,
    "laboratory flask (250mL) [flask250]": 2,
    "laboratory flask (500mL) [flask500]": 2,
    "laboratory flask (1L) [flask1L]": 2,
    "beaker (100mL) [beaker100]": 2,
    "beaker (250mL) [beaker250]": 2,
    "beaker (500mL) [beaker500]": 2,
    "test tube [testtube]": 3,
    "graduated cylinder (100mL) [gradcyl]": 2,
    "pipette (10mL) [pipette]": 2
  },
  
  // Construction and Engineering Units
  "engineering": {
    // Imperial Volume
    "cubic inch [in³]": 2,
    "cubic foot [ft³]": 2,
    "cubic yard [yd³]": 2,
    "board foot [bf]": 3,
    "cord (firewood) [cord]": 2,
    "cubic fathom [fathom³]": 2,
    
    // Large Scale Engineering
    "acre-foot [ac⋅ft]": 4,
    "acre-inch [ac⋅in]": 3,
    "hundred cubic feet [ccf]": 2,
    "thousand cubic feet [mcf]": 2,
    
    // Surveying Units
    "register ton [RT]": 2,
    "freight ton [FT]": 2,
    "displacement ton [DT]": 2,
    "measurement ton [MT]": 2
  },
  
  // Automotive and Transportation
  "automotive": {
    // Engine & Fuel
    "cubic inch (engine) [ci]": 2,
    "liter (engine) [L eng]": 2,
    "cc (engine) [cc]": 0,
    "fuel tank (gallon) [tank gal]": 2,
    "fuel tank (liter) [tank L]": 2,
    
    // Fluid Capacities
    "oil quart [oil qt]": 2,
    "coolant liter [coolant L]": 2,
    "brake fluid bottle [brake]": 2,
    "windshield washer [washer]": 2,
    "transmission fluid [trans]": 2
  },
  
  // Scientific and Specialized Units
  "scientific": {
    // Scientific Volume
    "microliter [μL]": 1,
    "nanoliter [nL]": 2,
    "picoliter [pL]": 3,
    "femtoliter [fL]": 4,
    "attoliter [aL]": 5,
    
    // Astronomical Units
    "cubic astronomical unit [AU³]": 6,
    "cubic light-year [ly³]": 6,
    "cubic parsec [pc³]": 6,
    
    // Molecular Volume
    "cubic angstrom [Ų³]": 8,
    "cubic nanometer [nm³]": 8,
    "cubic micrometer [μm³]": 8,
    "molar volume (STP) [Vm]": 4,
    "atomic volume [Va]": 8
  },
  
  // Regional and Traditional Units
  "traditional": {
    // Asian Traditional
    "sheng (Chinese) [sheng]": 2,
    "dou (Chinese) [dou]": 2,
    "dan (Chinese) [dan]": 2,
    "sho (Japanese) [sho]": 2,
    "to (Japanese) [to]": 2,
    "koku (Japanese) [koku]": 2,
    "mal (Korean) [mal]": 2,
    
    // Russian Traditional
    "vedro (Russian) [vedro]": 2,
    "shtof (Russian) [shtof]": 2,
    "charka (Russian) [charka]": 2,
    "kruzhka (Russian) [kruzhka]": 2,
    
    // Middle Eastern
    "artaba (Persian) [artaba]": 2,
    "qadah (Arabic) [qadah]": 2,
    "ratl (Arabic) [ratl]": 2,
    "makuk (Arabic) [makuk]": 2,
    
    // Indian Subcontinent
    "maund (Indian) [maund]": 2,
    "ser (Indian) [ser]": 2,
    "chhatak (Indian) [chhatak]": 3,
    "pao (Indian) [pao]": 2
  },
  // Food & Beverage Containers
  "foodBeverage": {
    // Bar & Restaurant
    "shot glass [shot]": 3,
    "jigger [jigger]": 3,
    "pony shot [pony shot]": 3,
    "double shot [double]": 3,
    
    // Beverage Containers
    "bottle (soda 12oz) [soda12]": 2,
    "bottle (soda 20oz) [soda20]": 2,
    "can (standard) [can]": 2,
    "can (tall boy) [tall boy]": 2,
    "bottle (water 16.9oz) [water]": 2,
    "energy drink [energy]": 2,
    
    // Common Containers
    "water bottle (500mL) [bottle500]": 2,
    "water bottle (1L) [bottle1L]": 2,
    "milk carton (1qt) [milk qt]": 2,
    "milk carton (1gal) [milk gal]": 2,
    "juice box [juice box]": 2,
    "coffee mug [mug]": 2,
    "travel mug [travel mug]": 2
  },
  
  // Modern Technology
  "technology": {
    // Computer & Electronics
    "water cooling reservoir [res]": 2,
    "ink cartridge (standard) [ink]": 3,
    "ink cartridge (XL) [ink XL]": 3,
    "toner cartridge [toner]": 2,
    
    // Personal Care
    "perfume bottle [perfume]": 2,
    "cologne bottle [cologne]": 2,
    "shampoo bottle [shampoo]": 2,
    "lotion bottle [lotion]": 2,
    "nail polish [nail polish]": 3
  }
};