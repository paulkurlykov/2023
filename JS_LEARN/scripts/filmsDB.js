
let personalMoviesDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start() {
        this.count = +prompt('Сколько фильмов вы уже просмотрели?');
    
        while(this.count == ''||this.count == null||isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже просмотрели?');
        }
    },
    rememberMyFilms() {
        for (let i=0; i<2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?'),
                b = prompt('На сколько его цените?');
        
            if(a !=null&&b !=null&&a !=''&&b !=''&&a.length<50) {
                this.movies[a] = b;
        
            } else {
                i--;
            }
        
            
        }
    },
    detectPersonalMovie() {
        if(this.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if(this.count>=10 && this.count < 30) {
            alert('Вы классический киноман!');
        } else if(this.count > 10) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDb(hidden) {
        if(hidden) {
            console.log(this);
        }
    },
    writeYourGenres() {
        for(let i=1; i<=3;i++) {
            do {
                this.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
            } while (this.genres[i-1] === null);
            
            
        }
        this.genres.forEach( function (item, index) {
            console.log(`Любимый жанр #${index+1} это ${item}`)
        });
    },
    toggleVisibleMyDB() {
        if(this.privat === true) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};

// console.log(personalMoviesDB.privat);
// personalMoviesDB.toggleVisibleMyDB();
// console.log(personalMoviesDB.privat);
// personalMoviesDB.showMyDb(this.privat);
// personalMoviesDB.writeYourGenres();
















// let a = +prompt('Один из последних просмотренных фильмов?'), // данный код повторен в виде цикла ниже
//     b = prompt('На сколько его оцените?'),
//     c = prompt('Один из последних просмотренных фильмов?'),
//     d = +prompt('На сколько его цените?');

// personalMoviesDB.movies[a] = b;
// personalMoviesDB.movies[c] = d;



// function rememberMyFilms() {
//     for (let i=0; i<2; i++) {
//         let a = prompt('Один из последних просмотренных фильмов?'),
//             b = prompt('На сколько его цените?');
    
//         if(a !=null&&b !=null&&a !=''&&b !=''&&a.length<50) {
//             personalMoviesDB.movies[a] = b;
    
//         } else {
//             i--;
//         }
    
        
//     }
// }

// rememberMyFilms();

// function detectPersonalMovie() {
//     if(personalMoviesDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if(personalMoviesDB.count>=10 && personalMoviesDB.count < 30) {
//         alert('Вы классический киноман!');
//     } else if(personalMoviesDB.count > 10) {
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// }

// detectPersonalMovie();

// function showMyDb(hidden) {
//     if(!hidden) {
//         console.log(personalMoviesDB);
//     }
// }

// showMyDb(personalMoviesDB.privat);

// function checkPrivatDB() {
//     if (!personalMoviesDB.privat) {
//         console.log(personalMoviesDB);
//         console.log('not private');
//     } else {
//         console.log(personalMoviesDB);
//         console.log('privat');
//     }
// }

// checkPrivatDB();

// function writeYourGenres() {
//     for(let i=1; i<=3;i++) {
//         personalMoviesDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
        
//     }
// }

// writeYourGenres();

