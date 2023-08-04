/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const mdb = movieDB.movies;
mdb.sort();

// 1 - deleting ADS
const advBlock = document.querySelectorAll(".promo__adv")[0];

advBlock.querySelectorAll("img").forEach((item) => {
  item.remove();
});

// 2 - replace COMEDY to DRAMA

const promoGenreOld = document.querySelector(".promo__genre");
promoGenreOld.innerHTML = "ДРАМА";

// 3 - replace background

const promoBG = document.querySelector(".promo__bg");
promoBG.style.backgroundImage = "url('img/bg.jpg')";

// 4 - set film list from the array

let ul = document.querySelector(".promo__interactive-list");

function updateFilmList() {
  ul.innerHTML = "";
  mdb.sort();
  mdb.forEach((item, index) => {
    ul.innerHTML += `<li class="promo__interactive-item">${
      index + 1
    }) ${item}<div class="delete"></div>`;
  });
}
updateFilmList();

// 5 - in forth task

/////

// 1 - add a film which was sent via form into the list

const sendButton = document.querySelector(".yes").nextElementSibling,
  inputData = document.querySelector(".adding__input"),
  inputCheckBox = document.querySelector(".yes").previousElementSibling,
  form = document.querySelector(".add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputData.value.length <= 21) {
    mdb.push(inputData.value);
    updateFilmList();
  } else {
    mdb.push(`${inputData.value.slice(0, 21)}...`);
    updateFilmList();
  }
  if (inputCheckBox.checked == true) {
    alert(`You've marked ${inputData.value} as your favourite movie!`);
  }
});

// 2 - DONE above (cut the name of the film if it's more than 21 letter and add three dots)

// 3 - deleting film from the list f you click on the trash

document.addEventListener("click", (event) => {
  if (event.target.className == "delete") {
    let f = event.target.parentNode.textContent.slice(3);
    mdb.forEach((item, index) => {
      if (f == item) {
        mdb.splice(index, 1);
        console.log(mdb);
        updateFilmList();
      }
    });
  } else {
    console.log(`it doesn't work :(`);
  }
});

// 4
