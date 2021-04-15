// 1) створити функцію яка приймає масив та виводить його
// function myArray(arr) {
//     console.log(arr);
// }
// myArray([7, 14, 84]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його.
//Для виведення використати попередню функцію.
// function myArray(y) {
//     y();
// }
//
// function randomNum() {
// let arr = [];
// arr.push(Math.floor(Math.random() * 100));
// arr.push(Math.floor(Math.random() * 100));
// arr.push(Math.floor(Math.random() * 100));
//     console.log(arr);
// }
// myArray(randomNum);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minimise (x, y, z) {
//     if (x < y && x < z) {
//         console.log(x);
//     }
//      else if (y < x && y < z) {
//         console.log(y);
//     }
//      else if (z < x && z < y) {
//          console.log(z);
//     }
//  }
// minimise (6, 9, 7);

// 4) створити функцію яка приймає три числа та виводить найбільше.
// function maximise (a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     }
//     else if (b > a && b > c) {
//         console.log(b);
//     }
//     else if (c > a && c > b) {
//         console.log(c);
//     }
// }
// maximise(3, -1, 4);

// 5) створити функцію яка повертає найбільше число з масиву
// function maximise (arr) {
//     let max = arr[0];
//     for (let item of arr) {
//         if (item > max) {
//             max = item;
//         }
//     }
//     console.log(max);
// }
// maximise ([17, 12, 5]);

// 6) створити функцію яка повертає найменьше число з масиву
// function minimise(arr) {
//     let min = arr[0];
//     for (let item of arr) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     console.log(min);
// }
// minimise([4, 16, 137]);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function innerAdd(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let result = innerAdd([2, 4, 5]);
// console.log(result);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function findAverage(arr) {
//     let average = 0;
//     for (let i = 0; i < arr.length; i++) {
//         average  += arr[i];
//     }
//     return average / arr.length;
//  }
//  let averageNum = findAverage([3, 4, 5]);
// console.log(averageNum);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// const  gArr = [
//     {
//         make: 'Martin',
//         model: 'om-28',
//         color: 'blue'
//     },
//     {
//         scale: 25.5,
//         frets: 21
//     }
// ];
//
// function store(item) {
//     let arr = [];
//     for (let i = 0; i < item.length; i++) {
//       for (let property in item[i]) {
//           arr.push(property);
//       }
//     }
//     return arr;
//
// }
// let result = store(gArr);
// console.log(result);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// const  gArr = [
//     {
//         make: 'Martin',
//         model: 'om-28',
//         color: 'blue'
//     },
//     {
//         scale: 25.5,
//         frets: 21
//     }
// ];
// function store(item) {
//     let arr = [];
//     for (let obj of item ) {
//         for (let val in obj ) {
//             arr.push(obj[val]);
//         }
//     }
//     return arr;
//
// }
// let result = store(gArr);
// console.log(result);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// function combineArr(a, b) {
//     let arr = [];
//     for (let i = 0; i < Math.max(a.length, b.length); i++) {
//         arr.push(a[i] + b[i]);
//     }
//     return arr;
// }
// let result = combineArr(arr1, arr2);
// console.log(result);


// 13)- Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
// Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// const gArr = [
//     {
//         make: 'Martin',
//         model: 'om-28',
//         color: 'blue'
//     },
//     {
//         scale: 25.5,
//         frets: 21
//     }
// ];
//
// function store(arr1, arr2) {
//     let arr = [];
//     if (arr2)
//         for (let obj of arr1) {
//             for (let val in obj) {
//                 arr.push(obj[val]);
//             }
//         } else {
//         for (let i = 0; i < arr1.length; i++) {
//             for (let property in arr1[i]) {
//                 arr.push(property);
//             }
//         }
//     }
//     return arr;
// }
//
// console.log(store(gArr, true));

// 15) Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]
// let mixedArr1 = [1,0,6,0,3];
// let mixedArr2 = [0,1,2,3,4];
// let mixedArr3 =  [0,0,1,0];
//
// function adjustArr(arr) {
//     let zeroArr = [];
//     let numArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             zeroArr.push(arr[i]);
//         }else {
//             numArr.push(arr[i]);
//         }
//     }
//     return numArr.concat(zeroArr);
// }
//
// let result1 = adjustArr(mixedArr1);
// let result2 = adjustArr(mixedArr2);
// let result3 = adjustArr(mixedArr3);
// console.log(result1, result2, result3);

// 16)- Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//***************вирішення - Юрій Бєлих***********************************
// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
//
// function adjustStr(str) {
//    return str
//    .split(' ')
//    .filter(x => {
//        if(x.length > 0) {
//            return true;
//
//        }
//    })
//    .join(' ');
// }
//
// console.log(adjustStr(n1));
// console.log(adjustStr(n2));
// console.log(adjustStr(n3));


// 17)// Створити функцію яка :
// Додає в боді блок з текстом "Hello owu"
// function createBlock() {
//     let block = document.createElement('div');
//     block.style.backgroundColor = 'darkorange';
//     block.textContent = 'Hello owu'
//     document.body.appendChild(block);
// }
// createBlock();

// 18)- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// let tag = 'p';
// let content = 'Hello owu';
// function createBlock() {
//     let pageBlock = document.createElement(tag);
//     pageBlock.style.backgroundColor = "dodgerblue";
//     pageBlock.textContent = (content);
//     document.body.appendChild(pageBlock);
// }
// createBlock(tag, content);
//
//








