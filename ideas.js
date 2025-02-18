// ideas.js
// Upadate conversions options with results
// export const updateConversionOptions = () => {
//   const fromValue = parseFloat(fromUnitInput.value);
//   const fromUnit = fromUnitSelect.value;
//   if (!selectedFormulaObj || !selectedFormulaObj[fromUnit]) {
//     console.log("No valid formula object or unit found.");
//     return;
//   }
//   const conversions = selectedFormulaObj[fromUnit];
//   for (let option of toUnitSelect.options) {
//     const toUnit = option.value;
//     if (fromUnitSelect.value === option.value) {
//       option.textContent = `${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)} (${fromValue})`;
//     } else if (conversions[toUnit]) {
//       const convertedValue = parseFloat(
//         conversions[toUnit].formula(fromValue).toPrecision(6)
//       );
//       option.textContent = `${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)} (${convertedValue})`;
//     } else {
//       option.textContent = toUnit;
//     }
//   }
// };

// export const resetToSelectOptions = () => {
//   for (let option of toUnitSelect.options) {
//     option.textContent = `${option.value.charAt(0).toUpperCase() + option.value.slice(1)}`;
//   }
// };