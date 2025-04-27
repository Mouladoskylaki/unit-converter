// UI.js
import { updateConversionResult } from "./index.js";
import { toggleSn } from "../../../utils.js";

const fromUnitInput = document.getElementById("fromUnitInput");
const toUnitInput = document.getElementById("toUnitInput");
const fromUnitSelect = document.getElementById("fromUnitSelect");
const toUnitSelect = document.getElementById("toUnitSelect");
const conversionTypeSelect = document.getElementById("conversion-type-select");

export const conversionResultElem = document.getElementById("result-value");
export let selectedFormulaObj;
export let formulaDescription = document.getElementById("conversion-operation");

// Formula Objects - import your digital storage formula objects
import { digitalStandardStorageObj } from "./selectedFomulaObjects.js";
import { digitalBitBasedObj } from "./selectedFomulaObjects.js";
import { digitalDataTransferObj } from "./selectedFomulaObjects.js";
import { digitalConnectionSpeedObj } from "./selectedFomulaObjects.js";
import { digitalComputerMemoryObj } from "./selectedFomulaObjects.js";
import { digitalDiskStructureObj } from "./selectedFomulaObjects.js";
import { digitalStorageMediaObj } from "./selectedFomulaObjects.js";
import { digitalHistoricalMediaObj } from "./selectedFomulaObjects.js";
import { digitalPracticalStorageObj } from "./selectedFomulaObjects.js";
import { digitalTransferTimeObj } from "./selectedFomulaObjects.js";

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

// Add change event listener to conversion type select
conversionTypeSelect.addEventListener("change", (event) => {
  const selectedType = event.target.options[event.target.selectedIndex].dataset.type;
  
  handleConversionTypeChange(selectedType);
});

// Handle conversion type change
function handleConversionTypeChange(selectedType) {
  if (selectedType === "standardstorage") {
    updateSelectOptions(digitalStandardStorageObj);
    selectedFormulaObj = digitalStandardStorageObj;
    fromUnitSelect.value = "gigabyte [GB]";
    toUnitSelect.value = "megabyte [MB]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "bitbased") {
    updateSelectOptions(digitalBitBasedObj);
    selectedFormulaObj = digitalBitBasedObj;
    fromUnitSelect.value = "megabit [Mb]";
    toUnitSelect.value = "byte [B]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "datatransfer") {
    updateSelectOptions(digitalDataTransferObj);
    selectedFormulaObj = digitalDataTransferObj;
    fromUnitSelect.value = "megabit per second [Mbps]";
    toUnitSelect.value = "megabyte per second [MBps]";
    fromUnitInput.value = 8;
    updateConversionResult();
  } else if (selectedType === "connectionspeed") {
    updateSelectOptions(digitalConnectionSpeedObj);
    selectedFormulaObj = digitalConnectionSpeedObj;
    fromUnitSelect.value = "gigabit ethernet [GbE]";
    toUnitSelect.value = "wireless 802.11ac [WiFi-AC]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "computermemory") {
    updateSelectOptions(digitalComputerMemoryObj);
    selectedFormulaObj = digitalComputerMemoryObj;
    fromUnitSelect.value = "DIMM (8GB) [DIMM8G]";
    toUnitSelect.value = "DIMM (4GB) [DIMM4G]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "diskstructure") {
    updateSelectOptions(digitalDiskStructureObj);
    selectedFormulaObj = digitalDiskStructureObj;
    fromUnitSelect.value = "cluster (4KB) [cluster]";
    toUnitSelect.value = "sector (512-byte) [sector]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "storagemedia") {
    updateSelectOptions(digitalStorageMediaObj);
    selectedFormulaObj = digitalStorageMediaObj;
    fromUnitSelect.value = "USB flash drive (32GB) [USB32G]";
    toUnitSelect.value = "DVD (single layer) [DVD]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "historicalmedia") {
    updateSelectOptions(digitalHistoricalMediaObj);
    selectedFormulaObj = digitalHistoricalMediaObj;
    fromUnitSelect.value = "floppy disk (3.5\") HD [floppyHD]";
    toUnitSelect.value = "byte [B]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "practicalstorage") {
    updateSelectOptions(digitalPracticalStorageObj);
    selectedFormulaObj = digitalPracticalStorageObj;
    fromUnitSelect.value = "MP4 video (1 minute HD) [mp4min]";
    toUnitSelect.value = "smartphone photo [smartphoto]";
    fromUnitInput.value = 1;
    updateConversionResult();
  } else if (selectedType === "transfertime") {
    updateSelectOptions(digitalTransferTimeObj);
    selectedFormulaObj = digitalTransferTimeObj;
    fromUnitSelect.value = "1GB at 100Mbps [GB@100Mbps]";
    toUnitSelect.value = "1GB at 1Gbps [GB@1Gbps]";
    fromUnitInput.value = 1;
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
  const initialOption = conversionTypeSelect.querySelector('option[data-type="standardstorage"]');
  if (initialOption) {
    initialOption.selected = true;
  }
  
  updateSelectOptions(digitalStandardStorageObj);
  selectedFormulaObj = digitalStandardStorageObj;
  fromUnitSelect.value = "gigabyte [GB]";
  toUnitSelect.value = "megabyte [MB]";
  fromUnitInput.value = 1;
  formulaDescription.innerText =
    digitalStandardStorageObj[fromUnitSelect.value][toUnitSelect.value].description;
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

  if (toUnitInput.value.includes('e')) {
    toggleSn(conversionResultElem, fromUnitInput, toUnitInput, fromUnitSelectOption, toUnitSelectOption);
  }
};