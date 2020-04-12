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

class Episode {

  constructor(number, title, descriptif, duree, urlVideo, urlImg) {
    this.number = number + ".";
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
    let url = this.urlImg
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
    episodeButtonPlay.id = 'buttonPlayMenuPlayer';
    episodeButtonPlay.classList.add('menuPlayer__buttonPlayEpisode');
    episodeContent.appendChild(episodeButtonPlay);
  }

  playEpisode() {
      $video.setAttribute('src', this.urlVideo);
      $video.togglePay();
  }
}

const EpisodeS01E01 = new Episode ("1", "2000 ans plus tard", "Réfugiés dans une ville fortifiée, les survivants de l'humanité tentent d'échapper aux titans qui les dévorent. Jusqu'au jour où un titan colossal apparaît", "24", "./vidéos/hunter-x-hunter.mp4", urlImgS01E01)
const EpisodeS01E02 = new Episode ("2", "Ce jour là", "Alors que l'unité de Levi parvient à reprendre une ville aux Titans, elle est appelée à l'aide pour éliminer les créatures qui ont envahi la cité...", "24", "./vidéos/hunter-x-hunter.mp4", urlImgS01E02)
const EpisodeS01E03 = new Episode ("3", "Réveil de l'humanité", "Eren intègre l'armée. Il se retrouve sous le commandement de Keith Sadies, un formateur sévère. Eren découvre l'équipement spécifique des troupes", "24", "./vidéos/hunter-x-hunter.mp4", urlImgS01E03)
const EpisodeS01E04 = new Episode ("4", "Réveil de l'humanité", "Eren poursuit son entraînement avec les autres recrues, sous la supervision de Keith. Il apprend que certains engagés souhaitent rejoindre la police militaire.", "24", "./vidéos/hunter-x-hunter.mp4", urlImgS01E04)
const EpisodeS01E05 = new Episode ("5", "Première bataille", "Eren attaque le titan colossal, qui montre une certaine intelligence en s'en prenant aux canons du mur. Au moment où Eren s'apprête à le frapper à son point faible, le monstre disparaît...", "24", "./vidéos/hunter-x-hunter.mp4", urlImgS01E05)
const EpisodeS01E06 = new Episode ("6", "Une petite lame", "Armin se réveille, entouré par Connie, Ymir et l'équipe de Krista. Il fond en larmes lorsqu'on lui demande ce qu'il est advenu de son équipe.", "24", "./vidéos/hunter-x-hunter.mp4", urlImgS01E06)
const EpisodeS01E07 = new Episode ("7", "Courte lame", "Les survivants, incapables de gravir le mur, perdent le moral quand des titans détruisent les dépôts les plus proches, où ils espéraient trouver du carburant.", "24", "./vidéos/hunter-x-hunter.mp4", urlImgS01E07)
const EpisodeS01E08 = new Episode ("8", "District de Trost", "Alors que le dépôt est entouré par les Titans, Armin a l'idée d'utiliser le Rogue Titan pour les détruire. Pendant ce temps, Jean et les autres atteignent le dépôt, au prix de lourdes pertes...", "24", "./vidéos/hunter-x-hunter.mp4", urlImgS01E08)
const EpisodeS01E09 = new Episode ("9", "District de Trost", "Alors que l'unité de Levi parvient à reprendre une ville aux Titans, elle est appelée à l'aide pour éliminer les créatures qui ont envahi la cité...", "24", "./vidéos/hunter-x-hunter.mp4", urlImgS01E09)
const EpisodeS01E10 = new Episode ("10", "Répondre", "Eren récupère de sa transformation, qui lui a permis de sauver Armine et Mikasa. Il pense détenir la clé de la préservation de l'humanité et le moyen de détruire les Titans...", "24", "./vidéos/hunter-x-hunter.mp4", urlImgS01E10)
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
