// UI.js
import { updateConversionResult } from "./index.js";
import { temperatureFormulas } from "./formulas/temperatureFormulas.js";
import { lengthFormulas } from "./formulas/lengthFormulas.js";

const fromUnitInput = document.getElementById("fromUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");
const menuButtons = document.querySelectorAll(".conversion-menu button");

export let selectedFormulaObj;

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
    toOption.value = unit;
    toOption.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
    toUnitSelect.appendChild(toOption);
  });
};

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

menuButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedType = event.target.dataset.type;

    if (selectedType === "temperature") {
      updateSelectOptions(temperatureFormulas);
      selectedFormulaObj = temperatureFormulas;
      fromUnitSelect.value = 'celsius';
      toUnitSelect.value = 'fahrenheit';
      updateConversionResult();
    } else if (selectedType === "length") {
      updateSelectOptions(lengthFormulas);
      selectedFormulaObj = lengthFormulas;
      fromUnitSelect.value = 'meters';
      toUnitSelect.value = 'centimeters';
      updateConversionResult();
    }

    console.log(`Selected conversion type: ${selectedType}`);
  });
});

// On load conversion
const initializeConversion = () => {
  updateSelectOptions(lengthFormulas);
  selectedFormulaObj = lengthFormulas;
  fromUnitSelect.value = 'meters';
  toUnitSelect.value = 'centimeters';
  fromUnitInput.value = 1;
  updateConversionResult();
};

document.addEventListener('DOMContentLoaded', initializeConversion);

// Select starting input
fromUnitInput.addEventListener('focus', (event) => {
  event.target.select();
});


