"use strict";

let inputMessage;

let total = 0;

let numOfIteration = 0;

const numbers = [];

do {
  inputMessage = prompt("Введите число");

  if (inputMessage === null) {
    break;
  }

  if (!isNaN(Number(inputMessage))) {
    numbers.push(inputMessage);
  } else {
    console.log("Неверное значение");
  }
} while (true);

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  console.log(i + 1, " - ", numbers[i]);
  total = total + numbers[i];
}

console.log(`Общая сумма чисел равна ${total}`);
