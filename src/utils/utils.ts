export const roundToPrecision = (n: number, toFixedDigits: number): number =>
  +parseFloat(n.toString()).toFixed(toFixedDigits);
