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

// Написати функцію getAverageGrade, яка приймає три оцінки та повертає середній бал, округлений до двох знаків після коми.
// console.log(getAverageGrade(10, 9, 8)); // '9.00'
// console.log(getAverageGrade(12, 10, 9)); // '10.33'
// console.log(getAverageGrade(7, 8, 10)); // '8.33'

// function getAverageGrade(num1, num2, num3) {
//   let sumOfNumbers = num1 + num2 + num3;
//   let round = sumOfNumbers / 3;

//   return round.toFixed(2);
// }

//  ЗАДАЧА 10

// Написати функцію convertToUah, яка приймає суму в доларах та курс долара і повертає суму в гривнях з двома знаками після коми.
// console.log(convertToUah(10.5, 41.25)) // '433.13'
// console.log(convertToUah(20, 40.5)) // '810.00'
// console.log(convertToUah(15.75, 42)) // '661.50'

/*Task-3*/

// Написати функцію getRandomLetter, яка приймає слово та повертає випадкову літеру з цього слова.
// console.log(getRandomLetter('JavaScript')) // наприклад, 'a'
// console.log(getRandomLetter('Привіт')) // наприклад, 'в'
// console.log(getRandomLetter('Компьютер')) // наприклад, 'п'

// function getRandomLetter(word) {
//   // return word[Math.round(Math.random() * word.length;)];
//   const index = Math.round(Math.random() * word.length);
//   return word[index - 1];
// }
// console.log(getRandomLetter('JavaScript')); // наприклад, 'a'
// console.log(getRandomLetter('Привіт')); // наприклад, 'в'
// console.log(getRandomLetter('Компьютер')); // наприклад, 'п'

// /*Task-4*/
// // Написати функцію generateTicket, яка генерує випадкове ціле число від 1000 до 9999.
// // Функція повинна повернути номер квитка у вигляді рядка
// // та кількість символів у ньому.

// function generateTicket() {
//   const randomNum = Math.round(Math.random() * 8999 + 1000);
//   const stringValue = String(randomNum);

//   return `Квиток №${randomNum}. Кількість цифр: ${stringValue.length}.`;
// }

// console.log(generateTicket()); // 'Квиток №4821. Кількість цифр: 4.'
// console.log(generateTicket()); // 'Квиток №1937. Кількість цифр: 4.'

/*Task-5*/
// Написати функцію getCandyOrder, яка приймає ціну однієї цукерки,
// кількість цукерок та суму грошей покупця.
// Функція повертає загальну вартість покупки та решту.
// Усі грошові значення округлити до двох знаків після коми.
// console.log(getCandyOrder(5.5, 10, 100))
// 'Вартість: 55.00 грн. Решта: 45.00 грн.'
// console.log(getCandyOrder(7.25, 4, 50))
// 'Вартість: 29.00 грн. Решта: 21.00 грн.'

// function getCandyOrder(price, quantity, summ) {
//   const getCandyOrder = price * quantity;
//   const rest = summ - getCandyOrder;
//   return `Вартість: ${getCandyOrder} грн. Решта: ${rest} грн.`;
// }

// console.log(getCandyOrder(5.5, 10, 100));
// ('Вартість: 55.00 грн. Решта: 45.00 грн.');
// console.log(getCandyOrder(7.25, 4, 50));
// ('Вартість: 29.00 грн. Решта: 21.00 грн.');

/*Task-6*/

// Написати функцію calculateTripCost, яка приймає:
// кількість кілометрів, витрату пального на 100 км та ціну одного літра пального.
// Функція повертає загальну вартість пального для подорожі.
// Результат округлити до двох знаків після коми.

// function calculateTripCost(totalKms, fuel100km, literPrice) {
//   const totalFuel = (totalKms / 100) * fuel100km;
//   const totalCost = totalFuel * literPrice;

//   return `Вартість подорожі: ${totalCost.toFixed(2)} грн.`;
// }

// console.log(calculateTripCost(500, 8, 55));
// // 'Вартість подорожі: 2200.00 грн.'

// console.log(calculateTripCost(250, 6.5, 60));
// // 'Вартість подорожі: 975.00 грн.'

/*Task-7*/

// Написати функцію splitBill, яка приймає загальний рахунок,
// кількість людей та відсоток чайових.
// Функція повинна додати чайові до рахунку та поділити суму порівну між людьми.
// Результат округлити до двох знаків після коми.
// console.log(splitBill(1000, 4, 10))
// 'Загальний рахунок: 1100.00 грн. З кожного: 275.00 грн.'
// console.log(splitBill(850, 3, 15))
// 'Загальний рахунок: 977.50 грн. З кожного: 325.83 грн.'
// function splitBill(totalBill, guestQuantity, billRate) {
//   const tip = (totalBill / 100) * billRate;
//   const totalPrice = totalBill + tip;
//   const pricePerGuest = totalPrice / guestQuantity;
//   return `Загальний рахунок: ${totalPrice.toFixed(2)} грн. З кожного: ${pricePerGuest.toFixed(2)} грн.`;
// }

