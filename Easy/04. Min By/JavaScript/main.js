/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
export default function minBy(array, iteratee) {
  try {
    if (!Array.isArray(array) || typeof iteratee !== 'function') {
      return undefined;
    }

    let result;
    let min;

    for (const value of array) {
      const computed = iteratee(value);

      // Skip undefined computed values
      if (computed === undefined) {
        continue;
      }

      if (min === undefined || computed < min) {
        min = computed;
        result = value;
      }
    }

    return result;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
// Test cases
const objects = [{ n: 1 }, { n: 2 }];
console.log(minBy(objects, o => o.n)); // { n: 1 }
console.log(minBy(objects, o => o.n * -1)); // { n: 2 }
console.log(minBy(objects, 'n')); // undefined

const fruits = ['apple', 'banana', 'mango'];
console.log(minBy(fruits, fruit => fruit.length)); // apple
console.log(minBy(fruits, 'length')); // undefined


