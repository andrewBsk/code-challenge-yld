class Lazy {
  queue;

  constructor() {
    this.queue = []; // Initialize class and it's queue
  }

  add(newFunctionBody, ...newFunctionArgs) {
    const queueCopy = this.queue; // Create a queue copy
    // Create an object that holds the function body and arguments
    const newFunction = {
      functionBody: newFunctionBody,
      functionArgs: [...newFunctionArgs],
    };
    queueCopy.push(newFunction); // Push object to the queue copy
    this.queue = queueCopy; // Update class instance queue
    return this;
  }

  evaluate(args) {
    return args.map((arg) => {
      // Loop through arguments
      return this.queue.reduce((acc, current) => {
        const { functionBody, functionArgs } = current; // Extract function and function arguments
        const updatedValue = functionBody(acc, ...functionArgs); // Apply function with it's arguments to accumulator
        return updatedValue; // Return updated value
      }, arg); // Use argument as initial value
    });
  }
}

module.exports = Lazy;
