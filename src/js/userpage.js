import { users } from './user.js';


document.addEventListener('DOMContentLoaded', () => {

var profilPicture = document.querySelector('profil__picture');
var totalAnime = document.querySelector('.animes__info--inProgress p');
var newAnime = document.querySelector('.animes__info--new p');

var userhanna = document.querySelector('.userHanna');
var userquentin = document.querySelector('.userQuentin');
var userPriska = document.querySelector('.userPriska');
  var userOum = document.querySelector('.userOum');
  
  var userId = window.localStorage.getItem('userId');

  var user = users.find(function (user) {
    return user.id === userId;
  });

  console.log(user.id);
  if (users.id === 3) {
    newAnime.innerHTML = '20 nouveaux épisodes';
    totalAnime.innerHTML = '5 Animes en cours';
  }else if(users.id === 5) {
    newAnime.innerHTML  = '8 nouveaux épisodes';
    totalAnime.innerHTML  = '3 Animes en cours';
  }else if(users.id === 6) {
    newAnime.innerHTML  = '15 nouveaux épisodes';
    totalAnime.innerHTML  = '6 Animes en cours';
  }else if(users.id === 7) {
    newAnime.innerHTML  = '12 nouveaux épisodes';
    totalAnime.innerHTML  = '2 Animes en cours';
  }else{
    newAnime.innerHTML  = ' 2 nouveaux épisodes';
    totalAnime.innerHTML  = '1 Animes en cours';
  };

});



