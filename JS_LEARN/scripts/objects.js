/////////////////////// ДОСТУП К ОБЪЕКТУ

let horror = {

    city: 'SPb',
    name: 'Ustinya',
    age: 29,
    haircolor: 'Blonde'
};


console.log(horror.age); // 29
console.log(horror['name']); // В КАВЫЧКАХ - Ustinya
let ageUstya = horror.age;
console.log(ageUstya); // БЕЗ КАВЫЧЕК - потому что переменная - 29

/////////////////////// ПРИМЕРЫ ///////////////////////

// let options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     // colors: {
//     //     border: 'black',
//     //     bg: 'red'
//     // }
// };

// console.log(options.name); ////////// вывод в консоль имяобъекта.ключобъекта

// for (let key in options) {
//     // console.log(`Свойство ${key}, имеет значение ${options[key]}`);
//     alert(key + options[key]);
// }

let options = {
    name: 'Paul',
    age: 21,
    gender: 'male',
    education: {
        school: 'n1',
        college: 'n111',
        universcity: 'none'
    },
    makeTest: function() {
        // alert('TEST');
    }
};

options.makeTest();

console.log(options.age);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// ПЕРЕБОР (ПРОВЕРКА) СВОЙСТВ //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////// ПРОСТАЯ ПРОВЕРКА КОНКРЕТНОГО СВОЙСТВА

let checkObj = {
    club: 'Celtic',
    age: 103,
};
console.log(checkObj.club === undefined); /// вернет false, так как такое свойство есть
console.log(checkObj.colors === undefined); /// вернет true, так как такого свойства действительно нет

/////////// ПРОСТАЯ ПРОВЕРКА МЕТОДОМ hasOwnProperty

let checkObj2 = {
    club: 'Celtic',
    age: 103,
};

console.log( checkObj2.hasOwnProperty('age') ); // true
console.log( checkObj2.hasOwnProperty('color') ); // false


/////////// ПРОВЕРКА СВОЙСТВА С ПОМОЩЬЮ IN

let checkObj3 = {
    club: 'Celtic',
    age: 103,
};

console.log('club' in checkObj3); /// имя свойства оборачиваем в кавычки, вернет true, так как такое свойство есть
console.log('weight' in checkObj3); /// имя свойства оборачиваем в кавычки, вернет false, так как такого свойства действительно нет

/////////// ПЕРЕБОР СВОЙСТВ С ПОМОЩЬЮ FOR IN WITH KEY - вернет имена всех свойств

let objForIn = {
    name: 'Susanna',
    age: 26,
    interests: ['music', 'movies', 'animals'],
};

for (let key in objForIn.interests) { // запускаем цикл, в котором назначаем вспомогательную переменную key, и ищем в обьекте {options}. Имена свойств будут передаватья в key. 
    // console.log(key);      // выводим сначала ТОЛЬКО свойства без значений
    console.log(objForIn[key]); // здесь мы выводим ТОЛЬКО значения без свойств
}                              // цикл идет на второй круг, пока не закончатся свойства

///////////////////// ЕЩЕ ПРИМЕР ПЕРЕБОРА FOR IN WITH KEY

const result = { // объект со свойствами, значения которых - массивы
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };


  function makeList(arr) { // в этой функции мы протаскиваем не просто объект, а result.failure (смотри вызов функции)
      const failureItems = []; // назначаем пустой массив, в который положем все, что нужно
      for(let key in arr) { // поиск будет НЕ в обьекте, а в свойстве объекта result.failure
        //   console.log(key); // key в консоли покажет не свойства объекта, а цифры - индексы элементов массива result.failure
        // console.log(arr[key]); // arr[key] выводит значения массива, а не индекс. Это тоже самое, что и result.failure[key]
          failureItems.push(`<li class="text-warning">${key}</li>`); // если указать просто key, он будет выводить индекс. Мы уазываем arr[key]
      }
      return failureItems;
  }
  
  const failuresList = makeList(result.failure); // так как мы вызвали функцию с параметрами result.failure, то мы должны получить данные только свойства failure
  console.log(failuresList); // так и есть



/////////// ТОТ ЖЕ ПЕРЕБОР, НО ПРОСТО С БОЛЕЕ ЧИТАБЕЛЬНЫМ ВЫВОДОМ

// let counter = 0;

