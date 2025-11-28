// Function to create a counter using closure
function createCounter() {
  let count = 0; // Private variable, not accessible from outside

  return {
    increment: function () {
      count++;
      console.log(`Current count: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Current count: ${count}`);
    },
    getCount: function () {
      console.log(`Current count: ${count}`);
    }
  };
}

// Example usage
const counter1 = createCounter();
counter1.increment(); // Current count: 1
counter1.increment(); // Current count: 2
counter1.decrement(); // Current count: 1
counter1.getCount();  // Current count: 1

// Creating a second counter demonstrates separate state
const counter2 = createCounter();
counter2.increment(); // Current count: 1 (independent from counter1)
