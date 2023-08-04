// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('How many movies have you watched');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many movies have you watched');
//     }
// }

let a;

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    this.count = +prompt('How many movies have you watched');

    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('How many movies have you watched');
    }
  },
  level: function () {
    if (this.count < 10) {
      alert('Too few films have watched by you');
    } else if (this.count >= 10 && this.count < 30) {
      alert(`You're a classic viewer!`);
    } else if (this.count >= 30) {
      alert(`You're definitely love movies!`);
    } else {
      alert(`There was a mistake!`);
    }
  },
  remember: function () {
    for (let i = 0; i < 2; i++) {
      do {
        a = prompt('Give one of watched films');
      } while (a == '' || a == undefined || a.length > 50);

      do {
        this.movies[a] = +prompt('How would you evaluate it?');
      } while (this.movies[a] == '' || this.movies[a] == undefined);
    }
  },
  writeGenres: function () {
    for (let i = 1; i < 3; i++) {
      this.genres.push(prompt(`Ваш любимый жанр №${i + 1}`));
      if (
        this.genres == '' ||
        this.genres == undefined ||
        this.genres == null
      ) {
        i--;
        this.genres.pop();
      }
    }
    personalMovieDB.genres.forEach(function (item, index) {
      console.log(`Любимый жанр №${index + 1} - это ${item}`);
    });
  },
  showDB: function (privat) {
    if (!privat) {
      console.log(this);
    } else {
      console.log(`this db is private`);
    }
  },
  toggleVisibleMyDB: function () {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  },
};

// personalMovieDB.start();
// personalMovieDB.level();
// personalMovieDB.remember();
// personalMovieDB.writeGenres();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showDB(personalMovieDB.privat);

// console.log(personalMovieDB);
