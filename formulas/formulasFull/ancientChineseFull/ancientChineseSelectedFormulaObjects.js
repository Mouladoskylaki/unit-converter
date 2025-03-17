import { ancientChineseCustomPrecision } from "./formulas/ancientChineseCustomPrecision.js";
import { generateConversions } from "../../../utils.js";

import {ancientChineseFullLengthFormulas} from './formulas/ancientChineseFullLengthFormulas.js'
import { ancientChineseFullWeightFormulas } from "./formulas/ancientChineseFullWeightFormulas.js";
import { ancientChineseFullVolumeFormulas } from "./formulas/ancientChineseFullVolumeFormulas.js";
import { ancientChineseFullAreaFormulas } from "./formulas/ancientChineseFullAreaFormulas.js";
import { ancientChineseTimeFormulas } from "./formulas/ancientChineseTimeFormulas.js";
import { ancientChineseFullCurrencyFormulas } from "./formulas/ancientChineseFullCurrencyFormulas.js";
import { ancientChineseFullGrainFormulas } from "./formulas/ancientChineseFullGrainFormulas.js";
import { ancientChineseAstronomicalFormulas } from "./formulas/ancientChineseAstronomicalFormulas.js";
import { ancientChineseMusicFormulas } from "./formulas/ancientChineseMusicFormulas.js";
import { ancientChineseMedicineFormulas } from "./formulas/ancientChineseMedicineFormulas.js";
import { ancientChineseConstructionFormulas } from "./formulas/ancientChineseConstructionFormulas.js";
import { ancientChineseNavigationFormulas } from "./formulas/ancientChineseNavigationFormulas.js";


export const ancientChineseFullLengthFormObj = generateConversions(ancientChineseFullLengthFormulas, ancientChineseCustomPrecision, "length");
export const ancientChineseFullWeightFormObj = generateConversions(ancientChineseFullWeightFormulas, ancientChineseCustomPrecision, "weight");
export const ancientChineseFullVolumeFormObj = generateConversions(ancientChineseFullVolumeFormulas, ancientChineseCustomPrecision, "volume");
export const ancientChineseFullAreaFormObj = generateConversions(ancientChineseFullAreaFormulas, ancientChineseCustomPrecision, "area");
export const ancientChineseTimeFormObj = generateConversions(ancientChineseTimeFormulas, ancientChineseCustomPrecision, "time");
export const ancientChineseFullCurrencyFormObj = generateConversions(ancientChineseFullCurrencyFormulas, ancientChineseCustomPrecision, "currency");
export const ancientChineseFullGrainFormObj = generateConversions(ancientChineseFullGrainFormulas, ancientChineseCustomPrecision, "grain");
export const ancientChineseAstronomicalFormObj = generateConversions(ancientChineseAstronomicalFormulas, ancientChineseCustomPrecision, "astronomical");
export const ancientChineseMusicFormObj = generateConversions(ancientChineseMusicFormulas, ancientChineseCustomPrecision, "music");
export const ancientChineseMedicineFormObj = generateConversions(ancientChineseMedicineFormulas, ancientChineseCustomPrecision, "medicine");
export const ancientChineseConstructionFormObj = generateConversions(ancientChineseConstructionFormulas, ancientChineseCustomPrecision, "construction");
export const ancientChineseNavigationFormObj = generateConversions(ancientChineseNavigationFormulas, ancientChineseCustomPrecision, "navigation");