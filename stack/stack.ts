export default class Stack<T> {
    itemArray: T[];
    constructor() {
      this.itemArray = [];
    }
  
    /**
     * Pushes an item onto the top of the stack.
     */
    push(item: T): number {
      return this.itemArray.push(item);
    }
  
    /**
     * Remove an item at the top of the stack.
     */
    pop(): T | undefined {
      return this.itemArray.pop();
    }
  
    /**
     * Determines if the stack is empty.
     */
    isEmpty(): boolean {
      return this.itemArray.length === 0;
    }
  
    /**
     * Returns the item at the top of the stack without removing it from the stack.
     */
    peek(): T | undefined {
      return this.itemArray[this.itemArray.length - 1];
    }
  
    /**
     * Returns the number of items in the stack.
     */
    length(): number {
      return this.itemArray.length;
    }
  }
  