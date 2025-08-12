// volumeConverterCategories.js - Full Volume Converter
// Comprehensive volume units organized by meaningful categories

// Standard Metric Units - most commonly used metric volume measurements
export const standardMetricFormulas = {
  "group_Standard Metric Units": 0,
  "liter [L]": 1, // Base unit
  "milliliter [mL]": 0.001,
  "centiliter [cL]": 0.01,
  "deciliter [dL]": 0.1,
  "kiloliter [kL]": 1000,
  "hectoliter [hL]": 100,
  "megaliter [ML]": 1000000,
  "gigaliter [GL]": 1000000000,
  
  "group_Cubic Metric Units": 0,
  "cubic meter [m³]": 1000,
  "cubic decimeter [dm³]": 1,
  "cubic centimeter [cm³]": 0.001,
  "cubic millimeter [mm³]": 0.000001,
  "cubic kilometer [km³]": 1000000000000,
  "cubic hectometer [hm³]": 1000000000,
  "cubic dekameter [dam³]": 1000000
};

// US Customary System - liquid and dry measurements
export const usCustomaryFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "milliliter [mL]": 0.001,
  "cubic centimeter [cm³]": 0.001,
  "cubic meter [m³]": 1000,
  
  "group_US Liquid Volume": 0,
  "gallon (US liquid) [gal]": 3.785411784,
  "quart (US liquid) [qt]": 0.946352946,
  "pint (US liquid) [pt]": 0.473176473,
  "cup (US) [cup]": 0.2365882365,
  "gill (US) [gi]": 0.1182941183,
  "fluid ounce (US) [fl oz]": 0.0295735297,
  "tablespoon (US) [tbsp]": 0.01478676478,
  "teaspoon (US) [tsp]": 0.00492892159,
  "fluid dram (US) [fl dr]": 0.003696691195,
  "minim (US) [min]": 0.00006161152,
  
  "group_US Dry Volume": 0,
  "barrel (US dry) [bbl dry]": 115.6271,
  "bushel (US) [bu]": 35.23907017,
  "peck (US) [pk]": 8.80976754,
  "gallon (US dry) [gal dry]": 4.40488377,
  "quart (US dry) [qt dry]": 1.101220943,
  "pint (US dry) [pt dry]": 0.5506104715,
  "cup (US dry) [cup dry]": 0.2753052357,
  
  "group_US Fractional Cooking": 0,
  "1/4 teaspoon [1/4 tsp]": 0.001232230398,
  "1/2 teaspoon [1/2 tsp]": 0.002464460796,
  "1/4 tablespoon [1/4 tbsp]": 0.003696691195,
  "1/2 tablespoon [1/2 tbsp]": 0.00739338239,
  "1/8 cup [1/8 cup]": 0.0295735297,
  "1/4 cup [1/4 cup]": 0.05914705941,
  "1/3 cup [1/3 cup]": 0.07886274456,
  "1/2 cup [1/2 cup]": 0.1182941183,
  "2/3 cup [2/3 cup]": 0.1577254891,
  "3/4 cup [3/4 cup]": 0.1774411765
};

// Imperial British System - official UK measurements
export const imperialFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "milliliter [mL]": 0.001,
  "cubic centimeter [cm³]": 0.001,
  "cubic meter [m³]": 1000,
  
  "group_Imperial Liquid Volume": 0,
  "gallon (Imperial) [gal UK]": 4.54609,
  "quart (Imperial) [qt UK]": 1.1365225,
  "pint (Imperial) [pt UK]": 0.56826125,
  "gill (Imperial) [gi UK]": 0.1420653125,
  "fluid ounce (Imperial) [fl oz UK]": 0.0284130625,
  "tablespoon (Imperial) [tbsp UK]": 0.01420653125,
  "dessertspoon (Imperial) [dsp UK]": 0.01136522500,
  "teaspoon (Imperial) [tsp UK]": 0.00592892170,
  "fluid dram (Imperial) [fl dr UK]": 0.003551632813,
  "minim (Imperial) [min UK]": 0.00005919386,
  
  "group_Imperial Dry Volume": 0,
  "quarter (Imperial) [qr UK]": 290.9488,
  "bushel (Imperial) [bu UK]": 36.36872,
  "peck (Imperial) [pk UK]": 9.09218,
  "gallon (Imperial dry) [gal dry UK]": 4.54609,
  "quart (Imperial dry) [qt dry UK]": 1.1365225,
  "pint (Imperial dry) [pt dry UK]": 0.56826125
};

