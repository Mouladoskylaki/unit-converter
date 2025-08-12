import { volumePrecision } from "./volumeCustomPrecision.js";
import { generateConversions } from "../../../utils.js";

import {
  standardMetricFormulas,
  usCustomaryFormulas,
  imperialFormulas,
  internationalCookingFormulas,
  pharmaceuticalFormulas,
  historicalFormulas,
  industrialFormulas,
  foodBeverageFormulas,
  engineeringFormulas,
  automotiveFormulas,
  technologyFormulas,
  scientificFormulas,
  traditionalFormulas
} from "./volumeFormulasFull.js";

// Standard Metric Units
export const standardMetricObj = generateConversions(
  standardMetricFormulas,
  volumePrecision,
  "standardmetric"
);

// US Customary System
export const usCustomaryObj = generateConversions(
  usCustomaryFormulas,
  volumePrecision,
  "uscustomary"
);

// Imperial British System
export const imperialObj = generateConversions(
  imperialFormulas,
  volumePrecision,
  "imperial"
);

// International Cooking Units
export const internationalCookingObj = generateConversions(
  internationalCookingFormulas,
  volumePrecision,
  "internationalcooking"
);

// Pharmaceutical and Medical Units
export const pharmaceuticalObj = generateConversions(
  pharmaceuticalFormulas,
  volumePrecision,
  "pharmaceutical"
);

// Biblical and Ancient Units
export const historicalObj = generateConversions(
  historicalFormulas,
  volumePrecision,
  "historical"
);

// Industrial and Commercial Units
export const industrialObj = generateConversions(
  industrialFormulas,
  volumePrecision,
  "industrial"
);

// Food and Beverage Units
export const foodBeverageFormulasObj = generateConversions(
  foodBeverageFormulas,
  volumePrecision,
  "foodBeverage"
);

// Construction and Engineering Units
export const engineeringObj = generateConversions(
  engineeringFormulas,
  volumePrecision,
  "engineering"
);

// Automotive and Transportation
export const automotiveObj = generateConversions(
  automotiveFormulas,
  volumePrecision,
  "automotive"
);

// Scientific and Specialized Units
export const scientificObj = generateConversions(
  scientificFormulas,
  volumePrecision,
  "scientific"
);

// Scientific and Specialized Units
export const technologyObj = generateConversions(
  technologyFormulas,
  volumePrecision,
  "technology"
);

// Regional and Traditional Units
export const traditionalObj = generateConversions(
  traditionalFormulas,
  volumePrecision,
  "traditional"
);