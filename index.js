// index.js
import { addInputListeners } from "./UI.js";
import { selectedFormulaObj } from "./UI.js";
import { updateFormulaDescription } from "./UI.js";
import { updateConversionResultElem } from "./UI.js";
import { conversionResultElem } from "./UI.js";

const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");
let fromTemp;
let toTemp;

// Update select temp values
function updateTempValues() {
  if (fromUnitSelect.value !== toUnitSelect.value) {
    fromTemp = fromUnitSelect.value;
    toTemp = toUnitSelect.value;
  }
}

fromUnitSelect.addEventListener("focus", updateTempValues);
fromUnitSelect.addEventListener("change", () => {
  if (fromUnitSelect.value !== toUnitSelect.value) {
    fromTemp = fromUnitSelect.value;
  }
});

toUnitSelect.addEventListener("focus", updateTempValues);
toUnitSelect.addEventListener("change", () => {
  if (toUnitSelect.value !== fromUnitSelect.value) {
    toTemp = toUnitSelect.value;
  }
});

//Convert a value from one unit to another
function convertUnits(formulaObject, fromUnit, toUnit, value) {
  if (formulaObject[fromUnit] && formulaObject[fromUnit][toUnit]) {
    return formulaObject[fromUnit][toUnit].formula(value);
  } else {
    console.warn(`Conversion from ${fromUnit} to ${toUnit} not supported.`);
    return value
  }
}
//Update conversion result
export function updateConversionResult() {
  const fromValue = parseFloat(fromUnitInput.value);
  if (fromUnitInput.value.trim() === "") {
    toUnitInput.value = "";
    conversionResultElem.textContent = "";
    updateFormulaDescription();
    return;
  }

  if (isNaN(fromValue)) {
    toUnitInput.value = "";
    return;
  }

  if (fromUnitSelect.value === toUnitSelect.value) {
    console.warn("fromUnitSelect - Same unit detected.");
    toUnitSelect.value = fromTemp;
    fromUnitSelect.value = toTemp;
    fromTemp = fromUnitSelect.value;
    toTemp = toUnitSelect.value;
    updateFormulaDescription();
    updateConversionResultElem();
    return;
  }

  if (!selectedFormulaObj) {
    console.log("Select conversion formula");
    toUnitInput.value = "";
    return;
  }
  
  const result = convertUnits(
    selectedFormulaObj,
    fromUnitSelect.value,
    toUnitSelect.value,
    fromValue
  );

  const formattedResult =
  result >= 1e9 || result <= -1e9 ? result.toExponential(5) : result.toLocaleString();
  
  toUnitInput.value = formattedResult;
  updateFormulaDescription();
  updateConversionResultElem();
}

addInputListeners(
  fromUnitInput,
  fromUnitSelect,
  toUnitSelect,
  updateConversionResult
);

//////////////////////////////////////////////////////////
const btn = document.querySelector(".submit-test-button");
btn.addEventListener("click", () => {
    console.log("-button");
    console.log("fromTemp:", fromTemp);
    console.log("toTemp:", toTemp);
    console.log("fromUnitSelect.value:", fromUnitSelect.value);
    console.log("toUnitSelect.value:", toUnitSelect.value);
    console.log("/button");
});
