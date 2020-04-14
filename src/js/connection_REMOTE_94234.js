var buttonConnection = document.querySelector(".inputInfo__btn");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");


var user = [{
  id: "3",
  email: "vivian.priska@gmail.com",
  password: "kevingila",
  },
  {
  id: "5",
  email: "oum.caramel@gmail.com",
  password: "oumoum",
  },
  {
    id: "6",
    email: "quentinsan@gmail.com",
    password: "quentin",
  },
  {
    id: "7",
    email: "hannachan@gmail.com",
    password: "hannah",
  },
  {
    id: "8",
    email: "anthoniosan@gmail.com",
    password: "anthonio",
  },
  {
    id: "9",
    email: "laurentsan@gmail.com",
    password: "laurent",
  }
]

buttonConnection.addEventListener("click", function (e) {
  e.preventDefault();
  var email = emailInput.value;
  var password = passwordInput.value;
  if (email === user[0].email && password === user[0].password) {
    
    window.localStorage.setItem('userId', user.id);
    window.location.href = "index.html";
  } else if(email === user[1].email && password === user[1].password){
    window.localStorage.setItem('userId', user.id);
    window.location.href = "index.html";
  } else if(email === user[2].email && password === user[2].password){
    window.localStorage.setItem('userId', user.id);
    window.location.href = "index.html";
   }
  else if(email === user[3].email && password === user[3].password){
    window.localStorage.setItem('userId', user.id);
    window.location.href = "index.html";}
  else {
    alert("go awway");
  };
})