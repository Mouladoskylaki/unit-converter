// index.js
import { addInputListeners } from "./UI.js";
import { selectedFormulaObj } from "./UI.js";
import { updateFormulaDescription } from "./UI.js";
import { updateConversionResultElem } from "./UI.js";
import { conversionResultElem } from "./UI.js";
import { formatResult } from "./utils.js";
import { customPrecision } from "./customPrecision.js";

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
    return 0;
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

  const result = convertUnits(
    selectedFormulaObj,
    fromUnitSelect.value,
    toUnitSelect.value,
    fromValue
  );

  if (fromUnitSelect.value === toUnitSelect.value) {
    console.warn("Same unit detected - Swapping units");
    let temp = fromUnitInput.value;
    fromUnitInput.value = toUnitInput.value;
    toUnitInput.value = temp;
    toUnitSelect.value = fromTemp;
    fromUnitSelect.value = toTemp;
    fromTemp = fromUnitSelect.value;
    toTemp = toUnitSelect.value;
    updateFormulaDescription();
    updateConversionResultElem();
    return;
  }

let formattedResult = formatResult(result);

  if (!selectedFormulaObj) {
    console.log("Select conversion formula");
    toUnitInput.value = "";
    return;
  }
  
  toUnitInput.value = formattedResult;
  console.log(`Result: ${fromValue} ${fromUnitSelect.value} = ${formattedResult} ${toUnitSelect.value}`);
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

export function generateConversions(units, customPrecision = {}) {
  const result = {};
  
  for (const fromUnit in units) {
    result[fromUnit] = {};
    for (const toUnit in units) {
      const exactFactor = units[fromUnit] / units[toUnit];
      const precision = customPrecision[toUnit] || 2;
      // Format the factor for display purposes only
      const displayFactor = Number(exactFactor.toFixed(precision));

      let operationWord, description, formula;
      if (exactFactor === 1) {
        operationWord = 'No conversion needed; value remains in';
        description = `${operationWord} ${toUnit}.`;
        formula = (value) => value; // Exact value, no operation needed
      } else if (exactFactor > 1) {
        operationWord = 'Multiply';
        description = `${operationWord} the length value by ${displayFactor} to convert to ${toUnit}.`;
        formula = (value) => value * exactFactor; // Use exact factor for calculation
      } else {
        // For division, we typically show the reciprocal factor (e.g., "divide by 2" instead of "multiply by 0.5")
        const displayDivisor = Number((1 / exactFactor).toFixed(precision));
        operationWord = 'Divide';
        description = `${operationWord} the length value by ${displayDivisor} to convert to ${toUnit}.`;
        formula = (value) => value / displayDivisor; // Use formatted divisor for consistency with description
      }

      result[fromUnit][toUnit] = {
        formula: formula,
        description: description
      };
    }   
  }

  return result;
}

//////////////////////////////////////////////////////////
const btn = document.querySelector(".submit-test-button");
btn.addEventListener("click", () => {
  console.log(conversions);
  console.log(conversions['chi']['meter'].description);
  console.log(conversions["meter"]["zhang"].formula(1));
  
});
