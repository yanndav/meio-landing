"use client";
import React from "react";
import IconButton from "@/components/landing/fonctionnalites/iconButton/IconButton";
import { PiToolbox, PiCode, PiBinoculars, PiWarning } from "react-icons/pi";
import styles from "./HeroEtiquette.module.css";
import { ExtendedRenderElementProps } from "../../types";
import { isEtiquetteElement } from "../../types";
import { Node } from "slate";
import { ReactEditor } from "slate-react";
import { useSlate } from "slate-react";
import HeroEtiquetteSelector from "./HeroEtiquetteSelector";

const HeroEtiquette: React.FC<ExtendedRenderElementProps> = ({
  attributes,
  element,
  children,
}) => {
  const editor = useSlate();
  if (!isEtiquetteElement(element)) {
    return null;
  }
  const title: string = Node.string(element);
  const path = ReactEditor.findPath(editor, element); // Find the path of the element

  switch (title) {
    case "Méthodes":
      return (
        <HeroEtiquetteSelector path={path}>
          <div className={styles.etiquette}>
            {title && (
              <IconButton icon={PiToolbox} color={"--clear"} type={"normal"} />
            )}
            <div contentEditable={false} {...attributes}>
              {children}
            </div>
          </div>
        </HeroEtiquetteSelector>
      );
    case "Technologies":
      return (
        <HeroEtiquetteSelector path={path}>
          <div className={styles.etiquette}>
            {title && (
              <IconButton
                icon={PiCode}
                color={"--light-purple"}
                type={"normal"}
              />
            )}
            <div contentEditable={false} {...attributes}>
              {children}
            </div>
          </div>
        </HeroEtiquetteSelector>
      );
    case "Sur le terrain":
      return (
        <HeroEtiquetteSelector path={path}>
          <div className={styles.etiquette}>
            {title && (
              <IconButton
                icon={PiBinoculars}
                color={"--yellow"}
                type={"normal"}
              />
            )}
            <div contentEditable={false} {...attributes}>
              {children}
            </div>
          </div>
        </HeroEtiquetteSelector>
      );
    default:
      return (
        <HeroEtiquetteSelector path={path}>
          <div className={styles.etiquette}>
            {title && (
              <IconButton icon={PiWarning} color={"--error"} type={"normal"} />
            )}
            <div contentEditable={false}>{children}</div>
          </div>
        </HeroEtiquetteSelector>
      );
  }
};

export default HeroEtiquette;
