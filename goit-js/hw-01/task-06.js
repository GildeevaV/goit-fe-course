"use strict";

function task6() { 

let inputMessage;

let total = 0;

let numOfIteration = 0;

do 
{
inputMessage = prompt ('Введите число');

if (inputMessage === null)
 {
  break;
 }

if (!isNaN(Number(inputMessage)))
{
    total +- Number(inputMessage);
    numOfIteration++;
}else{
    console.log('Неверное значение');
}

}while(true);

console.log(`Сумма операций равна ${total}; Количество итераций ${numOfIteration}!`);
}






