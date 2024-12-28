### Example 1: Borrowing Methods from Another Object

Suppose you have two objects, and you want to use a method from one object on another object.

```javascript
const car = {
  brand: 'Toyota',
  getBrand() {
    return this.brand;
  }
};

const bike = {
  brand: 'Yamaha'
};

// Using myCall to borrow getBrand method from car and use it on bike
console.log(car.getBrand.myCall(bike)); // Yamaha
```

In this example, the `getBrand` method from the `car` object is borrowed and called on the `bike` object using `myCall`. This allows the `bike` object to use the `getBrand` method as if it were its own.

### Example 2: Converting Array-Like Objects to Arrays

You can use `myCall` to convert array-like objects (such as `arguments` or NodeList) to actual arrays.

```javascript
function listArguments() {
  // Using myCall to convert arguments to an array
  const argsArray = Array.prototype.slice.myCall(arguments);
  return argsArray;
}

console.log(listArguments(1, 2, 3, 4)); // [1, 2, 3, 4]

