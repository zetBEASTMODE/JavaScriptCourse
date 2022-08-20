"use strict";

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage("Hello world");


/* function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 10)); */

function ret() {
    let num = 50;
    return num;
}

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => a + b;

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); //определить с какого символа начинается

const logg = "Hello world";

console.log(logg.slice(1, 5)); //вырезать определнный кусок из строки (работают отриц значения)

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));


const num = 12.2;

console.log(Math.round(num)); //округляет число

const test = "12.2px";
console.log(parseInt(test)); //переводит в другую систему исчиления с округлением
console.log(parseFloat(test)); //переводит в другую систему исчиления без округления