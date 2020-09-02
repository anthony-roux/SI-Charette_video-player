import { users } from './user.js';

var buttonConnection = document.querySelector('.inputInfo__btn');
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');

console.log(users);
buttonConnection.addEventListener('click', function(e) {
  e.preventDefault();
  var email = emailInput.value;
  var password = passwordInput.value;


  fetch("http://sentianyof.cluster027.hosting.ovh.net/anime/signIn.php", {
    method: "POST",
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: "email="+email+"&password="+password
  })
    .then(response => response.json())
    .then(userInfo => {
      if (userInfo["isLogged"] === true) {
        window.localStorage.setItem('userId', 7);
        window.location.href = 'homepage.html';
      } else {
        alert('try again');
      }
    })
    .catch(error => console.error(error));
});
