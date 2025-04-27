// UI.js
import { updateConversionResult } from "./index.js";
import { toggleSn } from "../../../utils.js";

const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");
const selectOptions = document.querySelectorAll(".conversion-menu");

export const conversionResultElem = document.getElementById("result-value");
export let selectedFormulaObj;
export let formulaDescription = document.getElementById("conversion-operation");

// Formula Objects
import { cookingVolumeObj } from "./selectedFomulaObjects.js";
import { cookingLiquidObj } from "./selectedFomulaObjects.js";
import { cookingButterObj } from "./selectedFomulaObjects.js";
import { cookingFlourObj } from "./selectedFomulaObjects.js";
import { cookingSugarObj } from "./selectedFomulaObjects.js";
import { cookingOilFatObj } from "./selectedFomulaObjects.js";
import { cookingNutSeedObj } from "./selectedFomulaObjects.js";
import { cookingDairyLiquidObj } from "./selectedFomulaObjects.js";
import { cookingCheeseObj } from "./selectedFomulaObjects.js";
import { cookingGrainObj } from "./selectedFomulaObjects.js";
import { cookingFruitObj } from "./selectedFomulaObjects.js";
import { cookingVegetableObj } from "./selectedFomulaObjects.js";
import { cookingLegumeObj } from "./selectedFomulaObjects.js";
import { cookingEggObj } from "./selectedFomulaObjects.js";
import { cookingYeastObj } from "./selectedFomulaObjects.js";
import { cookingPanDimensionObj } from "./selectedFomulaObjects.js";
import { cookingBakingIngredientObj } from "./selectedFomulaObjects.js";
import { cookingSpiceObj } from "./selectedFomulaObjects.js";
import { cookingLiquidSweetenerObj } from "./selectedFomulaObjects.js";

// Populate select elements
export const updateSelectOptions = (formulaObject) => {
  fromUnitSelect.innerHTML = "";
  toUnitSelect.innerHTML = "";
  const units = Object.keys(formulaObject);
  units.forEach((unit) => {
    if (unit.startsWith("group_")) {
      const group = document.createElement("optgroup");
      group.label = unit.substring(6);
      fromUnitSelect.appendChild(group);
      toUnitSelect.appendChild(group.cloneNode());
      return;
    }
    const fromOption = document.createElement("option");
    fromOption.value = unit;
    fromOption.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
    fromUnitSelect.appendChild(fromOption);

    const toOption = document.createElement("option");
    toOption.classList.add("to-option");
    toOption.value = unit;
    toOption.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
    toUnitSelect.appendChild(toOption);
  });
};

