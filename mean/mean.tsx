export default function mean(array: number[]): number {
  return array.reduce((a, b) => a + b, 0) / array.length
}