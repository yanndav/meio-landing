import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import LandingMenu from "./landingMenu/LandingMenu";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.title} href={"/"}>
        Meio
      </Link>
      <LandingMenu />
    </div>
  );
};

export default Header;
