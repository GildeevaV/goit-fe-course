const countTotalSalary = employees => {
  let totalSalary = 0;
  for (const key in employees) {
    console.log("Value: ", employees[key], key);

    totalSalary = totalSalary + employees[key];
  }
  return totalSalary;
};

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
