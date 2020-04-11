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

const Episode1 = new Episode ("1", "2000 ans plus tard", "Réfugiés dans une ville fortifiée, les survivants de l'humanité tentent d'échapper aux titans qui les dévorent. Jusqu'au jour où un titan colossal apparaît", "24", "./vidéos/hunter-x-hunter.mp4", "#")
const Episode2 = new Episode ("2", "Ce jour là", "Alors que l'unité de Levi parvient à reprendre une ville aux Titans, elle est appelée à l'aide pour éliminer les créatures qui ont envahi la cité...", "24", "./vidéos/hunter-x-hunter.mp4", "#")
const Episode3 = new Episode ("3", "Réveil de l'humanité", "Eren intègre l'armée. Il se retrouve sous le commandement de Keith Sadies, un formateur sévère. Eren découvre l'équipement spécifique des troupes", "24", "./vidéos/hunter-x-hunter.mp4", "#")
const Episode4 = new Episode ("4", "Réveil de l'humanité", "Eren poursuit son entraînement avec les autres recrues, sous la supervision de Keith. Il apprend que certains engagés souhaitent rejoindre la police militaire.", "24", "./vidéos/hunter-x-hunter.mp4", "#")
const Episode5 = new Episode ("5", "Première bataille", "Eren attaque le titan colossal, qui montre une certaine intelligence en s'en prenant aux canons du mur. Au moment où Eren s'apprête à le frapper à son point faible, le monstre disparaît...", "24", "./vidéos/hunter-x-hunter.mp4", "#")
const Episode6 = new Episode ("6", "Une petite lame", "Armin se réveille, entouré par Connie, Ymir et l'équipe de Krista. Il fond en larmes lorsqu'on lui demande ce qu'il est advenu de son équipe. Armin s'en veut surtout pour ne pas avoir réussi à sauver Eren...", "24", "./vidéos/hunter-x-hunter.mp4", "#")
const Episode7 = new Episode ("7", "Courte lame", "Les survivants, incapables de gravir le mur, perdent le moral quand des titans détruisent les dépôts les plus proches, où ils espéraient trouver du carburant.", "24", "./vidéos/hunter-x-hunter.mp4", "#")
const Episode8 = new Episode ("8", "District de Trost", "Alors que le dépôt est entouré par les Titans, Armin a l'idée d'utiliser le Rogue Titan pour les détruire. Pendant ce temps, Jean et les autres atteignent le dépôt, au prix de lourdes pertes...", "24", "./vidéos/hunter-x-hunter.mp4", "#")
const Episode9 = new Episode ("9", "District de Trost", "Alors que l'unité de Levi parvient à reprendre une ville aux Titans, elle est appelée à l'aide pour éliminer les créatures qui ont envahi la cité...", "24", "./vidéos/hunter-x-hunter.mp4", "#")
const Episode10 = new Episode ("10", "Répondre", "Eren récupère de sa transformation, qui lui a permis de sauver Armine et Mikasa. Il pense détenir la clé de la préservation de l'humanité et le moyen de détruire les Titans...", "24", "./vidéos/hunter-x-hunter.mp4", "#")

const saison1 = [
  Episode1,
  Episode2,
  Episode3,
  Episode4,
  Episode5,
  Episode6,
  Episode7,
  Episode8,
  Episode9,
  Episode10,
]

for (episode of saison1){
  episode.newElement();
}
