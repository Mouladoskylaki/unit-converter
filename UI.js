// UI.js
import { updateConversionResult } from "./index.js";
import { addLink, removeLink } from "./utils.js";
import { toggleSn } from "./utils.js";
import { displayDropDown } from "./utils.js";
import { closeSideBarOutside } from "./utils.js";

const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");
const menuButtons = document.querySelectorAll(".conversion-menu button");
const converterSection = document.querySelector(".converter-section");
const menuButton = document.querySelector(".menu-button");
const convertersContainer = document.querySelector(".all-converters-container");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main-content");
const linkAndButtons = document.getElementById("links-and-buttons");

export const conversionResultElem = document.getElementById("result-value");
export let selectedFormulaObj;
export let formulaDescription = document.getElementById("conversion-operation");

// Formula Objects
import { temperatureFormulas } from "./formulas/temperatureFormulas.js";
import { lengthFormObj } from "./selectedFormulaObjects.js";
import { ancientChineseLengthFormObj } from "./selectedFormulaObjects.js";
import { cookingFormObj } from "./selectedFormulaObjects.js";
import { digitalStorageFormObj } from "./selectedFormulaObjects.js";
import { massWeightFormObj } from "./selectedFormulaObjects.js";
import { volumeFormObj } from "./selectedFormulaObjects.js";
import { areaFormObj } from "./selectedFormulaObjects.js";
import { timeFormObj } from "./selectedFormulaObjects.js";

// Populate select elements
export const updateSelectOptions = (formulaObject) => {
  fromUnitSelect.innerHTML = "";
  toUnitSelect.innerHTML = "";
  const units = Object.keys(formulaObject);
  units.forEach((unit) => {
    if (unit.startsWith("group_")) {
      const group = document.createElement("optgroup");
      group.label = `▼ ${unit.substring(6).toUpperCase()}`;
      group.classList.add('group');
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
    menuButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");

    removeLink("link-to-full-length-converter");
    removeLink("link-to-full-volume-converter");
    removeLink("link-to-full-area-converter");
    removeLink("link-to-full-time-converter");
    removeLink("link-to-full-anc-chinese-converter");
    removeLink("link-to-full-cooking-converter");
    removeLink("link-to-full-digital-storage-converter");
    removeLink("link-to-full-mass-weight-converter");

    if (selectedType === "temperature") {
      updateSelectOptions(temperatureFormulas);
      selectedFormulaObj = temperatureFormulas;
      fromUnitSelect.value = "celsius [°C]";
      toUnitSelect.value = "fahrenheit [°F]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "length") {
      addLink(
        "link-to-full-length-converter",
        "Full Length Converter",
        "./formulas/formulasFull/lengthFull/length-converter-full.html",
        linkAndButtons
      );
      updateSelectOptions(lengthFormObj);
      selectedFormulaObj = lengthFormObj;
      fromUnitSelect.value = "meter [m]";
      toUnitSelect.value = "foot [ft]";
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
    } else if (selectedType === "cooking") {
      addLink(
        "link-to-full-cooking-converter",
        "Complete Cooking Converter",
        "formulas/formulasFull/cookingFull/cooking-converter-full.html",
        converterSection
      );
      updateSelectOptions(cookingFormObj);
      selectedFormulaObj = cookingFormObj;
      fromUnitSelect.value = "cup (US) [cup]";
      toUnitSelect.value = "milliliter [ml]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "digital-storage") {
      addLink(
        "link-to-full-digital-storage-converter",
        "Complete Digital Storage Converter",
        "formulas/formulasFull/digitalStorageFull/digital-storage-converter-full.html",
        converterSection
      );
      updateSelectOptions(digitalStorageFormObj);
      selectedFormulaObj = digitalStorageFormObj;
      fromUnitSelect.value = "gigabyte [GB]";
      toUnitSelect.value = "megabyte [MB]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "weight") {
      addLink(
        "link-to-full-mass-weight-converter",
        "Complete Weight Converter",
        "formulas/formulasFull/weightFull/weight-converter-full.html",
        converterSection
      );
      updateSelectOptions(massWeightFormObj);
      selectedFormulaObj = massWeightFormObj;
      fromUnitSelect.value = "pound [lb]";
      toUnitSelect.value = "kilogram [kg]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "volume") {
      addLink(
        "link-to-full-volume-converter",
        "Complete Volume Converter",
        "formulas/formulasFull/volumeFull/volume-converter-full.html",
        converterSection
      );
      updateSelectOptions(volumeFormObj);
      selectedFormulaObj = volumeFormObj;
      fromUnitSelect.value = "gallon (US liquid) [gal]";
      toUnitSelect.value = "liter [L]";
      fromUnitInput.value = 1;
      updateConversionResult();
    } else if (selectedType === "area") {
      addLink(
        "link-to-full-area-converter",
        "Complete Area Converter",
        "formulas/formulasFull/areaFull/area-converter-full.html",
        converterSection
      );
      updateSelectOptions(areaFormObj);
      selectedFormulaObj = areaFormObj;
      fromUnitSelect.value = "square foot [ft²]";
      toUnitSelect.value = "square meter [m²]";
      fromUnitInput.value = 100;
      updateConversionResult();
    } else if (selectedType === "time") {
      addLink(
        "link-to-full-time-converter",
        "Complete Time Converter",
        "formulas/formulasFull/timeFull/time-converter-full.html",
        converterSection
      );
      updateSelectOptions(timeFormObj);
      selectedFormulaObj = timeFormObj;
      fromUnitSelect.value = "hour [h]";
      toUnitSelect.value = "minute [min]";
      fromUnitInput.value = 2;
      updateConversionResult();
    } 
    console.log(`Selected conversion type: ${selectedType}`);
  });
});

