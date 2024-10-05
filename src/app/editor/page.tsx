"use client";
// Import React dependencies.
import React, { useState, useCallback } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";
import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";
import { CustomElement, CustomText } from "@/components/editor/types";
import { renderElement } from "./renderElement";
import styles from "./page.module.css";

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
        style={{ whiteSpace: "pre-wrap", outline: "none" }}
        className={styles.editable}
        placeholder="Ecrivez quelque-chose"
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
        children: [{ text: "" }],
      },
      {
        type: "heading",
        level: 2,
        category: "hero",
        children: [{ text: "" }],
      },
      {
        type: "etiquette",
        category: "hero",
        children: [{ text: "" }],
      },
    ],
  },
  {
    type: "section",
    category: "default",
    children: [
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ],
  },
];