// for (let key in options) {    ////// for ( объявляем вспомогательную переменную key
//     // затем пишем in и пишем название объекта)
//     if(typeof( options[key]) === 'object' ) {
//         for (let key2 in options[key]) {
//             alert(`Имя ключа ${key2}, значение ключа ${options[key][key2]}`);

//         }
//     } else {
//         alert(`Имя ключа ${key}, значение ключа ${options[key]}`);
//         counter++;
//     }
// // alert(key + options[key]); // указываем отображительную функцию. Базовый вариант
// // alert('Имя ключа: ' + key + ' Значение: ' + options[key]); // Дописываем строки, чтобы подписать выводимые данные
// // alert(`Имя ключа ${key}, значение ключа ${options[key]}`); // более продвинутый вариант подписанного вывода данных
// }

// console.log(counter);

/////////// УПОРЯДОЧЕНИЕ СВОЙСТВ ОБЪЕКТА

let codes = {             // имена свойств - целые числа (они могут быть преобразованы в строки и обратно без изменений)
    49: 'Германия',
    50: 'Шотландия',
    37: 'Словакия',
};

for (let key in codes) {
    console.log(key);      // вывод - 37, 49, 50. Имена свойств - целые числа выводятся по возрастанию, а не по мере создания
}

///// ЧТО НЕ ЯВЛЯЕТСЯ ЦЕЛЫМИ ЧИСЛАМИ

// 49 - ЦЕЛОЕ ЧИСЛО - сортировка по возрастанию
// +49 - НЕ ЦЕЛОЕ ЧИСЛО (ПО СУТИ СТРОКА) - сортировка по порядку создания
// 4.9 - НЕ ЦЕЛОЕ ЧИСЛО (ДРОБНОЕ) - сортировка по порядку создания


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// МЕТОДЫ ОБЪЕКТОВ /////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////// КАК СОЗДАВАТЬ МЕТОДЫ ОБЪЕКТОВ (СОЗДАНИЕ МЕТОДА | СОЗДАНИЕ МЕТОДОВ ДЛЯ ОБЪЕКТА)

const theObject = { // простейшая конструкция - обьект
    names: 'John',
    ages: 28,
    country: 'Russia'
};

const {names, ages, country} = theObject; // вытягиваем значения, помещаем в переменные

function buildString(name, ages, country) { // формируем функцию, которая будет выводить в консоль строку, включающую значения из переменных
    console.log(`Привет, меня зову ${names}, мне, мать его, ${ages} лет, я живу в, мать его, ${country}`); // Привет, меня зову John, мне, мать его, 28 лет, я живу в, мать его, Russia
}
buildString(name, ages, country);

//////////////////////// ТЕПЕРЬ СОЗДАЕМ САМ МЕТОД

const theObject2 = { // функцию просто перемещаем в обьект, сокращенно таким синтакисом [имя_функции() {}]
    imya: 'John',
    vozrast: 28,
    strana: 'Чехия',
    buildString(name, age, country) { // формируем функцию, которая будет выводить в консоль строку, включающую значения из переменных
        console.log(`Привет, меня зову ${name}, мне, мать его, ${age} лет, и я хотел бы жить в мать его ${country}`); // Привет, меня зову John, мне, мать его, 28 лет, я живу в, мать его, Russia
    }
};

const {imya, vozrast, strana} = theObject2;

theObject2.buildString(imya, vozrast, strana); // вызываем метод таким методом [имя_обьекта.имя_функции();]







console.log( Object.keys(options) );  // подсчет ключей в обьекте, вывод в виде массива
console.log( Object.keys(options).length ); // подсчет ключей цифрой

let {age, gender} = options;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// УДАЛЕНИЕ СВОЙСТВА //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let example = {
    name: 'test',
    secondname: 'test2',
    age: 28,
    sex: 'male',
    politicsviews: 'liberal',
};

console.log(example.age);
// alert(example.age);

delete example.politicsviews;   // УДАЛЯЕТ ЭТО СВОЙСТВО, ХОТЬ ОНО ЗАПИСАНО В ОБЪЕКТЕ, ОНО НЕ ЧИТАЕТСЯ
console.log(example);  // { name: 'test', secondname: 'test2', age: 28, sex: 'male' }, удаленного свойства нет

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// ИЗМЕНЕНИЕ СВОЙСТВА //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let forExample = {
    first: 'Bla',
    then: 'Bla-Bla',
    last: 'Bla-Bla-Bla',
};

