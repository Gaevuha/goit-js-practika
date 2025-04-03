//!========================================================

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];

// styles.push('rock-n-roll');

// if (styles.includes('blues')) {
//    styles[1] = 'classic';
// }

// console.log(styles);

// function logItems(array) {

//     for (let i = 0; i < array.length; i++) {

//         console.log(`${i +1} - ${array[i]}`)
//     }

// }

// logItems(["apple", "peach", "pear", "banana"]);


//!========================================================

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];


// function checkLogin(array) {

//     const userName = prompt('Введіть свій логін');

//     if (array.includes(userName)) {

//         alert(`Welcome, ${userName}!`);

//     } else {

//         alert("User not found");
//     }
        
// }

// const logins = ["Peter", "John", "Igor", "Sasha"];
// checkLogin(logins);

//!========================================================

// Напишіть функцію calculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
 
// function calculateAverage() {

//     if (arguments.length === 0) {
//         return 'Введіть хочаб одне число';
//     }

//     let sum = 0;

//     for (let i = 0; i < arguments.length; i++) {

//         if (typeof arguments[i] !== 'number' || isNaN(arguments[i])) {

//             return ' Всі аргументи мають бути числами';

//         }
//             sum += arguments[i];
//     }
      
//       return sum / arguments.length;   
//     }

// console.log(calculateAverage(5, 10, 15,));

//!========================================================

// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sumNumber(arr) {

//     const newArr = [];

//     for (let i = 0; i < arr.length - 1; i++){

//         newArr.push(arr[i] + arr[i + 1]);  // Додаємо суму сусідніх елементів
//     }

//     return newArr;
// }
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(sumNumber(someArr));

// 🔹 Перша ітерація (i = 0):
// 22 + 11 = 33, додаємо в newArr.
// 🔹 Друга ітерація (i = 1):
// 11 + 34 = 45, додаємо в newArr.
// 🔹 Третя ітерація (i = 2):
// 34 + 5 = 39, додаємо в newArr.
// 🔹 Четверта ітерація (i = 3):
// 5 + 12 = 17, додаємо в newArr.
// 🔹 П'ята ітерація (i = 4):
// 12 + 13 = 25, додаємо в newArr.
// 🔹 Шоста ітерація (i = 5):
// 13 + 14 = 27, додаємо в newArr.
// 🔹 Сьома ітерація (i = 6):
// 14 + 15 = 29, додаємо в newArr.

//!========================================================
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {

//     if (!Array.isArray(numbers)) {  // Перевірка що елементи дійсно є масивом

//         return 'Sorry, it is not an array!'; 
//     }

//     if (numbers.length === 0) {    // Перевірка на порожній масив
//         return 'Array is empty!';
//     }

//     let minNumber = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {

//         if (numbers[i] < minNumber) {
//             minNumber = numbers[i];
//         }
//     }

//     return minNumber;
// }

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// console.log(findSmallestNumber(numbers)); // 2
// console.log(findSmallestNumber("hello")); // 'Sorry, it is not an array!'
// console.log(findSmallestNumber([])); // 'Array is empty!'

//!========================================================

// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {

//     const words = string.split(' '); // Розбиваємо рядок у масив слів

//     let longWord = '';  // Змінна для найдовшого слова

//     for (let i = 0; i < words.length; i++) {

//         if (words[i].length > longWord.length) {

//             longWord = words[i]; // Якщо слово довше за поточне найдовше, оновлюємо
//         }
//     }
//     return longWord;
// }
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

//!========================================================

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true
// };

 // 1. Додаємо поле mood
// user.mood = 'happy';

 // 2. Замінюємо hobby
// user.hobby = 'skydiving';

 // 3. Замінюємо premium на false
// user.premium = false;

/// 4. Виводимо ключі та значення
// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// }

//!========================================================
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
  
// function getSumSalaries(salaries) {

//     let totalSalaries = 0;

//     const values = Object.values(salaries);

//     for (let i = 0; i < values.length; i++) {
        
//         totalSalaries += values[i];
        
//     }
//     return totalSalaries;
// }

// console.log(getSumSalaries(salaries));



//!========================================================

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     // Зберігає значення
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },

//     // Перевірка на наявність властивостей
//     exist() {
//         return this.hasOwnProperty('a') && this.hasOwnProperty('b');
//     },

//     // Повертає суму, якщо властивості існують
//     sum() {
//         if (this.exist()) {
//             return this.a + this.b;
//         }
//         return 'No such properties';
//     },

//     // Повертає добуток, якщо властивості існують
//     mult() {
//         if (this.exist()) {
//             return this.a * this.b;
//         }
//         return 'No such properties';
//     }
// };

// // Приклад використання:
// calculator.read(10, 5);
// console.log(calculator.sum());  // 15
// console.log(calculator.mult()); // 50

// calculator.read(10);  // Задаємо лише одне значення
// console.log(calculator.sum());  // 'No such properties'
// console.log(calculator.mult()); // 'No such properties'

//!========================================================

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
// ];
  
// function calcTotalPrice(fruits, fruitName) {

//     let totalPrice = 0;

//     for (const fruit of fruits) {

//         if (fruit.name === fruitName) {

//             totalPrice += fruit.price * fruit.quantity;                
//         }        
//     }
//    return totalPrice;
// }
// console.log(calcTotalPrice(fruits, 'Банан'));

//!========================================================

