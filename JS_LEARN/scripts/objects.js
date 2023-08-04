// [1] - доступ к обьекту
// [2] - как указывать имена свойств
// [3] - деструктуризация обьекта кратко (подробно в [21])
// [4] - получение списка свойств
// [5] - подсчет количества свойств ... 80
// [6] - проверка свойств (на существование)
// [7] - перебор через for in
// [8] - упорядочивание свойств
// [9] - создание методов обьекта
// [10] - добавление, изменение и удаление свойств ... 246
// [11] - имя свойства из нескольких букв и доступ к нему
// [12] - динамические имена свойств. Создание свойств через функцию
// [13] - проверка на пустой обьект
// [14] - сложение и изменение всех свойств-цифр
// [15] - копирование обьекта (ссылочное, абсолютное, for in, object.assign, спред-оператор)... 472
// [16] - прототипы обьекта
// [17] - создание свойства-функцию
// [18] - метод this
// [19] - несколько подряд свойств-функций
// [20] - метод freeze ... 704
// [21] - деструктуризация подробно
// [22] - функция в объекте, как назначать
// [23] - подробнее про assign-копирование

///[1]/// ДОСТУП К ОБЪЕКТУ

let horror = {
  city: 'SPb',
  name: 'Ustinya',
  age: 29,
  haircolor: 'Blonde',
};

console.log(horror.age); // 29
console.log(horror['name']); // В КАВЫЧКАХ - Ustinya
let ageUstya = horror.age;
console.log(ageUstya); // БЕЗ КАВЫЧЕК - потому что переменная - 29

////[2]/// КАК УКАЗЫВАТЬ ИМЕНА СВОЙСТВ

let darling = {
  love: true,
  69: false, // имя 69 будет сведено к строке '69'
  cooking: 'maybe',
  1990: 'definitely not',
  // preferences: games,
};

// квадратные скобки
console.log(darling['cooking']); // имя свойства всегда в кавычках, если это текст и не переменная
console.log(darling[69]); // можно без кавычек, если имя свойства - число (бывает и так)
console.log(darling['preferences']); // будет ошибка, потому что ключ (games) без кавычек (он думает, что это переменная)

// через точку (только если имя свойства - строка)

console.log(darling.cooking); // здесь имя свойства без кавычек

///[3]// ДЕСТРУКТУРИЗАЦИЯ ОБЬЕКТА

const options = {
  // тестовый обьект
  name: 'test',
  width: 1024,
  colors: {
    border: 'black',
    background: 'red',
  },
  getBirthYear: function (age) {
    return 2023 - age;
  },
};

const { border, background } = options.colors; // здесь назначаем переменные border и background, и показываем, откуда мы их берем
console.log(border, background); // it will return 'black' and 'red'

///[4]// ПОЛУЧЕНИЕ СПИСКА СВОЙСТВ

// тестовый обьект в деструктуризации выше

let amountOfKeys = Object.keys(options); // it will return array: [ 'name', 'width', 'colors' ]
console.log(amountOfKeys);

///[5]/// ПОДСЧЕТ КОЛИЧЕСТВА СВОЙСТВ

let countKeys = Object.keys(options).length; // it will return 3

/// наш собственный метод (метод - это функция в качестве значения свойства - в нашем примере getBirthYear)

console.log(options.getBirthYear(33)); // 1990

///[6]/// ПРОВЕРКА СВОЙСТВ (на существование)

// простая проверка конкретного свойства

let checkObj = {
  club: 'Celtic',
  age: 103,
};
console.log(checkObj.club === undefined); /// вернет false, так как такое свойство есть
console.log(checkObj.colors === undefined); /// вернет true, так как такого свойства действительно нет

// проверка свойства методом hasOwnProperty

let checkObj2 = {
  club: 'Celtic',
  age: 103,
};

console.log(checkObj2.hasOwnProperty('age')); // true
console.log(checkObj2.hasOwnProperty('color')); // false

// проверка свойства с помощью IN

let checkObj3 = {
  club: 'Celtic',
  age: 103,
};

console.log('club' in checkObj3); /// имя свойства оборачиваем в кавычки, вернет true, так как такое свойство есть
console.log('weight' in checkObj3); /// имя свойства оборачиваем в кавычки, вернет false, так как такого свойства действительно нет

