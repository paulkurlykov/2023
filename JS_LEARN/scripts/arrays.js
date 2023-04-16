let arr = ['Pietro', 'wanda', 'vision', 'george', 'wolverin', 'hambit'];
let arrnumbers = [1, 2, 14, 5, 29, 8, 81];

arr.pop(); // удаляет последний элемент в массиве - в данном случае 6
arr.push('ironman'); // добавляет в конец массива значение в скобках
arr[7] = 0; // присваеваем 15-ой позиции значение 0

console.log(arr);
console.log(arr.length); // количество элементов в массиве
console.log(arr[0]); // вывод нулевого элемента

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// ПЕРЕБОР //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// ПЕРЕБОР ПРОСТЫМ ЦИКЛОМ FOR

let arrFor = ['Messi', 'Ronaldo', 'Leva', 'Donnaruma', 'Spinazzola'];

// for (let i = 0; i < arrFor.length; i++) { // arrFor.lenght - количество элементов в массиве. Цикл работает, пока значение переменной [i] не превысит количество элементов (lenght)
//     console.log(arrFor[i]); // здесь мы выводим значение массива каждую итерацию. Начинаем с нулевого элемента [0] - это Messi, и так далее
// }

// //////////// ПЕРЕБОР FOR OF

// for (let value of arrFor) { // присваиваем переменную value для [of] массива arrFor. Каждую итерацию значение переменной будет равно элементу массива. А элементы каждую итерацию будут перебираться. 
//     console.log(value); // в отличии от предыдущего споосба мы вызываем специально созданную переменную, а не сам массив с условием [i]. 
// } // данная переменная находится в цикле, поэтому где бы мы ее не вызвали, она всегда покажет перебор значений, а не одно какое то значение. 

//////////// ПЕРЕБОР FOR EACH

// обращаемся к нашему конкретному массиву - arr.forEach, внутрь параметра этого метода помещаем функцию
arrFor.forEach( function (item, index, arrow) {     // три параметра (называем, как хотим, главное, чтоб было понятно. В данном примере - понятно.
    // - Первым аргументом передается элемент массива, вторым аргументом - индекс, третьим весь массив (НЕ ИМЯ, просто будет выводится все элементы массива, хз зачем)
    console.log(`${index}: ${item} внутри массива ${arrow}`);
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// ОБЪЕКТ И ФУНКЦИЯ В МАССИВЕ //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arrTwo = [
    'Коля',
    {                // объект идет вторым значением в массиве [2]
        type: 'JS',
        age: 36
    },
    true,
    function() { // ФУНКЦИЯ ИДЕТ ПОД ТРЕТЬИМ НОМЕРОМ [3], ДАЛЕЕ БУДЕМ ЕЕ ВЫЗЫВАТЬ
        console.log('Hi there!');
    }
];

console.log(arrTwo); // выводит весь массив
console.log(arrTwo[0]); // выводит первый элемент массива (начинается с нуля ж)
console.log(arrTwo[1].type); // так как второй элемент - обьект, мы можем вывести конкретный ключ. in this case it's 'type'.
console.log(arrTwo[2]); // выводим следующий ключ массива 
arrTwo[3](); // ВЫЗОВ ФУНКЦИИ В МАССИВЕ (если одно из элементов массива - функция)


//////////// МНОГОМЕРНЫЕ МАССИВЫ (массив в массиве)

let matrix = [
    [1, 2, 3], // [0]
    [4, 5, 6], // [1]
    [7, 8, 9] // [2]
];

console.log(matrix[2][2]); // выведет 9 - потому что ВСЕ С НУЛЯ А НЕ С ЕДИНИЦЫ!

//////////// СВОЙСТВО LENGTH (имямассива.length)

let arrForLength = [
    'Item 1',
    'Item 2',
    'Item 3',
];

console.log(arrForLength.length); // выводит количество элементов

//////////// КОПИРОВАНИЕ МАССИВА (А ТОЧНЕЕ ПЕРЕМЕННОЙ ДЛЯ НЕЕ)

let motherArrow = [
    1,
    2,
    3,
];

let sonArrow = motherArrow;  // сначала назначаем новую переменную, затем присваиваем ей значение того объекта. НЕ НАОБОРОТ. 

console.log(sonArrow); // выводит массив motherArrow. Теперь у этого массива два названия. 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// ИЗМЕНЕНИЕ, ДОБАВЛЕНИЕ, УДАЛЕНИЕ ЭЛЕМЕНТОВ //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// ИЗМЕНЕНИЕ ЭЛЕМЕНТА

sonArrow[1] = 4; // просто пишем название элемента.номерэлемента, который мы хотим изменить, и присваиваем новое значение
console.log(motherArrow); // выведет [ 1, 4, 3 ] - мы изменили первый элемент (по факту второй)

//////////// ДОБАВЛЕНИЕ ЭЛЕМЕНТА

sonArrow[3] = 6; // третьего элемента у нас просто еще не было. После этой записи теперь есть.
console.log(motherArrow); // выведет [ 1, 4, 3, 6 ]

//////////// УДАЛЕНИЕ  ЭЛЕМЕНТА

delete sonArrow[1]; // данный способ удаляет только значение, но не элемент. Длина массива не меняется. 
console.log(sonArrow); // вместо элемента №1 мы видим <empty item>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// МЕТОДЫ МАССИВОВ //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arrForMethods = [  // тестовый массив для методов ниже
    'Carvalho',
    'Vagner Love',
    'Ivica Olic',
    'Brakomonte',
    'Hagen'
];

