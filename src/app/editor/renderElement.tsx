import SectionElement from "@/components/editor/SectionElement/SectionElement";
import DefaultElement from "@/components/editor/DefaultElement/DefaultElement";
import { RenderElementProps } from "slate-react";
import HeadingElement from "@/components/editor/HeadingElement/HeadingElement";
import EtiquetteElement from "@/components/editor/EtiquetteElement/EtiquetteElement";
export const renderElement = (props: RenderElementProps) => {
  switch (props.element.type) {
    case "section":
      return <SectionElement {...props} />;
    case "etiquette":
      return <EtiquetteElement {...props} />;
    case "heading":
      return <HeadingElement {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};
