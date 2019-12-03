"use strict";

function task5() {
  let value = prompt("Enter your country");
  let message = "";
  let deliveryPrice = "";
  switch (value ? value.toLowerCase():null) {
    case "китай":
      deliveryPrice = 100;
      message = `Доставка в Китай будет стоить ${deliveryPrice} кредитов`;
      break;

    case "чили":
      deliveryPrice = 250;
      message = `Доставка в Чили будет стоить ${deliveryPrice} кредитов`;
      break;

    case "австралия":
      deliveryPrice = 170;
      message = `Доставка в Австралию будет стоить ${deliveryPrice} кредитов`;
      break;

    case "индия":
      deliveryPrice = 80;
      message = `Доставка в Индию будет стоить ${deliveryPrice} кредитов`;
      break;

    case "ямайка":
      deliveryPrice = 120;
      message = `Доставка на Ямайку будет стоить ${deliveryPrice} кредитов`;
      break;

    case null : 
      message = "Отменено пользователем";
      break;

    default:
      message = "В вашей стране доставка недоступна";
  }
console.log(message)
alert(`${message}`)
}
