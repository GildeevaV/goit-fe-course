import "/task-04.js";

const countTotalSalary = employees => {
  let totalSalary = 0;
  let result = "";
  for (const key in employees) {
    console.log(key, employees[key]);

    if (totalSalary < employees[key]) {
      totalSalary = employees[key];
      result = key;
    }
  }

  return result;
};

//   console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
