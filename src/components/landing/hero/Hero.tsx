import React from "react";
import styles from "./Hero.module.css";
import Etiquette from "../etiquette/Etiquette";
// import Subscribe from "../subscribe/Subscribe";
import Link from "next/link";
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.accroche}>
        {text.accroche.map((acc, key) => (
          <div key={key}>{acc}</div>
        ))}
      </div>
      <Etiquette etiquettes={text.etiquettes} />
      {/* <Subscribe /> */}
      <Link className={styles.arrowContainer} href="#fonctionnalites">
        <svg
          className={styles.arrow}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 21c-.26 0-.52-.1-.71-.29l-10-10a1.003 1.003 0 0 1 1.42-1.42L12 18.59l9.29-9.3a1.003 1.003 0 0 1 1.42 1.42l-10 10c-.19.19-.45.29-.71.29z" />
        </svg>
      </Link>
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
