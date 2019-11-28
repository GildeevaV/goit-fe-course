"use strict";

function task4()
{
let credits = 23580;

const pricePerDroid = 3000; 

let value = prompt('Enter quantity');

let totalPrice = 0;

if(value===null) {
    console.log('Отменено пользователем!');
}
else {
    totalPrice=value*pricePerDroid;
}
if(totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
}
else {
    console.log('Вы купили ' + value + ' дроидов на счету осталось ' + (credits-totalPrice) + ' кредитов');
}
}