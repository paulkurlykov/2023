// [1] - ДОСТУПЫ К ЭЛЕМЕНТАМ
// [2] - РАЗНИЦА NODELIST & HTML-COLLECTION
// [3] - ПОЛУЧЕНИЕ СОСЕДНИХ NODE
// [4] - ПОЛУЧЕНИЕ СОСЕДНИХ ЭЛЕМЕНТОВ
// [5] - ПЕРЕБОР ЭЛЕМЕНТОВ FOR ВНУТРИ ЭЛЕМЕНТА
// [6] - СОЗДАНИЕ И РАЗМЕЩЕНИЕ ЭЛЕМЕНТОВ. СОЗДАНИЕ КЛАССА ...74
// [7] - УДАЛЕНИЕ ЭЛЕМЕНТА - REMOVE
// [8] - ЗАМЕНА ОДНОГО ЭЛЕМЕНТА НА ДРУГОЙ - REPLACE WITH ... 112
// [9] - ЗАМЕНА ЭЛЕМЕНТА НА КОД HTML ... 117
// [10] - УСТАРЕВШИЕ КОНСТРУКЦИИ
// [11] - НАЗНАЧЕНИЕ СВОЙСТВА CSS ЭЛЕМЕНТУ ЧЕРЕЗ .STYLE. ...140
// [12] - CSSTEXT - НАЗНАЧИТЬ МНОГО СТИЛЕЙ ЭЛЕМЕНТУ
// [13] - ЦИКЛ FOR / FOREACH ДЛЯ НАЗНАЧЕНИЯ CSS МАССИВУ ЭЛЕМЕНТОВ ... 160
// [14] - ВСТАВИТЬ HTML-КОД В БЛОК/КОНКРЕТНОЕ МЕСТО ... 173

// [15] - СОБЫТИЯ ... 197
// [16] - HTML-tag 'onclick'
// [17] - Onclick function ... 203
// [18] - ADD EVENT LISTENER ... 212
// [19] - Использование объекта EVENT (действия с элементом, с которым было взаимодействие) ... 221
// [20] - REMOVE EVENT LISTENER (+ ограничение срабатывания события)... 234
// [21] - ОТМЕНА ДЕЙСТВИЙ БРАУЗЕРА ПО УМОЛЧАНИЮ ... 250
// [22] - ПРИМЕНЕНИЕ И УДАЛЕНИЕ ОБРАБОТЧИКА К МНОГИМ ЭЛЕМЕНТАМ - forEach ... 270
// [23] - ОГРАНИЧЕНИЕ КОЛ-ВА СРАБАТЫВАНИЙ СОБЫТИЯ - ONCE

// [24] - ДОСТУПЫ К РОДИТЕЛЯМ И ДЕТЯМ ... 305
// [25] - CHILDREN ... 307
// [26] - PARENTS AND SIBLINGS ... 321
// [27] - FOR OF ДЛЯ ФИЛЬТРАЦИИ TEXT-NODES в CHILDNODES
// [28] - СОБЫТИЯ НА ОТПРАВКУ ФОРМЫ ... 347

// [29] - ДИНАМИЧЕСКОЕ ФОРМИРОВАНИЕ ВЕРСТКИ

///////ДОСТУПЫ К ЭЛЕМЕНТАМ

/// getElements

// document.getElementById('box1'); // доступ по ID. Возвращает: <div class="like" id="box1"></div>
// document.getElementsByClassName('like'); // Возвращает массив с элементами этого класса - HTMLCollection.
// document.querySelectorAll('.like:not(.subscribe)'); // Тоже самое, но можно отфильтровать слово в классе. Возвращает коллекцию Nodelist c подходящими узлами.
// document.getElementsByTagName('div'); // Возвращает массив HTMLCollection.
// document.getElementsByTagName('div')[2]; // возвращает - <div class="subscribe"></div>

/// QuerySelectors