//////////// МЕТОД PUSH - добавляет новые элементы в конец массива. Без сдвига. 

arrForMethods.push('Domingues'); // добавляет новый элемент в конец массива, указываем значение этого элемента
console.log(arrForMethods); // в массив мы добавили Domingues
arrForMethods.push('Timoschuk', 'Danny'); // добавляем несколько элементов (два)
console.log(arrForMethods);

//////////// МЕТОД UNSHIFT (ДОБАВЛЕНИЕ) - добавляет элемент в начало массива, сдвигая остальные

arrForMethods.unshift('Odiah','Chontofalski'); // 
console.log(arrForMethods); // массив теперь начинается с этих двух товарищей.

//////////// МЕТОД SHIFT (УДАЛЕНИЕ) - удаляет самый первый элемент под нулевым номером. Теперь нулевой элемент тот, который раньше был первым. Сдвигает остальные элементы. 

arrForMethods.shift(); // в параметрах метода ничего не указываем
console.log(arrForMethods); // наш массив лишился Carvalho. 

//////////// МЕТОД POP (УДАЛЕНИЕ) - удаляет последний элемент массива, и порядок остальных не меняется.

arrForMethods.pop(); // синтаксис как в shift
console.log(arrForMethods); // наш массив лишился Danny - он был последним

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// МЕТОД SPLICE (массовое УДАЛЕНИЕ, ИЗМЕНЕНИЕ, ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ) //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// УДАЛЕНИЕ ЭЛЕМЕНТА

let arr1 = [1, 2, 3, 4, 5, 6];
arr1.splice(1, 2);   // СИНТАКСИС: ПЕРВАЯ ЦИФРА - с какого элемента начинаем действовать. ВТОРАЯ ЦИФРА - сколько элементов удаляем. 
console.log(arr1); // в примере мы указываем [1] - с ПЕРВОГО элемента действуем, и [2] - удаляем ДВА элемента, включая тот, с которого начинаем. Это [2] и [3].

//////////// УДАЛЕНИЕ ЭЛЕМЕНТА с помещением его в переменную
let arr2 = [1, 2, 3, 4, 5, 6];
let removed = arr2.splice(1, 2);   // мы бережно завернули удаленные элементы в переменную removed
console.log(removed); // и выводим ее значение

//////////// ЗАМЕНА ЭЛЕМЕНТОВ

let arr3 = [1, 2, 3, 4, 5, 6];
arr3.splice(1, 2, 20, 30); // СИНТАКСИС: ПЕРВАЯ ЦИФРА -с какого элемента начинаем. ВТОРАЯ - сколько элементов меняем. ДАЛЕЕ - пишем значения. Мы меняем ДВА элемента, значит должны указать ДВА значения. Это [20] и [30].
console.log(arr3); // выводит [ 1, 20, 30, 4, 5, 6 ]

