import React from "react";
import styles from "./Hero.module.css";
import Etiquette from "../etiquette/Etiquette";
import Subscribe from "../subscribe/Subscribe";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.accroche}>
        {text.accroche.map((acc, key) => (
          <div key={key}>{acc}</div>
        ))}
      </div>
      <Etiquette etiquettes={text.etiquettes} />
      <Subscribe />
    </div>
  );
};

export default Hero;

const text: {
  accroche: string[];
  etiquettes: { title: string; background: string; foreground: string }[];
} = {
  accroche: [
    `Rassemblez enfin`,
    `vos équipes et données,`,
    `pour suivre et piloter`,
    `vos projets`,
  ],
  etiquettes: [
    {
      title: "de développement",
      background: "--yellow",
      foreground: "--foreground",
    },
    {
      title: "associatifs",
      background: "--purple",
      foreground: "--light-gray",
    },
    {
      title: "de politiques publiques",
      background: "--brown",
      foreground: "--light  -gray",
    },
    {
      title: "territoriaux",
      background: "--light-purple",
      foreground: "--foreground",
    },
  ],
};
