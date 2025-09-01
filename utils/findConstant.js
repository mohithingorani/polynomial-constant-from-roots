//Formula for constant c
function findConstantC(roots) {
  let product = 1n;
  for (const root of roots) {
    product *= root;
  }
  if (roots.length % 2 !== 0) {
    product *= -1n;
  }
  return product;
}



export default findConstantC