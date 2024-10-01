import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder="email@exemple.fr" />
        <button className={styles.btn}>s’inscrire sur liste d’attente</button>
      </div>
    </div>
  );
};

export default Subscribe;
