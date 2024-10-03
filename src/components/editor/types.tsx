import { RenderElementProps } from "slate-react";
import { BaseElement } from "slate";
// Step 1: Define a type for your custom elements
export type CustomText = { text: string };

interface ParagraphElement extends BaseElement {
  type: "paragraph";
  children: CustomText[];
}

export interface HeadingElement extends BaseElement {
  type: "heading";
  level: number;
  category: string;
  children: CustomText[];
}

interface CustomSectionElement extends BaseElement {
  type: "section"; // General type for sections
  category: string; // Key for conditional styling
  children: CustomChildren[];
  heroCategory?: string;
}

export interface CustomEtiquetteElement extends BaseElement {
  type: "etiquette";
  category: string;
  children: CustomText[];
}

type CustomChildren =
  | ParagraphElement
  | HeadingElement
  | CustomEtiquetteElement
  | CustomText;

export type CustomElement =
  | ParagraphElement
  | CustomSectionElement
  | HeadingElement
  | CustomEtiquetteElement;

// Step 2: Extend RenderElementProps for your custom types
export interface ExtendedRenderElementProps extends RenderElementProps {
  element: CustomElement;
}

// Functions to informations within an element

export const isSectionElement = (
  element: CustomElement
): element is CustomSectionElement => {
  return element.type === "section";
};

export const isHeadingElement = (
  element: CustomElement
): element is HeadingElement => {
  return element.type === "heading";
};

export const isEtiquetteElement = (
  element: CustomElement
): element is CustomEtiquetteElement => {
  return element.type === "etiquette";
};
export const whatHeadingLevel = (element: HeadingElement): number => {
  return element.level;
};