// International Cooking Units - measurements from different countries
export const internationalCookingFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "milliliter [mL]": 0.001,
  "deciliter [dL]": 0.1,
  "centiliter [cL]": 0.01,
  
  "group_Metric Cooking Units": 0,
  "cup (metric) [cup metric]": 0.25,
  "tablespoon (metric) [tbsp metric]": 0.015,
  "teaspoon (metric) [tsp metric]": 0.005,
  "dessertspoon (metric) [dsp metric]": 0.01,
  
  "group_International Variations": 0,
  "cup (Japanese) [cup JP]": 0.2,
  "cup (Australian) [cup AU]": 0.25,
  "tablespoon (Australian) [tbsp AU]": 0.02,
  "cup (Canadian) [cup CA]": 0.227305,
  "cup (legal US) [cup legal]": 0.24,
  "tablespoon (UK old) [tbsp UK old]": 0.01774,
  "wineglass [wineglass]": 0.118294,
  "coffee cup [coffee cup]": 0.15,
  "tea cup [tea cup]": 0.19,
  
  "group_European Cooking": 0,
  "Scandinavian cup [cup Nordic]": 0.25,
  "German cup [cup DE]": 0.25,
  "Italian cup [cup IT]": 0.25
};

// Pharmaceutical and Medical Units - apothecary system measurements
export const pharmaceuticalFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "milliliter [mL]": 0.001,
  "microliter [μL]": 0.000001,
  "cubic centimeter [cm³]": 0.001,
  
  "group_Apothecary Liquid Volume": 0,
  "fluid ounce (apothecary) [fl oz ap]": 0.0295735297,
  "fluid dram (apothecary) [fl dr ap]": 0.003696691,
  "minim (apothecary) [min ap]": 0.00006161152,
  "scruple (fluid) [fl sc]": 0.001232230,
  
  "group_Medical Dosage Units": 0,
  "drop (medical) [gtt]": 0.00005,
  "drop (metric) [drop metric]": 0.00005,
  "dose cup [dose]": 0.03,
  "medicine cup [med cup]": 0.015,
  "syringe (1mL) [syr1]": 0.001,
  "syringe (5mL) [syr5]": 0.005,
  "syringe (10mL) [syr10]": 0.01,
  "vial (standard) [vial]": 0.01,
  "ampoule [amp]": 0.001,
  "blood drop [blood]": 0.00005,
  "urine sample [urine]": 0.1
};

// Biblical and Ancient Units - historical volume measurements
export const historicalFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "milliliter [mL]": 0.001,
  "gallon (US liquid) [gal]": 3.785411784,
  "cubic meter [m³]": 1000,
  
  "group_Biblical Volume Units": 0,
  "bath (Hebrew) [bath]": 22,
  "hin (Hebrew) [hin]": 3.67,
  "kab (Hebrew) [kab]": 1.22,
  "log (Hebrew) [log]": 0.306,
  "omer (Hebrew) [omer]": 2.3,
  
  "group_Ancient Greek & Roman": 0,
  "amphora (Roman) [amphora]": 26.026,
  "urna (Roman) [urna]": 13.013,
  "congius (Roman) [congius]": 3.283,
  "sextarius (Roman) [sextarius]": 0.547,
  "cyathus (Roman) [cyathus]": 0.045,
  "kotyle (Greek) [kotyle]": 0.27,
  "chous (Greek) [chous]": 3.24,
  "metretes (Greek) [metretes]": 39.39,
  
  "group_Medieval Units": 0,
  "tun [tun]": 954.68,
  "pipe [pipe]": 477.34,
  "hogshead [hhd]": 238.67,
  "tierce [tierce]": 159.11,
  "rundlet [rundlet]": 68.19,
  "kilderkin [kilderkin]": 81.83,
  "firkin [firkin]": 40.91,
  "pin [pin]": 20.46
};

