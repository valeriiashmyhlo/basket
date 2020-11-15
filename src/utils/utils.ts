export const roundToPrecision = (n: number, precision: number): number =>
  +parseFloat(n.toString()).toFixed(precision);
