/************* Genre *************/

 var buttonGenre = document.querySelector(".genre__button");
 var listGenre = document.querySelector(".genre__list");

 buttonGenre.addEventListener('click', function () {
  console.log("coucou");
  buttonGenre.classList.toggle("is-open");
  listGenre.classList.toggle("is-open-genreList");

});




/************* users menu *************/

let buttonUsers = document.querySelector(".headerSecondPart__profilArrow");
let menuDown = document.querySelector(".menuUsers");
console.log(menuDown);
console.log(buttonUsers);
buttonUsers.addEventListener('click', function () {
  console.log("coucou");
  buttonUsers.classList.toggle("is-open-down");
  menuDown.classList.toggle("menu-users-is-open");
});