/************* Genre *************/

var buttonGenre = document.querySelector(".genre__button");
var listGenre = document.querySelector(".genre__list");

console.log(buttonGenre);
buttonGenre.addEventListener('click', function () {
  console.log("coucou");
  buttonGenre.classList.toggle("is-open");
  listGenre.classList.toggle("is-open-genreList");
 // buttonGenre.style.display = "none";
 // listGenre.style.display = "flex";
});
