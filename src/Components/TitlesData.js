import england_flag from "./images/england_icon.png";
import european_union_flag from "./images/european_union_icon.png";
import nations_united_flag from "./images/nations_united_icon.png";
import premier_league_logo from "./images/Premier_League_Logo.png";
import EFL_Championship_logo from "./images/EFL_Championship_logo.png";
import Fa_Cup_logo from "./images/Fa_Cup_logo.png";
import EFL_Cup_Logo from "./images/EFL_Cup_Logo.png";
import FA_Community_Shield_logo from "./images/FA_Community_Shield_logo.png";
import Football_League_Super_Cup_logo from "./images/Football_League_Super_Cup_logo.png";
import UEFA_Champions_League_logo from "./images/UEFA_Champions_League_logo.png";
import UEFA_Europa_League_logo from "./images/UEFA_Europa_League_logo.png";
import UEFA_Super_Cup_logo from "./images/UEFA_Super_Cup_logo.png";
import FIFA_Club_World_Cup_logo from "./images/FIFA_Club_World_Cup_logo.png";

const liverpoolTitles = [
  {
    type: "Domestic",
    typeImage: england_flag,
    competition: "Premier League",
    competitionImage: premier_league_logo,
    titles: 19,
    seasons:
      "1900–01, 1905–06, 1921–22, 1922–23, 1946–47, 1963–64, 1965–66, 1972–73, 1975–76, 1976–77, 1978–79, 1979–80, 1981–82, 1982–83, 1983–84, 1985–86, 1987–88, 1989–90, 2019–20",
  },
  {
    type: "Domestic",
    typeImage: england_flag,
    competition: "Championship",
    competitionImage: EFL_Championship_logo,
    titles: 4,
    seasons: "1893–94, 1895–96, 1904–05, 1961–62",
  },
  {
    type: "Domestic",
    typeImage: england_flag,
    competition: "FA Cup",
    competitionImage: Fa_Cup_logo,
    titles: 8,
    seasons:
      "1964–65, 1973–74, 1985–86, 1988–89, 1991–92, 2000–01, 2005–06, 2021–22",
  },
  {
    type: "Domestic",
    typeImage: england_flag,
    competition: "EFL Cup",
    competitionImage: EFL_Cup_Logo,
    titles: 9,
    seasons:
      "1980–81, 1981–82, 1982–83, 1983–84, 1994–95, 2000–01, 2002–03, 2011–12, 2021–22",
  },
  {
    type: "Domestic",
    typeImage: england_flag,
    competition: "FA Community Shield",
    competitionImage: FA_Community_Shield_logo,
    titles: 16,
    seasons:
      "1964, 1965, 1966, 1974, 1976, 1977, 1979, 1980, 1982, 1986, 1988, 1989, 1990, 2001, 2006, 2022",
  },
  {
    type: "Domestic",
    typeImage: england_flag,
    competition: "Football League Super Cup",
    competitionImage: Football_League_Super_Cup_logo,
    titles: 1,
    seasons: "1985-86",
  },
  {
    type: "Continental",
    typeImage: european_union_flag,
    competition: "UEFA Champions League",
    competitionImage: UEFA_Champions_League_logo,
    titles: 6,
    seasons: "1976–77, 1977–78, 1980–81, 1983–84, 2004–05, 2018–19",
  },
  {
    type: "Continental",
    typeImage: european_union_flag,
    competition: "UEFA Europa League",
    competitionImage: UEFA_Europa_League_logo,
    titles: 3,
    seasons: "1972–73, 1975–76, 2000–01",
  },
  {
    type: "Continental",
    typeImage: european_union_flag,
    competition: "UEFA Super Cup",
    competitionImage: UEFA_Super_Cup_logo,
    titles: 4,
    seasons: "1977, 2001, 2005, 2019",
  },
  {
    type: "Worldwide",
    typeImage: nations_united_flag,
    competition: "FIFA Club World Cup",
    competitionImage: FIFA_Club_World_Cup_logo,
    titles: 1,
    seasons: "2019",
  },
];

export default liverpoolTitles;
