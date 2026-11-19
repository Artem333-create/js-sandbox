// const result = alert("Заповніть всі поля!");
// console.log(result);

// const result = prompt("login"); string або null
// console.log(result);

// const result = confirm('18?');
// true або false
// console.log(result);

// ЗАДАЧА 1

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt('Введіть число...будь-ласка'));

// if (number === 10) {
//     alert('Вірно')
// } else {
//     alert('Невірно')
// }

//   |умова| ? |код, якщо true| : |код, якщо false|
// number === 10 ? alert('Вірно') : alert('Невірно');

// ЗАДАЧА 2

// Написати функцію getUserInfo, яка приймає ім'я та вік користувача і повертає інформацію про нього у вигляді рядка.
// console.log(getUserInfo('Anna', 25))
// // 'Anna is 25 years old.'

// console.log(getUserInfo('John', 30))
// // 'John is 30 years old.'

// // 1. Оголошуємо функцію з назвою getUserInfo.
// // У круглих дужках вказуємо два параметри (name та age), які функція прийматиме при виклику.
// function getUserInfo(name, age) {
//   // 2. Формуємо фінальний рядок за допомогою шаблонного рядка (зворотні лапки ` `).
//   // Конструкція ${...} дозволяє вставити значення змінних name та age прямо всередину тексту.
//   const message = `${name} is ${age} years old.`;

//   // 3. Ключове слово return повертає сформований рядок як результат роботи функції
//   // і завершує її виконання.
//   return message;
// }

// // ЗАДАЧА 1

// 4. Викликаємо функцію з аргументами 'Anna' та 25,
// а повернутий результат одразу виводимо в консоль за допомогою console.log().
// console.log(getUserInfo('Anna', 25)); // Виведе: 'Anna is 25 years old.'

// 5. Повторно викликаємо ту саму функцію, але вже з іншими даними ('John' та 30).
// console.log(getUserInfo('John', 30)); // Виведе: 'John is 30 years old.'

// Написати функцію convertMinutesToSeconds, яка приймає кількість хвилин і повертає кількість секунд.
// console.log(convertMinutesToSeconds(1)) // 60
// console.log(convertMinutesToSeconds(5)) // 300
// console.log(convertMinutesToSeconds(10)) // 600

// function convertMinutesToSeconds(minutes) {
//   return minutes * 60;
// }

// console.log(convertMinutesToSeconds(1)) // 60
// console.log(convertMinutesToSeconds(5)) // 300
// console.log(convertMinutesToSeconds(10)) // 600

//  ЗАДАЧА 4

// Написати функцію getProductCount, яка приймає рядок із кількістю товарів та повертає ціле число.
// console.log(getProductCount('15 items')) // 15
// console.log(getProductCount('8 products')) // 8
// console.log(getProductCount('100 pieces')) // 100

// function getProductCount(itemQuantiti) {
//   return parseInt(itemQuantiti);
// }

// console.log(getProductCount('15 items')); // 15
// console.log(getProductCount('8 products')); // 8
// console.log(getProductCount('100 pieces')); // 100

// ЗАДАЧА 5

// Написати функцію convertToInteger, яка приймає рядок і повертає ціле число за допомогою parseInt().
// console.log(convertToInteger('25')) // 25
// console.log(convertToInteger('100.75')) // 100
// console.log(convertToInteger('42px')) // 42

// function convertToInteger(string) {
//   return parseInt(string);
// }

// console.log(convertToInteger('25')); // 25
// console.log(convertToInteger('100.75')); // 100
// console.log(convertToInteger('42px')); // 42

//  ЗАДАЧА 6

// Написати функцію sumStrings, яка приймає два рядки з цілими числами, перетворює їх на числа та повертає суму.
// console.log(sumStrings('10', '20')); // 30
// console.log(sumStrings('15', '5')); // 20
// console.log(sumStrings('100', '200')); // 300

// function sumStrings(num1, num2) {
//   return Number(num1) + Number(num2);
// }

// console.log(sumStrings('10', '20')); // 30
// console.log(sumStrings('15', '5')); // 20
// console.log(sumStrings('100', '200')); // 300

//    ЗАДАЧА 7

// Написати функцію greet, яка приймає ім'я та повертає привітання. Якщо ім'я не передано, використовувати значення Guest.
// console.log(greet('Anna')) // 'Hello, Anna!'
// console.log(greet('Max')) // 'Hello, Max!'
// console.log(greet()) // 'Hello, Guest!'

// function greet(name = 'Guest') {
//   return `Hallo, ${name}`;
// }

// console.log(greet('Anna')); // 'Hello, Anna!'
// console.log(greet('Max')); // 'Hello, Max!'
// console.log(greet()); // 'Hello, Guest!'

//   ЗАДАЧА 8

// Написати функцію getPurchaseInfo, яка приймає назву товару, його ціну та кількість. Функція повинна повертати рядок із загальною вартістю покупки.
// console.log(getPurchaseInfo('Book', 20, 3))
// // 'You bought 3 Book(s). Total: 60 USD.'

// console.log(getPurchaseInfo('Pen', 5, 4))
// // 'You bought 4 Pen(s). Total: 20 USD.'

// function getPurchaseInfo(name, price, quantity) {
//   const totalPrice = quantity * price;
//   return `You bought ${quantity} ${name}(s). Total: ${totalPrice} USD.`;
// }

// return `You bought ${quantity} ${name}${quantity === 1 ? '' : '(s)'}. Total: ${price * quantity} USD.`;

//   ЗАДАЧА 9

// Написати функцію getAverageGrade, яка приймає три оцінки та повертає середній бал, округлений до двох знаків після коми.
// console.log(getAverageGrade(10, 9, 8)) // '9.00'
// console.log(getAverageGrade(12, 10, 9)) // '10.33'
// console.log(getAverageGrade(7, 8, 10)) // '8.33'

function getAverageGrade(rating, roundedScore) {}
