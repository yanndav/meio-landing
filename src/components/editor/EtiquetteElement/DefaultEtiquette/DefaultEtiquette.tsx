"use client";
import React from "react";
import { ExtendedRenderElementProps } from "../../types";
import { isEtiquetteElement } from "../../types";
import styles from "./DefautEtiquette.module.css";
const DefaultEtiquette: React.FC<ExtendedRenderElementProps> = ({
  attributes,
  element,
  children,
}) => {
  if (!isEtiquetteElement(element)) {
    return null;
  }

  return (
    <div className={styles.etiquette} {...attributes}>
      {children}
    </div>
  );
};

export default DefaultEtiquette;
