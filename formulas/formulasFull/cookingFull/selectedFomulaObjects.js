import { cookingCustomPrecision } from "./cookingCustomPrecision.js";
import { generateConversions } from "../../../utils.js";

import {
  volumeFormulas,
  butterFormulas,
  flourFormulas,
  sugarFormulas,
  liquidSweetenerFormulas,
  oilFatFormulas,
  nutSeedFormulas,
  dairyLiquidFormulas,
  cheeseFormulas,
  grainFormulas,
  fruitFormulas,
  vegetableFormulas,
  legumeFormulas,
  eggFormulas,
  yeastFormulas,
  panDimensionFormulas,
  bakingIngredientFormulas,
  spiceFormulas,
  liquidFormulas,
} from "./cookingFormulasFull.js";

export const cookingVolumeObj = generateConversions(
  volumeFormulas,
  cookingCustomPrecision,
  "volume"
);
export const cookingButterObj = generateConversions(
  butterFormulas,
  cookingCustomPrecision,
  "butter"
);
export const cookingFlourObj = generateConversions(
  flourFormulas,
  cookingCustomPrecision,
  "flour"
);
export const cookingSugarObj = generateConversions(
  sugarFormulas,
  cookingCustomPrecision,
  "sugar"
);
export const cookingLiquidSweetenerObj = generateConversions(
  liquidSweetenerFormulas,
  cookingCustomPrecision,
  "liquidsweetener"
);
export const cookingOilFatObj = generateConversions(
  oilFatFormulas,
  cookingCustomPrecision,
  "oilfat"
);
export const cookingNutSeedObj = generateConversions(
  nutSeedFormulas,
  cookingCustomPrecision,
  "nutseed"
);
export const cookingDairyLiquidObj = generateConversions(
  dairyLiquidFormulas,
  cookingCustomPrecision,
  "dairyliquid"
);
export const cookingCheeseObj = generateConversions(
  cheeseFormulas,
  cookingCustomPrecision,
  "cheese"
);
export const cookingGrainObj = generateConversions(
  grainFormulas,
  cookingCustomPrecision,
  "grain"
);
export const cookingFruitObj = generateConversions(
  fruitFormulas,
  cookingCustomPrecision,
  "fruit"
);
export const cookingVegetableObj = generateConversions(
  vegetableFormulas,
  cookingCustomPrecision,
  "vegetable"
);
export const cookingLegumeObj = generateConversions(
  legumeFormulas,
  cookingCustomPrecision,
  "legume"
);
export const cookingEggObj = generateConversions(
  eggFormulas,
  cookingCustomPrecision,
  "egg"
);
export const cookingYeastObj = generateConversions(
  yeastFormulas,
  cookingCustomPrecision,
  "yeast"
);
export const cookingPanDimensionObj = generateConversions(
  panDimensionFormulas,
  cookingCustomPrecision,
  "pandimension"
);
export const cookingBakingIngredientObj = generateConversions(
  bakingIngredientFormulas,
  cookingCustomPrecision,
  "bakingingredient"
);
export const cookingSpiceObj = generateConversions(
  spiceFormulas,
  cookingCustomPrecision,
  "spice"
);
export const cookingLiquidObj = generateConversions(
  liquidFormulas,
  cookingCustomPrecision,
  "liquids"
);
