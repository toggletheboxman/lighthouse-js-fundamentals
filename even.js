// Function for determining whether a given number is odd or even using the module operator.

const isEven = function (num) {
  return num % 2 === 0;
};

console.log(isEven(43));

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);