console.log("meters to cm");

const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const labelFromUnitInput = document.querySelector(".label-for-fromUnitInput");
const labelToUnitInput = document.querySelector(".label-for-toUnitInput");
const conversionResultElem = document.getElementById("result-value");
let selectedFormulaObj;
let formulaDescription = document.getElementById("conversion-operation");

formulaDescription.innerText = "Multiply the length value by 100.";

// Update conversion-result element
const updateConversionResultElem = () => {
  let fromUnitSelectOption = labelFromUnitInput.textContent;
  let toUnitSelectOption = labelToUnitInput.textContent;
  conversionResultElem.innerText = `${fromUnitInput.value} ${
    fromUnitSelectOption.charAt(0).toUpperCase() + fromUnitSelectOption.slice(1)
  } = ${toUnitInput.value} ${
    toUnitSelectOption.charAt(0).toUpperCase() + toUnitSelectOption.slice(1)
  }`;
};

function formatResult(result) {
  let formattedResult;
  if (Math.abs(result) < 0.0001 || Math.abs(result) >= 1e6) {
    formattedResult = result.toExponential(4);
  } else {
    formattedResult = result.toString();
  }
  if (Math.abs(result) >= 1000 && !formattedResult.includes("e")) {
    formattedResult = parseFloat(formattedResult).toLocaleString();
  }
  return formattedResult;
}

// Add inpput listeners
const addInputListeners = (fromUnitInput, updateConversionResult) => {
  fromUnitInput.addEventListener("input", updateConversionResult);
};

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
function updateConversionResult() {
  const fromValue = parseFloat(fromUnitInput.value);
  if (fromUnitInput.value.trim() === "") {
    toUnitInput.value = "";
    conversionResultElem.textContent = "";
    return;
  }

  if (isNaN(fromValue)) {
    toUnitInput.value = "";
    return;
  }

  const result = fromValue * 100;

  let formattedResult = formatResult(result);

  toUnitInput.value = formattedResult;
  console.log(`Result: ${fromValue} = ${formattedResult}`);
  updateConversionResultElem();
}

addInputListeners(fromUnitInput, updateConversionResult);

//////////////////////////////////////////////////////////
const btn = document.querySelector(".submit-test-button");
btn.addEventListener("click", () => {
  console.log(selectedFormulaObj.name);
});

// On load conversion
const initializeConversion = () => {
  fromUnitInput.value = 1;
  updateConversionResult();
};
initializeConversion();

// Select starting input
fromUnitInput.addEventListener("focus", (event) => {
  event.target.select();
});
