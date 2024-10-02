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
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % etiquettes.length; // Calculate the next index
        setData(etiquettes[nextIndex]); // Update data with the next index
        return nextIndex; // Return the new index
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.etiquette}
      id={`etiquette-${index}`}
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
