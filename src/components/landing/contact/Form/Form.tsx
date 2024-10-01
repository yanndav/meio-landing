import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Prénom et Nom"
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Message"
          className={styles.textarea}
        />
      </form>
      <button className={styles.btn}>Envoyer</button>
    </div>
  );
};

export default Form;
