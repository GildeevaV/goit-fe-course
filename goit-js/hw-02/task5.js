"use strict";

const checkForSpam = function(str) {
  let lowerStr = str.toLowerCase();

  // const rez = string;

  return lowerStr.includes("spam") || lowerStr.includes("sale");
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
