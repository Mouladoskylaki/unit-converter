import { addInputListeners } from "./UI.js";
import { selectedFormulaObj } from "./UI.js";
import { updateFormulaDescription } from "./UI.js";
import { updateConversionResultElem } from "./UI.js";

const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");

//Convert a value from one unit to another
function convertUnits(formulaObject, fromUnit, toUnit, value) {
  if (formulaObject[fromUnit] && formulaObject[fromUnit][toUnit]) {
    return formulaObject[fromUnit][toUnit].formula(value);
  } else {
    throw new Error(`Conversion from ${fromUnit} to ${toUnit} not supported.`);
  }
}

//Update conversion result
export function updateConversionResult() {
  const fromValue = parseFloat(fromUnitInput.value);

  if (fromUnitInput.value.trim() === "") {
    toUnitInput.value = "";
    updateFormulaDescription();
    console.log('empty')
    return;
  }

  if (isNaN(fromValue)) {
    toUnitInput.value = "";
    return;
  }

  if (fromUnitSelect.value === toUnitSelect.value) {
    console.warn("Same unit detected, swapping units.");
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

  const formattedResult = parseFloat(result.toPrecision(6));
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
btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(selectedFormulaObj);
});
