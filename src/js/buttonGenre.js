/************* Genre *************/

var buttonGenre = document.querySelector(".genre__button");
var listGenre = document.querySelector(".genre__list");
var Genre = document.querySelector(".genre");

buttonGenre.addEventListener('click', function () {
 buttonGenre.classList.toggle("is-open");
  listGenre.classList.toggle("is-open-genreList");  
});