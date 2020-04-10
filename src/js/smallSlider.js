import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

console.log('caca');

let container = document.querySelector('.my-slider');

var slider = tns({
  container: '.my-slider',
  mode: 'carousel', // or 'gallery'
  axis: 'horizontal', // or 'vertical'
  items: 4,
  gutter: 1,
  edgePadding: 100,
  fixedWidth: false,
  slideBy: 1,
  controls: true,
  controlsText: ['\u3008', '\u3009'],
  controlsContainer: false,
  nav: false,
  navContainer: false,
  navAsThumbnails: false,
  arrowKeys: false,
  speed: 300,
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
