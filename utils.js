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
};

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
