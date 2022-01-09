// Object

// 空のオブジェクトは undefined でも null でもなく object であり、
// Truthy な値である
// console object
console.log(typeof {});

const numberObject = {
  zero: 0,
  one: 1,
  two: 2,
  arrayNumber: ["零", "壱", "弐"],
};

// オブジェクトのプロパティにアクセスする記法
// console 0
console.log(numberObject.zero);

console.log(numberObject.arrayNumber[1]);

const newNumberObject = { ...numberObject, three: 3 };

console.log(newNumberObject);
console.log(numberObject);

const complexObject = {
  numberArray: [
    { arabic: 0, japanese: "零", roman: undefined },
    { arabic: 1, japanese: "壱", roman: "I" },
    { arabic: 0, japanese: "弐", roman: "II" },
  ],
};

console.log(complexObject.numberArray[1].japanese);

const romanNumber = complexObject.numberArray.map((e) => e.roman);

console.log(romanNumber);