// Industrial and Commercial Units - used in various industries
export const industrialFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "milliliter [mL]": 0.001,
  "cubic meter [m³]": 1000,
  "gallon (US liquid) [gal]": 3.785411784,
  
  "group_Petroleum & Oil": 0,
  "barrel (petroleum) [bbl oil]": 158.987295,
  "barrel (US liquid) [bbl US]": 119.240471,
  "barrel (Imperial) [bbl UK]": 163.659,
  "drum (55-gallon) [drum55]": 208.198,
  "drum (44-gallon) [drum44]": 166.559,
  "jerrycan (20L) [jerrycan]": 20,
  "jerrycan (5gal) [jerrycan5]": 18.927,
  
  "group_Brewing & Distilling": 0,
  "beer barrel (US) [bbl beer]": 117.348,
  "beer keg (half barrel) [keg]": 58.674,
  "pony keg (quarter barrel) [pony]": 29.337,
  "sixth barrel [sixtel]": 19.558,
  "growler [growler]": 1.893,
  "bottle (beer 12oz) [beer12]": 0.355,
  "bottle (wine 750mL) [wine750]": 0.75,
  "magnum (wine) [magnum]": 1.5,
  "jeroboam (wine) [jeroboam]": 3,
  "bottle (spirits 750mL) [spirits]": 0.75,
  "fifth (US) [fifth]": 0.757,
  
  "group_Chemical & Laboratory": 0,
  "cubic decimeter [dm³]": 1,
  "laboratory flask (250mL) [flask250]": 0.25,
  "laboratory flask (500mL) [flask500]": 0.5,
  "laboratory flask (1L) [flask1L]": 1,
  "beaker (100mL) [beaker100]": 0.1,
  "beaker (250mL) [beaker250]": 0.25,
  "beaker (500mL) [beaker500]": 0.5,
  "test tube [testtube]": 0.015,
  "graduated cylinder (100mL) [gradcyl]": 0.1,
  "pipette (10mL) [pipette]": 0.01
};

// Food & Beverage Containers - common commercial containers
export const foodBeverageFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "milliliter [mL]": 0.001,
  "fluid ounce (US) [fl oz]": 0.0295735297,
  "gallon (US liquid) [gal]": 3.785411784,
  
  "group_Bar & Restaurant": 0,
  "shot glass [shot]": 0.0443,
  "jigger [jigger]": 0.0443,
  "pony shot [pony shot]": 0.0296,
  "double shot [double]": 0.0887,
  
  "group_Beverage Containers": 0,
  "bottle (soda 12oz) [soda12]": 0.355,
  "bottle (soda 20oz) [soda20]": 0.591,
  "can (standard) [can]": 0.355,
  "can (tall boy) [tall boy]": 0.473,
  "bottle (water 16.9oz) [water]": 0.5,
  "energy drink [energy]": 0.25,
  
  "group_Common Containers": 0,
  "water bottle (500mL) [bottle500]": 0.5,
  "water bottle (1L) [bottle1L]": 1,
  "milk carton (1qt) [milk qt]": 0.946,
  "milk carton (1gal) [milk gal]": 3.785,
  "juice box [juice box]": 0.2,
  "coffee mug [mug]": 0.25,
  "travel mug [travel mug]": 0.35
};

// Construction and Engineering Units - used in building and engineering
export const engineeringFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "cubic meter [m³]": 1000,
  "cubic centimeter [cm³]": 0.001,
  "gallon (US liquid) [gal]": 3.785411784,
  
  "group_Imperial Volume": 0,
  "cubic inch [in³]": 0.016387064,
  "cubic foot [ft³]": 28.3168466,
  "cubic yard [yd³]": 764.554858,
  "board foot [bf]": 0.002359737,
  "cord (firewood) [cord]": 3624.556,
  "cubic fathom [fathom³]": 6116.438,
  
  "group_Large Scale Engineering": 0,
  "acre-foot [ac⋅ft]": 1233481.838,
  "acre-inch [ac⋅in]": 102790.153,
  "hundred cubic feet [ccf]": 2831.685,
  "thousand cubic feet [mcf]": 28316.85,
  
  "group_Surveying Units": 0,
  "register ton [RT]": 2831.685,
  "freight ton [FT]": 1132.674,
  "displacement ton [DT]": 991.1,
  "measurement ton [MT]": 1132.674,
  
  "group_Maritime & Aviation": 0,
  "nautical barrel [naut bbl]": 216.42,
  "aviation fuel tank [av tank]": 1000
};

