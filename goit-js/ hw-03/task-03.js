

const findBestEmployee = employees => {
  let bestValue = 0;
  let result = "";
  for (const key in employees) {
    // console.log(key, employees[key])

    if (bestValue < employees[key]) {
      bestValue = employees[key];
      result = key;
    }
  }

  return result;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
