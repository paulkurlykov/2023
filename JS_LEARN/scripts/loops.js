// [1] - while
// [2] - do...while
// [3] - for (with break and continue)
// [4] -
// [5] -
// [6] -
// [7] -
// [8] -
// [9] -
// [10] -
// [11] -
// [12] -

///[1]/// WHILE

let num = 45;

while (num < 50) {
  // сначала проверяется условие
  console.log(num); // затем выполняется код
  num++; // выходит из цикла, когда условие не пройдет
}

///[2]/// DO

let fig = 10;

do {
  // сначала кусок кода
  console.log(fig);
  fig++;
} while (fig < 15); // затем проверка на условие

///[3]/// FOR

let num3 = 15;

for (let i = 1; i < 8; i++) {
  // назначаем итератор ; условие (если true, цикл работает) ; инкремент (или декремент)
  console.log(num3);
  num3++; // это наша глобальная переменная, не путать с итератором i - итератор существует только в рамках цикла
}

/// FOR and BREAK & CONTINUE

// break
for (let i = 1; i < 10; i++) {
  if (i === 5) {
    // условие сравнивает итератор с 5
    break; // когда условие будет true, выполнится break, цикл прервется, код ниже не сработает
  }
  console.log(i); // код в теле цикла под условием будет выполнятся, пока не сработает break, после break этот код не сработает
}

// continue
for (let i = 1; i < 10; i++) {
  if (i === 5) {
    // условие сравнивает итератор с 5
    continue; // когда условие будет true, выполнится continue, код ниже не сработает (пропуск в этой итерации, когда условие true)
  }
  console.log(i); // код в теле цикла под условием будет выполнятся, пока не сработает break, после break этот код не сработает
}

/// еще FOR

var posArr = [];
for (var i = 1; i < 10; i += 2) {
  // [i += 2] - прибавляет не 1, как [++], а сразу 2.
  posArr.push(i);
}

console.log(posArr); // [ 1, 3, 5, 7, 9 ] - получаем нечетные числа

///[4]/// FOR IN (перебор объекта)
//  (key = property or key)
//  (object[key] = value of property or key)

const options = {
  name: 'test', // name = property or key. 'test' is a value.
  width: 1024,
  colors: {
    border: 'black',
    background: 'red',
  },
};

for (let key in options) {
  console.log(key); // key is prop. This will return: name, width and colors.
  console.log(options[key]); // object[key] is value. This will return test, 1024 and { border: 'black', background: 'red' }
}

/// nested FOR IN (for nested objects)

for (let key in options) {
  if (typeof options[key] === 'object' && options[key] !== null) {
    for (let val in options[key]) {
      // val = properties of 'colors' (border and background)
      console.log(
        `This is nested property ${val} and his value ${options[key][val]}` // options[key][val] - value of properties of nested objects.
      );
    }
  } else {
    console.log(`This is property ${key} and its value ${options[key]}`);
  }
}

// counter by FOR IN

let balls = {
  adidas: 'red',
  nike: 'blue',
  reebok: 'green',
};

let count = 0;

for (let key in balls) {
  count++;
}

console.log(count);

///[5]/// FOR OF and FOR EACH (перебор массива) (подробнее в arrays)

/// for of

let arrWords = ['Pietro', 'wanda', 'vision', 'george', 'wolverin', 'hambit'];
let arrNumbers = [1, 2, 14, 5, 29, 8, 81];

for (let value of arrWords) {
  // назначаем переменную value которая будет перебирать значения
  console.log(value); // с каждой итерацией будет показывать значение массива по очереди (pietro, wanda, vision итд)
}

/// for each

arrNumbers.forEach(function (value, index, arr) {
  console.log(`The ${arr} array: index ${index} has ${value} value`);
});

///[6]/// ПЕРЕМНОЖЕНИЕ ВСЕХ ЭЛЕМЕНТОВ ВЛОЖЕННЫХ МАССИВОВ С ПОМОЩЬЮ ОБЫЧНОГО ЦИКЛА FOR И ФУНКЦИИ

