//////////////////////////////// ФИЛЬТР МАССИВА НА ЧИСЛА + ВЫВОД ПЕРВОГО ЧИСЛА

// let arr = [1, 2, '6', 4, 5, 6]


// let getFirstValue = function() {
//     let result = arr.filter( function (item) {
//         return typeof(item) == 'number';
//         });
//                 console.log(result);
//                 return arr[0];
// };


// console.log(getFirstValue(arr));



/////////////// ВЫЧИСЛЕНИЕ ОСТАТКА

showRemainder = (a, b) => a%b;
console.log( showRemaider(5, 2) ); // 1 - остаток от деления 5 на 2

/////////////// НАПОЛНЕНИЕ МАССИВА С ПОМОЩЬЮ PUSH И ФУНКЦИИ

function printArray(num) {
    var newArray = [];

    for(var i = 1; i <= num; i++) {
        newArray.push(i);
    }
    return newArray;
}

// printArray(3);
console.log( printArray(3) );

///////////////// СТРЕЛОЧНАЯ ФУНКЦИЯ ВЕРНУТЬ TRUE

lessThan100 = (a, b) => ((a+b) < 100);


console.log( lessThan100(3,6) );

/////////////////////// ПОИСК ПО ОБЬЕКТУ С ПОМОЩЬЮ ФУНКЦИИ

function phoneticLookup(val) {
    var result = '';
    
    var lookup = {
        alpha: 'Adams',
        bravo: 'Boston',
        charlie: 'Chicago',
        delta: 'Denver',
        echo: 'Easy',
        foxtrot: 'Frank',
    };
    result = lookup[val];
    return result;

}


console.log( phoneticLookup('charlie') );

///////////////////////////////////////////// ПРОВЕРКА ОБЪЕКТА НА СВОЙСТВО С ПОМОЩЬЮ ФУНКЦИИ

let object = { // дан проверяемый объект
    name: 'Paul',
    status: 'Alone',
    age: 31,
    lifestyle: 'Dumb',
};

function checkObj(obj, checkProp) { // строим функцию с двумя аргументами - [1] - имя обьекта, который проверяем, [2] - имя свойства, которое проверяем
    let ourObj = obj[checkProp]; // чтобы не дрочится постоянно с конструкцией (obj[checkProp]), оборачиваем ее в переменную. Это не обязательно, то так красивее и читабельнее. 
    if(obj.hasOwnProperty(checkProp) == true) { // строим проверку на наличие этого свойства в обьекте. 
        // Метод применяем к аргументу obj (мы передаем имя обьекта), и в параметре метода пишем второй аргумент (мы передавали свойство). 
        // Таким образом, метод ищет в таком то обьекте [obj] такое то свойство (checkProp), и выдает булин
        return ourObj; // возвращаем переменную, в которую мы ранее завернули конструкцию с именем обьекта и его свойством (вот зачем!)
    } else {
        return 'Not Found'; // и если бы  свойство не нашли бы, то вернули бы это выражение
    }

  }

console.log( checkObj(object, 'age') ); // САМОЕ ГЛАВНОЕ - имя обьекта мы передаем без кавычек, мы же ссылаемся на конкретное имя объекта, 
// а вот имя свойства в кавычках - ведь по сути мы передаем строку, просто набор букв, которое подставится в аргумент checkProp

var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  ////////////////////////////////////////// RECORDS COLLECTION  ////////////////////////////////////////// 
  // Через функцию пропускаются четыре аргумента - [records] - имя обьекта, [id] - род. свойство объекта, каждое содержит свой вложенный обьект, [prop] - свойство влож. обьекта, [value] - значение свойства
  // задача - если через prop передается строка 'tracks' или 'artist' - должны проверить, если такое свойство. Если нет, то создать массив (для tracks), или свойство для artist
  // Кроме этого, должны проверить на пустую строку 4-ый аргумент. Если пустая строка, то мы должны удалить свойство, для которого оно передается. 
  
  function updateRecords(records, id, prop, value) {
      let setProp = records[id]; // оборачиваем в переменную только два звена доступа к объекту. Если больше, почему то не работает
      if (prop == 'tracks') {
          if(setProp[prop] !== undefined && value !== "") {
            setProp[prop].push(value);
          } else if(setProp[prop] !== undefined && value == "") {
              delete setProp[prop];
          } else if(setProp[prop] == undefined && value !== "") {
            setProp[prop] = [];
            setProp[prop].push(value);
          } else if(setProp[prop] == undefined && value == "") {

          }
      } else if(prop == 'artist' && value == "") {
          delete setProp[prop];
      } else {
        setProp[prop] = value;
      }
    return records;
  }


