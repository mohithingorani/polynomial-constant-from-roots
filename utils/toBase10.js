// --- Helper function to decode root from given base ---
function decodeToBase10(value, base) {
  const b = BigInt(base);
  let result = 0n;

  for (let i = 0; i < value.length; i++) {
    const digit = value[value.length - 1 - i];
    let digitValue;

    if (digit >= '0' && digit <= '9') {
      digitValue = BigInt(digit);
    } else {
      digitValue = BigInt(digit.charCodeAt(0) - 'a'.charCodeAt(0) + 10);
    }

    result += digitValue * (b ** BigInt(i));
  }
  return result;
}

export default decodeToBase10