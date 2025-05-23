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
      group.classList.add('group');
      // Add arrow directly in the label text
      group.label = `› ${unit.substring(6)}`;  // Add the arrow directly to the label text
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

// Event listener for resizing
window.addEventListener('resize', () => {
  updateSelectOptions(selectedFormulaObj);  // Reapply the update whenever the window is resized
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateSelectOptions(ancientChineseFullLengthFormObj);  // Initialize with your formula object
});


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
export const updateConversionResultElem = () => {
  let fromUnitSelectOption = fromUnitSelect.value;
  let toUnitSelectOption = toUnitSelect.value;

  const resultHtml = `
    <strong>${fromUnitInput.value}</strong> 
    ${fromUnitSelectOption.charAt(0).toUpperCase() + fromUnitSelectOption.slice(1)} 
    = 
    <strong>${toUnitInput.value}</strong> 
    ${toUnitSelectOption.charAt(0).toUpperCase() + toUnitSelectOption.slice(1)}
  `;
  
  conversionResultElem.innerHTML = resultHtml;

  const resultElement = document.getElementById('conversion-result');
  resultElement.classList.add('updated');
  
  setTimeout(() => {
    resultElement.classList.remove('updated');
  }, 100);

  if (toUnitInput.value.includes('e')) {
    toggleSn(conversionResultElem, fromUnitInput, toUnitInput, fromUnitSelectOption, toUnitSelectOption);
  }
};

// Mobile Autoscroll

document.addEventListener('DOMContentLoaded', function() {
  const fromUnitInput = document.getElementById('fromUnitInput');
  const converterSection = document.querySelector('.converter-section');
  
  function isMobileDevice() {
    return window.innerWidth <= 768;
  }
  
  fromUnitInput.addEventListener('focus', function() {
    if (isMobileDevice()) {
      setTimeout(function() {
        const scrollPosition = converterSection.getBoundingClientRect().top + window.pageYOffset - 50;
        
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }, 300);
    }
  });
  
  document.body.addEventListener('click', function(event) {
    if (isMobileDevice()) {
      if (!event.target.closest('#fromUnitInput')) {
        fromUnitInput.blur();
      }
    }
  });
});

