import shipIcon from "../assets/home/ship.png";
import landIcon from "../assets/home/road.png";
import airIcon from "../assets/home/air.png";
import warehousingIcon from "../assets/home/warehouse.png";
import locations from "../assets/offices/location.png";
import logo from "../assets/logo.png";
import defaultLogo from "../assets/defaultPic.jpg";
import landingPic1 from "../assets/home/landing01.jpg";
import landingPic2 from "../assets/home/landing02.jpg";
import landingPic3 from "../assets/home/landing03.jpg";
import airFreightPic from "../assets/services/servicesAirFreight.jpg";
import landFreightPic from "../assets/services/servicesLandFreight.jpg";
import seaFreightPic from "../assets/services/servicesSeaFreight.jpg";
import combinedLogisticsPic from "../assets/services/servicesCombinedLogistics.jpg";
import localCustomsClearancePic from "../assets/services/servicesLocalCustomsClearance.jpg";
import specialProjectCargoPic from "../assets/services/servicesSpecialProjectCargo.jpg";
import warehousingTruckingPic from "../assets/services/servicesWarehousing&Trucking.jpg";

export const Images = {
  logo: {
    id: "logo",
    src: logo,
    alt: "logo",
  },
  defaultLogo: {
    id: "default_logo",
    src: defaultLogo,
    alt: "default_logo",
  },
  home: [
    {
      id: "1",
      src: landingPic1,
      alt: "landingpic",
    },
    {
      id: "2",
      src: landingPic2,
      alt: "landingpic",
    },
    {
      id: "3",
      src: landingPic3,
      alt: "landingpic",
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
        id: "land-freight",
        src: landIcon,
        alt: "Modern warehouse logistics",
      },
      {
        id: "warehousing-&-trucking",
        src: warehousingIcon,
        alt: "Cargo airplane flying",
      },
    ],
    img: [
      {
        id: "sea-freight",
        src: seaFreightPic,
        alt: "Sea freight container ship",
      },
      {
        id: "air-freight",
        src: airFreightPic,
        alt: "Cargo airplane flying",
      },
      {
        id: "warehousing-&-trucking",
        src: warehousingTruckingPic,
        alt: "Cargo airplane flying",
      },
      {
        id: "land-freight",
        src: landFreightPic,
        alt: "Modern warehouse logistics",
      },
      {
        id: "local-customs-clearance",
        src: localCustomsClearancePic,
        alt: "Local Customs Clearance",
      },
      {
        id: "special-project-cargo",
        src: specialProjectCargoPic,
        alt: "Special Project Cargo",
      },
      {
        id: "combined-logistics",
        src: combinedLogisticsPic,
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
