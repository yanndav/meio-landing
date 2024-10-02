"use client";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./Hero.module.css";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroSubtitle from "../HeroSubtitle/HeroSubtitle";
import HeroCategory from "../HeroCategory/HeroCategory";
import { Article } from "../../types";

interface HeroProps {
  title: string;
  subtitle: string;
  category: string;
  id: string;
  setArticle: Dispatch<SetStateAction<Article>>;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  category,
  id,
  setArticle,
}) => {
  const setKeyValue = (key: keyof Article, newValue: string | object) => {
    setArticle((prev) => ({ ...prev, [key]: newValue }));
  };

  return (
    <div
      className={styles.container}
      style={{
        background: `linear-gradient(180deg,${
          category === "Méthodes"
            ? "var(--clear) 50%"
            : category === "Technologies"
            ? "var(--light-purple)50% "
            : category === "Sur le terrain"
            ? "var(--yellow) 50%"
            : "var(--error) -100%"
        } ,var(--background)) `,
      }}
    >
      <HeroTitle title={title} articleId={id} setKeyValue={setKeyValue} />
      <HeroSubtitle
        subtitle={subtitle}
        articleId={id}
        setKeyValue={setKeyValue}
      />
      <HeroCategory
        category={category}
        articleId={id}
        setKeyValue={setKeyValue}
      />
    </div>
  );
};

export default Hero;
