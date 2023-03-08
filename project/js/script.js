/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
 


    // let promo__genre = document.querySelector('.promo__genre')
    // promo__genre.innerHTML = 'Драма'




    // let ads = document.querySelectorAll('.promo__adv img')
    // ads.forEach(el => el.style.visibility = 'hidden')


    // // 3
    // let promo__bg = document.querySelector('.promo__bg')
    // promo__bg.style.backgroundImage = url(./img/bg.jpg)




    // // 4
    // let promo__interactive_list = document.querySelector('.promo__interactive-list')
    // let sortedMovies = movieDB.movies.sort()
    // let count = 0

    // for (let item of movieDB.movies){
    //     count++
    //     let promo__interactive_item = document.createElement('div')
    //     promo__interactive_item.innerHTML = count + ')' + ' ' +  item 
    //     promo__interactive_list.append(promo__interactive_item)
    // }


// // for(let i = 0; i < 4; i++) {

        button_remove.onclick = function remove(){
             document.getElementsByClassName("promo__interactive-item")[1].remove();}
