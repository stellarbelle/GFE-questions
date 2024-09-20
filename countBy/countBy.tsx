export default function countBy<T>(
    array: Array<T>,
    iteratee: (value: T) => number | string,
  ): Record<string, number> {
    let results: Record<string, number> = {}
    array.forEach(item => {
      const val = iteratee(item)
      results.hasOwnProperty(val) ? results[val]++ : results[val] = 1
    });
    return results;
  }