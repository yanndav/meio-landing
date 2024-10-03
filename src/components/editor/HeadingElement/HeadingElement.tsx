"use client";
import React from "react";
import { ExtendedRenderElementProps } from "@/components/editor/types";
import { isHeadingElement } from "@/components/editor/types";
import HeroHeading from "./HeroHeading/HeroHeading";
import DefaultHeading from "./DefaultHeading/DefaultHeading";
const HeadingElement: React.FC<ExtendedRenderElementProps> = (props) => {
  if (!isHeadingElement(props.element)) {
    return null;
  }
  const category = props.element.category as string;
  console.log(props.children);

  switch (category) {
    case "hero":
      return <HeroHeading {...props} />;
    case "default":
      return <DefaultHeading {...props} />;
    default:
      return <DefaultHeading {...props} />;
  }
};

export default HeadingElement;
