// UI.js
import { updateConversionResult } from "./index.js";
import { generateConversions } from "./index.js";
import { customPrecision } from "./customPrecision.js";
import { temperatureFormulas } from "./formulas/temperatureFormulas.js";
import { lengthFormulas } from "./formulas/lengthFormulas.js";
import { massFormulas } from "./formulas/massFormulas.js";
import { volumeFormulas } from "./formulas/volumeFormulas.js";
import { speedFormulasCommon } from "./formulas/speedFormulasCommon.js";
import { speedFormulasFull } from "./formulas/formulasFull/speedFormulasFull.js";
import { ancientGreekLengthFormulas } from "./formulas/ancientUnitFormulas/ancientGreekLengthFormulas.js";
import { ancientRomanLengthFormulas } from "./formulas/ancientUnitFormulas/ancientRomanLengthFormulas.js";
import { ancientEgyptianLengthFormulas } from "./formulas/ancientUnitFormulas/ancientEgyptianLengthFormulas.js";
import { shangDynasty, songDynasty, zhouDynasty, qinDynasty, hanDynasty, tangDynasty, mingDynasty, qingDynasty } from "./formulas/ancientUnitFormulas/ancientChineseLengthFormulas.js";
const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");
const menuButtons = document.querySelectorAll(".conversion-menu button");
export const conversionResultElem = document.getElementById("result-value");
export let selectedFormulaObj;
export let formulaDescription = document.getElementById("conversion-operation");

// Formula Objects
const ancChiShangDynasty = generateConversions(shangDynasty, customPrecision);
const speedFormulasF = generateConversions(speedFormulasFull, customPrecision);
// Populate select elements
export const updateSelectOptions = (formulaObject) => {
  fromUnitSelect.innerHTML = "";
  toUnitSelect.innerHTML = "";
  const units = Object.keys(formulaObject);
  units.forEach((unit) => {
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

// Add click event listeners to each nav button
menuButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedType = event.target.dataset.type;

    if (selectedType === "temperature") {
      updateSelectOptions(temperatureFormulas);
      selectedFormulaObj = temperatureFormulas;
      fromUnitSelect.value = "celsius";
      toUnitSelect.value = "fahrenheit";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "length") {
      updateSelectOptions(ancChiShangDynasty);
      selectedFormulaObj = ancChiShangDynasty;
      fromUnitSelect.value = "Meter [m]";
      toUnitSelect.value = "Fen (分)";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "mass") {
      updateSelectOptions(massFormulas);
      selectedFormulaObj = massFormulas;
      fromUnitSelect.value = "kilogram";
      toUnitSelect.value = "pound";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "volume") {
      updateSelectOptions(volumeFormulas);
      selectedFormulaObj = volumeFormulas;
      fromUnitSelect.value = "liter";
      toUnitSelect.value = "milliliter";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "speed") {
      updateSelectOptions(speedFormulasF);
      selectedFormulaObj = speedFormulasF;
      fromUnitSelect.value = "meter/second [m/s]";
      toUnitSelect.value = "knot [kt, kn]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } 
    console.log(`Selected conversion type: ${selectedType}`);
  });
});

// On load conversion
const initializeConversion = () => {
  updateSelectOptions(lengthFormulas);
  selectedFormulaObj = lengthFormulas;
  fromUnitSelect.value = "meters";
  toUnitSelect.value = "centimeters";
  fromUnitInput.value = 1;
  formulaDescription.innerText =
    lengthFormulas[fromUnitSelect.value][toUnitSelect.value].description;
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
    formula && formula.description
      ? formula.description
      : "No conversion.";
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
};