const $seasonButton = document.getElementById('buttonSeason');
const $seasonMenu = document.getElementById('choiceSeason');

  $seasonButton.addEventListener('click', () => {
    $seasonMenu.classList.toggle('seasonMenu-is-open')
  })
  console.log($seasonButton, $seasonMenu)