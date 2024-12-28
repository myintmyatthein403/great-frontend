/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  try {
    if (thisArg === null || thisArg === undefined) {
      thisArg = window; // Set the context to the global object
    }

    const fn = Symbol(); // Create a unique key
    thisArg[fn] = this; // Add the function to the object
    const result = thisArg[fn](...argArray); // Call the function
    delete thisArg[fn]; // Remove the function from the object
    return result;
  } catch (error) {
    console.error(error);
  }
};


// Test Case
function greet() {
  return `Hello, ${this.name}`;
}

const person = {
  name: 'John',
};

console.log(greet.myCall(person)); // Hello, John


