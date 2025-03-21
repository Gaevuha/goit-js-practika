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
