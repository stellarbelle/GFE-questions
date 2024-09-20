export default function minBy<T>(
    array: Array<T>,
    iteratee: (value: T) => any,
  ): any {
    const sentinal = Object()
    let val: any = sentinal;
    let minItem: T | undefined;
    array.forEach((item) => {
      const itemVal = iteratee(item)
      if (val === sentinal && itemVal || itemVal < val) {
        val = itemVal;
        minItem = item;
      }
    });
    return minItem;
  }
  