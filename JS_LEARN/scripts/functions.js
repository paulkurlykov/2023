// [1] - пример простой функции
// [2] - стрелочная функция
// [3] - callback
// [4] - три способа объявления
// [5] - чем заменить return ... 71
// [6] - callback
// [7] - рекурсия с объяснением
// [8] - стрелочная функция подробно ... 200
// [9] - функция в объекте (также есть в [22] в обьектах)
// [10] - замена if на ? и ||
// [11] - вывод наименьшего числа ... 313
// [12] - ввыод степени двух чисел
// [13] - функция снаружи и внутри блока if
// [14] - создание функции через глобальную переменную
// [15] - вычисление остатка
// [16] - RANDOM случайное число ... 380
// [17] - конвертация из строки в число при помощи RADIX
// [18] - функция вызывает другую функцию ... 436
// [19] - использование текущей даты
// [20] - еще про стрелочную функцию

///[1]/// SIMPLE FUNCTION

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

///[2]/// ARROW FUNCTION

let arrowFunction = (arg1, arg2) => arg1 * arg2; // don't mention "return" here
let arrowFunction2 = () => 'hello'; // without arguments
let arrowFunction3 = (arg) => {
  console.log(`it's working`);
}; // don't use brackets if you have only 1 arg

///[3]/// CALLBACK BRIEFLY (when we want to FIX THE ORDER of doing functions)

let doHomework = (subject, callback) => {
  // call this fucntion #1
  alert(`I'm starting my homework!`); // only after execution of function #1 we want to call function #2
  callback(); //
};

let endHomework = () => {
  alert(`I'm finished my homework`);
};

///[4]/// THREE WAYS OF FUNCTION's ASSIGNING BRIEFLY

// declaration (создается до начала выполнения скрипта, можно вызвать перед обьявлением)

function foo(a, b) {
  let total = a * b;
  return total;
}

// expression (создается только тогда, когда доходит поток кода, можно вызвать только после обьявления)

let foo1 = function (a, b) {
  let total = a * b;
  return total;
};

// стрелочная (не имеет своего контекста this)
let foo2 = (a, b) => (total = a * b); // we do not mention return cause return works automatically here. We don't use LET for variable

///[5]/// RETURN - ЧЕМ МОЖНО ЗАМЕНИТЬ

let age = +prompt('Сколько тебе лет?');

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

checkAge(age);

///[6]/// CALLBACK

function learn(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

learn('JavaScript', done);

function done() {
  console.log('Я прошел этот урок');
}
/////

function ask(question, yes, no) {
  // функция ожидает три аргумента
  if (confirm(question))
    yes(); //условие проверяет ответ, если true, то выводит функцию yes
  else no(); // если false, то выводит функцию no
}

function showOk() {
  alert('Вы согласны.'); // эта функция (а именно алерт) будет вторым аргументом
}

function showCancel() {
  alert('Вы отменили выполнение.'); // эта функция идет третим аргументом
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask('Вы согласны?', showOk, showCancel);

/// более кратко

function ask(question, yes, no) {
  // функция ожидает три аргумента
  if (confirm(question))
    yes(); //условие проверяет ответ, если true, то выводит функцию yes
  else no(); // если false, то выводит функцию no
}

ask(
  'Вы согласны?', //Вызов функции и первый аргумент
  function () {
    alert('Вы согласны');
  }, // второй аргумент через запятую - безымянная (анонимная) функция

  function () {
    alert('Вы не согласны');
  }
); // третий аргумент через запятую - безымянная (анонимная) функция

///[7]/// РЕКУРСИЯ С ОБЪЯСНЕНИЕМ

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    let arr = countdown(n - 1);
    // console.log(arr); // - чтобы выводить каждую итерацию
    arr.unshift(n);
    return arr;
  }
}

console.log(countdown(5)); // [5, 4, 3, 2, 1]

