let apartment = {
    kitchen: {
        area: 8,
        high: 2.5,
        shape: "square",
        redecore: true,
        things: ['fridge', 'microwave', 'cooking plate'],

    },
    hall: {
        area: 20,
        high: 2.5,
        shape: "rectangle",
        redecore: true,
        things: ['tv', 'desktop', 'computer', 'wardrobe'],
    },
    hallway: {
        area: 4,
        high: 2.5,
        shape: 'undefined',
        redecore: true,
        things: ['wardrobe', 'table', 'vacuumcleaner'],
        
    },
    bathroom: {
        area: 4,
        hight: 2.5,
        shape: 'squad',
        redecore: false,
        things: ['washingmachine', 'bath', 'sink'],

    },

};
/// ДОСТУП К СВОЙСТВАМ ОБЪЕКТА, ВЛОЖЕННОГО В ОБЪЕКТ
console.log(apartment.hall.shape); // родобьект.дочобьект.ключ
console.log(apartment['bathroom'].redecore); // родобьект['дочобьект'].ключ
console.log(apartment.hallway['high']); // родобьект.дочобьект['ключ']

/// ДОСТУП К МАССИВУ, ВЛОЖЕННОГО В ДОЧЕРНИЙ ОБЬЕКТ
console.log(apartment.kitchen.things); // покажет весь массив things
console.log(apartment.kitchen.things[1]); // покажет элемент под номером [1] - microwave

//// ДОБАВЛЕНИЕ СВОЙСТВ В РОДИТЕЛЬСКИЙ ОБЬЕКТ

apartment.wc = {
    area: 1,
    high: 2.5,
    shape: 'rectangle',
    redecore: true,
    things: ['toilet', 'chemistry'],
};

console.log(apartment.wc);

///////////////////////////////// ДОСТУП К ОБЪЕКТАМ КАК ЭЛЕМЕНТАМ МАССИВА

var myPlants = [ // в этом массиве указаны безымянные объекты, как элементы этого массива
    {
      type: "flowers",
      list: [ // каждый безымянный обьект еще включает свой массив
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  var secondTree = myPlants[1].list[2]; // снаала мы обращаеся к главному массиву [myPlants], затем к объекту через цифру [1], 
  // затем к свойству-массиву этого обьекта по имени [list], и наконец к элементу этого свойства-массива [2]
  console.log(secondTree);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// REST ПАРАМЕТР /////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REST используется, когда количество передаваемых параметров может быть разное число. 
// эти аргументы собираеются в один массив, название которого мы прописываем в параметрах после трех точек [...totals]
let convertUsd = (rate, ...totals) => { // здесь ввели один обычный аргумент [rate] - первая цифра в вызове функции всегда будет отлетать в этот аргумент. 
    //Все остальные числа будут помещатся в один массив. 
    console.log(rate);
    console.log(totals); 
};
convertUsd(70, 2000, 5000, 10000, 120000); // 70, [ 2000, 5000, 10000, 120000 ]


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// SPREAD ПАРАМЕТР /////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SPREAD как бы выпаковывает элементы массива из массива. То есть игнорируются квадратные скобки и даже запятые. 
const numbers = [1,2,3,4,5];
const strings = ['Moscow', 'Voronezh', 'Miami', 'Omsk', 'New-York'];

console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(...numbers); // 1 2 3 4 5
console.log(...strings); // Moscow Voronezh Miami Omsk New-York

//////////////////////////////// SPREAD КОПИРОВАНИЕ МАССИВОВ без ссылочной привязки (мы можем спокойно редактировать новый массив, старый не изменится)

const numbersToo = [...numbers]; // объявляем переменную, назначаем ему пустой массив, куда помещаем содержимое нужного нам массива с помощью ...имя_массива. 
numbersToo[0] = 0; // меняем значение первого элемента у нового массива
console.log(numbers); // [ 1, 2, 3, 4, 5 ] - старый элемент не поменялся
console.log(numbersToo); // [ 0, 2, 3, 4, 5 ] - а новый да. 

//////////////////////////////// SPREAD ОБЪЕДИНЕНИЕ МАССИВОВ

const numbersAndCities = [...numbers, ...strings];
console.log(numbersAndCities); // [1, 2, 3, 4, 5, 'Moscow', 'Voronezh', 'Miami', 'Omsk', 'New-York'] - все идут через запятую

const numbersAndCities2 = [...numbers, ...strings, 'Ukraine'];// - можно добавить какое-то свое значение плюсом
console.log(numbersAndCities2); // [1, 2, 3, 4, 5, 'Moscow', 'Voronezh', 'Miami', 'Omsk', 'New-York', 'Ukraine'] - оно добавится в массив

// CONCAT - раньше такую функцию выполнял этот метод, получалось так:
const numbers2 = [1,2,3,4,5];
const strings2 = ['Moscow', 'Voronezh', 'Miami', 'Omsk', 'New-York'];

const numbersAndStrings = numbers2.concat(strings2); // назначаем переменную, пишем название первого массива, который плюсуем [numbers2], через точку concat. 
//в параметрах метода указываем второй массив, который нужно вместить в новый массив [strings2]
console.log(numbersAndStrings); // [1, 2, 3, 4, 5, 'Moscow', 'Voronezh', 'Miami', 'Omsk', 'New-York']

/////////////////////////////////// SPREAD КОПИРОВАНИЕ И ОБЪЕДИНЕНИЕ ОБЪЕКТОВ

const rusCitiesPopulation = {
    Moscow: 12000000,
    'Saint-Petersburg': 6000000,
    Krasnodar: 1000000
};

const euCitiesPopulation = {
    London: 2500000,
    Madrid: 3500000,
    Roma: 3000000
};
////////////////////// КОПИРОВАНИЕ ОБЪЕКТА
const newObj = {...rusCitiesPopulation};
console.log(newObj); // { Moscow: 12000000, 'Saint-Petersburg': 6000000, Krasnodar: 1000000 }
///////////////////// ОБЪЕДИНЕНИЕ ОБЬЕКТА
const newFusionObj = {...rusCitiesPopulation, ...euCitiesPopulation}; 
console.log(newFusionObj); //{ Moscow: 12000000, 'Saint-Petersburg': 6000000, Krasnodar: 1000000, London: 2500000, Madrid: 3500000, Roma: 3000000 }

// ВАЖНО! Если есть одинаковое свойство в разных обьектах, в новом обьекте буедт указано свойство последнего уазанного обьекта

const o1 = {
    p1: 123,
    p2: 124,
    p3: 125 // тут p3
};

const o2 = {
    p3: 223, // и тут p3 - а значения разные
    p4: 224,
    p5: 225
};

const oTogether = {...o1, ...o2}; // создается новый массив, который включит в себя два вышестоящих
console.log(oTogether); // { p1: 123, p2: 124, p3: 223, p4: 224, p5: 225 } - в обьект попал только p3 последнего указанного обьекта - это обьект o2. 



function calcValues(a, b) {
   return [
    a + b,
    undefined,
    a * b,
    a / b
   ];

}

const [sum, sub, mult, divid] = calcValues(5, 3);
console.log(sum, sub, mult, divid);