"use strict";

const logItems = function(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(i + 1, " - ", names[i]);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