////[7]/// ПЕРЕБОР СВОЙСТВ через FOR IN - вернет имена всех свойств

let objForIn = {
  name: 'Susanna',
  age: 26,
  interests: ['music', 'movies', 'animals'],
};

for (let key in objForIn.interests) {
  // запускаем цикл, в котором назначаем вспомогательную переменную key, и ищем в обьекте {options}. Имена свойств будут передаватья в key.
  // console.log(key);      // выводим сначала ТОЛЬКО свойства без значений
  console.log(objForIn[key]); // здесь мы выводим ТОЛЬКО значения без свойств
} // цикл идет на второй круг, пока не закончатся свойства

// еще пример перебора через FOR IN

const result = {
  // объект со свойствами, значения которых - массивы
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['no-extra-semi', 'no-dup-keys'],
};

function makeList(arr) {
  // в этой функции мы протаскиваем не просто объект, а result.failure (смотри вызов функции)
  const failureItems = []; // назначаем пустой массив, в который положем все, что нужно
  for (let key in arr) {
    // поиск будет НЕ в обьекте, а в свойстве объекта result.failure
    //   console.log(key); // key в консоли покажет не свойства объекта, а цифры - индексы элементов массива result.failure
    // console.log(arr[key]); // arr[key] выводит значения массива, а не индекс. Это тоже самое, что и result.failure[key]
    failureItems.push(`<li class="text-warning">${key}</li>`); // если указать просто key, он будет выводить индекс. Мы уазываем arr[key]
  }
  return failureItems;
}

const failuresList = makeList(result.failure); // так как мы вызвали функцию с параметрами result.failure, то мы должны получить данные только свойства failure
console.log(failuresList); // так и есть

// перебор свойств вложенного обьекта через for in, подсчет кол-ва свойств

const options1 = {
  name: 'test',
  width: 1024,
  colors: {
    border: 'black',
    background: 'red',
  },
};

let counter = 0; // обьвляем каунтер, который будет считать кол-во свойств в обьекте. Старт с нуля

for (let key in options1) {
  counter++; // повышаем каунтер на единицу
  if (typeof options1[key] === 'object') {
    // если свойство - обьект, то запускаем вложенный цикл
    for (let key2 in options1[key]) {
      // вложенный цикл
      alert(`Имя ключа ${key2}, значение ключа ${options1[key][key2]}`);
    }
  } else {
    alert(`Имя ключа ${key}, значение ключа ${options1[key]}`);
  }
  // alert(key + options1[key]); // указываем отображительную функцию. Базовый вариант
  // alert(`Имя ключа ${key}, значение ключа ${options1[key]}`); // более продвинутый вариант подписанного вывода данных
}

console.log(counter); // покажет три свойства. Вложенный обьект будет считаться как одно свойство здесь.

////[8]/// УПОРЯДОЧЕНИЕ СВОЙСТВ ОБЪЕКТА

let codes = {
  // имена свойств - целые числа (они могут быть преобразованы в строки и обратно без изменений)
  49: 'Германия',
  50: 'Шотландия',
  37: 'Словакия',
};

for (let key in codes) {
  console.log(key); // вывод - 37, 49, 50. Имена свойств - целые числа выводятся по возрастанию, а не по мере создания
}

// правила сортировки с целыми и нецелыми числами

// 49 - ЦЕЛОЕ ЧИСЛО - сортировка по возрастанию
// +49 - НЕ ЦЕЛОЕ ЧИСЛО (ПО СУТИ СТРОКА) - сортировка по порядку создания
// 4.9 - НЕ ЦЕЛОЕ ЧИСЛО (ДРОБНОЕ) - сортировка по порядку создания

////[9]/// СОЗДАНИЕ МЕТОДА ОБЬЕКТА

// как создавать методы обьектов

const theObject = {
  // простейшая конструкция - обьект
  names: 'John',
  ages: 28,
  country: 'Russia',
};

const { names, ages, country } = theObject; // вытягиваем значения, помещаем в переменные

