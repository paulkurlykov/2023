// [1] - простой пример if and else
// [2] - else if (много условий)
// [3] - switch
// [4] - функция с return вместо условия
// [5] - тернарный оператор
// [6] - множество условий с тернарным оператором

///[1]/// SIMPLE IF AND ELSE

let age = 19;
let isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Sarah cant start driving license 😀');
}

let promptAge = prompt('Write your age here', '');

if (promptAge >= 18) {
  alert('Okay, go ahead, lucky man');
} else {
  const yearWait = 18 - promptAge;
  alert(
    `fuck you, bastard, get off, motherfucker! You sould wait for ${yearWait} years!`
  );
}

let birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

///[2]/// ELSE IF
var names = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home!',
];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  } else {
    return 'Change Me';
  }
}

console.log(golfScore(5, 4));

/// else if попроще пример

let day = 'thursday';

if (day === 'wednesday') {
  console.log("Today is wednesday. It's a little friday!");
} else if (day === 'thursday') {
  console.log('Today is thursday. A weekend is coming!');
} else {
  console.log("I don't know what a day is today");
}

///[3]/// SWITCH (Альтернатива else if, если нужно много проверять)

function caseInSwitch(val) {
  // ниже if else вариант этого кода (для понимания)
  var answer = '';
  // Only change code below this line
  switch (
    val // в скобках указываем, с чем мы будем сравнивать - значение (число, строка, булем), переменная, аргумент функции
  ) {
    case 1:
      answer = 'alpha'; // [case] - обязательный атрибут для switch, [1] - значение которое мы сравниваем, [:] - после двоеточия мы назначаем действие, если есть совпадение. //=>//
      //=>// В данном случае мы присваиваем строку переменной answer [answer = 'alpha'], которую назначили в функции выше.
      break; // эта команда заканчивает перебор, если совпадение в этом case было найдено. Если не указывать break, то он так и продолжит все гонять до бесконечности
    case 2:
      answer = 'beta';
      break;
    case 3:
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
    default:
      answer = 'no matching'; // НЕ обязательный оператор, который нужен, если мы хотим назначить действие, если совпадение не будет найдено
      break; // после default тоже нужен break
  }
  return answer;
}

console.log(caseInSwitch(3));

//// тоже самое, только с if else

function casInSwitch2(val) {
  var answer = '';
  if (val == 1) {
    answer = 'alpha';
  } else if (val == 2) {
    answer = 'beta';
  } else if (val == 3) {
    answer = 'gamma';
  } else if (val == 4) {
    answer = 'delta';
  } else {
    answer = 'no matching';
  }
}

/// еще пример switch - без функции

let a = 2 + 2;

switch (a) {
  case 3: //  в случае если а === 3, то выполняем след код:
    alert('Маловато');
    break;
  case 4: //  в случае если а === 4, то выполняем след код:
    alert('В точку!');
    break;
  case 5: // и так далее
    alert('Перебор');
    break;
  default: // если ни один case не подошел, то выполняется вот этот код:
    alert('Нет таких значений');
}

/// еще пример switch - ОДНО ДЕЙСТВИЕ НА НЕСКОЛЬКО ВАРИАНТОВ

function sequentialSizes(val) {
  var answer = '';
  switch (
    val // ЕСЛИ У НАС ОДНО ДЕЙСТВИЕ НА НЕСКОЛЬКО ВАРИАНТОВ (КЕЙСОВ)
  ) {
    case 1: // чтобы объединять кейсы, мы ничего не пишем после двоеточия
    case 2:
    case 3:
      answer = 'Low'; // и пишем действие только после последнего объединенного кейса
      break; // break пишщем после кейса с действием, как бы подитоживаем
    case 4:
    case 5:
    case 6:
      answer = 'Mid'; // выглядит как if(val === case 4 || val === case 5 || val === case 6) { answer = "Mid"};
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;
  }
  return answer;
}

console.log(sequentialSizes(8));

///[4]/// УПРОЩЕНИЕ IF ELSE - ФУНКЦИЯ C RETURN

function check(a, b) {
  // простейшая функция на проверку true/false
  if (a > b) {
    return true;
  } else {
    return false;
  }
}
console.log(check(6, 4)); // true, потому что 6 больше, чем 4

/// превращается в

function check2(a, b) {
  return a > b;
} // здесь после [return] идет сравнение, а значит будет либо true, либо false
console.log(check2(4, 6)); // false, потому что 4 меньше, чем 6

///[5]/// УПРОЩЕННЫЙ ВАРИАНТ УСЛОВИЙ IF ELSE через знак вопроса ? (ТЕРНАРНЫЙ ОПЕРАТОР)

// синтаксис: [условие без скобок] ? [вариант для true] : [вариант для false];

function checkEqual(a, b) {
  if (a == b) {
    return 'Equal';
  } else {
    return 'Not Equal';
  }
}

// превращается в

function checkingEqual(a, b) {
  return a == b ? 'Equal' : 'Not Equal';
}

console.log(checkEqual(2, 3)); // Not Equal
console.log(checkingEqual(2, 3)); // Not Equal

/// еще вариант

let age1 = 23;
age1 >= 18
  ? console.log('I like to drink wine')
  : console.log("I'd like to drink water");

let drink = age1 >= 18 ? 'wine' : 'water';

console.log(drink);

// the same

let drink2;

if (age1 >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}

console.log(drink2);

//// How to use ternary statement in backticks string:

console.log(`I like drink ${age1 >= 18 ? 'wine' : 'water'}`); // поместили стейтмент в строку  скосыми кавычками

///[6]/// МНОЖЕСТВО УСЛОВИЙ В УПРОЩЕННОМ ВАРИАНТЕ
// [условие без скобок] ? [вариант для true] : [условие для else if] ? [вариант для true] : [условие для else if] ? [вариант для true] : [else вариант для false];

function checkSign(num) {
  // перенос строки перед двоеточием после каждого варианта
  return num > 0
    ? 'Positive' // первое условие типа if
    : num == 0
    ? 'Zero' // второе условие типа else if
    : 'Negative'; // остаточное условие (само условие не пишется типа else )
}