// document.querySelector('ul'); // Возвращает первый элемент с указаным селектором
// document.querySelectorAll('.like'); // возвращает коллекцию NodeList с элементами выбранного селектора
// document.querySelectorAll('.like')[1]; // возвращает указанный под индексом элемент - <div class="like subscribe"></div>

///[2]/// - РАЗНИЦА NODELIST & HTML-COLLECTION

// HTML-Collection

//  - Возвращает динамическую структуру. Если после получения коллекции появятся новые элементы с выбранным селектором, он попадет в коллекцию автоматически
//  - HTML-Collection не поддерживает классические методы массива
//  - Позволяет обращаться не только по индексу, но и по имени с помощью метода namedItem()
//  - Может хранить только узлы HTML

// Nodelist

//  - NodeList может хранить любые типы узлов, например текстовые узлы и комментарии
//  - может быть динамическим, такой NodeList возвращают метод getElementsByName() и свойство childNodes. Статический NodeList возвращает метод querySelectorAll().

///[3]//// - ПОЛУЧЕНИЕ СОСЕДНИХ NODE

// document.querySelector('.like').nextSibling; // возвращает следующий Node - #text
// document.querySelector('.like').previousSibling; // возвращает предыдущий Node - #text
// document.querySelector('li').parentNode; // возвращает родительский Node - <ul><li>Корчи</li><li>Йончи</li></ul>
// document.querySelector('body').childNode; // возвращает дочерний Node - undefined

///[4]/// - ПОЛУЧЕНИЕ СОСЕДНИХ ЭЛЕМЕНТОВ

// document.querySelector('.like').nextElementSibling; // возвращает следующий элемент - <div class="subscribe"></div>
// document.querySelector('.like').previousElementSibling; // возвращает предыдущий элемент - <ul><li>Корчи</li><li>Йончи</li></ul>
// document.querySelector('li').parentElement; // возвращает весь родительский элемент - <ul><li>Корчи</li><li>Йончи</li></ul>
// document.querySelector('ul').firstElementChild; // возвращает первый дочерний элемент - <li>Корчи</li>
// document.querySelector('ul').lastElementChild; // возвращает первый дочерний элемент - <li>Йончи</li>
// document.querySelector('ul').children; // показывает массив HTML Collection с дочерними элементами
// document.querySelector('ul').children[1]; // показывает дочерний элемент под указанным индексом - <li>Йончи</li>

///[5]/// - ПЕРЕБОР ЭЛЕМЕНТОВ ВНУТРИ ЭЛЕМЕНТА FOR

for (let node of document.body.childNodes) {
  //перебор элементов выбранного элемента. Возвращает чисто код - все элементы со вложенностями
  if (node.nodeName == '#text') {
    continue;
  }
  console.log(node);
}

///[6]/// - СОЗДАНИЕ И РАЗМЕЩЕНИЕ ЭЛЕМЕНТОВ. СОЗДАНИЕ КЛАССА

// Создаем DIV
const div = document.createElement('div'); // в скобках метода указываем название тега. Не переменная, а в скобках. мы создали простой блок DIV. Но он еще не добавлен на страницу

// Присваиваем DIV'у класс
div.classList.add('black'); // в скобках прописывается имя класса, как строка.

// Размещаем DIV в КОНЕЦ выбранного блока в html - APPEND
document.body.append(div); // слева-направо - мы обращаемся к общей странице[document], затем к [body], и кладем (append) блок [div] в КОНЕЦ блока body

// Размещаем DIV в НАЧАЛО выбранного блока в html - PREPEND
const newHeart = document.createElement('div'); // создали блок
newHeart.classList.add('heart'); // присвоили ему класс
document.querySelector('.wrapper').prepend(newHeart); // добавляем его в блок с классом wrapper (где наши сердца). Это отразится в HTML-коде только в браузере! Здесь ничего не появится.
// document.querySelectorAll('.heart').forEach(item => item.style.cssText = 'background-color: grey'); // обращение к стилю без переменных
const g = document.querySelectorAll('.heart');
g.forEach((item) => (item.style.cssText = 'background-color: grey')); // обращение к стилю с переменными

