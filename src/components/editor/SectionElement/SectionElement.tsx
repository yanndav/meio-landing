"use client";
import React from "react";
import { ExtendedRenderElementProps } from "@/components/editor/types";
import { isSectionElement } from "@/components/editor/types";
import HeroSection from "./HeroSection/HeroSection";
import DefaultSection from "./DefaultSection/DefaultSection";
const SectionElement: React.FC<ExtendedRenderElementProps> = (props) => {
  if (!isSectionElement(props.element)) {
    return null;
  }
  const category = props.element.category as string;

  switch (category) {
    case "hero":
      return <HeroSection {...props} />;
    case "default":
      return <DefaultSection {...props} />;
    default:
      return <DefaultSection {...props} />;
  }
};

export default SectionElement;
