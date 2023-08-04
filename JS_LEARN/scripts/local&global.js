///[1]/// - ПЕРЕМЕННАЯ ОБЪЯВЛЕНА ГЛОБАЛЬНО, И ИЗМЕНЕНА В ЦИКЛЕ

let global = 5;

for (let i = 0; i < 10; i++) {
  if (i === x) {
    global = 14;
  }
}

console.log(global); // global = 14

///[2]/// - ПЕРЕМЕННАЯ ОБЪЯВЛЕНА ГЛОБАЛЬНО, И ИЗМЕНЕНА В ЦИКЛЕ

let global1 = 6;

let divideNumbers = (a, b) => {
  global1 = a / b; // в функции присваиваем глобальной переменной значение выражения
};

divideNumbers(10, 3);
console.log(global1); // global1 = 3.3

//////// ОБЪЯВЛЯЕМ ПЕРЕМЕННУЮ, В БЛОКЕ КОДА ПРИСВАИВАЕМ ЕЙ ЗНАЧЕНИЕЙ ФУНКЦИИ, И ПОЛЬЗУЕМСЯ, ГДЕ ХОТИМ

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

welcome4(); // вызываем функцию вне блока кода
