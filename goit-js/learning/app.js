// МОДУЛЬ1
"use strict"; //-директива для строгого режима. Выдает ошибки в консоли при использовании
// сомнительных конструкций кода с форумов

// //  <script src="../app.js"></script>  //перед закрывающим тегом body;

// // a = b * 2; //-выражение присваивания. a и b — переменные
// // , это такие коробки в которых можно хранить информацию.
// // 2 — просто число(литерал)
// // = и * — операторы, они производят действия над значениями и переменными.

// // Свойство-набор характеристик
// // 'JavaScript is awesome'.length;

// // Метод-вызов какого-либо действия
// // 'JavaScript is awesome'.toUpperCase();

// // Переменные используются для хранения данных и состоят из идентификатора (имени) и области в памяти,
// //  где хранится их значение. Переменную можно представить как коробку с названием, в которой что-то
// //  лежит (значение).

// //  Идентификатор — это имя переменной, функции, параметра или класса.
// //     Первым символом должна быть буква a-z или A-Z, символ подчеркивания _ или знак доллара $.
// //     Другие символы могут быть буквами a-z, A-Z, цифрами 0-9, подчеркиваниями _ и знаками доллара $.
// //     Все идентификаторы чувствительны к регистру.
// //     Имя переменной должно быть понятным: currentMonth, number, goods, user

// //     camelCase: первое слово с мал буквы, дополнительное-с большой, слитно.
// //     isActive, activeGuestCount

// //     var- уже не используется

// //     let — объявляет переменную, которой можно присвоить новое значение

// //     const — так же объявляет переменную, с одним отличием: объявляемая переменная, должна быть
// //      немедленно инициализирована значением, и этой переменной не может быть присвоено другое
// //      значение после инициализации.

// // Создание переменной без ключевого слова let или const приведет к ошибке.

// // let firstNumber;
// // const secondNumber = 15;

// // // console.log() используется для вывода данных в консоль разработчика
// // console.log('secondNumber: ', secondNumber); //15
// // // * После объявления, если переменная объявлена как let,
// // // * можно записать значение
// // // */
// // console.log('firstNumber до присваивания значения: ', firstNumber); //undefined
// // firstNumber = 5;
// // console.log('firstNumber: ', firstNumber); //5
// // Имена КОНСТАНТ - переменных, значение которых не изменяется никогда, на протяжении работы
// // всего скрипта, обычно записываются в формате UPPER_SNAKE_CASE.

// // Неопределенная переменная(undefined) — это переменная, которая была объявлена,
// //  но не инициализирована значением
// // Необъявленная переменная(undeclared или not defined) — это переменная, которая не была объявлена
// // (ее нет в коде)
// // Переменные можно исп только после их объявления

// // let name;

// // /*
// //  * Переменная name объявлена, но не инициализирована, поэтому
// //  * ее значение undefined (не определено), тогда как переменная age
// //  * не была объявлена, поэтому доступ к ней вызывает ошибку ReferenceError
// //  */
// // console.log(name); // undefined
// // console.log(age); // ReferenceError: age is not defined

// // Попытка обратиться к пременной до ее объявления вызовет ошибку.

// // console.log(a); // ReferenceError: a is not defined
// // let a = 10;
// // console.log(a); // 10

// // // console.log(b); // ReferenceError: b is not defined
// // const b = 15;
// // console.log(b); //15
// // const value = 20.5;

// // const name = 'Mango';

// // const isActive = false;

// // const hasChildNodes = false;

// // const type = typeof value;
// // Строки это просто текст, последовательность из нуля или более символов.
// //  Строка начинается и заканчивается одиночной ', или двойными кавычками ".
// //  Boolean Имеет только два значения: true и false. Имена переменных при этом содержат вопрос, на который
// //  можно отв Да или Нет.
// // const isAuthenticated = true;
// // const canMerge = false;
// // const hasChildren = true;
// // const isModalOpen = false;

// // null - ничто. К примеру если в базе данных не нашли пользователя, то значение null.
// // const guest = null;

// // undefined-переменная не определена

// // typeof- чтобы понять тип элемента(?), нужно ввести typeof и подставить значение
// // const c = 5;
// // console.log(typeof c); // "number"

// // =========взаимодействие с пользователем============
// * Просим клиента подтвердить бронь на отель
// * и сохраняем в переменную результат работы confirm
// */
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// Спрашиваем имя отеля в котором хотел бы остановится клиент
//  * и сохраняем в переменную результат вызова prompt
//  */
// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);

