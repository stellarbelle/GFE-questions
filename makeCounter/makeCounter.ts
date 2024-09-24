export default function makeCounter(initialValue: number = 0): () => number {
    let count = 0
    let num = 0
    const setCount = () => {
      let val = num
      num++
      if(count === 0) {
        return val
      } else {
        count++
        return val
      }
    }
    num = initialValue
    return setCount
  }