// Размещаем DIV перед выбранным элементом - BEFORE
const redCircle = document.createElement('div'); // создаем новый блок
redCircle.classList.add('red-circle'); // присваиваем ему класс red-circle
const circle = document.getElementsByClassName('circle'); // создаем переменную, туда кладем массив элементов с классом circle
circle[0].before(redCircle); // указываем, перед каким элементом его разметить
document.getElementsByClassName('red-circle')[0].style.cssText =
  'border-radius: 50px; background-color: red; width: 80px; height: 80px; margin-top: 10px'; // стилизуем типа

// Размещаем DIV после выбранного элемента - AFTER
const yellowCircle = document.createElement('div');
yellowCircle.classList.add('yellow-circle');
circle[2].after(yellowCircle);
document.getElementsByClassName('yellow-circle')[0].style.cssText =
  'border-radius: 50px; background-color: yellow; width: 80px; height: 80px; margin-top: 10px';

///[7]/// - УДАЛЕНИЕ ЭЛЕМЕНТА - REMOVE

yellowCircle.remove(); // указываем переменную, в которую мы помещали созданный блок

///[8]/// ЗАМЕНА ОДНОГО ЭЛЕМЕНТА НА ДРУГОЙ - REPLACE WITH

circle[1].replaceWith(yellowCircle); // сначала указываем элемент, который мы хотим заменить.
// Затем сам метод, и в скобках метода указываем, на что заменить. У нас это блок в переменной yellowCircle, который мы выше удалили.

///[9]/// ЗАМЕНА ЭЛЕМЕНТА НА КОД HTML
// Сначала удалили старые элементы, затем скопировали тот код html, который нужно будет вставить с динамическими изменениями
let newLi = document.createElement('li');
newLi.innerHTML = `<li class="promo__interactive-item">${
  i + 1
}) ${films}<div class="delete"></div></li>`;
oldLi[i].replaceWith(newLi);

///[10]/// УСТАРЕВШИЕ КОНСТРУКЦИИ

// appendchild (вместо APPEND)
// document.body.appendChild(div); // все тоже самое, просто название метода другое

// insertBefore - вместо BEFORE
// document.getElementsByTagName('body')[0].insertBefore(yellowCircle, circle[0]); // сначала указываем блок, в который мы добавим наш блок.
// Затем сам метод, в скобках два аргумента - 1. Наш блок, который вставляем. 2. Блок, перед которым ставим наш блок.

// removeChild - вместо REMOVE
// document.getElementsByTagName('body')[0].removeChild(circle[0]);

// replaceChild - вместо REPLACE WITH
// document.getElementsByTagName('body')[0].replaceChild(yellowCircle, circle[0]); // в скобках два аргумента. 1. Новый блок 2. Старый блок.

///[11]/// НАЗНАЧЕНИЕ СВОЙСТВА CSS ЭЛЕМЕНТУ ЧЕРЕЗ .STYLE.

box.style.backgroundColor = 'blue'; // Сначала мы обращаемся к элементу(ам) [box]. Затем через точку указываем style - доступ к подобъекту [style]. И после этого указываем свойство, как в CSS,
// только в camelCase. И затем этому свойства присваиваем значение, как в CSS. Значение СТРОКОЙ - ['blue'], так как мы должны передать буковки.
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

box.style.width = '500px'; // Тоже строкой, потому что есть строчные символы. Мы должны указывать единицы измерений обязательно, иначе нас не поймут.

btns[1].style.borderRadius = '100%'; // Здесь мы сначала выбрали индексом конкретный элемент из массива. Затем обращаемся к стилю, и задаем радиус. Строкой, потому что указываем строчный символ %

// circles.style.backgroundColor = 'red'; // выдаст ошибку, потому что у нас массив, а мы не указали конкретный индекс, поэтому все обращается к общему массиву, который не имеет таких свойств.

