- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
 Вывести каждую при помощи console.log , alert, document.write
let greeting = 'hello';
console.log(greeting);
alert(greeting);
document.write(greeting);

let school = 'owu';
console.log(school);
alert(school);
document.write(school);

let domain = 'com';
console.log(domain);
alert(domain);
document.write(domain);

let domainLocal = 'ua';
console.log(domainLocal);
alert(domainLocal);
document.write(domainLocal);

let integer = 1;
console.log(integer);
alert(integer);
document.wite(integer);

let decimaNumber = 10;
console.log(decimaNumber);
alert(decimaNumber);
document.write(decimaNumber);

let negativeNumber = -999;
console.log(negativeNumber);
alert(negativeNumber);
document.write(negativeNumber);

let sequentNumber = 123;
console.log(sequentNumber);
alert(sequentNumber);
document.write(sequentNumber);

let pi = 3.14;
console.log(pi);
alert(pi);
document.write(pi);

let floatNumber = 2.7;
console.log(floatNumber);
alert(floatNumber);
document.write(floatNumber);

let age = 16;
console.log(age);
alert(age);
document.write(age);

let isHuman = true;
console.log(isHuman);
alert(isHuman);
document.write(isHuman);

let isDoctor = false;
console.log(isDoctor);
alert(isDoctor);
document.write(isDoctor);

 - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
greeting = 'good morning';
console.log(greeting);
alert(greeting);
document.write(greeting);

school = 'berklee';
console.log(school);
alert(school);
document.write(school);

domain = 'org';
console.log(domain);
alert(domain);
document.write(domain);

domainLocal = 'org.ua';
console.log(domainLocal);
alert(domainLocal);
document.write(domainLocal);

integer = 2;
console.log(integer);
alert(integer);
document.wite(integer);

decimaNumber = 20;
console.log(decimaNumber);
alert(decimaNumber);
document.write(decimaNumber);

negativeNumber = -444;
console.log(negativeNumber);
alert(negativeNumber);
document.write(negativeNumber);

sequentNumber = 456;
console.log(sequentNumber);
alert(sequentNumber);
document.write(sequentNumber);

pi = 'math const';
console.log(pi);
alert(pi);
document.write(pi);

floatNumber = 2.8;
console.log(floatNumber);
alert(floatNumber);
document.write(floatNumber);

age = 61;
console.log(age);
alert(age);
document.write(age);

isHuman = false;
console.log(isHuman);
alert(isHuman);
document.write(isHuman);

isDoctor = true;
console.log(isHuman);
alert(isHuman);
document.write(isHuman);

 - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const amount = 411;
const weight = 80;
const height = 1.79;
console.log(amount, weight, height);
alert(amount);
alert(weight);
alert(height);
document.write(amount + ' ' + weight + ' ' + height);

const phrase = 'stick around';
const cousin = 'Bill';
const aunt = 'Sarah';
console.log(phrase, cousin, aunt);
alert(phrase);
alert(cousin);
alert(aunt);
document.write(`${phrase} ${cousin} ${aunt}`);

 - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные.
 Вывести каждую при помощи console.log , alert, document.write
let lastName = prompt('what is your last name?');
let name = prompt('what is your name?');
let secondName = prompt('what is your second name?');
 console.log(lastName, name, secondName);
 alert('Hi, ' + lastName + ' ' + name + ' ' + secondName + ' nice to meet you!');
 document.write(`Hi ${lastName} ${name} ${secondName} nice to meet you! `);

- Взять переменные из задания 4 и сконкатенировать их в одной переменной person
let person = `${lastName} ${name} ${secondName}`;
alert(person + ' you are under arrest');

 - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи
let motherName = prompt('Hi mum,type your name here');
let fatherName = prompt('Hi daddy, type your name into this **c*ing input');
let brotherName = prompt('Hey bro, you know what to do');
let myFamily =`${motherName} ${fatherName} and ${brotherName}`;
alert('My family is ' + myFamily);

 - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
let x = prompt('type a number');
let y = prompt('type a number');
let sum = Number(x) + Number(y);
console.log(sum);

 - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let myNumb1 = prompt('type a number');
let myNumb2 = prompt('type a number again');
let myNumb3 = prompt('type a number again');
let myNumb4 = prompt('once more, please');
let result = parseInt(myNumb1) + parseInt(myNumb2) + parseInt(myNumb3) + parseInt(myNumb4);
console.log(result);

 - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
 Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let normTemperature = prompt('what is the normal body temperature');
let earthAxis = prompt('what is the angle of the earth\'s axis');
let poundUnit = prompt('define pound in Si based units');
let result2 = parseFloat(normTemperature) + parseFloat(earthAxis) + parseFloat(poundUnit);
console.log(result2);

 - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round
 Сложить их между собой записав результат в переменную  и вывести в консоль браузера
let guess1 = prompt('type a float number');
let guess2 = prompt('type a float number');
let guess3 = prompt('type a float number');
let result = Math.round(guess1) + Math.round(guess2) + Math.round(guess3);
console.log(result);

 - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень.
 Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
let obtainNum1 = prompt('type an integer number');
let obtainNum2 = prompt('type an integer number');
console.log(Math.pow(obtainNum1, obtainNum2));

 - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
let a = 100;
let b = '100';
let c = true;
let d = undefined;
console.log(typeof a, typeof b, typeof c, typeof d);

- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
В одинаковых выражениях в задании не использовать два одинаковых оператора.
    Каждое выражение вложить в свою переменную
let compare1 = 5 < 6; -> true
let compare2 = 5 > 6; ->  false
let compare3 = 5 === 6; -> false
let compare4 = 5 >= 6; -> false
let compare5 = 10 === 10; ->true
let compare6 = 10 === 10; -> true
let compare7 = 10 !== 10; -> false
let compare8 = 10 > 10; -> false
let compare9 = 10 < 10; -> false
let compare10 = 123 === '123'; -> false
let compare11 = 123 == '123'; -> true

Дополнительно:
    - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
console.log(132 > 100 && 45 < 12 );                                false
console.log(34 > 33 && 23 < 90 );                                  true
console.log(99 > 100 && 45 > 12 );                                 false
console.log(132 > 100 || 45 < 12 );                                true
console.log(111 > 11 || 45 < 111 );                                true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );    true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );     true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );  false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));     true
console.log(!!'-1');                                               true
console.log(!!-1);                                                 true
console.log(!!'0');                                                true
console.log(!!'null');                                             true
console.log(!!'undefined');                                        true
console.log(!!(3/'owu'));                                          false
console.log((111 > 11 || 45 < 111) ||  !!'0');                     true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));false
