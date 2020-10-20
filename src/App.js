import React from 'react';
import './App.css';
import Component from'./profile/component'
import Image from './Michael-Jackson.jpg'
function App() {
  return (
    <div className="App">
      <Component fullName = "Michael Jackson"
bio="Né le 29 août 1958 à Gary (Indiana) et mort le 25 juin 2009 à Los Angeles (Californie), est un auteur-compositeur-interprète, danseur-chorégraphe et acteur américain. Reconnu comme l’artiste le plus titré de tous les temps3,4,5,6, il est une figure principale de l'histoire de l'industrie du spectacle et l'une des icônes culturelles majeures du xxe siècle.Septième d'une famille de neuf enfants, il chante avec ses frères dès l'âge de six ans et commence une carrière professionnelle à onze ans au sein des Jackson Five, groupe formé avec ses frères aînés. Tout en restant membre du groupe (jusqu'en 1984), il entame en 1971 une carrière solo. Cinq de ses albums solo parus de son vivant figurent parmi les albums les plus vendus au monde : Off the Wall (1979), Thriller (1982), Bad (1987), Dangerous (1991) et HIStory (1995).Dans les années 1980, il devient une figure majeure de la musique pop. Ses clips musicaux, ambitieux et novateurs, sont réalisés comme des courts métrages, notamment pour les titres Beat It, Billie Jean, Thriller, Bad ou Smooth Criminal. Il popularise de nombreux pas de danse, dont le moonwalk, qui devient sa signature. Ayant fusionné les genres de musique soul, funk, pop et rock, son style vocal et musical continue d'influencer de nombreux artistes de hip-hop, pop et r'n'b contemporain.Surnommé « le roi de la pop » (« The King of Pop »), Michael Jackson a battu plusieurs records dans l'industrie du disque. Avec plus de 350 millions de disques vendus dans le monde7,8,Note 1, il se classe parmi les trois plus gros vendeurs de disques de tous les temps, derrière les Beatles et Elvis Presley9.Avec des ventes estimées à 66 millions d'exemplaires, Thriller demeure l'album le plus vendu de l'histoire de la musique10,11 et a été certifié 33 fois disque de platine aux États-Unis12,13.Il participe en outre à plusieurs œuvres caritatives, notamment avec le projet USA for Africa et sa Heal The World Foundation (1992), créée à la suite de la tournée Dangerous World Tour, et contribue tout au long de sa carrière à la lutte contre la famine, la cruauté envers les animaux ou encore la maltraitance infantile[réf. nécessaire]. Toutefois, son image publique est ternie par certains aspects de sa vie privée, notamment par ses multiples recours à la chirurgie esthétique, son mode de vie jugé excentrique, et plus encore par deux plaintes pour abus sexuel sur mineur, en 1993 et 2003, n’aboutissant toutefois à aucune condamnation en justice. Ses deux mariages et ses trois enfants font également l'objet de polémiques.  Alors qu'il prépare la série de concerts This Is It qui devaient se tenir à Londres, Michael Jackson meurt à l'âge de 50 ans d'une overdose de médicaments. Son médecin personnel, Conrad Murray , est par la suite reconnu coupable d'homicide involontaire."
 
 pic ={ Image} />
    </div>
  );
}

export default App;
