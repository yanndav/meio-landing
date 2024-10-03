"use client";
import React from "react";
import { ExtendedRenderElementProps } from "@/components/editor/types";
import { isEtiquetteElement } from "@/components/editor/types";
import HeroEtiquette from "./HeroEtiquette/HeroEtiquette";
import DefaultEtiquette from "./DefaultEtiquette/DefaultEtiquette";

const EtiquetteElement: React.FC<ExtendedRenderElementProps> = (props) => {
  if (!isEtiquetteElement(props.element)) {
    return null;
  }

  const category: string = props.element.category;

  switch (category) {
    case "hero":
      return <HeroEtiquette {...props} />;
    case "default":
      return <DefaultEtiquette {...props} />;
    default:
      return <DefaultEtiquette {...props} />;
  }
};

export default EtiquetteElement;
