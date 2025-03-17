import { customPrecision } from "./customPrecision.js";
import { ancientChineseCustomPrecision } from "./formulas/formulasFull/ancientChineseFull/formulas/ancientChineseCustomPrecision.js";
import { generateConversions } from "./utils.js";

import { massFormulas } from "./formulas/massFormulas.js";
import { lengthFormulas } from "./formulas/lengthFormulas.js";
import { lengthFormulasFull } from "./formulas/formulasFull/lengthFull/lengthFormulasFull.js";
import { volumeFormulas } from "./formulas/volumeFormulas.js";
import { speedFormulasCommon } from "./formulas/speedFormulasCommon.js";
import { speedFormulasFull } from "./formulas/formulasFull/speedFormulasFull.js";
import { ancientChineseLengthFormulas } from "./formulas/ancientUnitFormulas/ancientChineseLengthFormulas.js";

export const massFormObj = generateConversions(massFormulas, customPrecision, 'mass');

export const lengthFormObj = generateConversions(lengthFormulas, customPrecision, 'length');
export const lengthFormFullObj = generateConversions(lengthFormulasFull, customPrecision, 'length');
export const speedFormFullObj = generateConversions(speedFormulasFull, customPrecision, 'speed');
export const ancientChineseLengthFormObj = generateConversions(ancientChineseLengthFormulas, customPrecision, "ancientChineseLengthShowCase");
