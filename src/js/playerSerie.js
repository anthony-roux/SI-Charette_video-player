//////////  ELEMENTS DU DOM //////////

const $video = document.querySelector('.video');

const $playButton = document.getElementById('buttonPlay');
const $playSvg = document.getElementById('svgPlay');
const $mainPlay = document.querySelector('.mainPlay');
const $previousButton = document.getElementById('buttonPrevious');
const $nextButton = document.getElementById('buttonNext');

const $soundButton = document.getElementById('buttonSound');
const $soundSvg = document.getElementById('svgSound');
const $volumeSlider = document.getElementById('controller__soundSlider');

const $durationBar = document.getElementById('durationBar');
const $progressBar = document.getElementById('progressTime');
const $progressBarIndicator = document.getElementById('indicatorTime');
const $timeContainer = document.getElementById('videoTimeHover');

const progressElements = [
  $durationBar,
  $progressBar,
  $progressBarIndicator
]

const $currentTimeWrapper = document.getElementById('currentTime');
const $timeWrapper = document.getElementById('time');

const $fullScreenButton = document.getElementById('buttonFullScreen');


////////// ACTIONS MEDIA PLAYER //////////

const togglePlay = () => {
  if(!$video.paused && !$video.ended){
      $video.pause();
      $playSvg.setAttribute('href', '#play');
      $mainPlay.classList.remove('is-hidden');
  }else{
      $video.play();
      $volumeSlider.value = $video.volume * 100;
      $playSvg.setAttribute('href', '#pause');
      $mainPlay.classList.add('is-hidden');
  }
}

const isMuted = () => {
  let volumeNow = $video.volume;
  if($video.muted != true){
      $video.muted = true;
      $volumeSlider.value = 0;
      $soundSvg.setAttribute('href', '#mute');
  }else{
      $video.muted = false;
      $volumeSlider.value = volumeNow * 100;
      $soundSvg.setAttribute('href', '#soundon');
  }
}

const clickedBar = (e) => {
  let mouseX = e.offsetX;
  let newTime = mouseX / ($durationBar.offsetWidth / $video.duration);
  $video.currentTime = newTime;    
}

//Transformation du temps => mminutes : secondes
const transformTime = (time) => {
  let minutes;
  let seconds;
  if(time < 60){
      seconds = time >= 10 ? time.toString() : `0${time.toString()}`;
      minutes = '00';
  }else if(time >= 60){
      let calculMinutes = Math.floor(time / 60);
      let calculSeconds = time - 60 * calculMinutes;
      seconds = calculSeconds >= 10 ? calculSeconds.toString() : `0${calculSeconds.toString()}`;
      minutes = calculMinutes >= 10 ? calculMinutes.toString() : `0${calculMinutes.toString()}`;
  }
  return `${minutes} : ${seconds}`;
}

const isHover = (e) => {
  if (e.type == 'mouseover') {
      $durationBar.classList.add('durationBar-is-hover');
      $progressBar.classList.add('durationBar-is-hover');
      $progressBarIndicator.classList.add('indicator-is-hover');
  }
  if (e.type == 'mouseout') {
      $durationBar.classList.remove('durationBar-is-hover');
      $progressBar.classList.remove('durationBar-is-hover');
      $timeContainer.classList.remove('isHover');
      $progressBarIndicator.classList.remove('indicator-is-hover');
  }
}

const toggleFullScreen = () => {
  if (!$video.fullscreenElement) {
      $video.requestFullscreen();
  } else {
    if ($video.exitFullscreen) {
      $video.exitFullscreen(); 
    }
  }
}

//Màj du temps sur videoTimeHover
const setTime = (e) => {
  let mouseX = e.offsetX;
  let videoTimeSeconds = mouseX * $video.duration / $durationBar.offsetWidth;
  $timeContainer.innerHTML = transformTime(Math.floor(videoTimeSeconds));
  $timeContainer.classList.add('isHover');
  let halfWidth = $timeContainer.offsetWidth / 2;
  let stopMove = $durationBar.offsetWidth - halfWidth;
  if(mouseX < stopMove){
    $timeContainer.style.left = mouseX - halfWidth + 'px';
  }
}