//////////// ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ

let arr4 = [1, 2, 3, 4, 5, 6];
arr4.splice(2, 0, 10, 20); // СИНТАКСИС: ПЕРВАЯ ЦИФРА - ПЕРЕД каким элементом мы вставляем новые элементы. ВТОРАЯ ЦИФРА - всегда 0, если мы добавляем. ДАЛЕЕ, через запятую проставляем значения новых элементов. 
console.log(arr4); // [1, 2, 10, 20, 3, 4,  5,  6 ] - мы вставили 10 и 20 перед вторым элементом. 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// МЕТОД SLICE (копирование массивов с выбором элементов) //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// КОПИРОВАНИЕ МАССИВА

let arr5 = [1, 2, 3, 4, 5 ,6];
let arrNew = arr5.slice(2, 4); // СИНТАКСИС: диапазон элементов, которые мы копируем НЕ ВКЛЮЧАЯ ПОСЛЕДНИЙ ЭЛЕМЕНТ
console.log(arrNew); // вернет массив [ 3, 4 ]. То есть со второго элемента [2] до четвертого элемента [4](не включая четвертый!)

//////////// КОПИРОВАНИЕ МАССИВА С ОТРИЦАТЕЛЬНЫМИ ЗНАЧЕНИЯМИ

let arr6 = [1, 2, 3, 4, 5 ,6];
let arrNew1 = arr6.slice(-3, -1); // Здесь мы начинаем копировать с третьего элемента [-3] С КОНЦА до первого элемента [1] С КОНЦА (то есть последнего)
console.log(arrNew1); // вернет [ 4, 5 ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// МЕТОД CONCAT (копирование с добавлением элементов) //////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arr7 = [1,2,3,4,5,6];
let arrNew2 = arr7.concat(10); // в параметрах указываем новый элемент. Он пойдет в конец массива
console.log(arrNew2); // получаем [1, 2, 3, 4, 5, 6, 10]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// МЕТОДЫ ПОИСКА В МАССИВАХ (поиск значений элементов) //////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// INDEX OF - возвращает номер элемента или -1, если ниче не нашел

let arr8 = ['Messi', 'Ronaldo', 'Leva', 'Donnaruma', 'Spinazzola'];
console.log( arr8.indexOf('Spinazzola') ); // arr.indexOf / возвращает НОМЕР элемента - 4
console.log( arr8.indexOf('Belotti') ); // если ничего не находит, то выводит -1
console.log( arr8.indexOf('Messi', 1) ); // второй аргумент - с какого элемента начать поиск. Тут мы начинаем с первого,  амесси стоит нулевым, поэтому -1

//////////// INCLUDES - тоже самое, что и INDEX OF, но возвращает либо true, либо false, если ниче не нашел

//////////// FIND - поиск первого элемента, который удовлетворяет условиям поиска

let arr9 = [
    { name: 'Messi', club: 'Barcelona'},
    {name: 'Ronaldo', club: 'Juventus'},
    {name: 'Levandovski', club: 'Bayern'},
];
let result1 = arr9.find( function (item, index, array) { // в функции три аргумента - элемент (item), ключ (index), массив (array)
    return item.club === 'Juventus';
});
/// Здесь сначала мы назначаем переменную, значение которой будет резульат метода FIND,
/// в параметрах которой лежит функция, которая в совю очередь возвращает результат ЛЮБОГО элемента, который
/// содержит ключ, ЗНАЧЕНИЕ которого равняется Juventus. 

console.log(result1); // Собсна, переменная вернет нам первый подходящий элемент - { name: 'Ronaldo', club: 'Juventus' }

//////////// FILTER - поиск ВСЕХ элементов, которые удовлетворяют условиям поиска

let result2 = arr9.filter( function (item, index, array) {
    return item.club !== 'Bayern'; // ищем все элементы, в значениях ключей которых нет баварки
});
console.log(result2);
/// нам вернули результат - массив
// [
//     { name: 'Messi', club: 'Barcelona' },
//     { name: 'Ronaldo', club: 'Juventus' }
//   ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// МЕТОДЫ SPLIT, JOIN, SORT //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// МЕТОД SPLIT (разделяет одну строку на много элементов с помощью разделителя)

