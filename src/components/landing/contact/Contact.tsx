import React from "react";
import styles from "./Contact.module.css";
// import Form from "./Form/Form";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <h2 className={styles.title}>
        Mettez les données au service de toutes les étapes de vos projets
      </h2>
      <div className={styles.formSection}>
        <div className={styles.callAction}>
          <h3 className={styles.question}>Intéressé.e ?</h3>
          <Link
            className={styles.answer}
            href={
              "mailto:yann.collindavid@gmail.com?subject=Meio, prise de contact"
            }
          >
            Discutons-en !
          </Link>
        </div>
        {/* <Form /> */}
      </div>
    </div>
  );
};

export default Contact;