function multiplyAll(arr) {
  var product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let n = 0; n < arr[i].length; n++) {
      product = product * arr[i][n];
    }
  }
  return product;
}

console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);

///[7]/// РЕКУРСИЯ
// когда в теле функции идет вызов этой самой функции - получается как бы цикл, иногда - бесконечный

// простейшая рекурсия
let a = 1; // назначаем переменную

function rec() {
  // пишем функцию, которая просто прибавляет +1 к вышеназначенной переменной. Как итератор.
  a++;
  rec(); // и ниже пишем вызов этой самой функции. То есть, когда мы вызовем функцию в первый раз ниже,
  // она же начнет вызывать сама себя по кругу до бесконечности
}

// простейшая рекурсия с прерыванием
let b = 1;

function rec2() {
  b++; // наш итератор
  if (b > 3) {
    // а вот и условие, которое ставим ПЕРЕД вызовом функции самой себя. Она сначала проверяет условие, затем решает - гнать код ниже или нет.
    return b;
  } else return rec2(); // если здесь не будет стоять return, то и return выше будет выдавать undefined почему то
}

console.log(rec2()); // 4

////////// более сложная рекурсия с прерыванием. это просто заменяет цикл for
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

let array = [2, 3, 4];

console.log(sum(array, 1));

///[8]/// ЗАДАЧА ПОИСК В ТЕЛЕФОННОЙ КНИГЕ КОНТАКТОВ

// Setup
var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

//////////////////////////// МОЕ РЕШЕНИЕ ////////////////////////////////////

// function lookUpProfile(name, prop) {
//     let arr = contacts;
//     let n = 0;

//     for(n = 0; n < arr.length; n++) {
//         let proper = arr[n][prop];
//         let isName = arr[n]['firstName'];
//         if(proper !== undefined && isName == name) {
//             return proper;
//         } else if(proper !== undefined && isName !== name) {
//            return 'No such conatct';
//         } else if(proper == undefined) {
//             return 'No such property';
//         }
//     }
// }

// function lookUpProfile(name, prop) {

// let arr = contacts;
// let n;
// let success;
// let noname;
// let noprop;

// for(n = 0; n < arr.length; n++) {
//     if(arr[n]['firstName'] == name) {
//         if(arr[n][prop] !== undefined) {
//              success = arr[n][prop];
//         } else {
//             noprop =  'No such property';
//         }
//     } else {
//         noname = 'No such contact';
//     }
// }

// if(success !==undefined) {
//     return success;
// } else if(noprop !== undefined) {
//     return noprop;
// } else {
//     return noname;
// }
// }

/////////////////////////////// РЕШЕНИЕ №2

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    // цикл, чтобы перебирать элементы главного массива, в каждом элементы уже находятся обьекты
    if (contacts[x].firstName === name) {
      // проверка на имя
      if (contacts[x].hasOwnProperty(prop)) {
        // проверка на свойство
        return contacts[x][prop];
      } else {
        return 'No such property'; // если вложенное условие отдает false
      }
    }
  }
  return 'No such contact'; // если родительское условие отдает false
}

/////////////////////////////// РЕШЕНИЕ №3

//   function lookUpProfile(name, prop) {
//     for (let i = 0; i < contacts.length; i++) {
//       if (contacts[i].firstName === name) {
//         if (prop in contacts[i]) {
//           return contacts[i][prop];
//         } else {
//           return "No such property";
//         }
//       }
//     }
//     return "No such contact";
//   }

console.log(lookUpProfile('Kristian', 'lastName'));
console.log(lookUpProfile('Sherlock', 'likes'));
console.log(lookUpProfile('Harry', 'likes'));
console.log(lookUpProfile('Bob', 'number'));
console.log(lookUpProfile('Bob', 'potato'));
console.log(lookUpProfile('Akira', 'address'));
