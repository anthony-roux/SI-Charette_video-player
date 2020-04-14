const videoFarcry = document.querySelector('.videoOnPage');
const vid = document.querySelector('.mute');

vid.addEventListener('click', function() {
  videoFarcry.muted = true;
});

// const visible = document.querySelector('.heroFilm__info');

// setTimeout(function() {
//   visible.style.display = 'none';
// }, 9000);
