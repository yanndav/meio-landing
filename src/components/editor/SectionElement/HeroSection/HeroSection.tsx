"use client";
import React from "react";
import styles from "./HeroSection.module.css";
import { ExtendedRenderElementProps } from "@/components/editor/types";
import { isSectionElement } from "@/components/editor/types";
const HeroSection: React.FC<ExtendedRenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  if (!isSectionElement(element)) {
    return null;
  }
  const category = element.heroCategory;
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
      {...attributes}
    >
      {children}
    </div>
  );
};

export default HeroSection;
