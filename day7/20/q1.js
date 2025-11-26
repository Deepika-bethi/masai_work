function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Current count:", count);
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    }
  };
}

// Example usage:
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
