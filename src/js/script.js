



/************* users menu *************/

let buttonUsers = document.querySelector(".headerSecondPart__profilArrow");
let menuDown = document.querySelector(".menuUsers");
console.log(menuDown);
console.log(buttonUsers);
buttonUsers.addEventListener('click', function () {
  console.log("mama");
  buttonUsers.classList.toggle("is-open-down");
  menuDown.classList.toggle("menu-users-is-open");

});

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
 
