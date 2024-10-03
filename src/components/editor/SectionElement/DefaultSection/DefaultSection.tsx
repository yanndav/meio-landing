"use client";
import React from "react";
import styles from "./DefaultSection.module.css";
import { ExtendedRenderElementProps } from "@/components/editor/types";

const DefaultSection: React.FC<ExtendedRenderElementProps> = ({
  attributes,
  children,
}) => {
  return (
    <div className={styles.container} {...attributes}>
      {children}
    </div>
  );
};

export default DefaultSection;
