// utils.js

export function formatResult(result) {
  // Handle non-numeric results
  if (!isFinite(result)) {
    return result.toString();
  }

  const absValue = Math.abs(result);

  // Zero case
  if (absValue === 0) {
    return "0";
  }

  // Very small numbers - scientific notation
  if (absValue < 0.0001) {
    return result.toExponential(4);
  }

  // Very large numbers - scientific notation
  if (absValue >= 1e9) {
    return result.toExponential(4);
  }

  // Determine optimal decimal places based on magnitude
  let decimalPlaces;
  if (absValue >= 1000) {
    decimalPlaces = 1; // Large numbers need fewer decimals (1,234.5)
  } else if (absValue >= 10) {
    decimalPlaces = 2; // Medium numbers (12.34)
  } else if (absValue >= 1) {
    decimalPlaces = 3; // Single digit numbers (1.234)
  } else if (absValue >= 0.01) {
    decimalPlaces = 4; // Small decimals (0.1234)
  } else {
    decimalPlaces = 5; // Very small decimals (0.00123)
  }

  // Format with the appropriate decimal places
  let formattedResult = result.toFixed(decimalPlaces);

  // Remove trailing zeros and decimal point if all zeros
  if (formattedResult.includes(".")) {
    formattedResult = formattedResult.replace(/\.?0+$/, "");
    // If we're left with just a decimal point at the end, remove it
    if (formattedResult.endsWith(".")) {
      formattedResult = formattedResult.slice(0, -1);
    }
  }

  // Add thousands separators for large numbers
  if (absValue >= 1000 && !formattedResult.includes("e")) {
    // Use regex to add commas
    formattedResult = formattedResult.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return formattedResult;
}

// Function to make scientific notation more user-friendly
export function userFriendlyFormat(formattedResult) {
  // If the result is already not in scientific notation, return as is
  if (!formattedResult.includes("e")) {
    return formattedResult;
  }

  // Parse the number to work with it
  const number = parseFloat(formattedResult);
  const absNumber = Math.abs(number);

  // Format with commas for large numbers
  const standardFormat = number.toLocaleString("en-US", {
    maximumFractionDigits: absNumber < 0.001 ? 10 : 2,
  });

  // Add verbal approximation for very large or small numbers
  if (absNumber >= 1e6 || absNumber < 0.001) {
    let approx;
    if (absNumber >= 1e15) approx = `${(number / 1e15).toFixed(2)} quadrillion`;
    else if (absNumber >= 1e12) approx = `${(number / 1e12).toFixed(2)} trillion`;
    else if (absNumber >= 1e9) approx = `${(number / 1e9).toFixed(2)} billion`;
    else if (absNumber >= 1e6) approx = `${(number / 1e6).toFixed(2)} million`;
    else if (absNumber < 1e-9) approx = `${(number * 1e12).toFixed(2)} trillionths`;
    else if (absNumber < 1e-6) approx = `${(number * 1e9).toFixed(2)} billionths`;
    else if (absNumber < 1e-3) approx = `${(number * 1e6).toFixed(2)} millionths`;

    return `≈ ${approx}`;
  }

  // For more moderate scientific notation values
  return `${standardFormat}`;
}

export function generateConversions(
  units,
  customPrecision = {},
  conversionType
) {
  const result = {};

  const hasCustomPrecision =
    customPrecision && Object.keys(customPrecision).length > 0;
  const hasConversionType =
    hasCustomPrecision && customPrecision[conversionType] !== undefined;

  // // For debugging
  // console.log(`Generating conversions for type: ${conversionType}`);
  // console.log(`Has custom precision: ${hasCustomPrecision}`);
  // console.log(`Has precision for ${conversionType}: ${hasConversionType}`);

  // Get the appropriate precision object based on conversion type
  const precisionObject = customPrecision[conversionType] || {};

  for (const fromUnit in units) {
    result[fromUnit] = {};
    for (const toUnit in units) {
      const exactFactor = units[fromUnit] / units[toUnit];

      // Use precision from the appropriate sub-object, or default to 7
      const precision = precisionObject[toUnit] || 7;

      // Format the factor for display purposes only
      const displayFactor = Number(exactFactor.toFixed(precision));

      let operationWord, description, formula;
      if (exactFactor === 1) {
        operationWord = "No conversion needed; value remains in";
        description = `${operationWord} ${toUnit}.`;
        formula = (value) => value; // Exact value, no operation needed
      } else if (exactFactor > 1) {
        operationWord = "Multiply";
        description = `${operationWord} the value by ${displayFactor} to convert to ${toUnit}.`;
        formula = (value) => value * exactFactor; // Use exact factor for calculation
      } else {
        // For division, we typically show the reciprocal factor (e.g., "divide by 2" instead of "multiply by 0.5")
        const displayDivisor = Number((1 / exactFactor).toFixed(precision));
        operationWord = "Divide";
        description = `${operationWord} the value by ${displayDivisor} to convert to ${toUnit}.`;
        formula = (value) => value / displayDivisor; // Use formatted divisor for consistency with description
      }

      result[fromUnit][toUnit] = {
        formula: formula,
        description: description,
      };
    }
  }

  return result;
}

// Add links
let lastAddedLinkClass = null;

export const addLink = (className, text, href, parent) => {
  let existingLink = document.querySelector(`.${className}`);
  if (!existingLink) {
    const linkToFullConverter = document.createElement("a");
    linkToFullConverter.classList.add(className);
    linkToFullConverter.textContent = text;
    linkToFullConverter.href = href;
    parent.appendChild(linkToFullConverter);
  }
};

// Remove links
export const removeLink = (className) => {
  let existingLink = document.querySelector(`.${className}`);
  if (existingLink) {
    existingLink.remove();
  }
};

export const toggleSn = (conversionResultElem, fromUnitInput, toUnitInput, fromUnitSelectOption, toUnitSelectOption) => {
  // Remove any existing toggle buttons first
  const existingToggles = conversionResultElem.querySelectorAll('.toggle-sn-off, .toggle-sn-on');
  existingToggles.forEach(toggle => toggle.remove());
  
  // Create the toggle elements
  const scientificNotationOff = document.createElement('span');
  const scientificNotationOn = document.createElement('span');
  scientificNotationOff.classList.add('toggle-sn-off');
  scientificNotationOn.classList.add('toggle-sn-on');
  scientificNotationOff.title = "Show approximate value";
  scientificNotationOn.title = "Show scientific notation";
  scientificNotationOff.innerHTML = ' ℯ';
  scientificNotationOn.innerHTML = ' ℯ';
  
  // Toggle to user-friendly format
  scientificNotationOff.addEventListener('click', () => {
    const userFriendlyResult = userFriendlyFormat(toUnitInput.value);
    // Create base text without the toggle button
    const baseText = `${fromUnitInput.value} ${
      fromUnitSelectOption.charAt(0).toUpperCase() + fromUnitSelectOption.slice(1)
    } ${userFriendlyResult} ${
      toUnitSelectOption.charAt(0).toUpperCase() + toUnitSelectOption.slice(1)}`;
    
    conversionResultElem.innerText = baseText;
    conversionResultElem.appendChild(scientificNotationOn);
  });
  
  // Toggle back to scientific notation
  scientificNotationOn.addEventListener('click', () => {
    const baseText = `${fromUnitInput.value} ${
      fromUnitSelectOption.charAt(0).toUpperCase() + fromUnitSelectOption.slice(1)
    } = ${toUnitInput.value} ${
      toUnitSelectOption.charAt(0).toUpperCase() + toUnitSelectOption.slice(1)
    }`;
    
    conversionResultElem.innerText = baseText;
    conversionResultElem.appendChild(scientificNotationOff);
  });
  
  // Add the initial toggle button
  conversionResultElem.appendChild(scientificNotationOff);
};

export const displayDropDown = (dropDownElem) => {
  const button = dropDownElem.querySelector(".dropdown-button");
  const menu = dropDownElem.querySelector(".dropdown-menu");

  document.addEventListener("click", (event) => {
    if (
      menu.classList.contains("visible") &&
      !menu.contains(event.target) &&
      !button.contains(event.target)
    ) {
      menu.classList.remove("visible");
      console.log("hiding menu");
    }
  });

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    menu.classList.toggle("visible");
  });
};
