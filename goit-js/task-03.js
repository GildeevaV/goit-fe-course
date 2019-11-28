"use strict";

function task3()
{
let message;

let password = '1234';

const value = prompt('Enter password');

if(value===null) {
    message='Отменено пользователем!';
}
else if(value===password){
    message='Добро пожаловать!';
}
else{
    message='Доступ запрещен, неверный пароль!';
}
alert(message);

}