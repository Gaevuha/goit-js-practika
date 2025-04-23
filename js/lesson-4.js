/*TASK-1 */

//!========================================================
// 1 - отримай body елемент і виведи його в консоль;

// const bodyEl = document.querySelector('body');

// console.log(bodyEl);

//!========================================================
// 2 - отримай елемент id="title" і виведи його в консоль;

// const titleEl = document.querySelector('#title');

// console.log(titleEl);

//!========================================================
// 3 - отримай елемент class="list" і виведи його в консоль;

// const listEl = document.querySelector('.list');

// console.log(listEl);

//!========================================================
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

// const liElems = document.querySelectorAll('[data-topic]');

// console.log(liElems);

//!========================================================
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const liElems = document.querySelectorAll('[data-topic]');
// console.log(liElems[0]);

// const liElems = document.querySelector('[data-topic]');
// console.log(liElems);

// const liElems = document.querySelectorAll('[data-topic]');
// for (const elem of liElems) {
//     console.log(elem);
//     break; //припинити після виводу першого елементу
// }

//!========================================================
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const liElems = document.querySelectorAll('[data-topic]');
// const lastElem = liElems[liElems.length - 1];
// console.log(lastElem);

//!========================================================
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

// const titleElems = document.querySelector('#title');

// console.log(titleElems.nextElementSibling);

//!========================================================
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

// const titleElems = document.querySelectorAll('h3');

// console.log(titleElems);

//!========================================================
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

// const titleElemsColor = document.querySelectorAll('h3');

// for (const elem of titleElemsColor) {

//    elem.classList.add("active");
   
// }

// console.log(titleElemsColor);

//!========================================================
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

// const liElems = document.querySelectorAll('[data-topic]');

// for (const elem of liElems) {
//     if (elem.dataset.topic === "navigation") {
//         console.log(elem);
//     }
// }

// Якщо потрібно тільки один такий елемент 

// const liElem = document.querySelector('[data-topic="navigation"]');
// console.log(liElem);



//!========================================================

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// const liElems = document.querySelectorAll('[data-topic]');

// for (const elem of liElems) {
//     if (elem.dataset.topic === "navigation") {
//         elem.style.backgroundColor = 'yellow';
//         // elem.setAttribute('style', 'background-color: yellow');
//     }
// }
// console.log(liElems);
//!========================================================
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// const liElems = document.querySelectorAll('[data-topic]');

// for (const elem of liElems) {

//     if (elem.dataset.topic === "navigation") {
//         elem.lastElementChild.textContent = "Я змінив тут текст!";
//     }
     
//  }

// console.log(liElems);

//або 

// const liElems = document.querySelectorAll('[data-topic]');

// for (const elem of liElems) {
    
//     if (elem.dataset.topic === "navigation") {

//         const paragraph = elem.querySelector('p');

//         if (paragraph) {
//             paragraph.textContent = 'Я змінив тут текст';
//         }
//     }
     
//  }

// console.log(liElems);


//!========================================================
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation";

// const liElems = document.querySelectorAll('[data-topic]');

// for (const elem of liElems) {

//     if (elem.dataset.topic === currentTopic)
//         console.log(elem);
// }

//!========================================================
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

// const currentTopic = "manipulation";

// const liElems = document.querySelectorAll('[data-topic]');

// for (const elem of liElems) {

//     if (elem.dataset.topic === currentTopic)
//         elem.style.backgroundColor = 'blue';
        
//         //або
        
//         // elem.setAttribute('style', 'background-color: blue');
// }
// console.log(liElems);

//!========================================================
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// const titleElem = document.querySelector('.completed');

// console.log(titleElem);

//!========================================================
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

// const titleElem = document.querySelector('.completed');

// console.log(titleElem.parentElement.remove());

// можно дадати перевірку на випадок якщо такого заголовка не буде знайдено, чи його батьківського елемента

// const titleElem = document.querySelector('.completed');

// if (titleElem && titleElem.parentElement) {
//   titleElem.parentElement.remove();
// }
// console.log(titleElem);

//!========================================================
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

// const titleElem = document.querySelector('h1');

// const paragraph = document.createElement('p');

// paragraph.textContent = "Об'єктна модель документа (Document Object Model)";

// titleElem.after(paragraph);

// або

// const listElem = document.querySelector('.list');

// const paragraph = document.createElement('p');

// paragraph.textContent = "Об'єктна модель документа (Document Object Model)";

// listElem.before(paragraph);
//!========================================================
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const listElem = document.querySelector('.list');

// listElem.innerHTML += '<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>';

//!========================================================
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// const listElem = document.querySelector('.list');

// const markup = `<li>
// <h3>Властивість innerHTML</h3>
// <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
// </li>`;

// listElem.insertAdjacentHTML('beforeend', markup);

//!========================================================
// 20 - очисти список

// const listElem = document.querySelector('.list');

// listElem.innerHTML = '';
//!========================================================

/*TASK-2 */

// Створіть контейнер div (з класом numberContainer )в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).


