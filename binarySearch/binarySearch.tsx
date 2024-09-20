export default function binarySearch(
    arr: Array<number>,
    target: number,
  ): number {
    let idx = -1
    arr.forEach((num, i) => {
      if(num === target) {
        idx = i
        return
      }
    });
    return idx
  }