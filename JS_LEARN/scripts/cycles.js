////////////////////////////// FOR ///////////////////////////////

var posArr = [];
for (var i = 1; i < 10; i +=2) { // [i += 2] - прибавляет не 1, как [++], а сразу 2. 
    posArr.push(i);
}

console.log(posArr); // [ 1, 3, 5, 7, 9 ] - получаем нечетные числа
// -----------------------------------------------------------

var oddArr = [];
for (var i = 0; i < 10; i +=2) { // начинаем с 0, поэтому будем получать четные числа
    oddArr.push(i);
}

console.log(oddArr); // [ 0, 2, 4, 6, 8 ] - получаем четные числа

var negArr = [];
for (var i = 10; i > 0; i -=2) { // [i -= 2] убавляет не 1, как [--], а сразу 2. 
    negArr.push(i);
}

console.log(negArr); // [ 1, 3, 5, 7, 9 ]

//---------------------------------------------------------------

///////////////////////////////////////// ПЕРЕМНОЖЕНИЕ ВСЕХ ЭЛЕМЕНТОВ ВЛОЖЕННЫХ МАССИВОВ С ПОМОЩЬЮ ОБЫЧНОГО ЦИКЛА FOR И ФУНКЦИИ

function multiplyAll(arr) {
    var product = 1;

    for(let i = 0; i < arr.length; i++) {
        for(let n = 0; n < arr[i].length; n++) {
            product = product*arr[i][n];
        }
    }
    return product;
  }
  
  console.log( multiplyAll([[1,2],[3,4],[5,6,7]]) );

  ////////////////////////////////// DO WHILE ///////////////////////
  // сначала выполняется код, затем идет проверка. Код выполнится хотя бы один раз

  // Setup
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
} while (i == 10);

console.log(myArray);
console.log(i);

///////////////////////// РЕКУРСИЯ //////////////////////////
// когда в теле функции идет вызов этой самой функции - получается как бы цикл, иногда - бесконечный

// простейшая рекурсия
let a = 1; // назначаем переменную

function rec() { // пишем функцию, которая просто прибавляет +1 к вышеназначенной переменной. Как итератор. 
    a++;
    rec(); // и ниже пишем вызов этой самой функции. То есть, когда мы вызовем функцию в первый раз ниже,
            // она же начнет вызывать сама себя по кругу до бесконечности
}

// простейшая рекурсия с прерыванием
let b = 1;

function rec2() {  
    b++; // наш итератор
    if(b>3) { // а вот и условие, которое ставим ПЕРЕД вызовом функции самой себя. Она сначала проверяет условие, затем решает - гнать код ниже или нет.
        return b;
    } else return rec2(); // если здесь не будет стоять return, то и return выше будет выдавать undefined почему то
}

console.log( rec2() ); // 4


////////// более сложная рекурсия с прерыванием. это просто заменяет цикл for
function sum(arr, n) {
          if(n<=0) {
            return 0;
          } else {
            return sum(arr, n-1) + arr[n-1];
          }
  }

  let array = [2,3,4];

  console.log( sum(array, 1) );

  ////////////////////////////// ЗАДАЧА ПОИСК В ТЕЛЕФОННОЙ КНИГЕ КОНТАКТОВ /////////////////////////////////

  // Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
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
    for (let x = 0; x < contacts.length; x++) { // цикл, чтобы перебирать элементы главного массива, в каждом элементы уже находятся обьекты
      if (contacts[x].firstName === name) { // проверка на имя
        if (contacts[x].hasOwnProperty(prop)) { // проверка на свойство
          return contacts[x][prop];
        } else {
          return "No such property"; // если вложенное условие отдает false
        }
      }
    }
    return "No such contact"; // если родительское условие отдает false
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


console.log( lookUpProfile("Kristian", "lastName") );
console.log( lookUpProfile("Sherlock", "likes") );
console.log( lookUpProfile("Harry", "likes") );
console.log( lookUpProfile("Bob", "number") );
console.log( lookUpProfile("Bob", "potato") );
console.log( lookUpProfile("Akira", "address") );

