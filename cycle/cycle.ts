export default function cycle<T>(...values: Array<T>): () => T {
    let idx = 0;
    return () => {
      let value = values[idx];
      if (idx <= values.length - 1) {
        idx = idx + 1;
      } else {
        value = values[0];
        idx = 1;
      }
      return value;
    };
  }
  