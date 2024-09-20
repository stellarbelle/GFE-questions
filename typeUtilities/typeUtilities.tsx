export function isBoolean(value: unknown): boolean {
  return value === true || value === false || false
}

export function isNumber(value: unknown): boolean {
  return Number.isInteger(value) || Number.isNaN(value)
}

export function isNull(value: unknown): boolean { 
  return value === null
}

export function isString(value: unknown): boolean {
  const type = typeof value
  return type === "string"
}

export function isSymbol(value: unknown): boolean {
  const type = typeof value
  return type === "symbol";
}

export function isUndefined(value: unknown): boolean {
  const type = typeof value
  return type === "undefined";
}