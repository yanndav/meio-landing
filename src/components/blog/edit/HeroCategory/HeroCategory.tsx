"use client";
import React, { useState } from "react";
import Etiquette from "@/components/blog/etiquette/Etiquette";
import styles from "./HeroCategory.module.css";
import { PiCaretCircleDown } from "react-icons/pi";
import { Article } from "../../types";

interface HeroCategoryProps {
  category: string;
  articleId: string;
  setKeyValue: (key: keyof Article, newValue: string) => void;
}

const HeroCategory: React.FC<HeroCategoryProps> = ({
  category,
  articleId,
  setKeyValue,
}) => {
  console.log(articleId);
  const [categoryD, setCategoryD] = useState(
    category === "" ? "Choisir une catégorie" : category
  );
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.selector}
        onClick={() => setOpen((prev) => !prev)}
        style={{
          boxShadow: open ? "0px 0px 10px -4px var(--foreground)" : "",
          backgroundColor: open ? "var(--background)" : "",
          transform: open ? "translateY(-2px)" : "",
        }}
      >
        <Etiquette title={categoryD} />
        <PiCaretCircleDown size={20} />
      </div>
      {open && (
        <div className={styles.choicesContainer}>
          {choices.map((choice) => (
            <div
              key={choice}
              onClick={() => {
                setCategoryD(choice);
                setOpen((prev) => !prev);
                setKeyValue("category", choice);
              }}
              className={styles.choice}
            >
              <Etiquette title={choice} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCategory;

const choices: string[] = ["Méthodes", "Technologies", "Sur le terrain"];