let str = prompt(''); // подразумевается, что клиент введет данные через запятую - сплошная строка с запятыми
let products = str.split(', '); // указываем в параметре метода разделитель - запятая с пробелом

// пример

let str1 = 'Messi, Ronaldo, Levandovski, Kante, Kane'; // у нас есть одна строка, где указаны данные через запятую
let arrTotal = str1.split(', '); // способ разделения пишем В КАВЫЧКАХ - запятая с пробелом
console.log(arrTotal); // результат: массив - [ 'Messi', 'Ronaldo', 'Levandovski', 'Kante', 'Kane' ]
// let arrTotal1 = str.split(', ', 3); - цифра означает количество выводимых элементов. Результат был бы - [ 'Messi', 'Ronaldo', 'Levandovski' ]

//////////// МЕТОД JOIN (наоборот, из множества элементов создает одну строку. Указываем, как будут в строке разделятся элементы)

// arr.join('; ');

// аналогичный способ - просто массив перевести в строку - console.log( string(arrTotal1) ); - но здесь мы не указываем разделитель, он всегда запятая

//////////// МЕТОД SORT

arr.sort(); // метод без параметра сортирует от а до я. Цифры сортирует посимвольно как строку, а не по порядку числа
// arrnumbers.sort(); // сортировка как строки, цифры по умолчанию сортирует так: 1, 14,  2, 29, 5,  8, 81
arrnumbers.sort( function compareNum(a, b) { // сортирует по возрастанию числа
    return a - b;
}); // теперь сортирует норм, по возврастанию числа
 
// ПРИМЕР

let arrNumbers = [1, 39, 67, 39, 923, 2, 31]; // есть у нас значит массив...

function compareNumbers(a, b) {  // 
    return a - b // это функция неизменна - шаблон, меня просто имя. ри любом количестве элементов аргумента всегда два
}

console.log( arrNumbers.sort(compareNumbers) );

/// СОРТИРОВКА ПО АЛФАВИТУ

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort(); // мы обратились к массиву в объекте movieDB
console.log(movieDB.movies); // массив отсортирован по алфавиту




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// МЕТОД MAP //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// МЕТОД MAP - преобразует массив разными способами

let arrItaly = [
    'Donnaruma',
    'Bonucci',
    'Chiesa',
    'Immobile',
];

let result3 = arrItaly.map(function(item, index, array) { // в данном случае мы хоти получить массив с первыми буквами элементов старого массива
    return item[0]; // цифра здесь означает, какую букву выводить в качестве элементов в новом массиве. 0 - это первый символ, 1 - второй и тд
});

console.log(result3); // результат - [ 'D', 'B', 'c', 'I' ]. 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// ПРОВЕРКА ОБЪЕКТА НА МАССИВ //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// проверим предыдущий массив

if(Array.isArray(arrItaly)) { // Синтаксис условия в скобках - Array.isArray(имямассива)
    console.log('that is array');
} else {
    console.log('that is not array');
}

// это массив, поэтому будет true и выведется первыйй консоль лог that is array

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// МЕТОДЫ REDUCE, REDUCE RIGHT //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// МЕТОД REDUCE

let arr12 = [1,2,3,4];

let reduceValue = arr12.reduce(function(previousValue, item, index, arrow) { // previousvalue - предыдущее значение элемента. Остальное как обычно
    return item + previousValue; // return выводит сумму текущего элемента и предыдущего значения элемента
}, 0); // 0 - это стартовое значение для previousValue. Если его не указывать, то оно будет равно первому элементу массива. 