// On load conversion
const initializeConversion = () => {
  document.querySelector('button[data-type="length"]').classList.add("active");
  updateSelectOptions(lengthFormObj);
  selectedFormulaObj = lengthFormObj;
  fromUnitSelect.value = "meter [m]";
  toUnitSelect.value = "foot [ft]";
  fromUnitInput.value = 1;
  formulaDescription.innerText =
    lengthFormObj[fromUnitSelect.value][toUnitSelect.value].description;
  updateConversionResult();
  addLink(
    "link-to-full-length-converter",
    "Full Length Converter",
    "./formulas/formulasFull/lengthFull/length-converter-full.html",
    linkAndButtons
  );
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
    ${
      fromUnitSelectOption.charAt(0).toUpperCase() +
      fromUnitSelectOption.slice(1)
    } 
    = 
    <strong>${toUnitInput.value}</strong> 
    ${toUnitSelectOption.charAt(0).toUpperCase() + toUnitSelectOption.slice(1)}
  `;

  conversionResultElem.innerHTML = resultHtml;

  const resultElement = document.getElementById("conversion-result");
  resultElement.classList.add("updated");

  setTimeout(() => {
    resultElement.classList.remove("updated");
  }, 100);

  if (toUnitInput.value.includes("e")) {
    toggleSn(
      conversionResultElem,
      fromUnitInput,
      toUnitInput,
      fromUnitSelectOption,
      toUnitSelectOption
    );
  }
};


// Mobile Autoscroll
// document.addEventListener("DOMContentLoaded", function () {
//   const fromUnitInput = document.getElementById("fromUnitInput");
//   const converterSection = document.querySelector(".converter-section");

//   function isMobileDevice() {
//     return window.innerWidth <= 768;
//   }

//   fromUnitInput.addEventListener("focus", function () {
//     if (isMobileDevice()) {
//       setTimeout(function () {
//         const scrollPosition =
//           converterSection.getBoundingClientRect().top +
//           window.pageYOffset -
//           50;

//         window.scrollTo({
//           top: scrollPosition,
//           behavior: "smooth",
//         });
//       }, 300);
//     }
//   });

//   document.body.addEventListener("click", function (event) {
//     if (isMobileDevice()) {
//       if (!event.target.closest("#fromUnitInput")) {
//         fromUnitInput.blur();
//       }
//     }
//   });
// });

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
