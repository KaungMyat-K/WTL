import seaFreightImg from "../assets/home/ship-pic.jpg";
import airCargoImg from "../assets/home/air-pic.jpg";
import storageImg from "../assets/home/road-pic.jpg";
import shipIcon from "../assets/home/ship.png";
import roadIcon from "../assets/home/road.png";
import airIcon from "../assets/home/air.png";
import railIcon from "../assets/home/train.png";
import locations from "../assets/home/w1.png";
import logo from "../assets/logo.png";

export const Images = {
  logo: {
    id: "logo",
    src: logo,
    alt: "logo",
  },
  home: [
    {
      id: "sea-freight",
      src: seaFreightImg,
      alt: "Sea freight container ship",
    },
    {
      id: "air-freight",
      src: airCargoImg,
      alt: "Cargo airplane flying",
    },
    {
      id: "road-freight",
      src: storageImg,
      alt: "Modern warehouse logistics",
    },
  ],
  services: {
    iconImg: [
      {
        id: "sea-freight",
        src: shipIcon,
        alt: "Sea freight container ship",
      },
      {
        id: "air-freight",
        src: airIcon,
        alt: "Cargo airplane flying",
      },
      {
        id: "rail-freight",
        src: railIcon,
        alt: "Cargo airplane flying",
      },
      {
        id: "road-freight",
        src: roadIcon,
        alt: "Modern warehouse logistics",
      },
    ],
    img: [
      {
        id: "sea-freight",
        src: seaFreightImg,
        alt: "Sea freight container ship",
      },
      {
        id: "air-freight",
        src: airCargoImg,
        alt: "Cargo airplane flying",
      },
      {
        id: "rail-freight",
        src: airCargoImg,
        alt: "Cargo airplane flying",
      },
      {
        id: "road-freight",
        src: storageImg,
        alt: "Modern warehouse logistics",
      },
      {
        id: "full-container-load",
        src: storageImg,
        alt: "Full Container Load",
      },
      {
        id: "less-than-container-load",
        src: storageImg,
        alt: "Less than Container Load",
      },
    ],
  },
  contact: {
    id: "locations",
    src: locations,
    alt: "locations",
  },
};
