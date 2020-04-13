import {
  tns
} from '../../node_modules/tiny-slider/src/tiny-slider';


console.log('caca');

let tendance = document.querySelector('.my-slider-medium-1');

var slider = tns({
  container: '.my-slider-medium-1',
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
  autoHeight: true,
  responsive: false,
  lazyload: false,
  touch: true,
  mouseDrag: true,
  swipeAngle: 15,
  nested: false,
  freezable: true,
  onInit: false
});


let discover = document.querySelector('.my-slider-medium-2');

var slider = tns({
  container: '.my-slider-medium-2',
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
  autoHeight: true,
  responsive: false,
  lazyload: false,
  touch: true,
  mouseDrag: true,
  swipeAngle: 15,
  nested: false,
  freezable: true,
  onInit: false
});