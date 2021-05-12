// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
// b) отримує текст з блоку з id "rules"
// c) замініть текст параграфа з id 'content' на будь-який інший
// d) замініть текст параграфа з id 'rules' на будь-який інший
// e) змініть кожному елементу колір фону на червоний
// f) змініть кожному елементу колір тексту на синій
// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// h) отримати всі елементи з класом fc_rules
// i) поміняти колір тексту у всіх елементів fc_rules на червоний.
//
// a)
// const obtain = document.getElementById('content');
// const showText = obtain.textContent;//We've got our text
// alert(showText);
// b)
// const _obtain = document.getElementById('rules').innerText;
// alert(_obtain);
// c)
// const obtain = document.getElementById('content');
// obtain.style.fontSize = '24px';
// const textChange = obtain.textContent  = 'I have nothing to say';
// d)
// const _obtain = document.getElementById('rules').innerText =
//     'Why does html content in russian again? Why not in Chinese for instance?';
// e)
// const obtain = document.getElementById('content');
// obtain.style.fontSize = '24px';
// obtain.style.backgroundColor = 'crimson';
// const textChange = obtain.textContent = 'I have nothing to say';
//
// const _obtain = document.getElementById('rules');
// _obtain.style.fontSize = '32px';
// _obtain.style.backgroundColor = 'firebrick';
// const anotherText = _obtain.innerText = 'Why does html content in russian again? Why not in Chinese for instance?';
// f)
// const obtain = document.getElementById('content');
// obtain.style.fontSize = '24px';
// obtain.style.backgroundColor = 'crimson';
// obtain.style.color = 'darkblue';
// const textChange = obtain.textContent = 'I have nothing to say';
//
// const _obtain = document.getElementById('rules');
// _obtain.style.fontSize = '32px';
// _obtain.style.backgroundColor = 'firebrick';
// _obtain.style.color = 'blue';
// const anotherText = _obtain.innerText = 'Why does html content in russian again? Why not in Chinese for instance?';
// g)
// let classL = document.getElementById('rules').classList;
// console.log(classL);
// //h)
// let $rules = document.getElementsByClassName('fc_rules');
// console.log($rules);
// i)
// for (item of $rules) {
//     item.style.backgroundColor = 'red';
// }
//
// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовског о клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
// for (let i = 0; i < rules.length; i++) {
//     const $rule  = document.createElement('div');
//     $rule.style.textAlign = 'center';
//     $rule.style.backgroundColor = 'seagreen';
//     $rule.style.padding = '10px';
//     $rule.style.outline = '2px solid slateblue';
//     $rule.textContent = `${rules[i].title} :  ${rules[i].body}`;
//     document.body.appendChild($rule);
//
// }
//
//- Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// for (let user of usersWithId) {
//     for (let location of citiesWithId) {
//         if (user.id === location.user_id  ) {
//             user.location = location;
//
//         }
//     }
// }
// console.log(usersWithId);