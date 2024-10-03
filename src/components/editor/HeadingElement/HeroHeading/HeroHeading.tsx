"use client";
import React from "react";
import styles from "./HeroHeading.module.css";
import { isHeadingElement, whatHeadingLevel } from "../../types";
import { ExtendedRenderElementProps } from "../../types";
const HeroHeading: React.FC<ExtendedRenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  if (!isHeadingElement(element)) {
    return null;
  }
  const level = whatHeadingLevel(element);
  switch (level) {
    case 1:
      return (
        <h1 {...attributes} className={styles.level1}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 {...attributes} className={styles.level2}>
          {children}
        </h2>
      );
    default:
      return (
        <h1 className={styles.level1} {...attributes}>
          {children}
        </h1>
      );
  }
};

export default HeroHeading;
