### Example 1: Finding the Product with the Lowest Price

Suppose you have an array of product objects, and you want to find the product with the lowest price.

```javascript
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 500 },
  { name: 'Tablet', price: 300 }
];

const cheapestProduct = minBy(products, product => product.price);
console.log(cheapestProduct); // { name: 'Tablet', price: 300 }
```

In this example, the `iteratee` function extracts the `price` property from each product object, and `minBy` returns the product with the lowest price.

### Example 2: Finding the Shortest String in an Array

Suppose you have an array of strings, and you want to find the shortest string.

```javascript
const strings = ['banana', 'apple', 'cherry', 'date'];

const shortestString = minBy(strings, str => str.length);
console.log(shortestString); // 'date'
```

