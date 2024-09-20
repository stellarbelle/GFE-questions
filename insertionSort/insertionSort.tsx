export default function insertionSort(arr: Array<number>): Array<number> {
    const sorted = arr
    sorted.forEach((num, i) => {
      let current = i
      let prev = i-1
      while(num < sorted[prev] && current !== 0) {
        [sorted[prev], sorted[current]] = [sorted[current], sorted[prev]]
        prev--
        current--
      }
    })
    return sorted;
  }