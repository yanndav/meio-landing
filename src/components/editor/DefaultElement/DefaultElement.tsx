import React from "react";
import { RenderElementProps } from "slate-react";

const DefaultElement: React.FC<RenderElementProps> = ({
  attributes,
  children,
}) => {
  return <p {...attributes}>{children}</p>;
};

export default DefaultElement;