// function updateRecords(records, id, prop, value) {
//     let per = records[id];
//     per[prop] = value;
//     return records;
// }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.log( updateRecords(recordCollection, 5439, 'artist', 'ABBA') );

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// ТИПИЗАЦИЯ ДАННЫХ //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

let forString = 'Hello';
forNumber = 23;
forBoolean = true;
forNull = null;
forUndefined = undefined;
forSymbol = Symbol;

let forObject = {};
forArray = [];
forFunction = function() {};

///////////////// КОНВЕРТАЦИЯ ТИПА В STRING | СТРОКУ

console.log( (typeof(String(forNumber) ))); // string - метод string(переменная/значение)
console.log(forString + forNumber); // Hello23 - вернул строку. Если в сложении учавствует строка, все приводится к строке
console.log((typeof(String(forNull)))); // string

///////////////// КОНВЕРТАЦИЯ ТИПА В NUMBER | ЧИСЛО

console.log( (typeof(Number('55')))); // 55 - метод number(переменная/значение)
console.log((typeof(+'55'))); // 55 - принуждаем строку к числу с помощью плюса
console.log((typeof(parseInt('15px', 10)))); // number - неочевидный способ, но все таки. Подробнее о parseInt - в поиске тут

///////////////// КОНВЕРТАЦИЯ ТИПА В BOOLEAN | TRUE/FALSE
// 0, '', null, indefined, NaN - всегда будет false

(forNull) ? console.log('true') : console.log('false'); // false

//////////////

console.log( (typeof(Boolean('55')))); // boolean

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// ЗАДАЧКИ /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let x = 5;
console.log(x++); // 5 - потому что постфиксная форма. Значение увеличится, но выведется старое значение.
// открывается скобка, считывается переменная, затем только срабатывает инкремент.
let y = 5;
console.log(++y); // 6 - префиксная форма. Значение увеличится, и выведется новое значение. 
// открывается скобка, срабатывает инкремент, и затем выводится переменная.

console.log([] + false - null + true); // NaN. Вычисление идет последовательно
console.log([] + false); // 'false' - строка. Потому что пустой объект обозначается, как пустая строка''. А если в выражении есть строка, то результатом будет строка.
console.log('false' - null); // NaN - потому что выполнилось нематематическое действие
console.log(typeof(NaN + true)); // NaN - результатом любого выражения с NaN будет NaN. Кроме строки - там concat, и в итоге будет строка
console.log(typeof(NaN + 'false')); // NaNfalse - строка

let a = 1;
let b = a = 2;
console.log(b); // 2. Присваиваение справа на лево. Сначала переменной [a] мы переприсвоили значение 2. Затем переменной [b] присвоили значение переменной [a]

console.log([] + 1 + 2); // '12' - сначала плюсуется пустая строка и 1, получается строка '1'. Затем к ней плюсуется 2, так как одно из элементов выражения строка, получается '1' + '2' = '12'

console.log('622'[0]); // 6 - присабачен не массив, а индекс, который указывает, какой символ будет выведен у присобаченной строки. Строка - '622'. Индекс [0], то есть самый первый символ - 6

console.log(2&&1&&null&&0&&undefined); // null. Оператор && сравнивает логические значения, идет слева направо, остановится на первом false, 
// и выдаст значение, которое выдает false. Первым false выдаст null. Он и будет выведен.

let c = (!!(1 && 2));
d = (1 && 2);
console.log(c === d); // false, только потому что оператор [!!] Превращает следующее за ним значение в boolean. А boolean не равно числу (typeof-чек ниже)
console.log(typeof(c)); // boolean
console.log(typeof(d)); // number

console.log(null||2&&3||4); // 3 - присутствуют два оператора. Приоритет у && выше, поэтому сначала вычисляется 2&&3. Если оба true, то выводится последнее значение - это 3
// затем уже идет || и ищет первый true. Null - это false, дальше как раз идет 3 - это true. Его и выведет. 

let arr1 = [1, 2, 3];
arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false, они не равны, потому что объекты и массивы, не смотря на одинаковое содержимое, и даже пустые, всегда будут разные. 

console.log('Ежик' > 'яблоко'); // false, сравниваем побуквенно - [я] больше, чем [Ё], поединок закончен, сравнение завершено. А если буквы были бы одинаковые, то мы шли дальше до первого победителя. 

console.log(0||''||2||undefined||true||false); // 2 - первое значение true