// // Результат округлити до двох знаків після коми.
// console.log(splitBill(1000, 4, 10));
// ('Загальний рахунок: 1100.00 грн. З кожного: 275.00 грн.');
// console.log(splitBill(850, 3, 15));
// ('Загальний рахунок: 977.50 грн. З кожного: 325.83 грн.');

/*Task-8*/

// Написати функцію calculateSalary, яка приймає:
// кількість відпрацьованих годин, оплату за годину та відсоток податку.
// Функція повинна повернути зарплату до та після вирахування податку.
// Результат округлити до двох знаків після коми.
// console.log(calculateSalary(160, 200, 18))
// 'До податку: 32000.00 грн. Після податку: 26240.00 грн.'
// console.log(calculateSalary(120, 150, 15))
// 'До податку: 18000.00 грн. Після податку: 15300.00 грн.'

// function calculateSalary(totalHours, salaryperHour, taxes) {
//   const totalSalary = totalHours * salaryperHour;
//   const taxesSum = totalSalary * (taxes / 100);
//   const pureSalary = totalSalary - taxesSum;
//   return `До податку:${totalSalary}грн. Після податку:${pureSalary}грн.`;
// }

// console.log(calculateSalary(160, 200, 18));
// ('До податку: 32000.00 грн. Після податку: 26240.00 грн.');
// console.log(calculateSalary(120, 150, 15));
// ('До податку: 18000.00 грн. Після податку: 15300.00 грн.');

/*Task-10*/

// Написати функцію calculateDiscount, яка приймає ціну товару,
// відсоток першої знижки та відсоток другої знижки.
// Функція повинна визначити, яка знижка більша,
// та застосувати лише її до початкової ціни.
// Повернути початкову ціну, кінцеву ціну та суму економії.
// Усі результати округлити до двох знаків після коми.
// console.log(calculateDiscount(1000, 10, 20))
// 'Початкова ціна: 1000.00 грн. Кінцева ціна: 800.00 грн. Економія: 200.00 грн.'
// console.log(calculateDiscount(500, 15, 10))
// 'Початкова ціна: 500.00 грн. Кінцева ціна: 425.00 грн. Економія: 75.00 грн.'

// function calculateDiscount(itemPrice, firstDiscount, secondDiscount) {
//   const biggerDiscount = Math.max(firstDiscount, secondDiscount);
//   const discountedPrice = itemPrice - (biggerDiscount / 100) * itemPrice;
//   const diff = itemPrice - discountedPrice;
//   return `Початкова ціна: ${itemPrice} грн. Кінцева ціна: ${discountedPrice} грн. Економія: ${diff}грн.`;
// }

// console.log(calculateDiscount(1000, 10, 20));
// ('Початкова ціна: 1000.00 грн. Кінцева ціна: 800.00 грн. Економія: 200.00 грн.');
// console.log(calculateDiscount(500, 15, 10));
// ('Початкова ціна: 500.00 грн. Кінцева ціна: 425.00 грн. Економія: 75.00 грн.');

/*Task-11*/

// Написати функцію generatePromoCode, яка генерує чотири випадкових числа від 0 до 9.
// Повернути промокод у вигляді рядка та його довжину.

// console.log(generatePromoCode())
// 'Ваш промокод: 5831. Довжина: 4'
// console.log(generatePromoCode())
// 'Ваш промокод: 0274. Довжина: 4'

// function generatePromoCode() {
//   // const randomNumber = parseInt(Math.random() * 8999 + 1000);
//   // return `Ваш промокод: ${randomNumber}. Довжина: 4`;

//   const randomNumber = Math.floor(Math.random() * 8999 + 1000);
//   return `Ваш промокод: ${randomNumber}. Довжина: 4`;
// }

// console.log(generatePromoCode());
// ('Ваш промокод: 5831. Довжина: 4');
// console.log(generatePromoCode());
// ('Ваш промокод: 0274. Довжина: 4');

/*Task-12*/

// Запитати ім'я, прізвище та вік користувача через prompt().
// Створити функцію getUserInfo, яка повертає:
// повне ім'я, довжину повного імені та вік.
// Додатково порівняти вік користувача з числом 18
// за допомогою оператора >=.
// Вивести всю інформацію через alert().

// function getUserInfo() {
//   const lastName = prompt("Введіть прізвище");
//   const username = prompt("Введіть ім'я");
//   const age = prompt("Введіть вік");
//   const fullName = `${lastName} ${username}`;

//   return `Повне ім'я: ${fullName}. Кількість символів: ${fullName.length}. Ваш вік: ${age}. Повнолітній: ${age >= 18}`;
// }

// alert(getUserInfo());

/*Task-13*/

