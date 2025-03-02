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
    decimalPlaces = 1;  // Large numbers need fewer decimals (1,234.5)
  } else if (absValue >= 10) {
    decimalPlaces = 2;  // Medium numbers (12.34)
  } else if (absValue >= 1) {
    decimalPlaces = 3;  // Single digit numbers (1.234)
  } else if (absValue >= 0.01) {
    decimalPlaces = 4;  // Small decimals (0.1234)
  } else {
    decimalPlaces = 5;  // Very small decimals (0.00123)
  }
  
  // Format with the appropriate decimal places
  let formattedResult = result.toFixed(decimalPlaces);
  
  // Remove trailing zeros and decimal point if all zeros
  if (formattedResult.includes('.')) {
    formattedResult = formattedResult.replace(/\.?0+$/, '');
    // If we're left with just a decimal point at the end, remove it
    if (formattedResult.endsWith('.')) {
      formattedResult = formattedResult.slice(0, -1);
    }
  }
  
  // Add thousands separators for large numbers
  if (absValue >= 1000 && !formattedResult.includes('e')) {
    // Use regex to add commas
    formattedResult = formattedResult.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  return formattedResult;
}