///[12]/// МАССОВОЕ НАЗНАЧЕНИЕ СТИЛЕЙ ЭЛЕМЕНТУ  - CSS TEXT

box.style.cssText = 'opacity: 0.5; heigth: 500px; border: 5px double green'; // так записываются несколько свойств для CSS
// при использовании cssText сбрасываются выполненные ранее обращения к стилю этого элемента
let h = 200;
box.style.cssText = `background-color: #08b6fb; height: ${h}px; border-radius: 10px`; // можно подставлять в строку параметры при помощи косых кавычек
// также новое обращение полностью перекрывает старое. Ну как с переменными, мы назначили новое значение, старое полностью недействительно.

///[13]/// НАЗНАЧЕНИЕ СВОЙСТВ CSS МНОГИМ ЭЛЕМЕНТАМ - ПЕРЕБОРЫ FOR / FOREACH

// цикл for для всех случаев - почти не используется, так как все пользуются querySelectorAll

for (let i = 0; i < btns.length; i++) {
  btns[i].style.cssText =
    'border-radius: 10px; background-color: saddlebrown; margin: 10px';
}

// цикл forEach для querySelectorAll

hearts.forEach((item) => (item.style.background = 'green')); // item - элемент в массиве, он будет перебираться.

///[14]/// ВСТАВКА HTML-КОДА / ТЕКСТА

/// INNERHTML - вставляем структуру HTML (или текст) в какой-то блок

// Вставляем текст
box.innerHTML = 'Извините, а вы рыб продаете?'; // вставка текста в блок, looks like: <div class="box" id="box">Извините, а вы рыб продаете?</div>

// встваляем заголовок H1
box.innerHTML = '<h1>Красивое...</h1>'; // Передаем заголовок h1 в этот блок
// мы не можем передать больше одной структуры в один блок. Если надо больше, то нужно создавать блоки внутри блока.

// TEXT CONTENT - вставляем текст в какой-то блок

box.textContent = 'Вы продоёте рыбов?'; // точно также, если до этого мы использовали метод контента с данным элементом ранее, этот метод его заменит.
box.textContent = '<h1>Вы продоёте рыбов?</h1>'; // в отличии от innerHTML, здесь вставленный код html будет просто текстом, а не кодом.

// insertAdjacentHTMl - вставляем код HTML в конкретное место

box.insertAdjacentHTML('beforeend', '<h2>insertadjacent</h2>'); // принимает два аргумента. 1. Ключевое слово в кавычках (означает куда вставлять). 2. Код, который мы вставляем в кавычках.
// afterbegin - вставляет код в начало выбранного [box] элемента, то есть включает его туда
// beforebegin - вставляем код перед выбранным [box] элементом, не включая его в выбранный элемент.
// afterend - вставляет код после выбранного [box] элемента, не включая его туда.
// beforeend - вставляет код в конец выбранного [box] элемента, включая его туда.

///[15]/// СОБЫТИЯ, УСТАНОВКА ОБРАБОТЧИКА СОБЫТИЙ

///[16]/// - HTML-тег onclick (ПОЧТИ НЕ ИСПОЛЬЗУЕТСЯ)

// <button id="356" onclick="dataLayer.push({name: 'Paul', age: 33};)">ОТПРАВИТЬ</button>;

///[17]/// ONCLICK FUNCTION (ПОЧТИ НЕ ИСПОЛЬЗУЕТСЯ)

// element.onclick = function () { //к элементу дописываем свойство onclick и ему присваеваем функцию
//   dataLayer.push({              // внутри функции код - пушим в даталейер имя и возраст
//     name: "Paul",
//     age: 33,
//   });
// };

///[18]/// ADD EVENT LISTENER (а тут все типы событий  - https://oddler.ru/blog/i63)

