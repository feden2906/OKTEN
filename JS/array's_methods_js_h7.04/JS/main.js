// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
//     b) відсортувати його від більшого до меншого.
//     c) Відфілтрувати числа які є кратними 3.
// d) Відфілтрувати числа які є більшими за 10.
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
// a)
// const numArr = [18, 4, 36, 43, 0, -1, 10, 2, 44, 1, 11, 7, 99, 101, 5, 16, 17, 9, 3, 20];
// let ascending = numArr.sort((a, b) => a - b );
// console.log(ascending);
// b)
// let descending = numArr.sort((a, b) => b - a );
// console.log(descending);
// c)
// let filteredArr = numArr.filter(number => {
//     if (number % 3 === 0){
//         return number;
//     }
// });
// console.log(filteredArr);
//d)
// let higherTen = numArr.filter(number => number > 10);
// console.log(higherTen);
//e)
// let higherTen = numArr.filter(number => number > 10).forEach(item => document.write(`output: ${item} <br>`));
//f)
// let increasedArr = numArr.map(number => number * 3);
// console.log(increasedArr);
//g)
// let sum = numArr.reduce((acc, currentValue) => acc + currentValue);
// console.log(sum);

// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
// b) Відсортувати в зворотньому порядку
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let strings = ['if', 'we', 'want', 'to', 'assign', 'some', 'of', 'the', 'array', 'to', 'variables', 'and', 'the', 'rest', 'of', 'the', 'items', 'in', 'an', 'array'];
//a)
// let newStrings = strings.sort();
// console.log(newStrings);
//b)
// let backwardStrings = strings.sort((a, b) => {
//     if (a < b) {
//         return 1;
//     }
//     if (a > b) {
//         return -1;
//     }
// });
// console.log(backwardStrings);
//c)
// let upFour = strings.filter(element => {
//    if (element.length > 4) {
//        return element;
//    }
// });
// console.log(upFour);
// let sam = strings.map(word => `Sam says: ${word}`);
// console.log(sam);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
//a)
// let ascUsers  = users.sort((a, b) => {
//     let c = a.age;
//     let d = b.age;
//     return  c - d;
// });
// console.log(ascUsers);
// let descUsers  = users.sort((a, b) => {
//     let c = a.age;
//     let d = b.age;
//     return  d - c;
// });
// console.log(descUsers);
// b)
// let ascLetters  = users.sort((a, b) => {
//     let c = a.name.length;
//     let d = b.name.length;
//     if (c > d) {
//         return 1;
//     }
//     if (c < d) {
//         return -1;
//     }
//     return 0;
// });
// console.log(ascLetters);
// let descLetters  = users.sort((a, b) => {
//     let c = a.name.length;
//     let d = b.name.length;
//     if (c < d) {
//         return 1;
//     }
//     if (c > d) {
//         return -1;
//     }
//     return 0;
// });
// console.log(descLetters);
// //c)*****this particular case is a solution by Юрій Бєлих*************************
// let usersWithId = users.map((obj, index) => {
//     return {...obj, id: index + 1};
// });
// console.log(usersWithId);
// d)- the method used above,solves this problem as well.
// let sortedById = usersWithId;
// console.log(sortedById);
// e)
// let onlyMarried = [...users].reduce((acc, user) => {
//     console.log(acc);
//     console.log(user);
//     console.log('___________________________________')
//     if (user.isMarried) {
//         acc.push({...user, flat: true});
//     }
//     return acc;
// }, []);
// console.log(onlyMarried);



