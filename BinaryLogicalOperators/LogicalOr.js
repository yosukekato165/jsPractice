// || Logical OR
// || または
const ZERO = 0;
const ONE = 1;
const TWO = 2;

// true === Truthy || Truthy
console.log(ONE > ZERO || TWO > ZERO);

// true === Falsy || Truthy
console.log(ZERO > ZERO || ONE > ZERO);

// true === Truthy || Falsy
console.log(ONE > ZERO || ZERO > ZERO);

// false === Falsy || Falsy
console.log(ZERO > ZERO || ZERO > ZERO);
