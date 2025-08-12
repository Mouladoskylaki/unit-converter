import { customPrecision } from "./customPrecision.js";
import { ancientChineseCustomPrecision } from "./formulas/formulasFull/ancientChineseFull/formulas/ancientChineseCustomPrecision.js";
import { generateConversions } from "./utils.js";

import { volumeFormulas } from "./formulas/volumeFormulas.js";
import { areaFormulas } from "./formulas/areaFormulas.js";
import { massWeightFormulas } from "./formulas/massWeightFormulas.js";
import { lengthFormulas } from "./formulas/lengthFormulas.js";
import { lengthFormulasFull } from "./formulas/formulasFull/lengthFull/lengthFormulasFull.js";
import { cookingFormulas } from "./formulas/cookingFormulas.js";
import { digitalStorageFormulas } from "./formulas/digitalStorageFormulas.js";

import { speedFormulasCommon } from "./formulas/speedFormulasCommon.js";
import { speedFormulasFull } from "./formulas/formulasFull/speedFormulasFull.js";
import { ancientChineseLengthFormulas } from "./formulas/ancientUnitFormulas/ancientChineseLengthFormulas.js";

export const areaFormObj = generateConversions(areaFormulas, customPrecision, "area");
export const volumeFormObj = generateConversions(volumeFormulas, customPrecision, 'volume');
export const massWeightFormObj = generateConversions(massWeightFormulas, customPrecision, 'weightMass');
export const lengthFormObj = generateConversions(lengthFormulas, customPrecision, 'length');
export const lengthFormFullObj = generateConversions(lengthFormulasFull, customPrecision, 'length');
export const cookingFormObj = generateConversions(cookingFormulas);
export const digitalStorageFormObj = generateConversions(digitalStorageFormulas, customPrecision, "digitalStorage");
export const speedFormFullObj = generateConversions(speedFormulasFull, customPrecision, 'speed');
export const ancientChineseLengthFormObj = generateConversions(ancientChineseLengthFormulas, customPrecision, "ancientChineseLengthShowCase");
