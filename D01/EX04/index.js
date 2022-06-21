function modulo(num, comparer) {
  if (num > comparer && (modulo(num%comparer) !== 0)) console.log(`The modulo of ${num} % ${comparer} is ${num%comparer}`);
  if (num > comparer) console.log(`The number ${num} is bigger than ${comparer}`);
  if (num === comparer) console.log(`The number ${num} is equal to ${comparer}`);
  if (num < comparer) console.log(`The number ${num} is less than ${comparer}`);  
}

// Do not remove or change this line, or the tests won't work
export { modulo };
