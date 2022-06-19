function moduloEx6(num, comparer) {
  
  let text;
  if (comparer === 0 && num !== 0) text = `The number ${num} is bigger than ${comparer}. But the modulo of anyNumber % ${comparer} is Not a Number`;
  else if (num > comparer && (num%comparer) !== 0) text = `The number ${num} is bigger than ${comparer}. But the modulo of ${num} % ${comparer} is ${num%comparer}`;
  else if (num > comparer) text =`The number ${num} is bigger than ${comparer}`;
  else if (num === comparer) text =`The number ${num} is equal to ${comparer}`;
  else if (num < comparer) text =`The number ${num} is less than ${comparer}`;  

  document.querySelector("h3").innerText = text;

}

moduloEx6(4, 2)
