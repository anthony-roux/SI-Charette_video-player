const videoFarcry = document.querySelector('.video__background');
const vid = document.querySelector('.player__mute');

vid.addEventListener('click', function() {
  videoFarcry.muted = true;
});

const visible = document.querySelector('.heroFilm__info');

setTimeout(function() {
  visible.style.display = 'none';
}, 9000);

let mix = document.querySelector('.my-slider--7');

var slider = tns({
  container: '.my-slider--7',
  mode: 'carousel', // or 'gallery'
  axis: 'horizontal', // or 'vertical'
  items: 5,
  gutter: 1,
  edgePadding: 0,
  fixedWidth: false,
  slideBy: 1,
  controls: true,
  controlsText: ['\u3008', '\u3009'],
  controlsContainer: false,
  nav: false,
  navContainer: false,
  navAsThumbnails: false,
  arrowKeys: false,
  speed: 400,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayDirection: 'forward',
  autoplayText: ['start', 'stop'],
  autoplayHoverPause: false,
  autoplayButton: false,
  autoplayButtonOutput: true,
  autoplayResetOnVisibility: true,
  loop: true,
  rewind: false,
  autoHeight: false,
  responsive: false,
  lazyload: false,
  touch: true,
  mouseDrag: true,
  swipeAngle: 15,
  nested: false,
  freezable: true,
  onInit: false
});