function buildString(names, ages, country) {
  // формируем функцию, которая будет выводить в консоль строку, включающую значения из переменных
  console.log(
    `Привет, меня зову ${names}, мне, мать его, ${ages} лет, я живу в, мать его, ${country}`
  ); // Привет, меня зову John, мне, мать его, 28 лет, я живу в, мать его, Russia
}
buildString(names, ages, country);

// ТЕПЕРЬ СОЗДАЕМ САМ МЕТОД

const theObject2 = {
  // функцию просто перемещаем в обьект, сокращенно таким синтакисом [имя_функции() {}]
  imya: 'John',
  vozrast: 28,
  strana: 'Чехия',
  buildString(name, age, country) {
    // формируем функцию, которая будет выводить в консоль строку, включающую значения из переменных
    console.log(
      `Привет, меня зову ${name}, мне, мать его, ${age} лет, и я хотел бы жить в мать его ${country}`
    ); // Привет, меня зову John, мне, мать его, 28 лет, я живу в, мать его, Russia
  },
};

const { imya, vozrast, strana } = theObject2;

theObject2.buildString(imya, vozrast, strana); // вызываем метод таким методом [имя_обьекта.имя_функции();]

///[10]/// ДОБАВЛЕНИЕ, ИЗМЕНЕНИЕ И УДАЛЕНИЕ СВОЙСТВА

// удаление свойства

let example = {
  name: 'test',
  secondname: 'test2',
  age: 28,
  sex: 'male',
  politicsviews: 'liberal',
};

console.log(example.age);
// alert(example.age);

delete example.politicsviews; // УДАЛЯЕТ ЭТО СВОЙСТВО, ХОТЬ ОНО ЗАПИСАНО В ОБЪЕКТЕ, ОНО НЕ ЧИТАЕТСЯ
console.log(example); // { name: 'test', secondname: 'test2', age: 28, sex: 'male' }, удаленного свойства нет

// изменение свойства

let forExample = {
  first: 'Bla',
  then: 'Bla-Bla',
  last: 'Bla-Bla-Bla',
};

forExample.first = 'Ble-Ble'; // Обращаемся к ключу name обьекта forExample и присваеваем новое знчение в КАВЫЧКАХ
console.log(forExample.first); // вуаля - Ble-Ble

// добавление свойства

let testObj = {
  // тестовый обьект
  name: 'Zara',
  location: 'Gallery',
};

testObj['floor'] = 1; /// СПОСОБ 1 - /// имяобьекта['имясвойства'] = значение; ///
testObj.pricing = 'medium'; /// СПОСОБ 2 - /// имяобьекта.имясвойства = 'значение'; ///

console.log(testObj); // наше свойство там появилось без кавычек { name: 'Zara', location: 'Gallery', floor: 1 }

// еще пример добавления свойства

let values = {
  name: 'John',
  age: 28,
};

let hearts; // также наззначаем переменную
values['hearts'] = prompt('Сколько ты похитила сердец?'); // назначаем значение prompt через тот самый синтаксис

alert(values['hearts']); // получаем значение prompt

let nestedObject = {
  name: 'Pasha',
  age: 33,
  like: {
    drink: 'yes',
    girls: 'yes',
    working: 'no',
  },
};

nestedObject['like']['cleaning'] = 'no';
console.log(nestedObject);

// добавление свойства через this и функцию

let thisIsObj = {
  name: 'Olya',
  age: 'unknown',
  addNewProperty() {
    this.style = 'free';
    return this.style;
  },
};

console.log(thisIsObj.addNewProperty(), thisIsObj);

//     { - the same object with a new property we set earlier
//   name: 'Olya',
//   age: 'unknown',
//   addNewProperty: [Function: addNewProperty],
//   style: 'free'
// }

///[11]/// ИМЯ СВОЙСТВА ИЗ НЕСКОЛЬИХ СЛОВ И ДОСТУП К НЕМУ

let user = {
  name: 'John',
  age: 30,
  'likes birds': true, // имя свойства из нескольких слов должно быть в кавычках
};

// доступ к имени свойства из нескольких слов

//   console.log(user.likes birds); // ERROR - просто имя без кавычек
//   console.log(user."likes birds"); // ERROR - просто имя в кавычках
console.log(user['likes birds']); // SUCCESS - именно так нужно выводить такие свойства

