import seaFreightImg from "../assets/home/ship-pic.jpg";
import airCargoImg from "../assets/home/air-pic.jpg";
import storageImg from "../assets/home/road-pic.jpg";
import shipIcon from "../assets/home/ship.png";
import roadIcon from "../assets/home/road.png";
import airIcon from "../assets/home/air.png";
import warehousingIcon from "../assets/home/warehouse.png";
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
      id: "1",
      src: seaFreightImg,
      alt: "Sea freight container ship",
    },
    {
      id: "2",
      src: airCargoImg,
      alt: "Cargo airplane flying",
    },
    {
      id: "3",
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
        id: "warehousing-&-trucking",
        src: warehousingIcon,
        alt: "Cargo airplane flying",
      },
      {
        id: "land-freight",
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
        id: "warehousing-&-trucking",
        src: airCargoImg,
        alt: "Cargo airplane flying",
      },
      {
        id: "land-freight",
        src: storageImg,
        alt: "Modern warehouse logistics",
      },
      {
        id: "local-customs-clearance",
        src: storageImg,
        alt: "Local Customs Clearance",
      },
      {
        id: "special-project-cargo",
        src: storageImg,
        alt: "Special Project Cargo",
      },
      {
        id: "combined-logistics",
        src: storageImg,
        alt: "Special Project Cargo",
      },
    ],
  },
  contact: {
    id: "locations",
    src: locations,
    alt: "locations",
  },
};