// Automotive and Transportation - vehicle-related volume measurements
export const automotiveFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "milliliter [mL]": 0.001,
  "cubic centimeter [cm³]": 0.001,
  "gallon (US liquid) [gal]": 3.785411784,
  "quart (US liquid) [qt]": 0.946352946,
  
  "group_Engine & Fuel": 0,
  "cubic inch (engine) [ci]": 0.016387064,
  "liter (engine) [L eng]": 1,
  "cc (engine) [cc]": 0.001,
  "fuel tank (gallon) [tank gal]": 3.785411784,
  "fuel tank (liter) [tank L]": 1,
  
  "group_Fluid Capacities": 0,
  "oil quart [oil qt]": 0.946352946,
  "coolant liter [coolant L]": 1,
  "brake fluid bottle [brake]": 0.5,
  "windshield washer [washer]": 3.785411784,
  "transmission fluid [trans]": 0.946352946
};

// Modern Technology Units - contemporary tech-related volumes
export const technologyFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "milliliter [mL]": 0.001,
  "cubic centimeter [cm³]": 0.001,
  
  "group_Computer & Electronics": 0,
  "water cooling reservoir [res]": 0.5,
  "ink cartridge (standard) [ink]": 0.015,
  "ink cartridge (XL) [ink XL]": 0.025,
  "toner cartridge [toner]": 0.1,
  
  "group_Personal Care": 0,
  "perfume bottle [perfume]": 0.05,
  "cologne bottle [cologne]": 0.1,
  "shampoo bottle [shampoo]": 0.35,
  "lotion bottle [lotion]": 0.25,
  "nail polish [nail polish]": 0.015
};

// Scientific and Specialized Units - used in various scientific fields
export const scientificFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "milliliter [mL]": 0.001,
  "cubic meter [m³]": 1000,
  "cubic centimeter [cm³]": 0.001,
  
  "group_Scientific Volume": 0,
  "microliter [μL]": 0.000001,
  "nanoliter [nL]": 0.000000001,
  "picoliter [pL]": 0.000000000001,
  "femtoliter [fL]": 0.000000000000001,
  "attoliter [aL]": 0.000000000000000001,
  
  "group_Astronomical Units": 0,
  "cubic astronomical unit [AU³]": 3.347928976e33,
  "cubic light-year [ly³]": 8.467e47,
  "cubic parsec [pc³]": 2.938e49,
  
  "group_Molecular Volume": 0,
  "cubic angstrom [Ų³]": 1e-30,
  "cubic nanometer [nm³]": 1e-27,
  "cubic micrometer [μm³]": 1e-18,
  "molar volume (STP) [Vm]": 0.0224,
  "atomic volume [Va]": 1.66e-29,
  "cell volume (typical) [cell]": 1e-15
};

// Regional and Traditional Units - measurements from various cultures
export const traditionalFormulas = {
  // Standard metric units for conversion
  "liter [L]": 1,
  "milliliter [mL]": 0.001,
  "gallon (US liquid) [gal]": 3.785411784,
  "cubic meter [m³]": 1000,
  
  "group_Asian Traditional": 0,
  "sheng (Chinese) [sheng]": 1,
  "dou (Chinese) [dou]": 10,
  "dan (Chinese) [dan]": 100,
  "sho (Japanese) [sho]": 1.804,
  "to (Japanese) [to]": 18.04,
  "koku (Japanese) [koku]": 180.4,
  "mal (Korean) [mal]": 18.04,
  
  "group_Russian Traditional": 0,
  "vedro (Russian) [vedro]": 12.3,
  "shtof (Russian) [shtof]": 1.23,
  "charka (Russian) [charka]": 0.123,
  "kruzhka (Russian) [kruzhka]": 1.23,
  
  "group_Middle Eastern": 0,
  "artaba (Persian) [artaba]": 51.84,
  "qadah (Arabic) [qadah]": 2.06,
  "ratl (Arabic) [ratl]": 0.412,
  "makuk (Arabic) [makuk]": 0.825,
  
  "group_Indian Subcontinent": 0,
  "maund (Indian) [maund]": 37.32,
  "ser (Indian) [ser]": 0.933,
  "chhatak (Indian) [chhatak]": 0.058,
  "pao (Indian) [pao]": 0.233
};