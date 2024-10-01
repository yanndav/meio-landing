import React from "react";
import styles from "./LandingPage.module.css";
import Hero from "./hero/Hero";
import Fonctionnalites from "./fonctionnalites/Fonctionnalites";
import Contact from "./contact/Contact";
const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Fonctionnalites />
      <Contact />
    </div>
  );
};

export default LandingPage;