// /*
//  * Важная особенность prompt в том, что не зависимо что ввел пользователь,
//  * всегда вернется строка. Тоесть если пользователь ввел 5, то вернется
//  * не число 5, а строка "5". Об этом необходимо всегда помнить.
//  */
// const value = prompt('Please enter a number!');
// console.log(typeof value); // 'string'
// console.log(value); // '5'

// // const isGoing = confirm('Вы точно летите отдыхать?');

// // console.log(isGoing);

// // const input = prompt('Введите ваше имя');

// // console.log(input);

// // console.log(type);

// // alert(111);

// // console.log('hello');

// // let number = 5;

// // console.log(number);

// // number = 10;

// // console.log(number);

// Математические операторы
// // Операции с числами
// const x = 10;
// const y = 5;

// // Сложение
// console.log(x + y); // 15

// // Вычитание
// console.log(x - y); // 5

// // Умножение
// console.log(x * y); // 50

// // Деление
// console.log(x / y); // 2

// // Остаток от деления
// console.log(x % y); // 0

// // Сложение с заменой (есть и для других операторов)
// let value = 5;
// // Аналогично записи value = value + 10;
// value += 10;
// console.log(value); // 15
// //

// Операторы сравнения
// Используются для сравнения значений. Результатом своего выполнения возвращают були, true или false.

//     a > b и a < b - больше/меньше
//     a >= b и a <= b - больше/меньше или равно
//     a == b - равенство
//     a != b - неравенство
//     a === b - строгое равенство
//     a !== b - строгое неравенство

// const x = 5;
// const y = 10;
// const z = 5;

// console.log('x > y:', x > y); // false
// console.log('x < y:', x < y); // true
// console.log('x < z:', x < z); // false
// console.log('x <= z:', x <= z); // true
// console.log('x === y:', x === y); // false
// console.log('x === z:', x === z); // true
// console.log('x !== y:', x !== y); // true
// console.log('x !== z:', x !== z); // false

// == и ===
// Во всех операциях сравнения использовать только === и !==(строг рав-во и строг нерав-во)

// Приведение к числу
// const valueA = '5';
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // 'number'

// const valueB = 'random string';
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // 'number'
// const a = 788;

// const b = 244;

// const result = a > b;

// console.log(result);

// const min = 10;

// const max = 30;

// const number = 15;

// const isNumberInRange = number > 10;

// const isNumberInRange = number > min && number < max;

// console.log(isNumberInRange);

// ====================================

// let input = prompt('Guess the number from 1 to 10');

// console.log('input перед преобразованием: ', input);

// input = Number(input);

// const isNaN = Number.isNaN(input);

// console.log('input после пребразования: ', input);
// console.log('isNaN?: ', isNaN);

// const isCorrect = input >= 1 && input <= 10;

// console.log(isCorrect);

// // const boxWidtnInPx = '25px';

// Number.parseInt() и Number.parseFloat()
// Методы Number.parseInt(val) и Number.parseFloat(val) преобразуют строку символ за символом, пока
// это возможно.

// // Парсит из строки целое число
// console.log(Number.parseInt('5px')); // 5
// console.log(Number.parseInt('12qwe74')); // 12
// console.log(Number.parseInt('12.46qwe79')); // 12
// console.log(Number.parseInt('qweqwe')); // NaN

// // Парсит из строки дробное число
// console.log(Number.parseFloat('5px')); // 5
// console.log(Number.parseFloat('12qwe74')); // 12
// console.log(Number.parseFloat('12.46qwe79')); // 12.46
// console.log(Number.parseFloat('qweqwe')); // NaN

// // const width = Number.parseInt('25px');

// // console.log(width);

// Проверка на число
// Для проверки на число можно использовать метод Number.isNaN(val). Он проверяет,
// является ли указанное значение NaN или нет. Этот метод отвечает на вопрос "Это Not A Number?",
//  и возвращает:

//     true — если значение val это NaN
//     false — если значение val это не NaN
//     const validNumber = Number('51'); // 51
//     console.log(Number.isNaN(validNumber)); // false

//     const invalidNumber = Number('qweqwe'); // NaN
//     console.log(Number.isNaN(invalidNumber)); // true

//     // Сложение чисел с плавающей точкой
// // console.log(0.2 + 0.1); //0.30000000000000004
// чтобы этого избежать-привести дробные числа к целому
// console.log((0.2 * 10 + 0.1 * 10) / 10);

// В консоли: число черным-строка, синим-число или буль(чтобы не писать typeof)

// Объект Math

// //  Math.floor(num) - возвращает наибольшее целое число, меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа, округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // случайное число от 1 до 10

// Строка-это индексированный набор из нуля или более символов,
// заключенных в одинарные либо двойные кавычки.
// Индексация начинается с нуля
// JAVASCRPT - J-0, A-1, V-3 ...

