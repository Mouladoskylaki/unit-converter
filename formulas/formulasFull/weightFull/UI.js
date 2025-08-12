// UI.js
import { updateConversionResult } from "./index.js";
import { toggleSn } from "../../../utils.js";
import { displayDropDown } from "../../../utils.js";
import { closeSideBarOutside } from "../../../utils.js";

const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");
const selectOptions = document.querySelectorAll(".conversion-menu");
const menuButtons = document.querySelectorAll(".conversion-menu button");
const converterSection = document.querySelector(".converter-section");
const menuButton = document.querySelector(".menu-button");
const convertersContainer = document.querySelector(".all-converters-container");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main-content");

export const conversionResultElem = document.getElementById("result-value");
export let selectedFormulaObj;
export let formulaDescription = document.getElementById("conversion-operation");

// Weight Formula Objects
import { 
  standardWeightObj, 
  asianWeightObj, 
  historicalWeightObj, 
  scientificWeightObj, 
  preciousMetalObj, 
  commercialWeightObj, 
  referenceWeightObj,
} from "./selectedFomulaObjects.js";

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

// Add click event listeners to each nav button
selectOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    const selectedOption = event.target.selectedOptions[0]; // Get the selected <option>
    const selectedType = selectedOption.dataset.type;

    if (selectedType === "standardWeight") {
      updateSelectOptions(standardWeightObj);
      selectedFormulaObj = standardWeightObj;
      fromUnitSelect.value = "kilogram [kg]";
      toUnitSelect.value = "pound [lb]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "asianWeight") {
      updateSelectOptions(asianWeightObj);
      selectedFormulaObj = asianWeightObj;
      fromUnitSelect.value = "jin (Chinese pound) [jin]";
      toUnitSelect.value = "kilogram [kg]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "historicalWeight") {
      updateSelectOptions(historicalWeightObj);
      selectedFormulaObj = historicalWeightObj;
      fromUnitSelect.value = "libra (Roman pound) [libra]";
      toUnitSelect.value = "pound [lb]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "scientificWeight") {
      updateSelectOptions(scientificWeightObj);
      selectedFormulaObj = scientificWeightObj;
      fromUnitSelect.value = "kilogram [kg]";
      toUnitSelect.value = "atomic mass unit [u, AMU]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "preciousMetal") {
      updateSelectOptions(preciousMetalObj);
      selectedFormulaObj = preciousMetalObj;
      fromUnitSelect.value = "carat (metric) [ct]";
      toUnitSelect.value = "gram [g]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "commercialWeight") {
      updateSelectOptions(commercialWeightObj);
      selectedFormulaObj = commercialWeightObj;
      fromUnitSelect.value = "pound [lb]";
      toUnitSelect.value = "kilogram [kg]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "referenceWeight") {
      updateSelectOptions(referenceWeightObj);
      selectedFormulaObj = referenceWeightObj;
      fromUnitSelect.value = "apple [apple]";
      toUnitSelect.value = "kilogram [kg]";
      fromUnitInput.value = 1;
      updateConversionResult();
    }
    console.log(`Selected conversion type: ${selectedType}`);
  });
});

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
  updateSelectOptions(standardWeightObj);
  selectedFormulaObj = standardWeightObj;
  fromUnitSelect.value = "pound [lb]";
  toUnitSelect.value = "kilogram [kg]";
  fromUnitInput.value = 10;
  formulaDescription.innerText =
  standardWeightObj[fromUnitSelect.value][toUnitSelect.value].description;
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
