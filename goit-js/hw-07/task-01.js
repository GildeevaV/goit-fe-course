"use strict";
// В HTML есть список категорий ul#categories.<ul id="categories">

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesList = Array.from(document.querySelector("#categories").children);
console.log(categoriesList)
console.log(`В списке ${categoriesList.length} категории`);


 

let elements = categories.querySelectorAll('li.item');
for (let elem of elements) {
  console.log(elem.querySelector('h2').innerText, elem.querySelectorAll('li').length); 
}




