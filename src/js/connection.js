var buttonConnection = document.querySelector(".inputInfo__btn");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");


var user = {
  id: "3",
  email: "vivian.priska@gmail.com",
  password: "kevingila",
}

buttonConnection.addEventListener("click", function (e) {
  e.preventDefault();
  var email = emailInput.value;
  var password = passwordInput.value;

  if (email === user.email && password === user.password) {
    
    window.localStorage.setItem('userId', user.id);
    window.location.href = "index.html";
  } else {
    alert("go awway");
  };
})