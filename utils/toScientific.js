function bigIntToScientific(big) {
  const str = big.toString();
  const len = str.length;
  return str[0] + "." + str.slice(1, 5) + "e+" + (len - 1);
}

export default bigIntToScientific;