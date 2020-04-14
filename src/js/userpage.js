import { users } from './user.js';


document.addEventListener('DOMContentLoaded', () => {

var profilPicture = document.querySelector('.profil__picture');
var profilName = document.querySelector('.profil__name');
var totalAnime = document.querySelector('.animes__info--inProgress p');
var newAnime = document.querySelector('.animes__info--new p');

var userhanna = document.querySelector('.userHanna');
var userquentin = document.querySelector('.userQuentin');
var userPriska = document.querySelector('.userPriska');
var userOum = document.querySelector('.userOum');
var pictureUserOnMenu = document.querySelector('.headerSecondPart__profilPicture');
  var recentUser = document.querySelector('.menuUsers__fonts');
  
  var userId = window.localStorage.getItem('userId');

  var user = users.find(function (user) {
    return user.id === userId;
  });

  profilPicture.src = user.picture;
  profilName.innerHTML = user.name;
  pictureUserOnMenu.src = user.picture;
  recentUser.innerHTML = user.name;

  console.log(user.id);
  if (user.id === "3") {
    newAnime.innerHTML = '20 nouveaux épisodes';
    totalAnime.innerHTML = '5 Animes en cours';
  }else if(user.id === "5") {
    newAnime.innerHTML  = '8 nouveaux épisodes';
    totalAnime.innerHTML  = '3 Animes en cours';
  }else if(user.id === "6") {
    newAnime.innerHTML  = '15 nouveaux épisodes';
    totalAnime.innerHTML  = '6 Animes en cours';
  }else if(user.id === "7") {
    newAnime.innerHTML  = '12 nouveaux épisodes';
    totalAnime.innerHTML  = '2 Animes en cours';
  }else{
    newAnime.innerHTML  = ' 2 nouveaux épisodes';
    totalAnime.innerHTML  = '1 Animes en cours';
  };

});



