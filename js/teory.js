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


function learnJS (lang, callback) {  //callback функция, код не начнет исполнение, до того момента пока другой код не завершит свое исполнение.
    console.log(`Я учу: ${lang}`);
    callback();
}
learnJS('Javascript', function(){
    console.log("Я прошел тот урок")
});

// Объекты

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors; //Деструктуризация вложенности
console.log(border);

//console.log(Object.keys(options).length); //определить кол-во свойств в массиве

console.log(options.name);

//delete options.name;  //можно удалить свойство из объекта

console.log(options);


let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        } 
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }   //можно перебрать все свойства объекта
}
console.log(counter); 

//Массивы и псевдомассивы

const arr = [1, 2, 3, 6, 8];

arr.forEach(function(item, i, arr) { //перебирать элементы массива 
    console.log(`${i}: ${item} внутри массива ${arr} `);
});

arr.pop();  //удалить посл элемент массива
arr.push(10); //добавить посл элемент массива

console.log(arr);  

for (let i = 0; i < arr.length; i++) {   //перебрать массив
    console.log(arr[i]);
}

for (let value of arr) {   //перебрать массив
    console.log(value);
}

const str = prompt("", "");   //из строки сделать массив
const products = str.split(", ");
console.log(products.join('; '));

const 