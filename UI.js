// UI.js
import { updateConversionResult } from "./index.js";
import { temperatureFormulas } from "./formulas/temperatureFormulas.js";
import { lengthFormulas } from "./formulas/lengthFormulas.js";

const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");
const menuButtons = document.querySelectorAll(".conversion-menu button");

export const conversionResultElem = document.getElementById("result-vaule");
export let selectedFormulaObj;
export let formulaDescription = document.getElementById("conversion-operation");

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
      updateSelectOptions(lengthFormulas);
      selectedFormulaObj = lengthFormulas;
      fromUnitSelect.value = "meters";
      toUnitSelect.value = "centimeters";
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
      : "No conversion required.";
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

// export let fromTemp;
// export let toTemp;
// //
// fromUnitSelect.addEventListener('focus', (event) => {
//   if (fromUnitSelect.value === toUnitSelect.value) {
//     console.log('Focus same');
//     return;
//   } else {
//   fromTemp = fromUnitSelect.value;
//   toTemp = toUnitSelect.value;
//   console.log("-Focus");
//   console.log("fromTemp:", fromTemp);
//   console.log("toTemp:", toTemp);
//   console.log("fromUnitSelect.value:", fromUnitSelect.value);
//   console.log("toUnitSelect.value:", toUnitSelect.value);
//   console.log('/focus');
//   }
// });

// fromUnitSelect.addEventListener('change', () => {
//   if (fromUnitSelect.value === toUnitSelect.value) {
//     console.log('Change same');
//     return;
//   } else {
//   fromTemp = fromUnitSelect.value;
//   console.log("-Change");
//   console.log("fromTemp:", fromTemp);
//   console.log("toTemp:", toTemp);
//   console.log("fromUnitSelect.value:", fromUnitSelect.value);
//   console.log("toUnitSelect.value:", toUnitSelect.value);
//   console.log("/Change");
//   }
// });
// //
// toUnitSelect.addEventListener('focus', (event) => {
//   if (toUnitSelect.value === fromUnitSelect.value) {
//     console.log('Focus same');
//     return;
//   } else {
//   fromTemp = fromUnitSelect.value;
//   toTemp = toUnitSelect.value;
//   console.log("-Focus");
//   console.log("fromTemp:", fromTemp);
//   console.log("toTemp:", toTemp);
//   console.log("toUnitSelect.value:", toUnitSelect.value);
//   console.log("fromUnitSelect.value:", fromUnitSelect.value);
//   console.log('/focus');
//   }
// });

// toUnitSelect.addEventListener('change', () => {
//   if (toUnitSelect.value === fromUnitSelect.value) {
//     console.log('Change same');
//     return;
//   } else {
//   toTemp = toUnitSelect.value;
//   console.log("-Change");
//   console.log("fromTemp:", fromTemp);
//   console.log("toTemp:", toTemp);
//   console.log("toUnitSelect.value:", toUnitSelect.value);
//   console.log("fromUnitSelect.value:", fromUnitSelect.value);
//   console.log("/Change");
//   }
// });