// ONLOADMETADATA => Pour duration, dimensions et text tracks
$video.onloadedmetadata = function() {
  
  $timeWrapper.textContent = transformTime(Math.floor($video.duration));
}

////////// EVENNEMENTS //////////

  // PLAY
  $video.addEventListener('click', () => {
    togglePlay();
 })

 $playButton.addEventListener('click', () => {
  togglePlay();
  })

  // SOUND 
  $volumeSlider.addEventListener('input', (e) => {
    let value = e.target.value;
    $video.volume = value / 100;
    $video.muted = false;
    if(value == 0){
      $soundSvg.setAttribute('href', '#mute');
    }else{
      $soundSvg.setAttribute('href', '#soundon');
    }
  })

  $soundButton.addEventListener('click', () => {
    isMuted();
  })

  // DURATIONBAR
  $durationBar.addEventListener('click', clickedBar);

  progressElements.forEach(element => {
    element.onmouseover = element.onmouseout = isHover;
  });

  $durationBar.addEventListener('mousemove', (e) => {
    setTime(e);
  })

  // RETOUR 10S
  $previousButton.addEventListener('click', () => {
    if($video.currentTime - 10 >= 0) {
      $video.currentTime -= 10
    } else {
      $video.currentTime = 0;
    }
  })
  
  // AVANCE 10S
  $nextButton.addEventListener('click', () => {
    if($video.currentTime + 10 <= $video.duration) {
      $video.currentTime += 10
    } else {
      $video.currentTime = $video.duration
    }
  })


  //INACTIVTÉ (Mise en place d'un timer)

  let timeoutInMiliseconds = 5000;
  let timeoutId; 
  const $header = document.getElementById('headerPlayer');
  const $settingBar = document.getElementById('settingBar');

  const startTimer = () => { 
      timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
  }

  const doInactive = () => {
      $header.classList.add('headerPlayer-transition');
      $settingBar.classList.add('settingBar-transition');
      $progressBarIndicator.classList.add('is-hidden')
  }

  const resetTimer = () => { 
      window.clearTimeout(timeoutId)
      $header.classList.remove('headerPlayer-transition')
      $settingBar.classList.remove('settingBar-transition');
      $progressBarIndicator.classList.remove('is-hidden');

      startTimer();
  }
  
  const setupTimers = () => {
      document.addEventListener("mousemove", resetTimer, false);
      document.addEventListener("mousedown", resetTimer, false);
      document.addEventListener("keypress", resetTimer, false);
      document.addEventListener("touchmove", resetTimer, false);

      startTimer();
  }

  setupTimers();

  // FULLSCREEN
  $fullScreenButton.addEventListener('click', () => {
    toggleFullScreen()
  })


  // MENU EPISODES
  const $episodeButton = document.getElementById('episodeButton');
  const $menuPlayer = document.getElementById('menuPlayer');
  const $buttonExitMenuPlayer = document.getElementById('buttonExitMenuPlayer');

  $episodeButton.addEventListener('click', () => {
    $menuPlayer.classList.add('is-open');
  });

  $buttonExitMenuPlayer.addEventListener('click', () => {
    $menuPlayer.classList.remove('is-open');
  });

  //SAISON

  const $seasonButton = document.getElementById('seasonButton');
  const $seasonMenu = document.getElementById('seasonMenu');

  $seasonButton.addEventListener('click', () => {
    $seasonMenu.classList.toggle('seasonMenu-is-open')
  })


  // CLASS EPIDOSE

  let urlImgS01E01 = require("../images/aot-s1e1.jpg");
  let urlImgS01E02 = require("../images/aot-s1e2.jpg");
  let urlImgS01E03 = require("../images/aot-s1e3.jpg");
  let urlImgS01E04 = require("../images/aot-s1e4.jpg");
  let urlImgS01E05 = require("../images/aot-s1e5.jpg");
  let urlImgS01E06 = require("../images/aot-s1e6.jpg");
  let urlImgS01E07 = require("../images/aot-s1e7.jpg");
  let urlImgS01E08 = require("../images/aot-s1e8.jpg");
  let urlImgS01E09 = require("../images/aot-s1e9.jpg");
  let urlImgS01E10 = require("../images/aot-s1e10.jpg");

  let videoS01E01 = require("../vidéos/hunter-x-hunter.mp4");
  let videoS01E02 = require("../vidéos/assassination-classroom.mp4");

  
  class Episode {

    constructor(number, title, descriptif, duree, urlVideo, urlImg) {
      this.number = number;
      this.title = title;
      this.descriptif = descriptif;
      this.duree = duree + "min";
      this.urlVideo = urlVideo; 
      this.urlImg = urlImg;
    }

    newElement() {
      let container = document.getElementById('episodeContainer');
      let episodeCard = document.createElement('li');
      episodeCard.classList.add('menuPlayer__episodeCard');
      episodeCard.style.backgroundImage = "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 96.25%), url('" + this.urlImg + "')";
      container.appendChild(episodeCard);

      let episodeTitle = document.createElement('h2');
      episodeTitle.classList.add('menuPlayer__episodeTitle');
      episodeTitle.innerHTML = `${this.number} ${this.title}`;
      episodeCard.appendChild(episodeTitle);

      let episodeContent = document.createElement('div');
      episodeContent.classList.add('menuPlayer__content');
      episodeCard.appendChild(episodeContent);

      let episodeDescriptif = document.createElement('p');
      episodeDescriptif.classList.add('menuPlayer__episodeDescriptif');
      episodeDescriptif.innerHTML = this.descriptif;
      episodeContent.appendChild(episodeDescriptif);

      let episodeButtonPlay = document.createElement('button');
      episodeButtonPlay.classList.add('menuPlayer__buttonPlayEpisode');
      episodeContent.appendChild(episodeButtonPlay);
    }
  }

  const EpisodeS01E01 = new Episode ("01", "2000 ans plus tard", "Réfugiés dans une ville fortifiée, les survivants de l'humanité tentent d'échapper aux titans qui les dévorent. Jusqu'au jour où un titan colossal apparaît", "24", videoS01E01, urlImgS01E01)
  const EpisodeS01E02 = new Episode ("02", "Ce jour là", "Alors que l'unité de Levi parvient à reprendre une ville aux Titans, elle est appelée à l'aide pour éliminer les créatures qui ont envahi la cité...", "24", videoS01E02, urlImgS01E02)
  const EpisodeS01E03 = new Episode ("03", "Réveil de l'humanité 1/2", "Eren intègre l'armée. Il se retrouve sous le commandement de Keith Sadies, un formateur sévère. Eren découvre l'équipement spécifique des troupes", "24", videoS01E01, urlImgS01E03)
  const EpisodeS01E04 = new Episode ("04", "Réveil de l'humanité 2/2", "Eren poursuit son entraînement avec les autres recrues, sous la supervision de Keith. Il apprend que certains engagés souhaitent rejoindre la police militaire.", "24", videoS01E02, urlImgS01E04)
  const EpisodeS01E05 = new Episode ("05", "Première bataille", "Eren attaque le titan colossal, qui montre une certaine intelligence en s'en prenant aux canons du mur. Au moment où Eren s'apprête à le frapper à son point faible, le monstre disparaît...", "24", videoS01E01, urlImgS01E05)
  const EpisodeS01E06 = new Episode ("06", "Une petite lame", "Armin se réveille, entouré par Connie, Ymir et l'équipe de Krista. Il fond en larmes lorsqu'on lui demande ce qu'il est advenu de son équipe.", "24", videoS01E02, urlImgS01E06)
  const EpisodeS01E07 = new Episode ("07", "Courte lame", "Les survivants, incapables de gravir le mur, perdent le moral quand des titans détruisent les dépôts les plus proches, où ils espéraient trouver du carburant.", "24", videoS01E01, urlImgS01E07)
  const EpisodeS01E08 = new Episode ("08", "District de Trost 1/2", "Alors que le dépôt est entouré par les Titans, Armin a l'idée d'utiliser le Rogue Titan pour les détruire. Pendant ce temps, Jean et les autres atteignent le dépôt, au prix de lourdes pertes...", "24", videoS01E02, urlImgS01E08)
  const EpisodeS01E09 = new Episode ("09", "District de Trost 2//2", "Alors que l'unité de Levi parvient à reprendre une ville aux Titans, elle est appelée à l'aide pour éliminer les créatures qui ont envahi la cité...", "24", videoS01E01, urlImgS01E09)
  const EpisodeS01E10 = new Episode ("10", "Répondre", "Eren récupère de sa transformation, qui lui a permis de sauver Armine et Mikasa. Il pense détenir la clé de la préservation de l'humanité et le moyen de détruire les Titans...", "24", videoS01E02, urlImgS01E10)
  
  const saison01 = [
    EpisodeS01E01,
    EpisodeS01E02,
    EpisodeS01E03,
    EpisodeS01E04,
    EpisodeS01E05,
    EpisodeS01E06,
    EpisodeS01E07,
    EpisodeS01E08,
    EpisodeS01E09,
    EpisodeS01E10, 
  ]
  
  for (episode of saison01){
    episode.newElement();
  }

  //EPISODE

  const $seasonButtonPlay = document.getElementsByClassName('menuPlayer__buttonPlayEpisode');
  const svgPause = require("../icons/playerIcons/pause.svg");
  const svgPlay = require("../icons/playerIcons/play.svg")
  const $titlePlayer = document.getElementById('headerTitle');
  const $nextEpisode = document.getElementById('nextEpisode');

  for (let i = 0; i < $seasonButtonPlay.length; i++){

    $seasonButtonPlay[i].addEventListener('click', () => {
      $titlePlayer.innerHTML = `S01:E${saison01[i].number} - ${saison01[i].title}`;

      $video.setAttribute('src', saison01[i].urlVideo)
      $volumeSlider.value = $video.volume * 100;
      $playSvg.setAttribute('href', '#pause');
      $mainPlay.classList.add('is-hidden');
      $seasonButtonPlay[i].style.backgroundImage = "url('" + svgPause + "')"
      $seasonButtonPlay[i+1].style.backgroundImage = "url('" + svgPlay + "')"  
      $seasonButtonPlay[i-1].style.backgroundImage = "url('" + svgPlay + "')"  
    })

    // MAJ des éléments playButton et progressBar selon le temps de vidéo atteint
    $video.addEventListener('timeupdate', () => {
      if($video.ended){
        $video.setAttribute('src', saison01[i+1].urlVideo)
        $titlePlayer.innerHTML = `S01:E${saison01[i+1].number} - ${saison01[i+1].title}`;
        $seasonButtonPlay[i].style.backgroundImage = "url('" + svgPlay + "')" 
        $seasonButtonPlay[i+1].style.backgroundImage = "url('" + svgPause + "')"
        $playSvg.setAttribute('href', '#pause');
        $mainPlay.classList.add('is-hidden');
      }else{
        const progress = ($video.currentTime / $video.duration) * 100; //récupération du pourcentage de progression
        $progressBar.style.width = progress + '%';
        $currentTimeWrapper.textContent = transformTime(Math.floor($video.currentTime))
      }
    })
  }
  

  let i = 0;

  $nextEpisode.addEventListener('click', () => {
    $video.setAttribute('src', saison01[i+1].urlVideo)
    $titlePlayer.innerHTML = `S01:E${saison01[i+1].number} - ${saison01[i+1].title}`;
    $seasonButtonPlay[i].style.backgroundImage = "url('" + svgPlay + "')" 
    $seasonButtonPlay[i+1].style.backgroundImage = "url('" + svgPause + "')"
    $playSvg.setAttribute('href', '#pause');
    $mainPlay.classList.add('is-hidden');
    i += 1;
  })
