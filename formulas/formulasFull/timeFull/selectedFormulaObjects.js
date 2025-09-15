import { timePrecision } from "./timeCustomPrecision.js";
import { generateConversions } from "../../../utils.js";

import {
  standardTimeFormulas,
  workBusinessFormulas,
  astronomicalFormulas,
  historicalFormulas,
  scientificFormulas,
  mediaFormulas,
  sportsFormulas,
  cookingFormulas,
  transportationFormulas,
  biologicalFormulas
} from "./timeFormulasFull.js";

// Standard Time Units
export const standardTimeObj = generateConversions(
  standardTimeFormulas,
  timePrecision,
  "standardtime"
);

// Work and Business Time
export const workBusinessObj = generateConversions(
  workBusinessFormulas,
  timePrecision,
  "workbusiness"
);

// Astronomical and Calendar Time
export const astronomicalObj = generateConversions(
  astronomicalFormulas,
  timePrecision,
  "astronomical"
);

// Historical and Traditional Time
export const historicalObj = generateConversions(
  historicalFormulas,
  timePrecision,
  "historical"
);

// Scientific and Technical Time
export const scientificObj = generateConversions(
  scientificFormulas,
  timePrecision,
  "scientific"
);

// Media and Entertainment Time
export const mediaObj = generateConversions(
  mediaFormulas,
  timePrecision,
  "media"
);

// Sports and Recreation Time
export const sportsObj = generateConversions(
  sportsFormulas,
  timePrecision,
  "sports"
);

// Cooking and Kitchen Time
export const cookingObj = generateConversions(
  cookingFormulas,
  timePrecision,
  "cooking"
);

// Transportation and Travel Time
export const transportationObj = generateConversions(
  transportationFormulas,
  timePrecision,
  "transportation"
);

// Biological and Life Time
export const biologicalObj = generateConversions(
  biologicalFormulas,
  timePrecision,
  "biological"
);