import { users } from './user.js';

var buttonConnection = document.querySelector('.inputInfo__btn');
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
console.log(users);
buttonConnection.addEventListener('click', function(e) {
  e.preventDefault();
  var email = emailInput.value;
  var password = passwordInput.value;
  if (email === users[0].email && password === users[0].password) {
    window.localStorage.setItem('userId', users[0].id);
    window.location.href = 'homepage.html';
  } else if (email === users[1].email && password === users[1].password) {
    window.localStorage.setItem('userId', users[1].id);
    window.location.href = 'homepage.html';
  } else if (email === users[2].email && password === users[2].password) {
    window.localStorage.setItem('userId', users[2].id);
    window.location.href = 'homepage.html';
  } else if (email === users[3].email && password === users[3].password) {
    window.localStorage.setItem('userId', users[3].id);
    window.location.href = 'homepage.html';
  } else if (email === users[4].email && password === users[4].password) {
    window.localStorage.setItem('userId', users[4].id);
    window.location.href = 'homepage.html';
  } else {
    alert('go awway');
  }
});