// 1 вариант - callback функция внутри метода
element[1].addEventListener('click', () => {
  dataLayer.push({ name: 'Paul', age: 33 });
  console.log(dataLayer);
});

// 2 вариант - функция отдельно, и вызываем ее в методе

function pushDataLayer() {
  // мы вынесли код из callback функции в отдельную функцию
  dataLayer.push({ name: 'Paul', age: 33 });
  console.log(dataLayer);
}

element[2].addEventListener('click', pushDataLayer); // и эту функцию запускаем в методе

///[19]/// Использование объекта EVENT (лучше использовать с функцией отдельно (2 вариант из пред пункта))
btn1.addEventListener('click', function (event) {
  // указываем аргумент - event (название любое)
  console.log(event);
});

// ПОЛУЧЕНИЕ КОДА ЭЛЕМЕНТА И ВЗАИМОДЕЙСТВИЕ С НИМ ПОСЛЕ СОБЫТИЯ
btn1.addEventListener('click', function (e) {
  // указываем аргумент - event (название любое)
  console.log(e.target); // получаем код того элемента, на который кликнули
  e.target.style.background = 'red'; // после клика сделали кнопку красной
});

///[20]/// УДАЛЕНИЕ обработчика (+ ограничение срабатывания события)

let i = 0; // ставим инкремент

function deleteElement(event) {
  // функция, которая вызывается из строки 248, в теле которой всё: и пуш данных, и замена класса
  dataLayer.push({ name: 'Paul', age: 28 });
  console.log(dataLayer);
  event.target.classList.add('promo__menu-item_active');
  i++; // срабатывает инкремент
  if (i == 1) {
    // и после этого идет проверка условия, если i == 1 - то есть если один раз нажали, то...
    directionList[1].removeEventListener('click', deleteElement); // удаляем обработчик, и когда нажмут еще раз, ничего не сработает
  }
}

directionList[1].addEventListener('click', deleteElement); // а этот код срабатывает, когда нажимают на кнопку

///[21]/// ОТМЕНА ДЕЙСТВИЙ БРАУЗЕРА ПО УМОЛЧАНИЮ PREVENTDEFAUT()

link.addEventListener('click', function (event) {
  // prevenDefault нужно ставить первым в функции, потом остальной код !!!
  event.preventDefault(); // данный метод в обработчике событий отменяет стандартное действие браузера. В данном случае, перехода по ссылке не случится.
  console.log(event.target); // А что будет вместо этого? Будет то, что мы укажем ниже
});

///[22]/// ПРИМЕНЕНИЕ И УДАЛЕНИЕ ОБРАБОТЧИКА К МНОГИМ ЭЛЕМЕНТАМ - forEach

btns.forEach((buttn) => {
  // применяем foreach к переменной, в которой массив с кнопками. items = buttn, onclick - функция
  buttn.addEventListener('click', onclick);
});

// удаление обработчика со многих элементов
btns.forEach((buttn) => {
  // так
  buttn.removeEventListener('click', onclick);
});

///[23]/// ОГРАНИЧЕНИЕ КОЛ-ВА СРАБАТЫВАНИЙ СОБЫТИЯ - ONCE

btn1.addEventListener('click', onclick, { once: true }); // третьим аргументом в метод регистрации обработчика ставим объект, свойство которого будет [once], значение [true].

/////// ЗАГРУЗКА СКРИПТА ПОСЛЕ ПОЛНОЙ ЗАГРУЗКИ DOM ЭЛЕМЕНТОВ

document.addEventListener('DOMContentLoaded', () => {
  // сюда весь-весь скрипт
});

///[24]//// ДОСТУПЫ К РОДИТЕЛЯМ И ДЕТЯМ (CHILDREN AND PARENTS)

///[25]////CHILD

/// CHILDNODES (Node-list, вложенные ноды, но не вложенные во вложенные, text - как правило перенос)
// document.querySelector('.ul-site-menu').childNodes;
// можно отфильтровать text с помощью for of (пункт 27 дальше)

