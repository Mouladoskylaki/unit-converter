import { weightMassCustomPrecision } from "./weightCustomPrecision.js";
import { generateConversions } from "../../../utils.js";

// Import full formula sets
import {
  standardWeightFormulas,
  asianWeightFormulas,
  historicalWeightFormulas,
  scientificWeightFormulas,
  preciousMetalFormulas,
  commercialWeightFormulas,
  referenceWeightFormulas
} from "./weightFormulasFull.js";


// Generate conversion objects for full converter
export const standardWeightObj = generateConversions(
  standardWeightFormulas,
  weightMassCustomPrecision,
  "standardWeight"
);

export const asianWeightObj = generateConversions(
  asianWeightFormulas,
  weightMassCustomPrecision,
  "asianWeight"
);

export const historicalWeightObj = generateConversions(
  historicalWeightFormulas,
  weightMassCustomPrecision,
  "historicalWeight"
);

export const scientificWeightObj = generateConversions(
  scientificWeightFormulas,
  weightMassCustomPrecision,
  "scientificWeight"
);

export const preciousMetalObj = generateConversions(
  preciousMetalFormulas,
  weightMassCustomPrecision,
  "preciousMetal"
);

export const commercialWeightObj = generateConversions(
  commercialWeightFormulas,
  weightMassCustomPrecision,
  "commercialWeight"
);

export const referenceWeightObj = generateConversions(
  referenceWeightFormulas,
  weightMassCustomPrecision,
  "referenceWeight"
);