// Конкатенация строк(сложение)
// console.log(5 + '6'); //56

// console.log('qwe' + 5);//qwe5
// console.log(5 * '6'); //30
// console.log(5 -'qwe'); //NaN
// console.log(5 + 5 + '6'); //106
// как считается: 5+5+'6'=10+'6'='106'

// const firstName = 'Jay';

// const lastName = 'Lux';

// const fullName = firstName + ' ' + lastName;  //-в кавычках-пробел

// console.log(fullName); //JayLux
// Свойства и методы строк

// length - свойство, хранит длину строки
// toLowerCase() и toUpperCase() - вернут новую строку в соответствующем регистре
// indexOf() - вернет позицию (индекс) на которой находится первое совпадение подстроки или -1,
// если ничего не найдено
// includes() - один из наиболее часто используемых методов, в большинстве случаев заменяет indexOf,
// проверяет входит ли подстрока в строку, возвращает true или false

// // обращение к св-вам строки
// const name = 'Mango';
// // console.log(name.length);  //5 - потому что 5 символов в слове

// // обращение к методам строки
// const inLowerCase = name.toLowerCase();
// console.log(inLowerCase);

// метод includes:
// const productTitle = 'Samsung is cool';
// const searchString = 'samS';  //система идет по строке и находит совпадения по порядку букв.
// Если в слове самсунг будет пропущена средняя буква-ничего не найдет. Если будет самс- найдет,
// потому что они по порядку

// Шаблонные строки и интерполяция

// Шаблонные строки это альтернатива конкатенации с более удобным синтаксисом.
// Они заключены в обратные кавычки вместо двойных или одинарных и могут содержать местозаполнители,
// которые обозначаются знаком доллара и фигурными скобками.

// //  шаблонные строки и интерполяция
// const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;

// console.log(sameMessage); // My name is Mango, I'm 2 years old and happy.

// "\" - символ экранирования

// Truthy и Falsy — термины, которые используются для тех значений, которые, в логической операции,
// приводятся к true или false, хотя изначально не были булями.

// 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании:
//  0,
// NaN,
// null,
// undefined,
// пустая строка: "" или '',
// false.
// Абсолютно все остальное приводится к true.

// Логические операторы
// &&
// const min = 10;
// const max = 30;
// const value = 25;

// const isInRange = value > 10 && value < 30; //- операнды слева и справа(10 и 30)должны приводиться к true.
// Если хотя бы один-false - он возвращается
// console.log(isInRange);
// // console.log(1 && 2 && 3 && 4); //если значение приводится к true- то переходит к следующему
// // При появлении false остановка и возврат его системе
// // // console.log(value >= 10);
// OR

// const min = 10;
// const max = 30;
// const value = 50;
// const isInRange = value < 10 || value > 30;
// console.log(isInRange); В отличие от &&, OR запинается на первом true и выводит его

// !true -отрицаниеБ логическое Нет, инверсия

// console.log(!'0'); // строка с нулем- не пустая, приводится к true - инверсия - к false.

// const min = 10;
// const max = 30;
// const value = 50;
// const isInRange = value > 10 && value < 30;
// if (isInRange) {
//     console.log('Number is in range');
// }

// console.log('after if');

// const min = 10;
// const max = 30;
// const value = 25;
// let message;

// const isInRange = value > 10 && value < 30;
// if (isInRange) {
//     message = 'Number is in range';
// } else {
//     message = 'Number not is in range';
// }

// console.log('after if');

// const min = 10;
// const max = 30;
// const value = 125;
// let message;

// if(value < 10) {
//     message = 'Less then 10';
// } else if (value > 20 && value < 50) {
//     message = 'Greater then 20 and less then 50';
// } else if (value > 60 && value < 80) {
//     message = 'Greater then 60 and less then 80'; //else if может быть бесконечное кол-во
// } else {
//     message = ':(';
// }
//  console.log(message); // else ставится в конце, после него не может быть else if

// Область видимости переменных (variable scope) - доступность переменных в определенном месте кода.
// Есть несколько областей видимости: глобальная, блочная, eval и функции.
// const a = 5;
//  if (15 > 10) {
//  console.log(a)
//  const message = 'Hello!';
// }

// console.log(message);
// const value = 6;

// if(true) {
// //A
// console.log(value);

//     if(true) {
// //B
// console.log(value);
//     }
// }
// if(true) {
// //C
// }

// console.log(value);

// Тернарный оператор исп только для того, чтобы по краткому условию запис в переменную какое-то
// значение

