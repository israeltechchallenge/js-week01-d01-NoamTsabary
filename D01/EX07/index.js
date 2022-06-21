function getRandomInt() {
  let max = 100;
  let num = Math.floor(Math.random() * max)
  let comparer = Math.floor(Math.random() * max)
  moduloEx7(num, comparer)
  //your code
}

function moduloEx7(num, comparer) {
  
  let text;
  let bigger = `The number ${num} is bigger than ${comparer}`;
  if (comparer === 0 && num !== 0) text = `${bigger}. But the modulo of anyNumber % ${comparer} is Not a Number`;
  else if (num > comparer && (num%comparer) !== 0) text = `${bigger}. But the modulo of ${num} % ${comparer} is ${num%comparer}`;
  else if (num > comparer) text =`${bigger}`;
  else if (num === comparer) text =`The number ${num} is equal to ${comparer}`;
  else if (num < comparer) text =`The number ${num} is less than ${comparer}`;  

  document.querySelector("h3").innerText = text;
  
  //your code
}

const btn = document.createElement("button");
btn.innerText = "Randomize!"
document.body.insertBefore(btn, document.body.firstChild);
btn.addEventListener("click", getRandomInt)

;
