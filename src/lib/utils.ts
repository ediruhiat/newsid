export function isNumeric(str: string) {
  return !Number.isNaN(str) && !Number.isNaN(parseFloat(str))
}
