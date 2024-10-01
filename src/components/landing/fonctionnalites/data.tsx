import {
  PiLightbulb,
  PiChartBarHorizontal,
  PiPuzzlePiece,
  PiUsersFour,
  PiChartLineUp,
  PiAirTrafficControl,
  PiCalendarDots,
  PiChalkboardSimple,
  PiListPlus,
  PiGraph,
  PiCompassTool,
  PiPlugsConnected,
  PiBellRinging,
  PiClockCounterClockwiseFill,
  PiChats,
  PiPresentationChart,
} from "react-icons/pi";
export const iconMap: Record<string, React.FC> = {
  PiLightbulb: PiLightbulb,
  PiChartBarHorizontal: PiChartBarHorizontal,
  PiPuzzlePiece: PiPuzzlePiece,
  PiUsersFour: PiUsersFour,
  PiChartLineUp: PiChartLineUp,
  PiAirTrafficControl: PiAirTrafficControl,
  PiCalendarDots: PiCalendarDots,
  PiChalkboardSimple: PiChalkboardSimple,
  PiListPlus: PiListPlus,
  PiGraph: PiGraph,
  PiCompassTool: PiCompassTool,
  PiPlugsConnected: PiPlugsConnected,
  PiBellRinging: PiBellRinging,
  PiClockCounterClockwiseFill: PiClockCounterClockwiseFill,
  PiChats: PiChats,
  PiPresentationChart: PiPresentationChart,
};
export const data: [
  {
    title: string;
    description: string;
    icon: string;
    color: string;
    cards: {
      title: string;
      description: string;
      icon: string;
    }[];
  }
] = [
  {
    title: "Concevez.",
    description:
      "Des outils pour mieux comprendre le contexte de vos futures interventions et des espaces collaboratifs pour penser des projets innovants.",
    color: "--clear",
    icon: "PiLightbulb",
    cards: [
      {
        title: "Analyse de données",
        description:
          "Croisez et visualisez des données publiques et privées sans programmer.",
        icon: "PiChartBarHorizontal",
      },
      {
        title: "Modèle adaptable",
        description:
          "Inspirez-vous de modèles d’analyses thématiques, ils s’adaptent à vos données.",
        icon: "PiPuzzlePiece",
      },
      {
        title: "Co-construction",
        description:
          "Animez des ateliers avec vos contenus interactifs et collectez des suggestions. ",
        icon: "PiUsersFour",
      },
      {
        title: "Prospective",
        description:
          "Réalisez des prévisions et des simulations à partir de données historiques.",
        icon: "PiChartLineUp",
      },
    ],
  },
  {
    title: "Organisez.",
    description:
      "Des espaces qui s’adaptent à la nature de votre projet et au rôle de chacun, pour planifier et piloter les avancées du projet.",
    color: "--yellow",
    icon: "PiAirTrafficControl",
    cards: [
      {
        title: "Planning",
        description:
          "Planifiez le déroulé des activités et interconnectez les à vos indicateurs.",
        icon: "PiCalendarDots",
      },
      {
        title: "Espace projet",
        description:
          "Créez pour chaque projet un espace avec les outils dont vous avez besoin.",
        icon: "PiChalkboardSimple",
      },
      {
        title: "Tâches paramétrables",
        description:
          "Parametrez vos tâches avec des dates butoirs, des dépendances, et plus. ",
        icon: "PiListPlus",
      },
      {
        title: "Collaboration élargie",
        description:
          "Définissez les outils et les espaces accessibles à vos équipes et partenaires.",
        icon: "PiGraph",
      },
    ],
  },
  {
    title: "Evaluez.",
    description:
      "Tout l’historique et toutes les informations de votre projet en un seul endroit, pour faire le bilan et communiquer en temps réel. ",
    color: "--light-purple",
    icon: "PiCompassTool",
    cards: [
      {
        title: "Suivi en temps réel",
        description:
          "Collectez des données de différentes sources pour suivre l’évolution en direct.",
        icon: "PiPlugsConnected",
      },
      {
        title: "Alertes",
        description:
          "Abonnez-vous aux alertes sur l’évolution des données que vous suivez.",
        icon: "PiBellRinging",
      },
      {
        title: "Historique",
        description:
          "Classez tous vos documents pour retracer l’exécution du projet. ",
        icon: "PiClockCounterClockwiseFill",
      },
      {
        title: "Questionnaires",
        description:
          "Gérez la collecte de vos enquêtes bénéficiaires et analysez les avis.",
        icon: "PiChats",
      },
      {
        title: "Communication",
        description:
          "Présentez votre projet et ses résultats au grand public ou en interne.",
        icon: "PiPresentationChart",
      },
    ],
  },
];
