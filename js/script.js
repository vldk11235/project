"use strict";

console.log('arr' + " - object");
console.log(4 + "5");

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5 % 2);

console.log(2 + 2 * 2  != 8);



const isChecked = false,
    isClose = false;
console.log(isChecked || !isClose);

const arr = ['a', 'b', 'c'];
const arrObj = {
    a: 'a',
    1: 'b',
    2: 'c',
    abc: {

    }
};

arrObj.b = '1234';

console.log(arrObj.b);

// const obj = { a: 1, b: 2 };

const obj = {
    'Anna': 500,
    'Alice': 800
};