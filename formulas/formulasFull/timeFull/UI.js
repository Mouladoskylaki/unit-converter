// UI.js
import { updateConversionResult } from "./index.js";
import { toggleSn } from "../../../utils.js";
import { displayDropDown } from "../../../utils.js";
import { closeSideBarOutside } from "../../../utils.js";

const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");
const conversionTypeSelect = document.getElementById("conversion-type-select");
const menuButton = document.querySelector(".menu-button");
const convertersContainer = document.querySelector(".all-converters-container");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main-content");

export const conversionResultElem = document.getElementById("result-value");
export let selectedFormulaObj;
export let formulaDescription = document.getElementById("conversion-operation");

// Formula Objects - import your time formula objects
import { standardTimeObj } from "./selectedFormulaObjects.js";
import { workBusinessObj } from "./selectedFormulaObjects.js";
import { astronomicalObj } from "./selectedFormulaObjects.js";
import { historicalObj } from "./selectedFormulaObjects.js";
import { scientificObj } from "./selectedFormulaObjects.js";
import { mediaObj } from "./selectedFormulaObjects.js";
import { sportsObj } from "./selectedFormulaObjects.js";
import { cookingObj } from "./selectedFormulaObjects.js";
import { transportationObj } from "./selectedFormulaObjects.js";
import { biologicalObj } from "./selectedFormulaObjects.js";

// Populate select elements
export const updateSelectOptions = (formulaObject) => {
  fromUnitSelect.innerHTML = "";
  toUnitSelect.innerHTML = "";
  const units = Object.keys(formulaObject);
  units.forEach((unit) => {
    if (unit.startsWith("group_")) {
      const group = document.createElement("optgroup");
      group.classList.add('group');
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

// Add change event listener to conversion type select
conversionTypeSelect.addEventListener("change", (event) => {
  const selectedType = event.target.options[event.target.selectedIndex].dataset.type;
  
  handleConversionTypeChange(selectedType);
});

// Handle conversion type change
function handleConversionTypeChange(selectedType) {
  // Time Converter Categories
  if (selectedType === "standardtime") {
    updateSelectOptions(standardTimeObj);
    selectedFormulaObj = standardTimeObj;
    fromUnitSelect.value = "hour [h]";
    toUnitSelect.value = "minute [min]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "workbusiness") {
    updateSelectOptions(workBusinessObj);
    selectedFormulaObj = workBusinessObj;
    fromUnitSelect.value = "workday [wd]";
    toUnitSelect.value = "hour [h]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "astronomical") {
    updateSelectOptions(astronomicalObj);
    selectedFormulaObj = astronomicalObj;
    fromUnitSelect.value = "sidereal day [sd]";
    toUnitSelect.value = "hour [h]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "historical") {
    updateSelectOptions(historicalObj);
    selectedFormulaObj = historicalObj;
    fromUnitSelect.value = "fortnight [fn]";
    toUnitSelect.value = "day [d]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "scientific") {
    updateSelectOptions(scientificObj);
    selectedFormulaObj = scientificObj;
    fromUnitSelect.value = "second [s]";
    toUnitSelect.value = "millisecond [ms]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "media") {
    updateSelectOptions(mediaObj);
    selectedFormulaObj = mediaObj;
    fromUnitSelect.value = "song (average) [song]";
    toUnitSelect.value = "minute [min]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "sports") {
    updateSelectOptions(sportsObj);
    selectedFormulaObj = sportsObj;
    fromUnitSelect.value = "football quarter [fb qtr]";
    toUnitSelect.value = "minute [min]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "cooking") {
    updateSelectOptions(cookingObj);
    selectedFormulaObj = cookingObj;
    fromUnitSelect.value = "1 hour [1h]";
    toUnitSelect.value = "30 minutes [30min]";
    fromUnitInput.value = 2;
    updateConversionResult();
  } else if (selectedType === "transportation") {
    updateSelectOptions(transportationObj);
    selectedFormulaObj = transportationObj;
    fromUnitSelect.value = "car commute [car comm]";
    toUnitSelect.value = "minute [min]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "biological") {
    updateSelectOptions(biologicalObj);
    selectedFormulaObj = biologicalObj;
    fromUnitSelect.value = "heartbeat [heartbeat]";
    toUnitSelect.value = "second [s]";
    fromUnitInput.value = 70;
    updateConversionResult();
  }
console.log(`Selected conversion type: ${selectedType}`);
}

// Add input listeners
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

// On load conversion
const initializeConversion = () => {
  // Set initial option in the dropdown
  const initialOption = conversionTypeSelect.querySelector('option[data-type="standardmetric"]');
  if (initialOption) {
    initialOption.selected = true;
  }
  
  updateSelectOptions(standardTimeObj);
  selectedFormulaObj = standardTimeObj;
  fromUnitSelect.value = "hour [h]";
  toUnitSelect.value = "minute [min]";
  fromUnitInput.value = 1;
  formulaDescription.innerText =
    standardTimeObj[fromUnitSelect.value][toUnitSelect.value].description;
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

// DropDown Menu
const dropdown = document.querySelector(".dropdown");
const dropdown02 = document.querySelector(".dropdown02");
displayDropDown(dropdown);
displayDropDown(dropdown02);

// Menu Button Toggle Visible
menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
  main.classList.toggle("main-visible");
});

// Close Menu Mobile X Button
document.querySelector(".close-menu").addEventListener("click", () => {
  sidebar.classList.remove("visible");
  main.classList.remove("main-visible");
});

// Check if the sidebar is open and the click is outside both the sidebar and menu button
closeSideBarOutside(sidebar, menuButton, main);
