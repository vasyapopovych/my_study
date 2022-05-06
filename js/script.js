'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    if(a != null && b != null && a != '' && b !='' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }    
}

// let i = 0;
// while (i < 2) { 
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if(a != null && b != null && a != '' && b !='' && a.length < 50){
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//     } else {
//     console.log("error");
//     i--;
//     }  
//   i++;
// }

// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if(a != null && b != null && a != '' && b !='' && a.length < 50){
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//     } else {
//     console.log("error");
//     i--;
//     } 
//   i++;
// } while (i < 2);

if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 50 && personalMovieDB.count < 30){
    console.log("Вы класический зритель");
} else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
} else{
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);















// let result = '';
// const lengch = 7;

// for (let i=1; i < lengch; i++){

//     for (let j = 0; j < i; j++){
//         result += "6";
//     }

//     result += '\n';
// }

// console.log(result);






// //1
// for (let i = 5; i <= 10; i++) {
//     console.log(i);
//   }
// //2
// metca: for (let i = 20; i >= 10; i--) {
//     if (i == '13') {
//         break metca;
//      }
//     console.log(i);

// }
// //3
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//       }
//   }
// //4
// for (let i = 3; i <= 16; i++){
//     if (i % 2 === 0){
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// let i = 2;
// while (i <= 16) { 
//     if (i % 2 === 0){
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//   i++;
// }

// //5
// const arr = [];

// for (let i = 5; i <= 10; i++) {
// 	arr[i-5] = i;
// }

// console.log(arr);

// //1*
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i=0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);

// //2*
// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//   if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }
// console.log(data);

// //3*
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(result);

// //1***
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);