// Написати функцію calculateMonthlyExpenses, яка приймає:
// витрати на їжу, транспорт, комунальні послуги та розваги.
// Функція повинна повернути загальну суму витрат,
// середню суму витрат на день (30 днів) та найбільшу категорію витрат.
// Використати Math.max().
// Суми округлити до двох знаків після коми.
// console.log(calculateMonthlyExpenses(6000, 1500, 2500, 2000))
// 'Витрати: 12000.00 грн. На день: 400.00 грн. Найбільша категорія: 6000.00 грн.'
// console.log(calculateMonthlyExpenses(4000, 3000, 2000, 1000))
// 'Витрати: 10000.00 грн. На день: 333.33 грн. Найбільша категорія: 4000.00 грн.'

// function calculateMonthlyExpenses(food, transport, bills, entertainment) {
//   const totalExpenses = food + transport + bills + entertainment;
//   const expensesPerDay = (
//     (food + transport + bills + entertainment) /
//     30
//   ).toFixed(2); //середні витрати\день
//   const biggestExpense = Math.max(
//     food,
//     transport,
//     bills,
//     entertainment
//   ).toFixed(2); // найбільша категорія витрат
//   return `Витрати: ${totalExpenses} грн. На день: ${expensesPerDay} грн. Найбільша категорія: ${biggestExpense} грн.`;
// }

// console.log(calculateMonthlyExpenses(6000, 1500, 2500, 2000));
// ('Витрати: 12000.00 грн. На день: 400.00 грн. Найбільша категорія: 6000.00 грн.');
// console.log(calculateMonthlyExpenses(4000, 3000, 2000, 1000));
// ('Витрати: 10000.00 грн. На день: 333.33 грн. Найбільша категорія: 4000.00 грн.');

/*Task-14*/

// Написати функцію calculateDownloadTime, яка приймає:
// розмір файлу в мегабайтах та швидкість інтернету в мегабайтах за секунду.
// Функція повинна розрахувати час завантаження у секундах
// та хвилинах.
// Хвилини округлити вниз, секунди визначити як залишок.
// console.log(calculateDownloadTime(600, 10))
// 'Час завантаження: 1 хвилина 0 секунд.'
// console.log(calculateDownloadTime(150, 5))
// 'Час завантаження: 0 хвилин 30 секунд.'

// function calculateDownloadTime(size, speedPerSecond) {
//     const totalTimeDown = size / speedPerSecond;
//     const minutes = Math.floor(totalTimeDown / 60);
//     const seconds = totalTimeDown % 60;
//     alert (`Час завантаження: ${minutes} хвилина ${seconds} секунд.`)
//     return `Час завантаження: ${minutes} хвилина ${seconds} секунд.`

// }
// // Хвилини округлити вниз, секунди визначити як залишок.
// console.log(calculateDownloadTime(600, 10))
// 'Час завантаження: 1 хвилина 0 секунд.'
// console.log(calculateDownloadTime(150, 5))
// 'Час завантаження: 0 хвилин 30 секунд.'function calculateDownloadTime(size, speedPerSecond) {
//     const totalTimeDown = size / speedPerSecond;
//     const minutes = Math.floor(totalTimeDown / 60);
//     const seconds = totalTimeDown % 60;
//     alert (`Час завантаження: ${minutes} хвилина ${seconds} секунд.`)
//     return `Час завантаження: ${minutes} хвилина ${seconds} секунд.`

// }
// // Хвилини округлити вниз, секунди визначити як залишок.
// console.log(calculateDownloadTime(600, 10))
// 'Час завантаження: 1 хвилина 0 секунд.'
// console.log(calculateDownloadTime(150, 5))
// 'Час завантаження: 0 хвилин 30 секунд.'

/*Task-15*/

// Написати функцію createProfile, яка приймає ім'я, прізвище та рік народження.
// Функція повинна:
// 1. Створити повне ім'я.
// 2. Визначити довжину повного імені.
// 3. Обчислити вік.
// 4. Згенерувати випадковий ID від 1000 до 9999.
// 5. Повернути всю інформацію у вигляді шаблонного рядка.
// console.log(createProfile('Андрій', 'Коваленко', 2000))
// 'Профіль: Андрій Коваленко. Вік: 26. ID: 5831. Довжина імені: 16.'
// console.log(createProfile('Марія', 'Шевченко', 1998))
// 'Профіль: Марія Шевченко. Вік: 28. ID: 1942. Довжина імені: 15.'

// function createProfile(name, lastName, birthYear) {
//   const fullName = name + ' ' + lastName;
//   const currentDate = new Date().getFullYear();
//   const age = currentDate - birthYear;
//   const randomNum = Math.floor(Math.random() * 8999 + 1000);
//   return `Профіль: ${fullName}. Вік: ${age}. ID: ${randomNum}. Довжина імені: ${fullName.length}.`;
// }

// console.log(createProfile('Андрій', 'Коваленко', 2000));
// ('Профіль: Андрій Коваленко. Вік: 26. ID: 5831. Довжина імені: 16.');
// console.log(createProfile('Марія', 'Шевченко', 1998));
// ('Профіль: Марія Шевченко. Вік: 28. ID: 1942. Довжина імені: 14.');