forExample.first = 'Ble-Ble'; // Обращаемся к ключу name обьекта forExample и присваеваем новое знчение в КАВЫЧКАХ
console.log(forExample.first); // вуаля - Ble-Ble

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// ИМЯ СВОЙСТВА ИЗ НЕСКОЛЬКИХ СЛОВ //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let user = {
    name: "John",
    age: 30,
    "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
  };

  ///////// ДОСТУП К ИМЕНИ СВОЙСТВА ИЗ НЕСКОЛЬКИХ СЛОВ

//   console.log(user.likes birds); // ERROR - просто имя без кавычек
//   console.log(user."likes birds"); // ERROR - просто имя в кавычках
  console.log(user["likes birds"]); // SUCCESS - именно так нужно выводить такие свойства

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////// ДОБАВЛЕНИЕ СВОЙСТВА //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let testObj = { // тестовый обьект
    name: 'Zara',
    location: 'Gallery',
};

testObj['floor'] = 1;    /// СПОСОБ 1 - /// имяобьекта['имясвойства'] = значение; ///
testObj.pricing = 'medium'; /// СПОСОБ 2 - /// имяобьекта.имясвойства = 'значение'; ///
  
console.log(testObj); // наше свойство там появилось без кавычек { name: 'Zara', location: 'Gallery', floor: 1 }

////////////// ЕЩЕ ПРИМЕР ДОБАВЛЕНИЯ СВОЙСТВА

let values = {
    name: 'John',
    age: 28,
};

let hearts;    // также наззначаем переменную
values['hearts'] = prompt('Сколько ты похитила сердец?'); // назначаем значение prompt через тот самый синтаксис

alert(values['hearts']);   // получаем значение prompt

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// ВЫЧИСЛЯЕМЫЕ СВОЙСТВА (ИМЯ КЛЮЧА - ЭТО БУДЕТ ЗНАЧЕНИЕ ВНЕШНЕЙ ПЕРЕМЕННОЙ) //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let fruit = prompt('какой фрукт купить?'); // назначаем переменную, имя, и значение from prompt

let bag = {
    [fruit]: 5,       // указываем имя этой переменной в квадратных скобках.
                        // это значит, что значение переменной станет именем свойства. 
};                      // если мы введем в prompt допустим apple, то объект получится таким
                        // let bag = {apple: 5};
                        // что похоже, что мы делали в предыдущем пункте с добавлением свойства, но лаконичнее

/////// ТО ЕСТЬ МОЖНО ЗАПИСАТЬ ВОТ ТАК

let fruit2 = prompt("Какой фрукт купить?", "apple");
let bag2 = {};

// имя свойства будет взято из переменной fruit
bag2[fruit2] = 5;

/////// ФОРМИРОВАНИЕ БОЛЕЕ СЛОЖНОГО ИМЕНИ СВОЙСТВА

let vegans = 'carrot';
let cart = {
  ['lovely' + vegans]: 5, // назначаем имя из строки 'lovely' и значения переменной vegans - lovelycarrot
};
console.log(cart);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// СВОЙСТВА ИЗ ПЕРЕМЕННОЙ (ЗНАЧЕНИЕ СВОЙСТВА - ЗНАЧЕНИЕ ПЕРЕМЕННОЙ) (вообще здесь формируем объект из значений переменных)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function makeUser(name, age, height) {   // делаем функцию с тремя параметрами
    return {                             // возвращаем объект, в котором имена свойств совпадают с именем параметров
        name: name,
        age: age,
        height: height,
    };
}

let newUser = makeUser('Paul', 31, 182);   // назначаем переменную, которая будет результатом запуска функции
console.log(newUser.height);               // возвращаем через переменную значение свойства height. Именно имя свойства а не параметра

/////// ЕСТЬ БОЛЕЕ ПРОСТОЙ СПОСОБ НАПИСАНИЯ ОБЪЕКТА, ЕСЛИ ИМЕНА СВОЙСТВ БУДУТ СОВПАДАТЬ С ПАРАМЕТРАМИ

function makeUser2(name, age, height) {   // делаем функцию с тремя параметрами
    return {                             // возвращаем объект, в котором имена свойств совпадают с именем параметров
        name,                            // просто пишем названия параметровчерез запятую, имена свойств будут создаваться такими же
        age,
        height,
    };
}

