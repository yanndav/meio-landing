import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/mentions-legales"> Mentions légales </Link>
      <Link href="/politique-de-confidentialite">
        {" "}
        Politique de confidentialité{" "}
      </Link>
    </footer>
  );
};

export default Footer;
