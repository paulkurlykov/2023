const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'), // рекламные баннеры
      poster = document.querySelector('.promo__bg'), // элемент - главный баннер-картинка
      genre = document.querySelector('.promo__genre'), // элемент - жанр фильма на главной
      movieList = document.querySelector('.promo__interactive-list'), // блок со списком фильмов UL
      addForm = document.querySelector('.add'), // весь блок формы
      addInput = addForm.querySelector('.adding__input'), // поле формы
      checkbox = addForm.querySelector('[type="checkbox"]'), // чекбокс
      arr = movieDB.movies; // массив с фильмами



function handler(e) { // ПРОСТО ФУНКЦИЯ ОБРАБОТЧИКА. ЗАПУСК НИЖЕ
    e.preventDefault(); // отмена перезагрузки
    const newFilm = addInput.value; // фиксируем значение введенных данных в поле
    const favorite = checkbox.checked; // фиксируем галочку в чекбоксе

    if(newFilm) { // проверка на пустую строку
        if(newFilm.length > 21) {
            let cutInputFlm = newFilm.substr(0,21);
            arr.push(`${cutInputFlm}...`);
            sortArr(arr); // сортируем массив
            createMovieList(arr, movieList); // создаем на сайте список фильмов из массива
        } else {
            arr.push(newFilm); // пушим введенные данные в массив
            sortArr(arr); // сортируем массив
            createMovieList(arr, movieList); // создаем на сайте список фильмов из массива
            }
        if(favorite) {
            console.log('Добавляем любмиый фильм');
        }
    }
    e.target.reset();
}
addForm.addEventListener('submit', handler); // ЗАПУСК ОБРАБОТЧКА

const deleteAdv = (arr) => { // удаляет рекламный блок
    arr.forEach(item => {
        item.remove();
    });
};

const makeChanges = () => { // меняет фон, название жанра
    genre.textContent = 'драма';
    poster.getElementsByClassName.backgroundImage = "url('./images/bg.jpg')";
};

const sortArr = (arr) => { // сортировка
    arr.sort();
};
sortArr(arr);

function createMovieList(films, parent) { // в качестве аргументов - (массив, блок со списком фильмов UL)
    parent.innerHTML = ''; // movieList.innerHTML = ''. Указывая пробел, удаляем весь блок с фильмами с сайта
    films.forEach( (film, i) => { // arr.forEach - перебираем значения массива movieDB
        parent.innerHTML += `<li class="promo__interactive-item">${i+1}) ${film}<div class="delete"></div></li>`; // формируем на сайте список фильмов из массива movieDB
    });
    // УДАЛЕНИЕ ФИЛЬМОВ С САЙТА И С МАССИВА НИЖЕ
    document.querySelectorAll('.delete').forEach((btn, i) => { // получение элементов delete - это массив. for each c пар-ми: значение(элемент), индекс(индекс в массиве)
        btn.addEventListener('click', () => {// вешаем на btn (элемент) обработчик, который сработает при клике
            btn.parentElement.remove(); // после клика происходит удаление из сайта
            arr.splice(i, 1); // далее удаление из массива movieDB
            createMovieList(arr, movieList); // вызываем снова эту функцию, снова удалит весь список фильмов, переберет фильмы, и сформирует новый список с сортировкой. За доли секунды. 
        });// так после удаления фильма на сайте нумерация перезагрузится.
    });
    sortArr(arr);
}

deleteAdv(adv);
makeChanges();
sortArr(arr);
createMovieList(arr, movieList);




const test = document.querySelector('.promo__title');
console.log('1', test);
let test2 = test.innerHTML;
test2 = 'ХУЙ С ГОРЫ';
console.log('2', test2);


