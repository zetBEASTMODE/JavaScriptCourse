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

arr.sort(compareNum);  //числа по порядку
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

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
products.sort();   //сортирует по порядку (если числа то по первому числу)
console.log(products.join('; ')); //из массива в строки


const obj = {
    a: 5,
    b: 1
};

const copy = obj; //в переменную кладется ссылка на существующий объект

copy.a = 10; //модифицируем изначальный объект obj (передача по ссылке)

console.log(copy);
console.log(obj);

function copyy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key]; //поверхностная копия объектов
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;  //

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign({}, add)); //независимая поверхностная копия объекта

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //позволяет скопировать старый массив

newArray[1] = 'adadsdasds';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; //оператор разворота (spread)

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const numm = [2, 5, 7];

log(...numm);

const array = ["a", "b"];

const newAarray = [...array]; // создание поверхностной копии

const q = {
    one: 1,
    two: 2
};

const newObj = {
    ...q
};

console.log(newObj);