///[12]/// ДИНАМИЧЕСКИЕ ИМЕНА СВОЙСТВ. СОЗДАНИЕ СВОЙСТВ ЧЕРЕЗ ФУНКЦИЮ

let fruit = prompt('какой фрукт купить?'); // назначаем переменную, имя, и значение from prompt

let bag = {
  [fruit]: 5, // указываем имя этой переменной в квадратных скобках.
  // это значит, что значение переменной станет именем свойства.
}; // если мы введем в prompt допустим apple, то объект получится таким
// let bag = {apple: 5};
// что похоже, что мы делали в предыдущем пункте с добавлением свойства, но лаконичнее

// это можно записать вот так

let fruit2 = prompt('Какой фрукт купить?', 'apple');
let bag2 = {};

// имя свойства будет взято из переменной fruit
bag2[fruit2] = 5;

// формирование более сложного имени свойства

let vegans = 'carrot';
let cart = {
  ['lovely' + vegans]: 5, // назначаем имя из строки 'lovely' и значения переменной vegans - lovelycarrot
};
console.log(cart);

//

function makeUser(name, age, height) {
  // делаем функцию с тремя параметрами
  return {
    // возвращаем объект, в котором имена свойств совпадают с именем параметров
    name: name,
    age: age,
    height: height,
  };
}

let newUser = makeUser('Paul', 31, 182); // назначаем переменную, которая будет результатом запуска функции
console.log(newUser.height);
console.log(newUser); // возвращаем через переменную значение свойства height. Именно имя свойства а не параметра

// более простой способ написания обьекта, если имена свойств совпадают с именами параметров функции

function makeUser2(name, age, height) {
  // делаем функцию с тремя параметрами
  return {
    // возвращаем объект, в котором имена свойств совпадают с именем параметров
    name, // просто пишем названия параметровчерез запятую, имена свойств будут создаваться такими же
    age,
    height,
  };
}

let newUser2 = makeUser2('Paul', 31, 182); // назначаем переменную, которая будет результатом запуска функции
console.log(newUser2.height); // 182 - все работает

// можно комбинировать зеркальные свойства и обычные в одном обьекте

function makeUser3(name, age, height) {
  return {
    name,
    age,
    height,
    weight: 75, // обычное имя свойства, которое мы не передавали через параметры
  };
}

let newUser3 = makeUser3('Paul', 31, 182); // назначаем переменную, которая будет результатом запуска функции
console.log(newUser3.height); // 182

///[13]//// ПРОВЕРКА НА ПУСТОЙ ОБЬЕКТ

let schedule = {
  // name: 'Pietro',
};

function isEmpty(schedule) {
  for (let key in schedule) {
    /// пробор будет работать, если есть свойства, поэтому сработает return
    return false;
  }
  return true; /// но если свойств нет, пробор не сработает, и дальше по порядку идет второй return - true
}

console.log(isEmpty(schedule));

////[14]/// СЛОЖЕНИЕ И ИЗМЕНЕНИЕ ВСЕХ ЗНАЧЕНИЙ СВОЙСТВ-ЦИФР

/// сложение свойств-цифр

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0; /// объявляем переменную, и присваеваем ей ноль

for (let key in salaries) {
  /// запускаем перебор
  sum += salaries[key]; /// присваеваем переменной сумму значений перебранных ключей.
}

console.log(sum); /// 390

/// массовое изменение свойств-цифр

let menu = {
  width: 200,
  height: 400,
  title: 'its menu',
};

function multiplyNumeric() {
  for (let key in menu) {
    if (typeof menu[key] === 'number') {
      menu[key] = menu[key] * 2; // можно было бы записать, как menu[key] *=2;
    }
  }
}

multiplyNumeric();

////[15]/// КОПИРОВАНИЕ ОБЪЕКТА

// ссылочное копирование (по сути не копирование, а создание ссылки. Исходный обьек всегда один и тот же.

let oldObject = {
  // у нас есть вот такой объект, и называем его oldObject
  name: 'Paul',
};

let newObject = oldObject; // мы создаем новую переменную, и ссылаем на нее значение переменной oldObject

newObject.name = 'kirill'; // через новую переменную меняем значение свойства name

console.log(newObject); // kirill
console.log(oldObject); // kirill. Значение свойства поменялось в исходном объекте. Потому что мы его не копировали, а сделали всего-лишь ссылку на него через новую переменную.

