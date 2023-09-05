import Alisson_Becker_img from "./Players-imgs/Alisson Becker.png";
import Caoimhín_Kelleher_img from "./Players-imgs/Caoimhin Kelleher.png";
import Adrián_img from "./Players-imgs/Adrian.png";
import Marcelo_Pitaluga_img from "./Players-imgs/Marcelo Pitaluga.png";
import Jo_Gomez_img from "./Players-imgs/Joe Gomez.png";
import Virgil_van_Dijk_img from "./Players-imgs/Virgil van Dijk.PNG";
import Ibrahima_Konaté_img from "./Players-imgs/Ibrahima Konate.PNG";
import Kostas_Tsimikas_img from "./Players-imgs/Kostas Tsimikas.PNG";
import Andy_Robertson_img from "./Players-imgs/Andy Robertson.PNG";
import Joël_Matip_img from "./Players-imgs/Joel Matip.PNG";
import Nathaniel_Phillips_img from "./Players-imgs/Nathaniel Phillips.PNG";
import Trent_Alexander_Arnold_img from "./Players-imgs/Trent Alexander-Arnold.png";
import Jarell_Quansah_img from "./Players-imgs/Jarell Quansah.png";
import Alexis_Mac_Allister_img from "./Players-imgs/Alexis Mac Allister.PNG";
import Thiago_Alcântara_img from "./Players-imgs/Thiago Alcantara.PNG";
import Dominik_Szoboszlai_img from "./Players-imgs/Dominik Szoboszlai.PNG";
import Harvey_Elliott_img from "./Players-imgs/Harvey Elliott.PNG";
import Stefan_Bajcetic_img from "./Players-imgs/Stefan Bajcetic.PNG";
import Curtis_Jones_img from "./Players-imgs/Curtis Jones.PNG";
import Wataru_Endo_img from "./Players-imgs/Wataru Endo.png";
import Mohamed_Salah_img from "./Players-imgs/Mohamed Salah.PNG";
import Luis_Díaz_img from "./Players-imgs/Luis Diaz.png"; 
import Darwin_Núñez_img from "./Players-imgs/Darwin Nunez.png";
import Cody_Gakpo_img from "./Players-imgs/Cody Gakpo.PNG";
import Diogo_Jota_img from "./Players-imgs/Diogo Jota.png";
import Ben_Doak_img from "./Players-imgs/Ben Doak.png";

import brazil_icon from './images/brazil_icon.png'
import egypt_icon from './images/egypt_icon.png'
import england_icon from './images/england_icon.png'
import ireland_icon from './images/ireland_icon.png'
import portugal_icon from './images/portugal_icon.png'
import argentina_icon from './images/argentina_icon.png'
import netherlands_icon from './images/netherlands_icon.png'
import spain_icon from './images/spain_icon.png'
import scotland_icon from './images/scotland_icon.png'
import cameroon_icon from './images/cameroon_icon.png'
import france_icon from './images/france_icon.png'
import greece_icon from './images/greece_icon.png'
import hungary_icon from './images/hungary_icon.png'
import japan_icon from './images/japan_icon.png'
import colombia_icon from './images/colombia_icon.png'
import uruguay_icon from './images/uruguay_icon.png'