///CHILDREN (HTML-Collection со вложенными элементы (не ноды), но не вложенные во вложенные)
// document.querySelector('.ul-site-menu').children;

/// FIRSTCHILD and LASTCHILD (показывает первый и последний нод)
// document.querySelector('.ul-site-menu').firstChild;

/// FIRSTELEMENTCHILD and LASTELEMENTCHILD
// document.querySelector('.ul-site-menu').lastElementChild;

///[26]/// PARENTS and SIBLINGS (родительские и соседние ноды и элементы)

/// PARENTNODE and PARENTELEMENT

// document.querySelector('.ul-site-menu').parentNode; // возвращает родительский нод
// document.querySelector('.ul-site-menu').parentElement; // возвращает родительский элемент

/// NEXTSIBLINGS and PREVIOUSSIBLINGS (овзвращает соседние ноды и элементы на одном уровне вложенности)

// document.querySelector('.ul-site-menu').previousSibling; // возвращает предыдущий в верстке элемент
// document.querySelector('.ul-site-menu').nextElemntSibling; // возвращает следующий в вертске элемент
/// !!! /// соседей он ищет на одном уровне вложенности. Если предыдуший элемент - родитель, или след элемент - уже другой блок со своими детьми - то он будет показывать null

///[27]/// FOR OF ДЛЯ ФИЛЬТРАЦИИ TEXT-NODES в CHILDNODES

for (let node of document.body.childNodes) {
  //перебор элементов выбранного элемента. Возвращает чисто код - все элементы со вложенностями
  if (node.nodeName == '#text') {
    continue;
  }
  console.log(node);
}

///[28]/// СОБЫТИЕ НА ОТПРАВКУ ФОРМЫ

// есть html-код

//
//          <div>
//             <form class="add">
//               <div class="promo__interactive-title">ДОБАВИТЬ НОВЫЙ ФИЛЬМ</div>
//               <span>Введите название фильма</span>
//               <input
//                 class="adding__input"
//                 type="text"
//                 placeholder="Что уже посмотрено...?"
//               />
//               <span>Сделать его любимым?</span>
//               <input type="checkbox" />
//               <span class="yes">Да!</span>
//               <button id="send_data">Подтвердить</button>
//             </form>
//           </div>
//

/// СПОСОБ A  - через кнопку button

// 1 - ловим кнопку отправки формы

// const sendButton = document.getElementbyId('send_data');

// 2 - ловим саму форму (input) через класс

// const input = document.querySelector(".adding__input");

// 3 - ставим листенер на кнопку. Отправленные данные ловим через .value (здесь: input.value)

// sendButton.addEventListener("click", () => { !!!!! ВАЖНО ОБЪЯВИТЬ ПЕРЕМЕННУЮ ДЛЯ VALUE DНУТРИ ФУНКЦИИ!!!
//   const inputData = input.value; // кладем данные в переменную inputData
// });

/// СПОСОБ B - через отправку формы submit

// 1 - ловим блок формы (form), где нужная нам форма

// const form = document.querySelector(".add");

// 2 - ставим прослушку отправленных данных на этот блок

// form.addEventListener("submit", (e) => {
// e.preventDefault(); // плюсом отменяем перезагрузку при отправке формы
// сonst inputData = input.value; // кладем данные в переменную inputData
// });

///[29]/// - ЗАМЕНИТЬ ЭЛЕМЕНТЫ ВНУТРИ ЭЛЕМЕНТА

// есть ul - блок с пунтками li внутри. Задача - заменить li на другие (с  другим текстом или классом)

function updateFilmList() {
  ul.innerHTML = ''; // очищаем весь блок вообще
  mdb.forEach((item, index) => {
    // здесь forEach, но можно и вручную
    ul.innerHTML += `<li class="promo__interactive-item">${
      // к ul применили innerHTML, туда вставляем струкутуру
      index + 1
    }) ${item}<div class="delete"></div>`;
  });
}
