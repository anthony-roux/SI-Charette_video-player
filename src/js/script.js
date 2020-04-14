import iconAdd from '/icons/icons-add-vignette-hover-2.svg';
import iconStar from '/icons/stars-circle.svg';
import iconPlay from '/icons/icons-play-vignette-hover.svg';
import { users } from './user.js';

/************* users menu *************/

let buttonUsers = document.querySelector('.headerSecondPart__profilArrow');
let menuDown = document.querySelector('.menuUsers');
console.log(menuDown);
console.log(buttonUsers);
buttonUsers.addEventListener('click', function() {
  buttonUsers.classList.toggle('is-open-down');
  menuDown.classList.toggle('menu-users-is-open');
});

document.addEventListener('DOMContentLoaded', () => {
  var userId = window.localStorage.getItem('userId');

  var user = users.find(function(user) {
    return user.id === userId;
  });

  var userLogOut = document.querySelector('.userMenuSecondPart__logOut');
  var reprendreSlider = document.querySelector('.reprendre');

  // route to connexion if not logged
  // if (userId == null || userId == undefined || userId == 'null') {
  //   window.location.href = 'connexion.html';
  // }

  fetch('http://localhost:8888/getCategoriesForUser.php?userId=' + userId)
    .then(response => response.json())
    .then(categories => {
      categories.forEach(category => {
        console.log(category);
        switch (category.name) {
          case 'reprendre':
            console.log(category.anime);
            category.anime.forEach(anime => {
              console.log(anime.name);
              console.log(anime.picture);
              //reprendreSlider.insertAdjacentHTML('beforeend', generateSliderElement(anime.picture, anime.name));
            });
            break;
          case 'ma liste':
            // todo
            break;
          default:
            break;
        }
      });

      //window.reprendreSlider.rebuild();
    })
    .catch(error => console.error(error));

  //connection users to page users

  var toPageUsers = document.querySelectorAll('.goToPageUser');

  toPageUsers.forEach(function (pageUser) {
    pageUser.addEventListener('click', function (item) {
      var userIdFromPageUser = item.toElement.dataset.userid;
      window.localStorage.setItem('userId', userIdFromPageUser);
      window.location.href = 'users.html';
    })
  });

 

  // logout
  userLogOut.addEventListener('click', () => {
    window.localStorage.setItem('userId', null);
    window.location.href = 'connexion.html';
  });
});

var obj = {
  picture: '',
  title: ''
};

function generateSliderElement(picture, title) {
  return (
    "<div class='slide slideCard'>" +
    "<img class='over img' src='" +
    picture +
    "' alt='' />" +
    "<div class='slideCard__info'>" +
    "<img class='slideCard__add' src='" +
    iconAdd +
    "' alt='add' />" +
    "<img class='slideCard__star' src='" +
    iconStar +
    "' alt='star' />" +
    "<div class='slideCard__lecture'>" +
    "<img class='slideCard__button' src='" +
    iconPlay +
    "' alt='' />" +
    "<p class='play-hover'>lecture</p>" +
    '</div>' +
    "<h1 class='slideCard__title title-cards-hover'>" +
    title +
    '</h1>' +
    "<p class='slideCard__synopsis synopsis-cards-hover'>" +
    'Jeune lycéen, Hodaka fuit son île pour rejoindre Tokyo.' +
    '<br />Sans argent ni emploi, il tente de survivre dans la' +
    'jungle urbaine.' +
    '</p>' +
    "<div class='slideCard__season suggestion__season'>" +
    "<p class='time-date'>2019</p>" +
    "<p class='time-date'>saison 3</p>"
  );
  "<img class='slideCard__average' src='/icons/icon_stars.svg' alt='note des utilisateurs' />" +
    '</div>' +
    '</div>' +
    '</div>';
}

/*
fetch('http://localhost:8888/getCategoriesForUser.php?userId=3')
.then(response => response.json())
  .then(categories => {
    
    categories.forEach(category => {
      console.log(category.anime);
      category.anime.forEach(anime => {
        console.log(anime.name);
        console.log(anime.picture);
      })
    });
  
})
.catch(error => console.error(error))
*/
