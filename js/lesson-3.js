// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]

// const newArr = [];

// const squareNumber = (numbers) => {

//     return numbers.map((number) => number * number);

// };

// console.log(squareNumber(numbers));

//!========================================================

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const newArr = (data) => {

//     return data.reduce((total, elem) => total.concat(elem.values), []);

//     // або
//     // return data.map(elem => elem.values).flat();
// }

// console.log(newArr(data));

//!========================================================

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const evenNumber = (numbers) => {

//     return numbers.every(number => number % 2 === 0);
// };

// console.log(evenNumber(numbers));

//!========================================================

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const notEvenNumber = (numbers) => {
 
//     return numbers.find(number => number % 2 !== 0);

// };

// console.log(notEvenNumber(numbers));

//!========================================================

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

//  const numbersArray = [4, 2, 5, 1, 3];

// const sortNumber = (numbersArray) => {
     
//     return numbersArray.toSorted((a, b) => a - b);

//     //  або
//     //  return numbersArray.sort((a, b) => a - b); //змінює оригінальний масив
// };

// console.log(sortNumber(numbersArray));
//!========================================================

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedArr = (stringArray) => {

//     return stringArray.toSorted((a, b) => a.localeCompare(b));

//     // або

//     // return stringArray.sort((a, b) => a.localeCompare(b)); //змінює оригінальний масив

// };

// console.log(sortedArr(stringArray));

//!========================================================

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
 { name: 'Anna', age: 16 },
 { name: 'Olena', age: 16 },
];

const sortedUsers = (users) => {

    return users.toSorted((a, b) => {
          
        if (a.age === b.age) {
        
      return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
  });

};

console.log(sortedUsers(users));


//!========================================================

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
// ];

// const newArrUser = (user) => {

//     return user.filter(elem => elem.age > 20);

// };

// console.log(newArrUser(user));

//!========================================================

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = (numbers) => {

//     return numbers.reduce((total, number) => total += number, 0);
    
// };

// console.log(sum(numbers));

//!========================================================

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const newArrUser = (people) => {

//     return people.some(elem => elem.age < 20);

// };
// console.log(newArrUser(people));

