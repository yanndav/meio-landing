"use client";
import React, { useEffect, useState } from "react";
import styles from "./Etiquette.module.css";

interface Etiquette {
  title: string;
  background: string;
  foreground: string;
}

interface EtiquetteProps {
  etiquettes: Etiquette[];
}

const Etiquette: React.FC<EtiquetteProps> = ({ etiquettes }) => {
  const [data, setData] = useState<Etiquette>(etiquettes[0]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setIndex((prevCount) => prevCount + 1);
      setData(etiquettes[index % etiquettes.length]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      className={styles.etiquette}
      style={{
        backgroundColor: `var(${data.background})`,
        color: `var(${data.foreground})`,
      }}
    >
      {data.title}
    </div>
  );
};

export default Etiquette;
