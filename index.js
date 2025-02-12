import { addInputListeners } from "./UI.js";
import { selectedFormulaObj } from "./UI.js";

const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");

function convertUnits(formulaObject, fromUnit, toUnit, value) {
  if (formulaObject[fromUnit] && formulaObject[fromUnit][toUnit]) {
    return formulaObject[fromUnit][toUnit](value);
  } else {
    throw new Error(`Conversion from ${fromUnit} to ${toUnit} not supported.`);
  }
}

export function updateConversionResult() {
  const fromValue = parseFloat(fromUnitInput.value);

  if (fromUnitInput.value.trim() === "") {
    toUnitInput.value = "";
    return;
  }

  if (isNaN(fromValue)) {
    toUnitInput.value = "";
    return;
  }

  if (fromUnitSelect.value === toUnitSelect.value) {
    toUnitInput.value = fromValue;
    if (!selectedFormulaObj) {
      console.log("Select conversion formula");
      toUnitInput.value = "";
    }
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