let newUser2 = makeUser2('Paul', 31, 182);   // назначаем переменную, которая будет результатом запуска функции
console.log(newUser2.height);                // 182 - все работает

/////// МОЖНО КОМБИНИРОВАТЬ ЗЕРКАЛЬНЫЕ СВОЙСТВА И ОБЫЧНЫЕ В ОДНОМ ОБЪЕКТЕ

function makeUser3(name, age, height) {   
    return {                             
        name,                            
        age,
        height,
        weight: 75,        // обычное имя свойства, которое мы не передавали через параметры 
    };
}

let newUser3 = makeUser3('Paul', 31, 182);   // назначаем переменную, которая будет результатом запуска функции
console.log(newUser3.height);   // 182

////////////////////////////////////////// ИМЕНА СВОЙСТВ

let darling = {

    love: true,
    69: false,       // имя 69 будет сведено к строке '69'
};

console.log(darling[69]); // false - можно так
console.log(darling['69']); // false - можно и так
console.log(darling);     // { '69': false, love: true }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// ПРОВЕРКА НА ПУСТОЙ ОБЪЕКТ ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let schedule = {
    // name: 'Pietro',

};

function isEmpty(schedule) {
    
    for (let key in schedule) {   /// пробор будет работать, если есть свойства, поэтому сработает return
        return false;
    }
    return true;    /// но если свойств нет, пробор не сработает, и дальше по порядку идет второй return - true
}

console.log( isEmpty(schedule) );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// СЛОЖЕНИЕ ВСЕХ ЗНАЧЕНИЙ СВОЙСТВ ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let salaries = {

    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;                   /// объявляем переменную, и присваеваем ей ноль

for (let key in salaries) {    /// запускаем перебор
    sum +=salaries[key];       /// присваеваем переменной сумму значений перебранных ключей.
}

console.log(sum);              /// 390

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// МАССОВОЕ ИЗМЕНЕНИЕ СВОЙСТВ-ЦИФР //////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let menu = {
    width: 200,
    height: 400,
    title: 'its menu',
};

function multiplyNumeric() {
        for (let key in menu) {
            if(typeof menu[key] === 'number') {
                menu[key] = menu[key]*2;  // можно было бы записать, как menu[key] *=2;
            }
    
        }
    
}

multiplyNumeric();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// КОПИРОВАНИЕ ОБЪЕКТА //////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// ССЫЛОЧНОЕ КОПИРОВАНИЕ ОБЪЕКТА (если мы меняем что-то в новом обьекте, изменение произойдет и в исходном обьекте, и наоборот)

let oldObject = { // у нас есть вот такой объект, и называем его oldObject
    name: 'Paul',
};

let newObject = oldObject; // мы создаем новую переменную, и ссылаем на нее значение переменной oldObject

console.log(newObject); // таким образом на объект ссылаются и новая переменная newObject
console.log(oldObject); // и старая переменная oldObject. То есть у нас две переменной ссылаются на один объект

////////// АБСОЛЮТНОЕ КОПИРОВАНИЕ ОБЪЕКТА - изменение в новом обьекте не дает изменений в исходном

////////// КОПИРОВАНИЕ ЧЕРЕЗ FOR IN


function copy(mainObj) { // создаем функцию, в параметрах которой передаем какой-либо объект (mainObj, можем назвать как угодно)
    let objCopy = {}; // внутри функции мы создали новый объект - objCopy. Он пока пустой и готов принимать данные :)

    for(let key in mainObj) { // дальше в этой же функции запускаем перебор for in - ищем ключи [key] в объекте [mainObj - имя параметра функции]
        objCopy[key] = mainObj[key]; // здесь мы назначаем нашему пустому обьекту ключи из обьекта, который мы подставим (это будет numbers)
    }
    return objCopy; // и возвращаем наконец то наш новый но уже не пустой обьект objCopy. Это будет результатом функции
}

