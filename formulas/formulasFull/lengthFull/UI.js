// UI.js
import { updateConversionResult } from "./index.js";
import { addLink, removeLink } from "../../../utils.js";

const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");
const menuButtons = document.querySelectorAll(".conversion-menu button");
const converterSection = document.querySelector(".converter-section");

export const conversionResultElem = document.getElementById("result-value");
export let selectedFormulaObj;
export let formulaDescription = document.getElementById("conversion-operation");

// Formula Objects
import { lengthFormFullObj } from "../../../selectedFormulaObjects.js"

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
    
    removeLink("link-to-full-anc-chinese-converter");

    if (selectedType === "temperature") {
      updateSelectOptions(temperatureFormulas);
      selectedFormulaObj = temperatureFormulas;
      fromUnitSelect.value = "celsius [°C]";
      toUnitSelect.value = "fahrenheit [°F]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "length") {
      updateSelectOptions(lengthFormObj);
      selectedFormulaObj = lengthFormObj;
      fromUnitSelect.value = "meter [m]";
      toUnitSelect.value = "nanometer [nm]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "ancient-chinese") {
      addLink(
        "link-to-full-anc-chinese-converter",
        "Complete Ancient Chinese Units Converter",
        "formulas/formulasFull/ancientChineseFull/ancient-chinese-measurement-system-converter.html",
        converterSection
      );
      updateSelectOptions(ancientChineseLengthFormObj);
      selectedFormulaObj = ancientChineseLengthFormObj;
      fromUnitSelect.value = "Fen (分) - Shang";
      toUnitSelect.value = "Fen (分) - Ming";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "volume") {
      updateSelectOptions(ancChiShangDynasty);
      selectedFormulaObj = ancChiShangDynasty;
      fromUnitSelect.value = "Fen (分) - Shang";
      toUnitSelect.value = "Fen (分) - Ming";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "speed") {
      updateSelectOptions(speedFormFullObj);
      selectedFormulaObj = speedFormFullObj;
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
  updateSelectOptions(lengthFormFullObj);
  selectedFormulaObj = lengthFormFullObj;
  fromUnitSelect.value = "meter [m]";
  toUnitSelect.value = "foot [ft]";
  fromUnitInput.value = 1;
  formulaDescription.innerText =
  lengthFormFullObj[fromUnitSelect.value][toUnitSelect.value].description;
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
};

