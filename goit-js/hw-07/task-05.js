"use strict";
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

const textInput = document.getElementById("name-input");

const textSpan = document.getElementById("name-output");

const names = 0;

const sumEl = function(elem) {
  const field = elem.currentTarget;
  textSpan.textContent = field.value !== "" ? field.value : "незнакомец";
};
textInput.addEventListener("input", sumEl.bind(textSpan));