let numbers = { // пишем наш исходный обьект, который мы будем копировать, и имя которого мы подставим в параметры функции выше. 
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

let numbersNew = copy(numbers); // запускаем ту самую функцию через назначение переменной numbersNew. В параметры функции пишем название нашего исходного обьекта (numbers)

numbers.a = 10; // пробуем менять ключ a в исходном обьекте

console.log(numbers); // и видим, что он поменялся в исходном обьекте - { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbersNew); // но не поменялся в новом обьекте - { a: 2, b: 5, c: { x: 7, y: 4 } }

numbers.a.x = 10; // пробуем поменять значение ключа обьекта в обьекте

console.log(numbers); // и видим, что он поменялся в исходном обьекте - { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbersNew); // и в новом - { a: 2, b: 5, c: { x: 7, y: 4 } }. ТО ЕСТЬ В ОБОИХ ОБЬЕКТАХ, КАК ПРИ ССЫЛОЧНОМ КОПИРОВАНИИ. Потому что вложенные обьекты ведут себя, как ссылочные. 

////////// КОПИРОВАНИЕ ЧЕРЕЗ OBJECT.ASSIGN - копирование обьекта путем слияния двух обьектов в новый. Можно соединить исходный обьект и пустой обьект. Так мы скопируем исходный обьект без изменений. 

let addedObj = { // создаем обьект с каким то данными, который мы назовем ДОБАВОЧНЫМ. Его мы будем добавлять к исходному. 
    d: 10,
    e: 5
};

let add = Object.assign(numbers, addedObj); // назначаем переменную add, которая станет именем нового обьекта. Синтаксис: (исходный_обьект, добавочный_обьект)

console.log(add); // добавочный обьект добавился в конец исходного обьекта - { a: 10, b: 5, c: { x: 7, y: 4 }, d: 10, e: 5 }

// А ЕЩЕ МОЖНО ВОТ ТАК

let addObj2 = { // создаем новый обьект, он будет на месте добавночого
    a: 1,
    b: 2
};

let newObject1 = Object.assign({}, addObj2); // вместо исходного обьекта прямо в параметрах указываем пустой обьект
addObj2.a = 3;
console.log(newObject1); // в результате абсолютная копия добавочного обьекта
console.log(addObj2);

// НО НАОБОРОТ НЕ РАБОТАЕТ - меняются оба обьекта

const initialObj = {
    name: 'Paul',
    age: 28,
    height: 182
};

const fusionObj = Object.assign(initialObj, {}); // взяли исходный обьект,и к нему присабачиваем пустой обьект
console.log(fusionObj); // { name: 'Paul', age: 28, height: 182 }
initialObj.age = 31;
console.log(initialObj);
console.log(fusionObj);

////////// КОПИРОВАНИЕ ЧЕРЕЗ СПРЕД ОПЕРАТОР < ... >

let superObject = {
    name: 'Paul',
    sex: 'man',
    age: 29
};

let duperObject = {...superObject};

duperObject.age = 31;

console.log(superObject); // { name: 'Paul', sex: 'man', age: 29 }
console.log(duperObject); // { name: 'Paul', sex: 'man', age: 31 }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// ПРОТОТИПЫ ОБЪЕКТА //////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let topForm = { // исходный обьект
    width: 500,
    height: 100,
    margin: 20,
    border: 1
};

// let buttomForm = { // создаем второй объект с каким-то отличным свойством от первого
//     height: 200,
// };

// Object.setPrototypeOf(buttomForm, topForm); // с помощью этого метода присваиваем прототип исходного обьекта второму обьекту (новый_обьект, исходный_обьект)

// ИЛИ ЕСТЬ СПОСОБ ПРОЩЕ (правда непонятно, как туда пихать свойства, создет только пустой обьект)

let buttomForm = Object.create(topForm); // есть способ проще - создаем переменную, присваеваем ей метод object.create(исходный_обьект). 

console.log(buttomForm); // здесь нам покажет пустой обьект, потому что при создании выше мы копировали только прототип, а не содержимое
console.log(buttomForm.border); // но при этом если обратится к конкретному свойства, как к исходному обьекту, он покажет это значение из прототипа

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// СОЗДАНИЕ СВОЙСТВА-ФУНКЦИЮ //////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let userFirst = {};

userFirst.sayHello = function() { // таким образом мы создаем свойство в обьекте, значением которого будет функция
    console.log('Hello!');
    };


// user.sayHello();
console.log(userFirst);

///////////////  скоращенный вариант создания свойства - функции

let userSecond = {
    sayHi() {
        console.log('Hello!');
    }
};

