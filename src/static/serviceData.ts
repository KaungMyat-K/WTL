import shipIcon from "../assets/home/ship.png";
import roadIcon from "../assets/home/road.png";
import airIcon from "../assets/home/air.png";
import trainIcon from "../assets/home/train.png";
import type { ServiceItem } from "../types";
import seaFreightImg from "../assets/home/ship-pic.jpg";
import {
  CostEffectiveIcon,
  FastDeliveryIcon,
  GlobalNetworkIcon,
  PriorityHandlingIcon,
  RealTimeTrackingIcon,
  SupportIcon,
} from "../components/icons";
import { SERVICE_LINKS } from "../config/site";

export const FEATURES = [
  "Global Coverage",
  "24/7 Support",
  "Competitive Rates",
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "sea-freight",
    title: "Sea Freight",
    description:
      "Reliable and cost-effective ocean freight services for international shipping with global coverage.",
    icon: shipIcon,
    href: SERVICE_LINKS[0].href,
    image: seaFreightImg,
    keyFeatures: [
      {
        id: "fast-delivery",
        title: "Fast Delivery",
        description:
          "Time-sensitive shipments with priority handling and express delivery options.",
        icon: FastDeliveryIcon,
      },
      {
        id: "global-network",
        title: "Global Network",
        description: "Extensive network covering 100+ destinations worldwide.",
        icon: GlobalNetworkIcon,
      },
      {
        id: "real-time-tracking",
        title: "Real-Time Tracking",
        description:
          "Track your shipments in real-time with our advanced tracking system.",
        icon: RealTimeTrackingIcon,
      },
      {
        id: "24-7-support",
        title: "24/7 Support",
        description: "Dedicated customer support available around the clock.",
        icon: SupportIcon,
      },
      {
        id: "priority-handling",
        title: "Priority Handling",
        description:
          "Priority handling for urgent and time-critical shipments.",
        icon: PriorityHandlingIcon,
      },
      {
        id: "cost-effective",
        title: "Cost-Effective",
        description:
          "Competitive rates without compromising on service quality.",
        icon: CostEffectiveIcon,
      },
    ],
  },
  {
    id: "road-freight",
    title: "Road Freight",
    description:
      "Fast and flexible land transportation solutions for domestic and cross-border shipping needs.",
    icon: roadIcon,
    href: SERVICE_LINKS[1].href,
    image: seaFreightImg,
    keyFeatures: [
      {
        id: "fast-delivery",
        title: "Fast Delivery",
        description:
          "Time-sensitive shipments with priority handling and express delivery options.",
        icon: FastDeliveryIcon,
      },
      {
        id: "global-network",
        title: "Global Network",
        description: "Extensive network covering 100+ destinations worldwide.",
        icon: GlobalNetworkIcon,
      },
      {
        id: "real-time-tracking",
        title: "Real-Time Tracking",
        description:
          "Track your shipments in real-time with our advanced tracking system.",
        icon: RealTimeTrackingIcon,
      },
      {
        id: "24-7-support",
        title: "24/7 Support",
        description: "Dedicated customer support available around the clock.",
        icon: SupportIcon,
      },
      {
        id: "priority-handling",
        title: "Priority Handling",
        description:
          "Priority handling for urgent and time-critical shipments.",
        icon: PriorityHandlingIcon,
      },
      {
        id: "cost-effective",
        title: "Cost-Effective",
        description:
          "Competitive rates without compromising on service quality.",
        icon: CostEffectiveIcon,
      },
    ],
  },
  {
    id: "air-freight",
    title: "Air Freight",
    description:
      "Time-sensitive air cargo solutions with priority handling and global network coverage.",
    icon: airIcon,
    href: SERVICE_LINKS[2].href,
    image: seaFreightImg,
    keyFeatures: [],
  },
  {
    id: "rail-freight",
    title: "Rail Freight",
    description:
      "Sustainable and cost-efficient rail transportation for bulk and container shipments.",
    icon: trainIcon,
    href: SERVICE_LINKS[3].href,
    image: seaFreightImg,
    keyFeatures: [
      {
        id: "fast-delivery",
        title: "Fast Delivery",
        description:
          "Time-sensitive shipments with priority handling and express delivery options.",
        icon: FastDeliveryIcon,
      },
      {
        id: "global-network",
        title: "Global Network",
        description: "Extensive network covering 100+ destinations worldwide.",
        icon: GlobalNetworkIcon,
      },
      {
        id: "real-time-tracking",
        title: "Real-Time Tracking",
        description:
          "Track your shipments in real-time with our advanced tracking system.",
        icon: RealTimeTrackingIcon,
      },
      {
        id: "24-7-support",
        title: "24/7 Support",
        description: "Dedicated customer support available around the clock.",
        icon: SupportIcon,
      },
      {
        id: "priority-handling",
        title: "Priority Handling",
        description:
          "Priority handling for urgent and time-critical shipments.",
        icon: PriorityHandlingIcon,
      },
      {
        id: "cost-effective",
        title: "Cost-Effective",
        description:
          "Competitive rates without compromising on service quality.",
        icon: CostEffectiveIcon,
      },
    ],
  },
  {
    id: "full-container-load",
    title: "Full Container Load",
    description:
      "Dedicated container shipping for large volumes with exclusive use and maximum security for your cargo.",
    icon: trainIcon,
    href: SERVICE_LINKS[4].href,
    image: seaFreightImg,
    keyFeatures: [
      {
        id: "fast-delivery",
        title: "Fast Delivery",
        description:
          "Time-sensitive shipments with priority handling and express delivery options.",
        icon: FastDeliveryIcon,
      },
      {
        id: "global-network",
        title: "Global Network",
        description: "Extensive network covering 100+ destinations worldwide.",
        icon: GlobalNetworkIcon,
      },
      {
        id: "real-time-tracking",
        title: "Real-Time Tracking",
        description:
          "Track your shipments in real-time with our advanced tracking system.",
        icon: RealTimeTrackingIcon,
      },
      {
        id: "24-7-support",
        title: "24/7 Support",
        description: "Dedicated customer support available around the clock.",
        icon: SupportIcon,
      },
      {
        id: "priority-handling",
        title: "Priority Handling",
        description:
          "Priority handling for urgent and time-critical shipments.",
        icon: PriorityHandlingIcon,
      },
      {
        id: "cost-effective",
        title: "Cost-Effective",
        description:
          "Competitive rates without compromising on service quality.",
        icon: CostEffectiveIcon,
      },
    ],
  },
  {
    id: "less-than-container-load",
    title: "Less than Container Load",
    description:
      "Cost-effective consolidation services for smaller shipments sharing container space with flexible shipping options.",
    icon: trainIcon,
    href: SERVICE_LINKS[5].href,
    image: seaFreightImg,
    keyFeatures: [
      {
        id: "fast-delivery",
        title: "Fast Delivery",
        description:
          "Time-sensitive shipments with priority handling and express delivery options.",
        icon: FastDeliveryIcon,
      },
      {
        id: "global-network",
        title: "Global Network",
        description: "Extensive network covering 100+ destinations worldwide.",
        icon: GlobalNetworkIcon,
      },
      {
        id: "real-time-tracking",
        title: "Real-Time Tracking",
        description:
          "Track your shipments in real-time with our advanced tracking system.",
        icon: RealTimeTrackingIcon,
      },
      {
        id: "24-7-support",
        title: "24/7 Support",
        description: "Dedicated customer support available around the clock.",
        icon: SupportIcon,
      },
      {
        id: "priority-handling",
        title: "Priority Handling",
        description:
          "Priority handling for urgent and time-critical shipments.",
        icon: PriorityHandlingIcon,
      },
      {
        id: "cost-effective",
        title: "Cost-Effective",
        description:
          "Competitive rates without compromising on service quality.",
        icon: CostEffectiveIcon,
      },
    ],
  },
];