// Add click event listeners to each nav button
selectOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    const selectedOption = event.target.selectedOptions[0]; // Get the selected <option>
    const selectedType = selectedOption.dataset.type;

    if (selectedType === "volume") {
      updateSelectOptions(cookingVolumeObj);
      selectedFormulaObj = cookingVolumeObj;
      fromUnitSelect.value = "cup (US) [cup]";
      toUnitSelect.value = "milliliter [ml]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "liquids") {
      updateSelectOptions(cookingLiquidObj);
      selectedFormulaObj = cookingLiquidObj;
      fromUnitSelect.value = "milk [g milk]";
      toUnitSelect.value = "olive oil [g olive oil]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "butter") {
      updateSelectOptions(cookingButterObj);
      selectedFormulaObj = cookingButterObj;
      fromUnitSelect.value = "stick of butter [stick]";
      toUnitSelect.value = "tablespoon of butter [tbsp butter]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "flour") {
      updateSelectOptions(cookingFlourObj);
      selectedFormulaObj = cookingFlourObj;
      fromUnitSelect.value = "all-purpose flour [cup flour]";
      toUnitSelect.value = "cake flour [cup cake flour]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "sugar") {
      updateSelectOptions(cookingSugarObj);
      selectedFormulaObj = cookingSugarObj;
      fromUnitSelect.value = "granulated sugar [cup sugar]";
      toUnitSelect.value = "confectioners' sugar [cup powdered sugar]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "oilfat") {
      updateSelectOptions(cookingOilFatObj);
      selectedFormulaObj = cookingOilFatObj;
      fromUnitSelect.value = "butter [cup solid butter]";
      toUnitSelect.value = "vegetable oil [cup oil]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "nutseed") {
      updateSelectOptions(cookingNutSeedObj);
      selectedFormulaObj = cookingNutSeedObj;
      fromUnitSelect.value = "almonds (whole) [cup almonds]";
      toUnitSelect.value = "walnuts (chopped) [cup walnuts]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "dairyliquid") {
      updateSelectOptions(cookingDairyLiquidObj);
      selectedFormulaObj = cookingDairyLiquidObj;
      fromUnitSelect.value = "milk [cup milk]";
      toUnitSelect.value = "Greek yogurt [cup Greek yogurt]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "cheese") {
      updateSelectOptions(cookingCheeseObj);
      selectedFormulaObj = cookingCheeseObj;
      fromUnitSelect.value = "cheddar (shredded) [cup cheddar]";
      toUnitSelect.value = "parmesan (grated) [cup parmesan]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "grain") {
      updateSelectOptions(cookingGrainObj);
      selectedFormulaObj = cookingGrainObj;
      fromUnitSelect.value = "white rice (uncooked) [cup white rice]";
      toUnitSelect.value = "quinoa (uncooked) [cup quinoa]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "fruit") {
      updateSelectOptions(cookingFruitObj);
      selectedFormulaObj = cookingFruitObj;
      fromUnitSelect.value = "blueberries [cup blueberries]";
      toUnitSelect.value = "strawberries (sliced) [cup strawberries]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "vegetable") {
      updateSelectOptions(cookingVegetableObj);
      selectedFormulaObj = cookingVegetableObj;
      fromUnitSelect.value = "onion (chopped) [cup onion]";
      toUnitSelect.value = "bell pepper (chopped) [cup bell pepper]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "legume") {
      updateSelectOptions(cookingLegumeObj);
      selectedFormulaObj = cookingLegumeObj;
      fromUnitSelect.value = "black beans (cooked) [cup black beans]";
      toUnitSelect.value = "chickpeas (cooked) [cup chickpeas]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "egg") {
      updateSelectOptions(cookingEggObj);
      selectedFormulaObj = cookingEggObj;
      fromUnitSelect.value = "large egg [large egg]";
      toUnitSelect.value = "medium egg [medium egg]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "yeast") {
      updateSelectOptions(cookingYeastObj);
      selectedFormulaObj = cookingYeastObj;
      fromUnitSelect.value = "active dry yeast [tsp active dry]";
      toUnitSelect.value = "fresh yeast [g fresh yeast]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "pandimension") {
      updateSelectOptions(cookingPanDimensionObj);
      selectedFormulaObj = cookingPanDimensionObj;
      fromUnitSelect.value = "9-inch round pan [9in round]";
      toUnitSelect.value = "8-inch round pan [8in round]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "bakingingredient") {
      updateSelectOptions(cookingBakingIngredientObj);
      selectedFormulaObj = cookingBakingIngredientObj;
      fromUnitSelect.value = "baking powder [tsp baking powder]";
      toUnitSelect.value = "baking soda [tsp baking soda]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "spice") {
      updateSelectOptions(cookingSpiceObj);
      selectedFormulaObj = cookingSpiceObj;
      fromUnitSelect.value = "cinnamon [tsp cinnamon]";
      toUnitSelect.value = "nutmeg [tsp nutmeg]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "liquidsweetener") {
      updateSelectOptions(cookingLiquidSweetenerObj);
      selectedFormulaObj = cookingLiquidSweetenerObj;
      fromUnitSelect.value = "honey [cup honey]";
      toUnitSelect.value = "maple syrup [cup maple syrup]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } 
    console.log(`Selected conversion type: ${selectedType}`);
  });
});

// Add inpput listeners
export const addInputListeners = (
  fromUnitInput,
  fromUnitSelect,
  toUnitSelect,
  updateConversionResult
) => {
  fromUnitInput.addEventListener("input", updateConversionResult);
  fromUnitSelect.addEventListener("change", updateConversionResult);
  toUnitSelect.addEventListener("change", updateConversionResult);
};

// On load conversion
const initializeConversion = () => {
  document.querySelector('option[data-type="volume"]').style.backgroundColor = 'red';
  updateSelectOptions(cookingVolumeObj);
  selectedFormulaObj = cookingVolumeObj;
  fromUnitSelect.value = "cup (US) [cup]";
  toUnitSelect.value = "tablespoon (US) [tbsp]";
  fromUnitInput.value = 1;
  formulaDescription.innerText =
  cookingVolumeObj[fromUnitSelect.value][toUnitSelect.value].description;
  updateConversionResult();
};

document.addEventListener("DOMContentLoaded", initializeConversion);

// Select starting input
fromUnitInput.addEventListener("focus", (event) => {
  event.target.select();
});

// Check and update if formula description is available
export const updateFormulaDescription = () => {
  const formula =
    selectedFormulaObj[fromUnitSelect.value] &&
    selectedFormulaObj[fromUnitSelect.value][toUnitSelect.value];
  const description =
    formula && formula.description ? formula.description : "No conversion.";
  formulaDescription.innerText = description;
};

// Update conversion-result element
export const updateConversionResultElem = () => {
  let fromUnitSelectOption = fromUnitSelect.value;
  let toUnitSelectOption = toUnitSelect.value;
  conversionResultElem.innerText = `${fromUnitInput.value} ${
    fromUnitSelectOption.charAt(0).toUpperCase() + fromUnitSelectOption.slice(1)
  } = ${toUnitInput.value} ${
    toUnitSelectOption.charAt(0).toUpperCase() + toUnitSelectOption.slice(1)
  }`;

  if (toUnitInput.value.includes('e')) {
    toggleSn(conversionResultElem, fromUnitInput, toUnitInput, fromUnitSelectOption, toUnitSelectOption);
  }
};