console.log(userSecond); // { sayHi: [Function: sayHi] }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// МЕТОД THIS //////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let footballer = {
    club: 'Barcelona',
    age: 34,
    country: 'Argentina',
    sayHi() {
        console.log('Hello! I am playing for ' + this.country); // с помщью this ссылаемся на объект, который указан перед точкой в момент вызова функции.
         // Ниже мы вызываем footballer.sayHi - поэтому в данной функции вместо this подставится footballer.   
    }
};

footballer.sayHi(); // Hello! I am playing for Argentina

///////////// Использование THIS в разных обьектах

let thisIsObj1 = { // эт у нас первый обьект [1]
    name: 'Gabe',
},

thisIsObj2 = { // а это второй [2]
    name: 'Phil',
};

function sayPrivet() { // создаем функцию под названием sayPrivet, но ничему ее не присваиваем
    console.log('Hello! I AM ' + this.name);
}

thisIsObj1.formula = sayPrivet; // а теперь создаем методы, и присвиваем ей действие - нашу функцию. THIS будет опираться на название перед точкой - thisIsObj1
thisIsObj2.formula = sayPrivet; // и второй метод, но значение будет то же. THIS будет опираться на название перед точкой - thisIsObj2

thisIsObj1.formula(); // Hello! I AM Gabe
thisIsObj2.formula(); // Hello! I AM Phil

//// вызов без обьекта при use strict == undefined, без use strict == window
// то есть по умолчанию, если нет обьекта, this ссылается на window

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// T A S K S  //////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');