// const boxElems = document.querySelector('.numberContainer');

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;


// for (let i = 0; i < 100; i++) {

//     // Генеруємо випадкове число
//     const number = randomNumber();

//     let className = '';

//        if (number % 2 === 0) {
//            className = 'even';
           
//     } else {
//            className = 'odd';
//     }    

//     const markup = `<div class="${className}">${number}</div>`;

//     boxElems.insertAdjacentHTML('beforeend', markup);
// }
 
// console.log(boxElems);

// або

// const boxElems = document.querySelector('.numberContainer');

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// function numberTemplate(number) { 
//     const className = number % 2 === 0 ? 'even' : 'odd';
//     return `<div class="${className}">${number}</div>`;
// }

// function numbersTemplate(count = 100) {
//     return Array.from({ length: count }, () => randomNumber())
//                 .map(numberTemplate)
//                 .join('');
// }

// const markup = numbersTemplate();
// boxElems.insertAdjacentHTML('beforeend', markup);

//!========================================================

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// const formElem = document.querySelector('.js-contact-form');

// formElem.addEventListener('input', e => {
   
//     if (e.target.name !== 'userName') return;

//     const nameValue = e.target.value.trim();

//     if (nameValue.length > 6) {
//         e.target.classList.add('success');
//         e.target.classList.remove('error');
//     } else {
//         e.target.classList.add('error');
//         e.target.classList.remove('success');
//     }
// });

//!========================================================

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// const formElem = document.querySelector('.js-contact-form');

// const nameValue = formElem.elements.userName;

// nameValue.addEventListener('focus', e => { 
//     const value = e.target.value.trim();
//         if (value !== '') {
//             e.target.style.outline = '3px solid green';
//         } else {
//             e.target.style.outline = '3px solid red';
//         }
    
// });

// formElem.addEventListener('focusin', e => { 

//     if (e.target.name === 'userName') {

//         const nameValue = e.target.value.trim();

//         if (nameValue === '') {
//             e.target.style.outline = '3px solid red';
//         } else {
//             e.target.style.outline = '3px solid green';
//         }
//     }
// });

// formElem.addEventListener('input', e => {

//      if (e.target.name === 'userName') {

//         const nameValue = e.target.value.trim();

//         if (nameValue === '') {
//             e.target.style.outline = '3px solid red';
//         } else {
//             e.target.style.outline = '3px solid green';
//         }
//     }
//  });

//!========================================================

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// const formElem = document.querySelector('.js-contact-form');

// const nameValue = formElem.elements.userName;

// nameValue.addEventListener('blur', e => {

//      const value = e.target.value.trim();

//     if (value === '') {
//         e.target.style.outline = '3px solid red';
//     } else {
       
//         e.target.style.outline = '3px solid lime';
//     }
// });
//!========================================================
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.


// const formElem = document.querySelector('.js-contact-form');
// const policyElem = document.querySelector('.js-policy-checkbox');
// const usernameOutput = document.querySelector('.js-username-output');

// const nameValue = formElem.elements.userName;
// const acceptUser = formElem.elements.accept;


// formElem.addEventListener('submit', e => {    
//     e.preventDefault();
    
//     const name = nameValue.value.trim();
//     const accept = acceptUser.checked;


//     if (name !== '' && accept !== false) {

//         const data = {
//             nameUser: name,
//             userChecked: accept,
//         };
//         console.log(data);
        
//         usernameOutput.textContent = name;


//     } else {
//         console.log("Помилка: Поле ім/'я повинно бути заповнено та прийнята політика безпеки");
//         usernameOutput.textContent = 'Anonimus';

//     };    

   
//     formElem.reset();
    
//  });

//!========================================================
/*TASK-4*/

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// Отримуємо DOM-елементи: сам квадрат і кнопки
const box = document.querySelector('.box'); // квадрат
const decrease = document.querySelector('.js-decrease'); // кнопка "Зменшити"
const increase = document.querySelector('.js-increase'); // кнопка "Збільшити"

// Обробник події для кнопки "Збільшити"
increase.addEventListener('click', () => {
    // Отримуємо поточну ширину квадрата (у пікселях), без "px"
    const currentWidth = parseInt(getComputedStyle(box).width);
    
    // Додаємо 20 пікселів до поточної ширини
    const newWidth = currentWidth + 20;

    // Задаємо нову ширину і висоту (щоб зберігалася форма квадрата)
    box.style.width = newWidth + 'px';
    box.style.height = newWidth + 'px';
});

// Обробник події для кнопки "Зменшити"
decrease.addEventListener('click', () => {
    // Отримуємо поточну ширину квадрата
    const currentWidth = parseInt(getComputedStyle(box).width);
    
    // Вираховуємо нову ширину
    const newWidth = currentWidth - 20;

    // Перевіряємо, щоб нова ширина не стала занадто малою (менше 20 пікселів)
    if (newWidth >= 20) {
        // Задаємо нові розміри
        box.style.width = newWidth + 'px';
        box.style.height = newWidth + 'px';
    }
});