// const isActive = true;
// let = message;
// if (isActive) {
// message = 'Active';
// } else {
//     message = 'Inactive';
// }
// вместо этого:
// const message = условие, потом вопрос. Должно прив к тру или фолс
// const message = true ? 'Active' : 'Inactive';
// console.log(message);

// switch

// const TAKEOUT = 0;
// const COURIER = 1;
// const POST = 2;

// const userChoice = 2;
// let message;
// if(userChoice === TAKEOUT) {
//     message = 'Ну и вывози сам, жлоб!';
// } else if (userChoice === COURIER) {
//     message = 'Супер!';
// } else if (userChoice === POST) {
//     message = 'Посылка придет завтра';
// } else {
//     message = 'ничего не выбрано';
// }
// console.log(message);

// const TAKEOUT = 0;
// const COURIER = 1;
// const POST = 2;

// const userChoice = 2;
// let message;

// switch (userChoice) {
//   case TAKEOUT:
//     message = "Ну и вывози сам, жлоб!";
//     break;

//   case COURIER:
//     message = "Супер!";
//     break;

//   case POST:
//     message = "Посылка придет завтра";
//     break;

//     default:
//     message = 'ничего не выбрано';
// }

// console.log(message);

// ==============МОДУЛЬ2==================
// Массив-набор ячеек памяти для хранения информации о клиентах, товарах и тд
// const product = 'apples';

// const products = ['apples', 'grapes', 'bananas'];  //синтаксис массива
// индекс массива всегда начинается с нуля. Яблоко-0, виноград-1, бананы-2.

// console.log(products[2]); //bananas

// можно менять элементы:
// products[0] = 'chicken';

// console.log(products); //Array(3) [ "chicken", "grapes", "bananas" ]
// или:

// products[0] = '5';
// console.log(products); //Array(3) [ "5", "grapes", "bananas" ]

// products[0] = '5';
// products[1] = '10';
// products[2] = '15';
// console.log(products); //Array(3) [ "5", "10", "15" ]

// products[0] = 'chicken';
// console.log(products.length); //3 - получаем длину массива

// МНОГОМЕРНЫЕ МАССИВЫ (массив в массиве)

// const board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(board[0]); //Array(3) [ 1, 2, 3 ] -получаем доступ к эл-ту 1,2,3

// const board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(board[0][2]); //3 - третий эл-т в списке массива, по порядку - 0, 1, 2

// Присвоение по ссылке и по значению

// const a = [1, 2, 3];

// const b = [1, 2, 3];

// console.log(a === b); //false - потому что эти 2 массива созданы в разных адресах памяти
// // и они не равны(сложные типы)

// console.log(5 === 5); //true

// примитивные типы:
// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// Сложные типы - объекты, массивы, функции присваиваются по ссылке,
// то есть переменная просто получает ссылку на уже существующий объект.

// const a = ['Mango'];
// // Присвоение по ссылке.
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ['Mango']
// console.log(b); // ['Mango']

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push('Poly');
// console.log(a); // ['Mango', 'Poly']

// // b изменилось тоже, потому что b, как и a,
// // просто содержат ссылку на одино и то же место в памяти
// console.log(b); // ['Mango', 'Poly']

// // Результат повторяется
// b.push('Ajax');
// console.log(a); // ['Mango', 'Poly', 'Ajax']
// console.log(b); // ['Mango', 'Poly', 'Ajax']

// массив- всегда конст

// const products = ['apples', 'grapes', 'bananas'];
// // //найти самое длинное слово в строке/split

// const message = 'Lorem ipsums dolor sit';

// console.log(message);

// const words = message.split(' ') //строка с пробелом

// console.log(words);//Array(4) [ "Lorem", "ipsums", "dolor", "sit" ]

// const snakeCaseMessage = words.join('_'); //присоединение нижнего подчеркивания

// console.log(snakeCaseMessage); //Lorem_ipsums_dolor_sit

// const indexOfApples = products.indexOf('apples');

// const isInProducts = products.includes('apples') //метод инклудс возвращает буль- тру или фолс

// console.log(isInProducts);//true

// includes- чтобы проверить, есть ли такой эл-т в коллекции

// const users = ['Mango', 'Ajax', 'Poly'];
// const login = prompt('Enter login');

// const isRegisered = users.includes(login);

// if (isRegistered) {
//     console.log('Welcome');
// } else {
//     console.log('Wrong login');
// }

// push-добавить что-то в конец массива
// const numbers = [1, 2, 3];

// // numbers.push(4);
// // numbers.push(5);
// // numbers.push(6);
// // numbers.push(7);
// //  или:
// numbers.push(4, 5, 6, 7); //добавлять сразу несколько массивов
// console.log(numbers);//Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]