let calculator = {

    read() {
        calculator.a = a;
        calculator.b = b;
    },
    sum() {
        return (this.a + this.b);
    },
    mul() {
        return (this.a * this.b);
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
console.log(calculator);

///////////////////// НЕСКОЛЬКИХ ПОДРЯД МЕТОДОВ-ФУНКЦИЙ

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep();

/////////////////////////////////////// МЕТОД FREEZE //////////////////////
// метод блокирует попытки изменить свойства указанного обьекта - Object.freeze(имяобьекта);

let s1 = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(s1);
  s1.review = "bad"; // пробуем менять свойства объектов
  s1.newProp = "Test"; // тут тоже
  console.log(s1);  // но ничего не выходит{ name: 'FreeCodeCamp', review: 'Awesome' }

  ///////////////////////////////////// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА - дербаним свойства объекта на отдельные переменные


const person = {
    name2: 'max',
    vozrast: 20,
    blonde: true,
    job: 'doctor',
    club: 'Spartak',
    adress: {
        city: 'Moscow',
        street: 'Myasnitskaya',
        house: 15
    }
};

// В качестве аргументов мы указываем переменные, которые мы создаем. Имя переменной должна совпадать с именем свойства. Иначе будет undefined. Совпадения проверяются только в главном обьекте. 
let {name2} = person; // тоже самое, что написать const name = person.name
person.name2 = 'factor';
console.log(name2);
console.log(person);

/////////////////// ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ

const {vozrast2, city = 'Some city', club} = person; // в скобках назанчаем имя переменной, которой нет в обьекте.
console.log(city); // undefined. Поэтому нужно указать в параметре значение по умолчанию
console.log(vozrast2);
console.log(club);

///////////// ЕСЛИ МЫ ХОТИМ УКАЗАТЬ ИМЯ ПЕРЕМЕННОЙ, НЕ СОВПАДАЮЩЕЙ С ИМЕНЕМ СВОЙСТВА

const {job: workName} = person; // мы указываем имя свойства, затем через двоеточие уазываем имя новой переменной, куда поместим значение job. Еще раз: {имя_свойства: имя_переменной}
console.log(workName); // doctor

/////////////////////// ДЕСТРУКТУРИЗАЦИЯ С ВЛОЖЕННЫМИ ОБЬЕКТАМИ

const {adress: {city: town, street, house}} = person; // чтобы войти во вложенность, указываем имя свойства-объекта [adress], ставим двоеточие, и теперь нам доступны вложенные имена свойств, также указываем их как переменные.
console.log(town); // city ранее у нас уже был использован чуть выше. Поэтому мы также переназначили значение этого свойства другой переменной - town

///////////////// ДЕСТРУКТУРИЗАЦИЯ В ФУНКЦИИ

const horsefan = {
    name: 'Igor',
    secondname: 'Akinfeev',
    workFoot: 'right',
    position: 'goalkeeper',
    club: 'CSKA',
    career: {
        childrenschool: 'Spartak',
        mainschool: 'CSKA',
        current: 'CSKA'
    }
};

function showfan({workFoot, position, career: {childrenschool}}) { // назначили имена переменных с помощью деструктуризации
    console.log('Рабочая нога: ' + workFoot + ', ' + 'детская школа: ' + childrenschool); // вывели имена переменных вместе со строками, назначенных в аргументах функции
}

showfan(horsefan); // а здесь единственный аргумент указываем имя нашего обьекта. 

//////////////// ЕЩЕ ПРИМЕР

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
//   const lowToday = LOCAL_FORECAST.today.low;
//   const highToday = LOCAL_FORECAST.today.high;
  
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

//////////////////////////// КРАТКОЕ ФОРМИРОВАНИЕ ОБЪЕКТА ЧЕРЕЗ ФУНКЦИЮ - если ключ и значение равны 

const createPerson = (name, age, gender) => { // функция создает объект, свойства и значения которого совпадают с именами аргументов
    return {
      name: name,
      age: age,
      gender: gender
    };
  };

////// ПРЕВРАЩАЕТСЯ В

const createPerson2 = (name, age, gender) => ({name, age, gender}); // вернет тоже самое

///////////////////////////////// ФУНКЦИЯ В ОБЪЕКТЕ - КРАТКОЕ НАЗНАЧЕНИЕ

const coolPerson = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };

///// БОЛЕЕ КРАТКО - ЭТО ТАК

const coolPerson2 = {
    name: "Taylor",
    sayHello() { // вместо двоеточия послеключа сразу ставятся скобки (), двоеточие вообще не ставится, сразу открывается фигурная скобка функции {
      return `Hello! My name is ${this.name}.`;
    }
  };

console.log( coolPerson2.sayHello() ); // Вызов функции в объекте через имя объекта - Hello! My name is Taylor.

///////////// ЕЩЕ ПРИМЕР

const bicycle = {
    gear: 2,
    setGear(newGear) { // в скобках прописали аргумент
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);

/////////////////////////////////// CLASSES КЛАССЫ ES6

class EuroFootballer { // создаем класс, синтаксис - [class ClassName {}] . Внутри базовых фигурных скобок первым всегда идет метод constructor, который принимает в аргументы значения будущих свойств
    constructor(name, age, club, country) { // все присвоения и создания ключей пишем внутри скобок construction
    this.name = name; // пишем шаблон для ключей - [this.имя_ключа = аргумент1]
    this.age = age; // [this.имя_ключа = аргумент2]
    this.club = club; // [this.имя_ключа = аргумент3]
    this.country = country; // [this.имя_ключа = аргумент4]
    } // скобка construction закрывается

}

// пишем получаемые данные, и которых будет строится объект. Допустим, мы их получили из формы
let form1 = 'Buffon';
form2 = 18;
form3 = 'Juventus';
form4 = 'Italy';

const footballerID1 = new EuroFootballer(form1, form2, form3, form4); // назначаем новую переменную, хотим сделать из нее объект на основе шаблона. 
// после равно указываем ключевое слово [new], затем через пробел пишем метод, имя которого будет равно имени класса [Footballer]. В параметрах метода передаем переменные. 
console.log(footballerID1); // Footballer {name: 'Buffon', age: 18, club: 'Juventus', country: 'Italy'}

/////////////////////// КЛАСС ОБЪЕКТА С ФУНКЦИЕЙ-МЕТОДОМ ВНУТРИ


class RusFootballer { // создаем класс, синтаксис - [class ClassName {}] . Внутри базовых фигурных скобок первым всегда идет метод constructor, который принимает в аргументы значения будущих свойств
    constructor(name, age, club, country) { // все присвоения и создания ключей пишем внутри скобок construction
    this.name = name; 
    this.age = age; 
    this.club = club; 
    this.country = country;
    }
    validateInput() {
        if(this.name.length < 1||this.age.length < 1||this.club.length < 1||this.country.length < 1) {
                return 'You have sent nothing';
            } else {
                console.log(this[key]);
                return 'ok';
            } 
        }
        
    
    
}

let form11 = 'Arshavin';
form21 = 26;
form31 = '';
form41 = 'Russia';

const footballerID2 = new RusFootballer(form11, form21, form31, form41);
console.log(footballerID2.validateInput()); // ЧТОБЫ ЗАПУСТИТЬ МЕТОД, нужно к нему обратится, как к свойству объекта







