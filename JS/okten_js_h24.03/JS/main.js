--створити масив та вивести його в консоль:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let numArr = [23, 03, 19, 11];
console.log(numArr);
let strArr = ['what', 'a', 'wonderful', 'world', '!'];
console.log(strArr);
let mixedArr = ['take', 5, true, 'false', -1];
console.log(mixedArr);
let genres = [];
genres[0] = 'Rock';
genres[1] = 'Pop';
genres[2] = 'Jazz';
genres[3] = 'Ambient';
console.log(genres);

- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let colors = [
    'red',
    'blue',
    'green ',
    'yellow',
    'purple',
    'cian',
    'brown',
    'orange',
    'aqua',
    'crimson'
];
for (let i = 0; i < colors.length; i++) {
    document.write(`<div>${colors[i]}</div>`);
}

- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let randWords = [
    'day',
    'night',
    'plural',
    'town',
    'horn',
    'tape',
    'scale',
    'depth',
    'outfall',
    'backstage'
];
for (let i = 0; i < randWords.length; i++) {
   document.write(`<div> ${randWords[i]} <br> ${i}</div>`);
}
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині
let newRandom = [
    'expression',
    'that',
    'makes',
    'it',
    'possible',
    'to',
    'unpack',
    'values',
    'from',
    'arrays',
    'scoops',
    'is',
    'zero',
    'and',
    'so',
    'our',
    'conditional',
    'returns',
    'false',
    'dot'
];
let i = 0;
while (i < newRandom.length) {
    document.write(`<h1> ${newRandom[i]} </h1>`);
    i++;
}

- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let _random = [
    'First',
    'we',
    'will',
    'discuss',
    'the',
    'destructuring',
    'assignment',
    'with',
    'arrays',
    'Then',
    'we',
    'will',
    'move',
    'on',
    'to',
    'object',
    'destructuring',
    'Let us',
    'get',
    'started'
];
let i = 0;
while (i < _random.length) {
    document.write(`<h1> ${_random[i]} ${i} </h1>`);
    i = i + 1;
}

- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let tenNum = [
    1,
    2,
    21,
    12,
    34,
    543,
    99,
    77,
    33,
    11
];
for (item of tenNum) {
    console.log(item);
}

- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strTen = [
    'Earth',
    'is',
    'the',
    'third',
    'planet',
    'from',
    'the',
    'Sun',
    'and',
    'life'
];
for (item of strTen) {
    console.log(item);
}

Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let anyRandom = [
    'tree',
    3,
    false,
    'autumn',
    -14,
    'winter',
    'cold',
    true,
    true,
    'summer'
];
for (xxx of anyRandom) {
    console.log(xxx);
}

Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let _anyType = [
    false,
    true,
    11,
    'tree',
    -111,
    'endless',
    'force',
    19,
    false,
    true,
    'boolean'
];
for (let i = 0; i < _anyType.length; i++) {
    if (typeof _anyType[i] === 'boolean') {
        console.log(_anyType[i]);
    }
}
for (let i = _anyType.length-1; i >= 0; i--) {
    if (typeof _anyType[i] === 'number') {
        console.log(_anyType[i]);
    }
}
for (element of _anyType) {
    if (typeof element === 'string') {
        console.log(element);
    }
}

- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
Вивести в консоль всі його елементи в циклі.
let pushedArr = [];
pushedArr[0] = 'joke';
pushedArr[1] = 11;
pushedArr[2] = false;
pushedArr[3] = 'triangle';
pushedArr[4] = true;
pushedArr[5] = 'good';
pushedArr[6] = 198;
pushedArr[7] = 204;
pushedArr[8] = 'empty';
pushedArr[9] = 'imply';
for (let i = 0; i < pushedArr.length; i++) {
    console.log(pushedArr[i]);
}

- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++){
    document.write(i);
    console.log(i);
}

- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 100; i > 0; i-- ) {
    // document.write(i + '<br>');
    console.log(i);

- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.writ
for (let i = 0; i < 200; i += 2) {
    document.write(i);
    console.log(i);
}
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
       console.log(i);
       document.write(`<p style="text-align: center;"> - ${i} </p>`);
    }

}
document.write('➜ there are a bunch of even numbers');

- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(`<p style="text-align: center;"> - ${i} </p>`);
    }

}
document.write('➜ there are a bunch of even numbers');

- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let m = 0; m < 3; m++) {
    for (let s =0; s < 60; s++) {
        if (m == 2 && s == 0) {
            break;
        }
        console.log(`it's ${m} m ${s} s`);
    }
}

for (let m = 2; m >= 0; m-- ) {
    for(let s = 59; s >= 0; s--) {
        console.log(`oh it's ${m} m ${s} s`);
    }
}

- Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for (let h = 0; h < 2; h++) {
    for (let m = 0; m < 60; m++) {
        for (let s = 0; s < 60; s++) {
            console.log(`it's ${h} h ${m} m ${s} s `);
        }
    }
}

- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let outputString = ' ';
let letters = ['a', 'b', 'c'];
for (let i = letters.length - 1; i >= 0; i--) {
   outputString += letters[i];
}
console.log(outputString);

- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let alfaBeta = ['a', 'b', 'c'];
let outStr = '';
let i = 0;
while (i < alfaBeta.length) {
    outStr += alfaBeta[i];
    i++;
}
console.log(outStr);