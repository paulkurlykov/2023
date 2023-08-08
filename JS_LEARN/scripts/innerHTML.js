/////// ИСХОДНЫЙ HTML

{
  /* <div class="promo__interactive-title">ПРОСМОТРЕННЫЕ ФИЛЬМЫ</div>
            <ul class="promo__interactive-list">
              <li class="promo__interactive-item">
                ЛОГАН
                <div class="delete"></div>
              </li>
              <li class="promo__interactive-item">
                ЛИГА СПРАВЕДЛИВОСТИ
                <div class="delete"></div>
              </li>
              <li class="promo__interactive-item">
                ЛА-ЛА ЛЭНД
                <div class="delete"></div>
              </li>
              <li class="promo__interactive-item">
                ОДЕРЖИМОСТЬ
                <div class="delete"></div>
              </li>
              <li class="promo__interactive-item">
                СКОТТ ПИЛИГРИМ ПРОТИВ...
                <div class="delete"></div>
              </li>
            </ul>
          </div> */
}

/// [1] /// - ЗАМЕНА БЛОКА ЧЕРЕЗ FOREACH НА РУЧНОЙ HTML

/// замена кода блока LI со вложенным DIV внутри LI

// let liList = document.querySelectorAll(".promo__interactive-item");

// liList.forEach((item) => {
//   item.innerHTML = `ПОМНИТЬ<div class="delete"></div>`;
// });

{
  /* <ul class="promo__interactive-list">
                        <li class="promo__interactive-item">ПОМНИТЬ<div class="delete"></div></li>
                        <li class="promo__interactive-item">ПОМНИТЬ<div class="delete"></div></li>
                        <li class="promo__interactive-item">ПОМНИТЬ<div class="delete"></div></li>
                        <li class="promo__interactive-item">ПОМНИТЬ<div class="delete"></div></li>
                        <li class="promo__interactive-item">ПОМНИТЬ<div class="delete"></div></li>
                    </ul> */
}

// Как понять:

// 1 - item.innerHTML =; Это команда, которая определяет, какой текст будет внутри выбранного элемента (item)

// 2 - если внутри текста есть теги, то команда постарается определить это, как HTML-тег, как в примере выше есть div с классом delete. Этот div также будет помещен в рамки элемента li

// 3 -

///[2]/// - ЗАМЕНА БЛОКА ЧЕРЕЗ FOREACH НА ДИНАМИЧЕСКИЙ HTML (через outerHTML)

// let liList = document.querySelectorAll(".promo__interactive-item"),
//   trashBox = document.querySelectorAll(".delete");

// liList.forEach((item, index) => {
//     item.innerHTML = `${movieDB.movies[index]}${trashBox[index].outerHTML}`; // в содержимое
//   });

// Как понять:

// получаем через outerHTML не содержимое элемента (в отлияии от inner), а весь код элемента включая теги. Затем мы можем подставить этот код динамически

//// ИЛИ

// function updateFilmList() {
//     ul.innerHTML = ''; // очищаем весь блок вообще
//     mdb.forEach((item, index) => {
//       // здесь forEach, но можно и вручную
//       ul.innerHTML += `<li class="promo__interactive-item">${
//         // к ul применили innerHTML, туда вставляем струкутуру
//         index + 1
//       }) ${item}<div class="delete"></div>`;
//     });
//   }

// INNER HTML, TEXTCONTENT, INNERTEXT внутри обработчика
// если нужно менять текст, то все эти свойства нужно получать внутри обработчика, иначе поменять текст будет нельзя. ХЗ, почему так.

// ЗАМЕНА ТЕКСТА ПРИ СОБЫТИИ НА ДРУГОЙ СТАТИЧНЫЙ

// const element = document.querySelector('.class'); // получаем элемент, внутри которого текст, который нужно поменять

// somebox.addEventListener('click', () => {
//   element.textContent = 'new text'; // только в обработчике обращаемся к textContent, и меняем текст
// });

// ЗАМЕНА ТЕКСТА ПРИ СОБЫТИИ НА ДРУГОЙ ДИНАМИЧЕСКИЙ

// let score = 50,
//   divBox = document.querySelector('.class');

// divBox.textContent = score; // устанавливаем как текст значение из переменной score

// somebox.addEventListener('click', () => {
//   score--;
//   divBox.textContent = score; // присваиваем в качестве текста значение переменной еще раз после изменения score. Сама она не поменяется
// });

// ФИКСИРУЕМ СОДЕРЖИМОЕ ФОРМЫ ЧЕРЕЗ VALUE

// let inputData = document.querySelector('input'); // ловим тег input - само окно формы

// sendButton.addEventListener('click', () => {
//   //!!!!! ВАЖНО ОБЪЯВИТЬ ПЕРЕМЕННУЮ ДЛЯ VALUE DНУТРИ ФУНКЦИИ!!!
//   const inputData = input.value; // кладем данные в переменную inputData
// });

////// КАК СМЕНИТЬ КЛАСС

// liList.forEach((item, index) => {
//     item.classList.remove("promo__interactive-item"); // удаляем старый класс
//     item.classList.add("changing-class"); // сетим новый класс
//     item.innerHTML = `${movieDB.movies[index]}<div class="delete"></div>`;
//   });
