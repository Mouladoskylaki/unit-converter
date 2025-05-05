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

import { ancientChineseFullLengthFormObj } from "./ancientChineseSelectedFormulaObjects.js";
import { ancientChineseFullWeightFormObj } from "./ancientChineseSelectedFormulaObjects.js";
import { ancientChineseFullVolumeFormObj } from "./ancientChineseSelectedFormulaObjects.js";
import { ancientChineseFullAreaFormObj } from "./ancientChineseSelectedFormulaObjects.js";
import { ancientChineseTimeFormObj } from "./ancientChineseSelectedFormulaObjects.js";
import { ancientChineseFullGrainFormObj } from "./ancientChineseSelectedFormulaObjects.js";
import { ancientChineseAstronomicalFormObj } from "./ancientChineseSelectedFormulaObjects.js";
import { ancientChineseMusicFormObj } from "./ancientChineseSelectedFormulaObjects.js";
import { ancientChineseMedicineFormObj } from "./ancientChineseSelectedFormulaObjects.js";
import { ancientChineseConstructionFormObj } from "./ancientChineseSelectedFormulaObjects.js";
import { ancientChineseNavigationFormObj } from "./ancientChineseSelectedFormulaObjects.js";

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
selectOptions.forEach((option) => {
  option.addEventListener("change", (event) => {
    const selectedOption = event.target.selectedOptions[0]; // Get the selected <option>
    const selectedType = selectedOption.dataset.type;

    if (selectedType === "length") {
      updateSelectOptions(ancientChineseFullLengthFormObj);
      selectedFormulaObj = ancientChineseFullLengthFormObj;
      fromUnitSelect.value = "Chi (尺) - Ming";
      toUnitSelect.value = "Meter [m]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "weight") {
      updateSelectOptions(ancientChineseFullWeightFormObj);
      selectedFormulaObj = ancientChineseFullWeightFormObj;
      fromUnitSelect.value = "Jin (斤) - Qing";
      toUnitSelect.value = "Kilogram [kg]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "volume") {
      updateSelectOptions(ancientChineseFullVolumeFormObj);
      selectedFormulaObj = ancientChineseFullVolumeFormObj;
      fromUnitSelect.value = "Sheng (升) - Qing";
      toUnitSelect.value = "Liter [l]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "area") {
      updateSelectOptions(ancientChineseFullAreaFormObj);
      selectedFormulaObj = ancientChineseFullAreaFormObj;
      fromUnitSelect.value = "Mu (亩) - Qing";
      toUnitSelect.value = "Square Meter [m²]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "time") {
      updateSelectOptions(ancientChineseTimeFormObj);
      selectedFormulaObj = ancientChineseTimeFormObj;
      fromUnitSelect.value = "Ke (刻) - Ming/Qing";
      toUnitSelect.value = "Minute [min]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "grain") {
      updateSelectOptions(ancientChineseFullGrainFormObj);
      selectedFormulaObj = ancientChineseFullGrainFormObj;
      fromUnitSelect.value = "Shi (石) - Ming-Qing";
      toUnitSelect.value = "Liter [l]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "astronomical") {
      updateSelectOptions(ancientChineseAstronomicalFormObj);
      selectedFormulaObj = ancientChineseAstronomicalFormObj;
      fromUnitSelect.value = "Du (度) - Tang";
      toUnitSelect.value = "Degree [°]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "music") {
      updateSelectOptions(ancientChineseMusicFormObj);
      selectedFormulaObj = ancientChineseMusicFormObj;
      fromUnitSelect.value = "Huang Zhong (黄钟) - Qing";
      toUnitSelect.value = "Hertz [Hz]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "medicine") {
      updateSelectOptions(ancientChineseMedicineFormObj);
      selectedFormulaObj = ancientChineseMedicineFormObj;
      fromUnitSelect.value = "Liang (两) - Ming Medicine";
      toUnitSelect.value = "Gram [g]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "construction") {
      updateSelectOptions(ancientChineseConstructionFormObj);
      selectedFormulaObj = ancientChineseConstructionFormObj;
      fromUnitSelect.value = "Chi (尺) - Ming Build";
      toUnitSelect.value = "Meter [m]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "navigation") {
      updateSelectOptions(ancientChineseNavigationFormObj);
      selectedFormulaObj = ancientChineseNavigationFormObj;
      fromUnitSelect.value = "Hai Li (海里) - Ming";
      toUnitSelect.value = "Nautical Mile [nmi]";
      fromUnitInput.value = 1;
      updateConversionResult();
    }
    console.log(`Selected conversion type: ${selectedType}`);
  });
});

// On load conversion
const initializeConversion = () => {
  // document.querySelector('button[data-type="length"]').style.backgroundColor = 'red';
  updateSelectOptions(ancientChineseFullLengthFormObj);
  selectedFormulaObj = ancientChineseFullLengthFormObj;
  fromUnitSelect.value = "Chi (尺) - Ming";
  toUnitSelect.value = "Meter [m]";
  fromUnitInput.value = 1;
  formulaDescription.innerText =
  ancientChineseFullLengthFormObj[fromUnitSelect.value][toUnitSelect.value].description;
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
// Update conversion-result element with improved styling
export const updateConversionResultElem = () => {
  let fromUnitSelectOption = fromUnitSelect.value;
  let toUnitSelectOption = toUnitSelect.value;
  
  // Format the result with proper styling
  // Wrap numbers in <strong> tags for bold styling
  const resultHtml = `
    <strong>${fromUnitInput.value}</strong> 
    ${fromUnitSelectOption.charAt(0).toUpperCase() + fromUnitSelectOption.slice(1)} 
    = 
    <strong>${toUnitInput.value}</strong> 
    ${toUnitSelectOption.charAt(0).toUpperCase() + toUnitSelectOption.slice(1)}
  `;
  
  conversionResultElem.innerHTML = resultHtml;

  // Add animation effect when the result updates
  const resultElement = document.getElementById('conversion-result');
  resultElement.classList.add('updated');
  
  // Remove the class after animation completes
  setTimeout(() => {
    resultElement.classList.remove('updated');
  }, 100);

  if (toUnitInput.value.includes('e')) {
    toggleSn(conversionResultElem, fromUnitInput, toUnitInput, fromUnitSelectOption, toUnitSelectOption);
  }
};

// Add this code to your index.js file

document.addEventListener('DOMContentLoaded', function() {
  // Get the input field
  const fromUnitInput = document.getElementById('fromUnitInput');
  
  // Get the converter section to calculate its height
  const converterSection = document.querySelector('.converter-section');
  
  // Function to check if the device is mobile (based on screen width)
  function isMobileDevice() {
    return window.innerWidth <= 768; // Using the same breakpoint as your CSS media query
  }
  
  // Add focus event listener to the input field
  fromUnitInput.addEventListener('focus', function() {
    // Only apply scroll behavior on mobile devices
    if (isMobileDevice()) {
      // Small delay to ensure the virtual keyboard has been triggered
      setTimeout(function() {
        // Calculate the position we need to scroll to
        // This will position the converter section at the top of the viewport
        const scrollPosition = converterSection.getBoundingClientRect().top + window.pageYOffset - 10;
        
        // Smooth scroll to that position
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }, 300); // 300ms delay should be enough for most devices
    }
  });
  
  // Optional: Add a click event listener to the body to handle taps outside the input (mobile only)
  document.body.addEventListener('click', function(event) {
    if (isMobileDevice()) {
      // If the click is not on the input or its children
      if (!event.target.closest('#fromUnitInput')) {
        // Remove focus from the input
        fromUnitInput.blur();
      }
    }
  });
});