// 1. Запускается базовая функция со значением 5. Базовый случай - false. Создается массив arr, которому присваивается функция, затем пушится вникуда unshift, и идет возврат массива, что вызывает первую рекурсию с аргументом 4 (5 - 1)
// 2. Запускается рекурсия 4. Базовый случай - false. Создается arr, пуш вникуда, и возврат через arr запускает еще одну рекурсию 3.
// 3. Запускатеся рекурсия 3. Базовый случай - false. Создается arr, пуш вникуда, и возврат через arr запускает еще одну рекурсию 2.
// 4. Запускатеся рекурсия 2. Базовый случай - false. Создается arr, пуш вникуда, и возврат через arr запускает еще одну рекурсию 1.
// 5. Запускатеся рекурсия 1. Базовый случай - false. Создается arr, пуш вникуда, и возврат через arr запускает еще одну рекурсию 0.
// 6. Запускатеся рекурсия 0. Базовый случай - true. А значит возвращает пустой массив []. Ход разворачивается.
// 7. Рекурсия 1 получает ответ. Выполняется let arr = countdown(n - 1), которое превращается в let arr = []. Ведь функция вернула наконец-то значение, а не саму себя.
//  Далее по списку туда пушится 1 (потому что на этом этапе n == 1), в итоге возвращает [1].
// 8. Рекурсия 2 запускает let arr = [1]. Туда пушится в начало 2. В итоге возвращает [2, 1].
// 9. Рекурсия 3 запускает let arr = [2, 1]. Туда пушится в начало 3. В итоге возвращает [3, 2, 1].
// 10. Рекурсия 4 запускает let arr = [3, 2, 1]. Туда пушится в начало 4. В итоге возвращает [4, 3, 2, 1].
// 11. Базовая функция запускает let arr = [4, 3, 2, 1]. Туда пушится в начало 5. И наконец то возвращает нам итоговый результат - [5, 4, 3, 2, 1].

/// еще одна рекурсия

function pow(x, y) {
  if (y == 0) {
    return 1;
  } else {
    console.log(x, y);
    return x * pow(x, y - 1);
  }
}

console.log(pow(5, 3));

// 1. запускаемся с 5 и 3. пропускаем базовый случай - false. Возвращаем вызов x * неизвестно, идет вызов функции снова
// 2. запускается рекурсия с 5 и 2. пропускаем базовый случай - false. Возвращаем вызов x * неизвестно, идет вызов функции снова
// 3. снова запускается рекурсия с 5 и 1. пропускаем базовый случай - false, Возвращаем вызов x * неизвестно, идет вызов функции снова
// 4. Снова запускается рекурсия с 5 и 0. Базовый случай дает true. И возвращает единицу - 1.
// 5. Теперь идем обратно. Рекурсия с 5 и 1 получила ответ от 5 и 0 единицу, и теперь формула считается - x * 1 = 5 * 1 = 5. Возвращается 5
// 6. Теперь рекурсия 5 и 2 получает ответ 5, считается формула x * 5 = 5 * 5 = 25. Возвращается 25
// 7. И наконец базовая функция получила ответ, и считает выражение x * 25 = 5 * 25 = 125. Все вложенные функции схлопнулись. Итоговый ответ - 125.

/// рекурсия с диапазоном

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    let arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
}

console.log(rangeOfNumbers(3, 7)); // [ 3, 4, 5, 6, 7 ]

///[8]/// ФУНКЦИИ СТРЕЛКА

let func = function (arg1, arg2, ...argN) {
  // Это...
  return expression;
};

/// превращается в

let func3 = (arg1, arg2, ...argN) => expression; // return не указывается

/// с одним аргументом

// тоже что и
// let double = function(n) { return n * 2 }
let double = (n) => n * 2;

alert(double(3)); // 6

/// без аргументов

let sayHi34 = () => alert('Hello!');

sayHi34();

/// еще пример

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы не согласны"); }
//   );

let ask10 = (question, yes, no) => (confirm(question) ? yes() : no());

ask10(
  'Вы согласны?',
  () => alert('Вы согласны'),
  () => alert('Вы не согласны')
);

/// еще пример

function addition(num) {
  return num + 1;
}

// addition = num => num + 1; - это вариант со стрелочной функцией