const SquadData = [
  {
    name: "Alisson Becker",
    position: "Goalkeeper",
    nationality: "Brazil",
    nationalityImage: brazil_icon,
    jerseyNumber: 1,
    image: Alisson_Becker_img,
  },
  {
    name: "Caoimhín Kelleher",
    position: "Goalkeeper",
    nationality: "Ireland",
    nationalityImage: ireland_icon,
    jerseyNumber: 62,
    image: Caoimhín_Kelleher_img,
  },
  {
    name: "Adrián",
    position: "Goalkeeper",
    nationality: "Spain",
    nationalityImage: spain_icon,
    jerseyNumber: 13,
    image: Adrián_img,
  },
  {
    name: "Marcelo Pitaluga",
    position: "Goalkeeper",
    nationality: "Brazil",
    nationalityImage: brazil_icon,
    jerseyNumber: 45,
    image: Marcelo_Pitaluga_img,
  },
  {
    name: "Virgil van Dijk",
    position: "Defender",
    nationality: "Netherlands",
    nationalityImage: netherlands_icon,
    jerseyNumber: 4,
    image: Virgil_van_Dijk_img,
  },
  {
    name: "Trent Alexander-Arnold",
    position: "Defender",
    nationality: "England",
    nationalityImage: england_icon,
    jerseyNumber: 66,
    image: Trent_Alexander_Arnold_img,
  },
  {
    name: "Andy Robertson",
    position: "Defender",
    nationality: "Scotland",
    nationalityImage: scotland_icon,
    jerseyNumber: 26,
    image: Andy_Robertson_img,
  },
  {
    name: "Ibrahima Konaté",
    position: "Defender",
    nationality: "France",
    nationalityImage: france_icon,
    jerseyNumber: 5,
    image: Ibrahima_Konaté_img,
  },
  {
    name: "Joe Gomez",
    position: "Defender",
    nationality: "England",
    nationalityImage: england_icon,
    jerseyNumber: 2,
    image: Jo_Gomez_img,
  },
  {
    name: "Kostas Tsimikas",
    position: "Defender",
    nationality: "Greece",
    nationalityImage: greece_icon,
    jerseyNumber: 21,
    image: Kostas_Tsimikas_img,
  },
  {
    name: "Joël Matip",
    position: "Defender",
    nationality: "Cameroon",
    nationalityImage: cameroon_icon,
    jerseyNumber: 32,
    image: Joël_Matip_img,
  },
  {
    name: "Nathaniel Phillips",
    position: "Defender",
    nationality: "England",
    nationalityImage: england_icon,
    jerseyNumber: 47,
    image: Nathaniel_Phillips_img,
  },
  {
    name: "Jarell Quansah",
    position: "Defender",
    nationality: "England",
    nationalityImage: england_icon,
    jerseyNumber: 78,
    image: Jarell_Quansah_img,
  },
  {
    name: "Alexis Mac Allister",
    position: "Midfielder",
    nationality: "Argentina",
    nationalityImage: argentina_icon,
    jerseyNumber: 10,
    image: Alexis_Mac_Allister_img,
  },
  {
    name: "Thiago Alcântara",
    position: "Midfielder",
    nationality: "Spain",
    nationalityImage: spain_icon,
    jerseyNumber: 6,
    image: Thiago_Alcântara_img,
  },
  {
    name: "Dominik Szoboszlai",
    position: "Midfielder",
    nationality: "Hungary",
    nationalityImage: hungary_icon,
    jerseyNumber: 8,
    image: Dominik_Szoboszlai_img,
  },
  {
    name: "Harvey Elliott",
    position: "Midfielder",
    nationality: "England",
    nationalityImage: england_icon,
    jerseyNumber: 19,
    image: Harvey_Elliott_img,
  },
  {
    name: "Curtis Jones",
    position: "Midfielder",
    nationality: "England",
    nationalityImage: england_icon,
    jerseyNumber: 17,
    image: Curtis_Jones_img,
  },
  {
    name: "Stefan Bajcetic",
    position: "Midfielder",
    nationality: "Spain",
    nationalityImage: spain_icon,
    jerseyNumber: 43,
    image: Stefan_Bajcetic_img,
  },
  {
    name: "Wataru Endo",
    position: "Midfielder",
    nationality: "Japan",
    nationalityImage: japan_icon,
    jerseyNumber: 3,
    image: Wataru_Endo_img,
  },
  {
    name: "Mohamed Salah",
    position: "Forward",
    nationality: "Egypt",
    nationalityImage: egypt_icon,
    jerseyNumber: 11,
    image: Mohamed_Salah_img,
  },
  {
    name: "Luis Díaz",
    position: "Forward",
    nationality: "Colombia",
    nationalityImage: colombia_icon,
    jerseyNumber: 7,
    image: Luis_Díaz_img,
  },
  {
    name: "Darwin Núñez",
    position: "Forward",
    nationality: "Uruguay",
    nationalityImage: uruguay_icon,
    jerseyNumber: 9,
    image: Darwin_Núñez_img,
  },
  {
    name: "Diogo Jota",
    position: "Forward",
    nationality: "Portugal",
    nationalityImage: portugal_icon,
    jerseyNumber: 20,
    image: Diogo_Jota_img,
  },
  {
    name: "Cody Gakpo",
    position: "Forward",
    nationality: "Netherlands",
    nationalityImage: netherlands_icon,
    jerseyNumber: 18,
    image: Cody_Gakpo_img,
  },
  {
    name: "Ben Doak",
    position: "Forward",
    nationality: "Scotland",
    nationalityImage: scotland_icon,
    jerseyNumber: 50,
    image: Ben_Doak_img,
  },
];

export default SquadData;
