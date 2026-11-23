/*Task-1*/

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * 59);
// let msg;

// if (min <= 15) {
//   msg = `${min} входить в першу чверть`;
// } else if (min <= 30) {
//   msg = `${min} входить в другу чверть`;
// } else if (min <= 45) {
//   msg = `${min} входить в третю чверть`;
// } else {
//   msg = `${min} входить в четверту чверть`;
// }

// console.log(msg);

/*Task-2*/
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = Number(prompt('Будь ласка, введіть число від 1-4:'));
// let result = '';
// switch (num) {
//   case 1:
//     result = 'Зима';
//     break;

//   case 2:
//     result = 'Весна';
//     break;

//   case 3:
//     result = 'Літо';
//     break;

//   case 4:
//     result = 'Осінь';
//     break;

//   default:
//     result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
// }

// console.log(result);

/*Task-3*/
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const time = Number(prompt('Введіть кількість хвилин!'));

// const minutes = String(time % 60).padStart(2, '0');

// const hours = String(Math.floor(time / 60)).padStart(2, '0');

// console.log(`${hours}:${minutes}`);

/*Task-4*/
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt('Enter login');
// let password;
// console.log(login);

// switch (login) {
//   case 'Адмін':
//     password = prompt('Enter password');
//     password === 'Я головний'
//       ? alert('Добрий день!')
//       : alert('Невірний пароль!');
//     break;
//   case '':
//     alert('No login');
//     break;
//   case null:
//     alert('Canceled');
//   default:
//     alert("i don't know you");
// }

/*Task-5*/
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

/*Task-6*/
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

/*Task-7*/
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return Math.min(a, b);
//   } else {
//     return 'Not a number!';
//   }
// }
// console.log(min(5, 6));
// console.log(min(25, 30));
// console.log(min('2455', 148));

/*Task-8*/
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   return age >= 18 ? true : confirm('Чи є 18?');
// }
// console.log(isAdult(20));
// console.log(isAdult(15));

/*Task-9*/
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

/*Task-10*/
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз.
// Цикл повинен питати число, доки користувач не
// введе число більше 100, чи не натисне кнопку
// Cancel в prompt

/*Task-11*/
// Напишіть функцію, яка приймає адресу сайта url та перевіряє чи закінчується значення
// параметра символом /. Якщо ні, додайте до кінця
// значення url цей символ і поверніть оновлене значення з функції, але тільки в тому випадку,
// якщо в url є підрядок "my-site".
// В іншому випадку поверніть з функції адресу в незмінному вигляді

// const url = 'https://my-site.com/about';

// function checkUrl(url) {
//   if (!url.endsWith('/') && url.includes('my-site')) {
//     return url + '/';
//   } else {
//     return url;
//   }
// }

// console.log(checkUrl('https://my-site.com/about'));
// console.log(checkUrl('https://my-site.com/'));

// * Task-12. Доступ до чату
//  *
//  * Створи canOpenChat. Чат можна відкрити, якщо користувач одночасно:
//  * - перебуває онлайн;
//  * - є другом;
//  * - не ввімкнув режим «Не турбувати».
//  *
//  * Додатково створи shouldNotify: сповіщення потрібне, якщо користувач офлайн
//  * або ввімкнув режим «Не турбувати».
//  */
// // const isOnline = true;
// // const isFriend = true;
// // const isDnd = false;

// // Створи canOpenChat і shouldNotify та виведи їх.

// function chekString(string) {
//   // return string.startsWith("a") ? "так" : "ні";
//   return string[0] === 'a' ? 'так' : 'ні';
// }

// const string = 'abcde'; // тестовий рядок 1
// const stringSecond = 'bcde'; // тестовий рядок 2
// console.log(chekString(string));
// console.log(chekString(stringSecond));

// Task-13. Доступ до чату

// Написати функцію extractBetween, яка приймає три аргументи:
// рядок str, підрядок start і підрядок end.Функція повинна повертати частину рядка
// між першим входженням підрядка start і підрядка end.Якщо один з підрядків не знайдено,
//   функція повинна повертати порожній рядок.

// // Приклади використання:
// console.log(extractBetween('Hello, [world]!', '[', ']')); // "world"
// console.log(extractBetween('Hello, [world]!', '{', '}')); // ""
// console.log(extractBetween('Hello, {world}!', '{', '}')); // "world"

// function extractBetween(str, start, end) {
//     const startIndex = str.indexOf(start);
//     const endIndex = str.indexOf(end);
//     // console.log(startIndex, endIndex)
//     if (startIndex === -1 || endIndex === -1) return "";
//     return str.slice(startIndex + 1, endIndex)
// }

// // Приклади використання:
// console.log(extractBetween('Hello, [world]!', '[', ']')) // "world"
// console.log(extractBetween('Hello, [world]!', '{', '}')) // ""
// console.log(extractBetween('Hello, {world}!', '{', '}')) // "world"
