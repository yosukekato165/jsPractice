// ?? NullishCoalescingOperator
// ?? null または undefined でなければ Truthy な値を返す

const ZERO = 0;
const ONE = 1;

// console 1
console.log(null ?? ONE);

// console 1
console.log(undefined ?? ONE);

// console 0
console.log(ZERO ?? ONE);

// console 0
console.log(ZERO ?? null);

// console {}
console.log({} ?? null);
