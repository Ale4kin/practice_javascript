'use strict';

let numberOfFilms;

function start() {
    numberOfFilms  = +prompt('скоько фильмов вы уже просмотрели', "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms  = +prompt('скоько фильмов вы уже просмотрели', "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
        
    }
    
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('просмотерно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('вы клвссический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('вы киноман');
    } else {
        console.log('ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log("privat");
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`ваш любимый жанр под номером ${i+1}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);