// данная функция перебирает шаг за шагом все элементы (СКОЛЬКО ЭЛЕМЕНТОВ, СТОЛЬКО И ШАГОВ), и с помощью return мы еще суммируем значение элемента с предыдущей СУММОЙ.
// 1 шаг - item = 1, previousvalue = 0 (стартовое значение). СУММА (return) = 1. Именно это число в следующем шаге возьмет previousvalue
// 2 шаг - item = 2, previousvalue = 1. СУММА (return) = 3.
// 3 шаг - item = 3, previousvalue = 3. СУММА (return) = 6
// 4 шаг - item = 4, previousvalue = 6, СУММА (return) = 10. СТОП, это последний шаг, итого переменная будет выдавать именно это значение - 10. 

console.log(reduceValue); // 10

//////////// МЕТОД REDUCE RIGHT - работает аналогично, но проходит с права на лево

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// СОЕДИНИТЬ НЕСКОЛЬКО МАССИВОВ В ОДИН //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let zenit = ['Karavaev', 'Mostovoi', 'Dzuyba'];
let spartak = ['Maksimenko', 'Dzhikiya', 'Sobolev'];
let russiaTeam = [...zenit, ...spartak, 'Golovin', 'Miranchuk']; // через троеточие соединяем два массива, и дополняем какими то своими значениями, они пойдут в конец

console.log(russiaTeam); // Все соединилось - ['Karavaev', 'Mostovoi', 'Dzuyba', 'Maksimenko', 'Dzhikiya', 'Sobolev', 'Golovin', 'Miranchuk']

// через функцию

function log(a,b,c) { // создаем функцию с тремя аргументами
    console.log(a);
    console.log(b);
    console.log(c);
}

let num = [13, 67, 18, 22]; // это массив, в котором четрые элемента. Но подставятся только три первые элемента, потому что аргумента в функции три.

log(...num); // результатом функции будет три консоль.лога 13, 67, 18.

////////////////////////////////////////////////// ИЗМЕНЕНИЕ CONST МАССИВА ///////////////////////////////////////////////////

const s = [5, 6, 7];
// s = [1, 2, 3]; - переназначить массив, объъявленый через const, другим массивом нельзя
// s = []; // - пустым тоже
console.log(s); // Ошибка

const r = [5, 6, 7];
r[2] = 45; // можно изменять только конкретный элемент массива, объявленного через const
console.log(r); // [ 5, 6, 45 ]

///////////////////////////////////// ДЕСТРУКТУРИЗАЦИЯ МАССИВА

const getCalc = (a, b) => [a+b, a-b, a*b, a/b]; // объявляем функцию, которая будет возвращать массив с 4-мя элементами, каждый из которого результат выражения
const result = getCalc(6, 9); // назначаем переменную, и присваиваем ей вызов функции с двумя аргументами, которая должна вернуть нам массив с 4-мя элементами
// let sum = result[0]; // создаем по переменной для мест хранения каждого выражения
// let minus = result[1]; // создаем по переменной для мест хранения каждого выражения
// let multi = result[2]; // создаем по переменной для мест хранения каждого выражения
// let divid = result[3]; // создаем по переменной для мест хранения каждого выражения
// console.log(sum, minus, multi, divid); // 15 -3 54 0.6666666666666666
// но лучше так
const [sum, minus, multi, divid] = result; // этой строчкой мы написали то, что писали четыремя строчками выше. мы назначили временный массив, и подставили туда четыре переменных вместо индексов. result будет возвращать значения индексов,
// и они будут подставлятся в том же порядке. sum заберет индекс [0], minus заберет индекс [1], и так далее. Каждую из этих переменных можно использовать отдельно. 
console.log(sum, minus, multi, divid); // 15 -3 54 0.6666666666666666
console.log(result); // [ 15, -3, 54, 0.6666666666666666 ]

/////// ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ

const getCalc2 = (a, b) => [a+b, undefined, a*b, a/b]; // если одно значение неизвестно
const newResult = getCalc2(6, 9);
// const [sum2, minus2, multi2, divid2] = newResult; // без параметра по умолчанию
const [sum2, minus2 = 'Нет такого выражения', multi2, divid2] = newResult; // с параметром по умолчанию
console.log(sum2, minus2, multi2, divid2); // без параметра по умолчанию - 15 undefined 54 0.6666666666666666
console.log(sum2, minus2, multi2, divid2); // с параметром по умолчанию15 Нет такого выражения 54 0.6666666666666666
