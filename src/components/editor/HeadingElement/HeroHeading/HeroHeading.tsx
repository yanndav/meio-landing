"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./HeroHeading.module.css";
import { CustomText, isHeadingElement, whatHeadingLevel } from "../../types";
import { ExtendedRenderElementProps } from "../../types";
import { CustomElement } from "../../types";
import { Editor, Transforms } from "slate";
import { ReactEditor, useSelected, useFocused } from "slate-react";
import { useSlate } from "slate-react";
const HeroHeading: React.FC<ExtendedRenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  if (!isHeadingElement(element)) {
    return null;
  }

  const editor = useSlate();
  const level = whatHeadingLevel(element);
  const isPlaceholder = getString(element).length === 0;
  const selected = useSelected();

  const editComponent = (): void => {
    if (isPlaceholder) {
      const path = ReactEditor.findPath(editor, element);
      if (path) {
        // setIsPlaceholder(false);
        setTimeout(() => {
          ReactEditor.focus(editor); // Focus on the editor to show the cursor
        }, 0);
        setTimeout(() => {
          Transforms.select(editor, [...path, 0]);
        }, 0);
      }
    }
  };

  switch (level) {
    case 1:
      return (
        <h1 {...attributes} className={styles.level1}>
          {isPlaceholder && (
            <span
              contentEditable={false}
              className={styles.placeholder}
              onClick={editComponent}
              style={{
                transform: selected ? "scaleX(1)" : "scaleX(0)", // Scale to 0 when hidden
              }}
            >
              {selected ? "" : "Choisissez un titre"}{" "}
            </span>
          )}
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 {...attributes} className={styles.level2}>
          {isPlaceholder && (
            <span
              contentEditable={false}
              className={styles.placeholder}
              onClick={editComponent}
              style={{
                transform: selected ? "scaleX(1)" : "scaleX(0)", // Scale to 0 when hidden
              }}
            >
              {selected ? "" : "Choisissez un sous-titre"}{" "}
            </span>
          )}
          {children}
        </h2>
      );
    default:
      return (
        <h1
          {...attributes}
          className={styles.level1}
          onClick={() => editComponent()}
          // style={{
          //   transform: selected ? "scaleX(1)" : "scaleX(0)", // Scale to 0 when hidden
          // }}
        >
          {isPlaceholder && (
            <span
              contentEditable={false}
              className={styles.placeholder}
              onClick={editComponent}
            >
              {selected ? "" : "Choisissez un titre"}{" "}
            </span>
          )}
          {children}
        </h1>
      );
  }
};

export default HeroHeading;

const getString = (element: CustomElement): string => {
  const children = element.children as CustomText[];

  return children.map((ch) => ch.text).join("");
};
