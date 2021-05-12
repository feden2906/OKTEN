// 1)- Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так,
// щоб при кліку на кнопку зникавл елемент с id="text".
// let element = document.getElementById('text-btn');
// element.addEventListener('click', () => {
//     let item = document.getElementById('text');
//     if (item.style.display === 'none') {
//         item.style.display = 'block';
//     }else {
//         item.style.display = 'none'
//     }
// });

// 2)- Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// document.getElementById('next-btn')
//     .addEventListener("click", function () {
//         document.getElementById('next').hidden = true;
//     });

// 3)- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
// та повідомити про це користувача
let myForm = document.forms.first;
let myFormBtn = document.getElementById('red-btn').onclick = () => {
    console.log('click');
}
myForm.age.oninput = (e) => {
   if (e.target.value < 18) {
       console.log(false);
   }
}
