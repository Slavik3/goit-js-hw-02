const numbers = [];
let total = Number(0);
let input;
do {
  input = prompt("ввести число");
  numbers.push(input);
} while (input !== null);

console.log("numbers " + numbers);
for (let i = 0; i < numbers.length; i++) {
  total = total + Number(numbers[i]);
}

console.log("Общая сумма чисел равна " + total);