console.log(addition(5));

///[9]/// ФУНКЦИЯ В ОБЪЕКТЕ - КРАТКОЕ НАЗНАЧЕНИЕ

const coolPerson = {
  name: 'Taylor',
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};

///  более кратко - это так

const coolPerson2 = {
  name: 'Taylor',
  sayHello() {
    // вместо двоеточия послеключа сразу ставятся скобки (), двоеточие вообще не ставится, сразу открывается фигурная скобка функции {
    return `Hello! My name is ${this.name}.`;
  },
};

console.log(coolPerson2.sayHello()); // Вызов функции в объекте через имя объекта - Hello! My name is Taylor.

/// еще пример

const bicycle = {
  gear: 2,
  setGear(newGear) {
    // в скобках прописали аргумент
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

///[10]/// ЗАМЕНА IF на ? в функции

function checkAge1(age2) {
  return age2 > 18 ? true : confirm('Родители разрешали?');
}

let age2 = +prompt('Сколько тебе лет?');

checkAge1(age);

/// ЗАМЕНЯЕМ IF на ||

let age3 = +prompt('Сколько тебе лет?');

function checkAge5(age3) {
  return age3 > 18 || confirm('Родители разрешали?');
}

checkAge5(age3);

///[11]/// ВЫВОД НАИМЕНЬШЕГО ЧИСЛА ///////////////

function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

alert(min(3, 8));

///[12]/// ВЫВОД СТЕПЕНИ ДВУХ ЧИСЕЛ

function pow(x, n) {
  return x ** n;
}

alert(pow(4, 5));

///[13]/// ФУНКЦИЯ ВНУТРИ И СНАРУЖИ БЛОКА КОДА IF

let age7 = 16; // присвоим для примера 16

if (age7 < 18) {
  welcome2(); // \   (выполнится)
  //  |
  function welcome2() {
    //  |
    alert('Привет!'); //  |  Function Declaration доступно
  } //  |  во всём блоке кода, в котором объявлено
  //  |
  welcome2(); // /   (выполнится)
} else {
  function welcome2() {
    alert('Здравствуйте!');
  }
}

// здесь фигурная скобка закрывается,
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

welcome2(); // Ошибка: welcome is not defined

///[14]/// ОБЪЯВЛЯЕМ ПЕРЕМЕННУЮ, В БЛОКЕ КОДА ПРИСВАИВАЕМ ЕЙ ЗНАЧЕНИЕЙ ФУНКЦИИ, И ПОЛЬЗУЕМСЯ, ГДЕ ХОТИМ

let age9 = prompt('Сколько Вам лет?', 18);

let welcome4;

if (age9 < 18) {
  welcome4 = function () {
    alert('Привет!');
  };
} else {
  welcome4 = function () {
    alert('Здравствуйте!');
  };
}

welcome4(); // теперь всё в порядке

///[15]/// ВЫЧИСЛЕНИЕ ОСТАТКА

showRemainder = (a, b) => a % b;
console.log(showRemaider(5, 2)); // 1 - остаток от деления 5 на 2

///[16]///  СЛУЧАЙНОЕ ЧИСЛО RANDOM

function randomFraction() {
  return Math.random(); // даннная функция math.random(); дает случайное число от 0 до 1. ВСЕГДА писать с БОЛЬШОЙ буквы
}

console.log(randomFraction()); // результат всегда разный, например, 0.8017241585654415

/// СЛУЧАЙНОЕ ЦЕЛОЕ ЧИСЛО

function randomWholeNum() {
  // Множитель - это верхняя граница, по которой мы получим случайное число. В примере ниже - от 0 до 19.
  return Math.floor(Math.random() * 20); // здесь мы завернули рандом в Math.floor - которая округляет число в МЕНЬШУЮ сторону.
  // так как по умолчанию выдается число от 0 до 1, при округлении всегда будет выдаваться 0. Поэтому нужно вручную увеличивать
  // случайное число, например, умножим его на 20.
}

console.log(randomWholeNum());

/// СЛУЧАЙНОЕ ЧИСЛО В ДИАПАЗОНЕ ДВУХ ЧИСЕЛ

function randomRange(Mymin, Mymax) {
  // функция должна принимать два числа для создания диапазона - минимальное число и максимальное.
  return Math.floor(Math.random() * (Mymax - Mymin + 1) + Mymin); // используем формулу, когда включаются нижний и верхние границы диапазона
}

////// (max - min)) + min;  - когда мы включаем нижний диапазон, но НЕ включаем верхний
////// (max - min + 1)) + min;  - когда мы включаем нижний и верхние диапазоны

console.log(randomRange(2, 5)); // мы определили диапазон межд 1 и 300.

///[17]/// КОНВЕРТАЦИЯ ИЗ СТРОКИ В ЧИСЛО С RADIX
var fromStringToNum = parseInt('0507'); /// Конвертирует из строки в число

console.log(a); // 507

let fromStringToNumber2 = parseInt('Eleven'); // Если конвертировать невозможно (потому что нет цифр), то выведет NaN
console.log(fromStringToNumber2); // NaN

function convertToInteger(string, radix) {
  // radix - указываем целое число в оне между 2 и 36. Это основание системы счисления строки string
  // примеры: 2 - двоичная система. Цифры должны быть 0 и 1
  // 10 - десятичная система, используют чаще всего. Нужны целые числа в строке
  // 16 - шестнадцатиричная, обычно начинаются с 0хF
  return parseInt(string, radix); // 57
}

console.log(convertToInteger('111001', 2));

function convertToInteger2(string) {
  // можно использовать функцию без radix
  return parseInt(string, 2); // тогда мы указываем radix в параметры не функции а parseInt. И как число, а не аргумент.
}

console.log(convertToInteger2('111001')); // 57

///[18]/// ФУНКЦИЯ ВЫЗЫВАЕТ ДРУГУЮ ФУНКЦИЮ

function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

///[19]/// ИСПОЛЬЗОВАНИЕ ТЕКУЩЕЙ ДАТЫ

function birthYear(age) {
  let currentYear = new Date().getFullYear();
  return currentYear - age;
}

console.log(birthYear(33));

////[20]/// еще СТРЕЛОЧНАЯ ФУНКЦИЯ

function getConsol() {
  // Стандартная запись функции. Объявление идет через function
  console.log('Cmon');
}

getConsol(); // Cmon
//-------------
const getCmon = () => console.log('Cmon'); // Та же функция, но через стрелку. Объявление идет через const/let. Пустые скобки обязательны, если параметров нет.
getCmon(); // Cmon
//-------------
let pushCmon = () => {
  console.log('Cmon');
}; // Можно с фигурными скобками, можно нет
pushCmon(); // Cmon
//-------------
let MultiplyNum = (a) => console.log(a * 8); // если параметр один, скобки можно не указывать
MultiplyNum(5); // 40
//-------------
let multiplyNumAgain = (a, b) => console.log(a * b); // Если параметров больше, то скобки обязательны
multiplyNumAgain(4, 8); // 32
//-------------
let getFunc = (a, b) => {
  // если нужно объявлять переменную внутри функции, то скобки обязательны
  let summ = a * b; // да и вообще, если больше одной записи в функции, то лучше использовать фигурные скобки
  console.log(summ / 9);
};
getFunc(6, 3); // 2
//-------------
let getReturn = (a) => a * 6; // RETURN можно не указывать в теле функции, если в функции будет только один RETURN и НЕТ СКОБОК. Тогда функция по умолчанию вернет значение выражения.
console.log(getReturn(4));
//-------------
let getReturnAndMore = (a, b) => {
  let mult = a * b;
  // mult; // просто указать имя переменной нельзя, так как у нас больше одного действия в функции
  return mult;
};
console.log(getReturnAndMore(4, 8)); // 32
//-------------

//// ФУНКЦИЯ С RETURN

// function convert(minutes) {
//     return minutes * 60;
// }

convert = (minutes) => minutes * 60;

console.log(convert(39));
