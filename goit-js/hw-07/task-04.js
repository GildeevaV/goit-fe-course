"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика.
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */
let counterValue = 0;
const buttonPlus = document.querySelector(
  '#counter button[data-action="increment"]'
);

const buttonMinus = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const spanValue = document.getElementById("value");

const spanUpdate = function(elem) {
  spanValue.innerHTML = elem;
};

const increment = function() {
  counterValue++;
  spanUpdate(counterValue);
};

const decrement = function() {
  counterValue--;
  spanUpdate(counterValue);
};

buttonPlus.addEventListener("click", increment);
buttonMinus.addEventListener("click", decrement);