// абсолютное копирование - изменение в новом обьекте не дает изменений в исходном

// копирование через FOR IN

let nestedObject = {
  // тестовый обьект со вложенным обьектом
  login: 'Paul',
  password: '123456',
  signIns: {
    monday: true,
    friday: false,
  },
};

let nestedObjectCopy = {};

for (let key in nestedObject) {
  // цикл перебора обьекта
  nestedObjectCopy[key] = nestedObject[key]; // копируем свойства и значения
}

console.log(nestedObjectCopy); // здесь будет скопированнй обьект

/// еще пример с изменением

function copy(obj) {
  let objCopy = {};
  for (let key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}

let numbers = {
  // тестовый обьект
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

let numbersNew = copy(numbers); // создаем новую переменную и присваиваем ей запуск функции

numbers.a = 10; // пробуем менять ключ 'a' в исходном обьекте

console.log(numbers); // и видим, что он поменялся в исходном обьекте - { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbersNew); // но не поменялся в новом обьекте - { a: 2, b: 5, c: { x: 7, y: 4 } }

numbers.a.x = 10; // пробуем поменять значение ключа обьекта в обьекте

console.log(numbers); // и видим, что он поменялся в исходном обьекте - { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbersNew); // и в новом - { a: 2, b: 5, c: { x: 7, y: 4 } }. ТО ЕСТЬ В ОБОИХ ОБЬЕКТАХ, КАК ПРИ ССЫЛОЧНОМ КОПИРОВАНИИ. Потому что вложенные обьекты ведут себя, как ссылочные.

// копирование через OBJECT.ASSIGN - копирование обьекта путем слияния двух обьектов в новый. Можно соединить исходный обьект и пустой обьект. Так мы скопируем исходный обьект без изменений.

let addedObj = {
  // создаем обьект с каким то данными, который мы назовем ДОБАВОЧНЫМ. Его мы будем добавлять к исходному.
  d: 10,
  e: 5,
};

let add = Object.assign(numbers, addedObj); // назначаем переменную add, которая станет именем нового обьекта. Синтаксис: (исходный_обьект, добавочный_обьект)

console.log(add); // добавочный обьект добавился в конец исходного обьекта - { a: 10, b: 5, c: { x: 7, y: 4 }, d: 10, e: 5 }

/// а еще можно вот так

let addObj2 = {
  // создаем новый обьект, он будет на месте добавночого
  a: 1,
  b: 2,
};

let newObject1 = Object.assign({}, addObj2); // вместо исходного обьекта прямо в параметрах указываем пустой обьект
addObj2.a = 3;
console.log(newObject1); // в результате абсолютная копия добавочного обьекта
console.log(addObj2);

/// но наоборот не работает - меняются оба обьекта

const initialObj = {
  name: 'Paul',
  age: 28,
  height: 182,
};

const fusionObj = Object.assign(initialObj, {}); // взяли исходный обьект,и к нему присабачиваем пустой обьект
console.log(fusionObj); // { name: 'Paul', age: 28, height: 182 }
initialObj.age = 31;
console.log(initialObj);
console.log(fusionObj);

/// копирование через спред оператор < ... >

let superObject = {
  name: 'Paul',
  sex: 'man',
  age: 29,
};

let duperObject = { ...superObject };

duperObject.age = 31;

console.log(superObject); // { name: 'Paul', sex: 'man', age: 29 }
console.log(duperObject); // { name: 'Paul', sex: 'man', age: 31 }

///[16]/// ПРОТОТИПЫ ОБЪЕКТА

let topForm = {
  // исходный обьект
  width: 500,
  height: 100,
  margin: 20,
  border: 1,
};

// let buttomForm = { // создаем второй объект с каким-то отличным свойством от первого
//     height: 200,
// };

// Object.setPrototypeOf(buttomForm, topForm); // с помощью этого метода присваиваем прототип исходного обьекта второму обьекту (новый_обьект, исходный_обьект)

// ИЛИ ЕСТЬ СПОСОБ ПРОЩЕ (правда непонятно, как туда пихать свойства, создет только пустой обьект)

let buttomForm = Object.create(topForm); // есть способ проще - создаем переменную, присваеваем ей метод object.create(исходный_обьект).

console.log(buttomForm); // здесь нам покажет пустой обьект, потому что при создании выше мы копировали только прототип, а не содержимое
console.log(buttomForm.border); // но при этом если обратится к конкретному свойства, как к исходному обьекту, он покажет это значение из прототипа

////[17]/// СОЗДАНИЕ СВОЙСТВА-ФУНКЦИЮ

let userFirst = {};

userFirst.sayHello = function () {
  // таким образом мы создаем свойство в обьекте, значением которого будет функция
  console.log('Hello!');
};

// user.sayHello();
console.log(userFirst);

// скоращенный вариант создания свойства - функции

let userSecond = {
  sayHi() {
    console.log('Hello!');
  },
};

console.log(userSecond); // { sayHi: [Function: sayHi] }

///[18]//// МЕТОД THIS

let footballer = {
  club: 'Barcelona',
  age: 34,
  country: 'Argentina',
  sayHi() {
    console.log('Hello! I am playing for ' + this.country); // с помщью this ссылаемся на объект, который указан перед точкой в момент вызова функции.
    // Ниже мы вызываем footballer.sayHi - поэтому в данной функции вместо this подставится footballer.
  },
};

footballer.sayHi(); // Hello! I am playing for Argentina

/// Использование THIS в разных обьектах

let thisIsObj1 = {
    // эт у нас первый обьект [1]
    name: 'Gabe',
  },
  thisIsObj2 = {
    // а это второй [2]
    name: 'Phil',
  };

function sayPrivet() {
  // создаем функцию под названием sayPrivet, но ничему ее не присваиваем
  console.log('Hello! I AM ' + this.name);
}

thisIsObj1.formula = sayPrivet; // а теперь создаем методы, и присвиваем ей действие - нашу функцию. THIS будет опираться на название перед точкой - thisIsObj1
thisIsObj2.formula = sayPrivet; // и второй метод, но значение будет то же. THIS будет опираться на название перед точкой - thisIsObj2

thisIsObj1.formula(); // Hello! I AM Gabe
thisIsObj2.formula(); // Hello! I AM Phil

//// вызов без обьекта при use strict == undefined, без use strict == window
// то есть по умолчанию, если нет обьекта, this ссылается на window

////// T A S K S

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');

let calculator = {
  read() {
    calculator.a = a;
    calculator.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
console.log(calculator);

///[19]/// НЕСКОЛЬКИХ ПОДРЯД МЕТОДОВ-ФУНКЦИЙ

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
  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep();

///[20]/// МЕТОД FREEZE

// метод блокирует попытки изменить свойства указанного обьекта - Object.freeze(имяобьекта);

let s1 = {
  name: 'FreeCodeCamp',
  review: 'Awesome',
};
Object.freeze(s1);
s1.review = 'bad'; // пробуем менять свойства объектов
s1.newProp = 'Test'; // тут тоже
console.log(s1); // но ничего не выходит{ name: 'FreeCodeCamp', review: 'Awesome' }

///[21]//// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА - дербаним свойства объекта на отдельные переменные

const person = {
  name2: 'max',
  vozrast: 20,
  blonde: true,
  job: 'doctor',
  club: 'Spartak',
  adress: {
    city: 'Moscow',
    street: 'Myasnitskaya',
    house: 15,
  },
};

// В качестве аргументов мы указываем переменные, которые мы создаем. Имя переменной должна совпадать с именем свойства. Иначе будет undefined. Совпадения проверяются только в главном обьекте.
let { name2 } = person; // тоже самое, что написать const name = person.name
person.name2 = 'factor';
console.log(name2);
console.log(person);

// значение по умолчанию

const { vozrast2, city = 'Some city', club } = person; // в скобках назанчаем имя переменной, которой нет в обьекте.
console.log(city); // undefined. Поэтому нужно указать в параметре значение по умолчанию
console.log(vozrast2);
console.log(club);

/// деструктуризация со вложенными обьектами

const {
  adress: { city: town, street, house },
} = person; // чтобы войти во вложенность, указываем имя свойства-объекта [adress], ставим двоеточие, и теперь нам доступны вложенные имена свойств, также указываем их как переменные.
console.log(town); // city ранее у нас уже был использован чуть выше. Поэтому мы также переназначили значение этого свойства другой переменной - town

/// деструктуризация в функции

const horsefan = {
  name: 'Igor',
  secondname: 'Akinfeev',
  workFoot: 'right',
  position: 'goalkeeper',
  club: 'CSKA',
  career: {
    childrenschool: 'Spartak',
    mainschool: 'CSKA',
    current: 'CSKA',
  },
};

function showfan({ workFoot, position, career: { childrenschool } }) {
  // назначили имена переменных с помощью деструктуризации
  console.log(
    'Рабочая нога: ' + workFoot + ', ' + 'детская школа: ' + childrenschool
  ); // вывели имена переменных вместе со строками, назначенных в аргументах функции
}

showfan(horsefan); // а здесь единственный аргумент указываем имя нашего обьекта.

// еще пример

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

//   const lowToday = LOCAL_FORECAST.today.low;
//   const highToday = LOCAL_FORECAST.today.high;

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

///[22]/// ФУНКЦИЯ В ОБЪЕКТЕ - КРАТКОЕ НАЗНАЧЕНИЕ

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

///////////// ЕСЛИ МЫ ХОТИМ УКАЗАТЬ ИМЯ ПЕРЕМЕННОЙ, НЕ СОВПАДАЮЩЕЙ С ИМЕНЕМ СВОЙСТВА

const { job: workName } = person; // мы указываем имя свойства, затем через двоеточие уазываем имя новой переменной, куда поместим значение job. Еще раз: {имя_свойства: имя_переменной}
console.log(workName); // doctor

//////////////////////////// КРАТКОЕ ФОРМИРОВАНИЕ ОБЪЕКТА ЧЕРЕЗ ФУНКЦИЮ - если ключ и значение равны

const createPerson = (name, age, gender) => {
  // функция создает объект, свойства и значения которого совпадают с именами аргументов
  return {
    name: name,
    age: age,
    gender: gender,
  };
};

////// ПРЕВРАЩАЕТСЯ В

const createPerson2 = (name, age, gender) => ({ name, age, gender }); // вернет тоже самое

/////////////////////////////////// CLASSES КЛАССЫ ES6

class EuroFootballer {
  // создаем класс, синтаксис - [class ClassName {}] . Внутри базовых фигурных скобок первым всегда идет метод constructor, который принимает в аргументы значения будущих свойств
  constructor(name, age, club, country) {
    // все присвоения и создания ключей пишем внутри скобок construction
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

class RusFootballer {
  // создаем класс, синтаксис - [class ClassName {}] . Внутри базовых фигурных скобок первым всегда идет метод constructor, который принимает в аргументы значения будущих свойств
  constructor(name, age, club, country) {
    // все присвоения и создания ключей пишем внутри скобок construction
    this.name = name;
    this.age = age;
    this.club = club;
    this.country = country;
  }
  validateInput() {
    if (
      this.name.length < 1 ||
      this.age.length < 1 ||
      this.club.length < 1 ||
      this.country.length < 1
    ) {
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

///[23]/// - КОПИРОВАНИЕ ASSIGN И СПРЕД-ОПЕРАТОР

// ASSIGN

let object1 = {
  // оригинальный обьект
  a: 10,
  b: 20,
  c: 30,
  z: {
    za: 110,
    zb: 111,
  },
};

let object2 = {
  // второй обьект
  d: 40,
  e: 50,
};

let objectFusion = Object.assign(object2, object1); // оригинальный объект нужно указывать вторым аргументом, тогда его свойства не будут меняться при изменении свойств через копии обьекта:

objectFusion.z.zb = 115; // вложенный обьект всегда будет меняться, в независимости, каким его указали
objectFusion.b = 98;

console.log(objectFusion);
console.log(object1);

// еще раз про то, как указывать аргументы assign

let objectOriginal = {
  proper1: 1990,
  proper2: 2005,
};

let clone = Object.assign({}, objectOriginal); // объединяем пустой обьект и оригинальный. Оригинальный указываем вторым

clone.proper2 = 2023; // меняем свойства у клона. Это же свойство не поменяется в оригинальном обьекте, так как он указан вторым аргументом, а не первым.

console.log(objectOriginal);
