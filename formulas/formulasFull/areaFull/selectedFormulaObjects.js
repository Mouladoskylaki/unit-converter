import { areaPrecision } from "./areaCustomPrecision.js"
import { generateConversions } from "../../../utils.js";

import {
  standardMetricFormulas,
  usCustomaryFormulas,
  imperialFormulas,
  asianFormulas,
  agriculturalFormulas,
  constructionFormulas,
  scientificFormulas,
  textileFormulas,
  realEstateFormulas,
  sportsFormulas,
  transportationFormulas,
  environmentalFormulas
} from "./areaFormulasFull.js";

// Standard Metric Units
export const standardMetricObj = generateConversions(
  standardMetricFormulas,
  areaPrecision,
  "standardMetric"
);

// US Customary System
export const usCustomaryObj = generateConversions(
  usCustomaryFormulas,
  areaPrecision,
  "usCustomary"
);

// Imperial British System
export const imperialObj = generateConversions(
  imperialFormulas,
  areaPrecision,
  "imperial"
);

// Asian Traditional Units
export const asianObj = generateConversions(
  asianFormulas,
  areaPrecision,
  "asian"
);

// Agricultural and Land Management Units
export const agriculturalObj = generateConversions(
  agriculturalFormulas,
  areaPrecision,
  "agricultural"
);

// Construction and Architecture Units
export const constructionObj = generateConversions(
  constructionFormulas,
  areaPrecision,
  "construction"
);

// Scientific and Technical Units
export const scientificObj = generateConversions(
  scientificFormulas,
  areaPrecision,
  "scientific"
);

// Textile and Manufacturing Units
export const textileObj = generateConversions(
  textileFormulas,
  areaPrecision,
  "textile"
);

// Real Estate and Property Units
export const realEstateObj = generateConversions(
  realEstateFormulas,
  areaPrecision,
  "realEstate"
);

// Sports and Recreation Units
export const sportsObj = generateConversions(
  sportsFormulas,
  areaPrecision,
  "sports"
);

// Transportation and Infrastructure Units
export const transportationObj = generateConversions(
  transportationFormulas,
  areaPrecision,
  "transportation"
);

// Environmental and Geographic Units
export const environmentalObj = generateConversions(
  environmentalFormulas,
  areaPrecision,
  "environmental"
);