// рор-удаляет из массива крайний правый эл-т
// const numbers = [1, 2, 3];
// numbers.push(4, 5, 6, 7);
// numbers.pop();
// numbers.pop();
// console.log(numbers);//Array(6) [ 1, 2, 3, 4, 5, ]

// shift(), unshift()делают все то же самое, что  push(), pop() только с началом массива

// slice - делает копию части или всего массива

// Array.slice(begin, end)- // синтаксис. В скобки записываются индексы, до какого фрагмента копировать

// const numbers = [1,2,3,4,5];
// const copy = numbers.slice(1, 3);
// console.log(copy); //Array [ 2, 3 ]

// splice-копирует массивы, изменяя оригинал

// const cards = ["card-1", "card-2", "card-3", "card-4"];

// cards.splice(1, 2); //из первого массива удалить 2 штуки

// console.log(cards); //Array [ "card-1", "card-4" ]

// ========================МОДУЛЬ 4========================

// const product = {
//   name: "Wunder Waffles",  //в названии (нейм) не исп тире(иначе невалидный ключ и нужны кавычки)Или кемелКейс.
//   description: 'Lorem ipsum',
//   price: 30,
// };

// const key = 'price';
// console.log(product.price);  //или:
// console.log(product[key]);
// console.log(product.name); //или (product.price)
//ключ:значение

// const name = 'Apples';
// const price = 50;

// const makeProduct = (name,price) => {
//     return {
//         name: name,
//         price: price,
//     };
// };

// console.log(makeProduct('Apples',50));
// или сокращенно: Shorthand properties

// const makeProduct = (name,price) => {
//     return {
//          name,
//          price,
//     };
// };
// console.log(makeProduct('Apples',50));


// const product = {
//       name: "Wunder Waffles", 
//       description: 'Lorem ipsum',
//       price: 30,
//       changePrice(newPrice) {
//           console.log('this: ', this);
//           this.price = newPrice;
//       }
//     };

//     product.changePrice(100);
//     console.log(product.price);

// const storage = {
//     items: [
//         { id: 'id-1', name: 'apples', price: 30 },
//         { id: 'id-2', name: 'grapes', price: 40 },
//     ],
//     getItems() {
//         return this.items;
//     },
//     addProduct(product) {
//         this.items.push(product);
//     },
// };

// console.table(storage.getItems());

// storage.addProduct({ id: 'id-3', name: 'carrots', price: 20 });

// console.table(storage.getItems());    

// перебор объектов , цикл for...in

// const product = {
//     name: 'waffles',
//     price: 50,
//     quantity: 20,
// };

// for (const key in product) {
//     console.log(`key: ${key}, value: ${product[key]}`);  //key: name, value: waffles
//                                                         // key: price, value: 50
//                                                         // key: quantity, value: 20

// }

//spread- Если троеточие стоит справа от = или во вромя передачи док-тов (разбивает на отд эл-ты)
// rest- если троеточие стоит слева от = или в парам. ф-и (собирает эл-ты)

// const { a, ...b } = { a: 1, b: 2, c: 3 };

// const x = {
//     y: 5,
//     ...{ g: 6, i: 9 },
// };

// const fn = function(...rest) {};

// fn(...[1, 2, 3, 4, 5]);

// Деструктуризация-сокращает написание свойств исключая точки

// const { name, room, type } = {
//     name: 'Mango',
//     room: 24,
//     type: 'vip',
// };

// const message = `Гость ${name} прибывает как ${type} в комнату ${room}`;

// console.log(message); //Гость Mango прибывает как vip в комнату 24

// const profile = {
//     name: 'Mango',
//     email: 'mango@gmail.com',
//     address: {
//         city: 'Zimbabwe',
//         country: 'Ukraine',
//         street: 'Some street',
//     },
// };

// const {
//     name,
//     email,
//     address: { city, country, street },
// } = profile;

// console.log(city);




// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   for (const key in hotel) {
//     console.log('Value: ', hotel[key]);
//   }


// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}

// // То же самое используя операцию spread
// const d = { ...a, ...b };

// console.log(d); // {x: 0, y: 2, z: 3}

// Шаблонная строка записывается в ``

<script type="text/javascript" src="./task1.js"></script>
<script type="text/javascript" src="./task2.js"></script> 
<script type="text/javascript" src="./task3.js"></script> 
<script type="text/javascript" src="./task4.js"></script>   
<script type="text/javascript" src="./task5.js"></script>
<script type="text/javascript" src="./task6.js"></script> 
<script type="text/javascript"> 
</script>  