"use client";
// Import React dependencies.
import React, { useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";
import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";
import { CustomElement, CustomText } from "@/components/editor/types";
import { renderElement } from "./renderElement";

import { handleKeyDown, meioPlugin } from "./actions";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const EditorPage: React.FC = () => {
  // Create a Slate editor object that won't change across renders.
  const [editor] = useState(() => meioPlugin(withReact(createEditor())));
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        disableDefaultStyles
        renderElement={renderElement}
        onKeyDown={(e) => handleKeyDown(e, editor)}
        style={{ whiteSpace: "pre-wrap" }}
      />
    </Slate>
  );
};

export default EditorPage;

const initialValue: Descendant[] = [
  {
    type: "section",
    category: "hero",
    heroCategory: "Choisir une catégorie",
    children: [
      {
        type: "heading",
        level: 1,
        category: "hero",
        children: [{ text: "Choisissez un titre" }],
      },
      {
        type: "heading",
        level: 2,
        category: "hero",
        children: [{ text: "Choisissez un sous-titre" }],
      },
      {
        type: "etiquette",
        category: "hero",
        children: [{ text: "Catégorie" }],
      },
    ],
  },
];
