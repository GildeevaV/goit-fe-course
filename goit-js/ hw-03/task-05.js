import "/task-05.js";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const getAllPropValues = function(arr, prop) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let currentObject = arr[i];
    if (currentObject[prop]) {
      result.push(currentObject[prop]);
    }
  }
  return result;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
