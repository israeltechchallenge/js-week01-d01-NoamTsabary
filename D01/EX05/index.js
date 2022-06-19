function moduloEx5(num, comparer) {
  let text;
  if (num > comparer && (num%comparer) !== 0) text = `The number ${num} is bigger than ${comparer}. But the modulo of ${num} % ${comparer} is ${num%comparer}`;
  else if (num > comparer) text =`The number ${num} is bigger than ${comparer}`;
  else if (num === comparer) text =`The number ${num} is equal to ${comparer}`;
  else if (num < comparer) text =`The number ${num} is less than ${comparer}`;  

  console.log(text);
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
