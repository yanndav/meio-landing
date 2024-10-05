"use client";
import React, { useState } from "react";
import styles from "./HeroEtiquette.module.css";
import { PiCaretCircleDown } from "react-icons/pi";
import Etiquette from "@/components/blog/etiquette/Etiquette";
import { ReactEditor, useSlate } from "slate-react";
import { Transforms, Editor, Text, Node } from "slate";

type HeroEtiquetteSelectorProps = {
  children: React.ReactNode;
  path: number[];
};

const HeroEtiquetteSelector: React.FC<HeroEtiquetteSelectorProps> = ({
  children,
  path,
}) => {
  const editor = useSlate();

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.selector}
        onClick={() => setOpen((prev) => !prev)}
        style={{
          boxShadow: open ? "0px 0px 10px -4px var(--foreground)" : "",
          backgroundColor: open ? "var(--background)" : "",
          transform: open ? "translateY(-2px)" : "",
          // justifyContent: open ? "flex-start" : "",
        }}
      >
        {children}
        {/* <PiCaretCircleDown size={20} /> */}
      </div>
      {open && (
        <div className={styles.choicesContainer}>
          {choices.map((choice) => (
            <div
              key={choice}
              onClick={() => {
                setOpen((prev) => !prev);
                selectCategory(editor, path, choice);
              }}
              className={styles.choice}
            >
              <Etiquette title={choice} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroEtiquetteSelector;

const choices: string[] = ["Méthodes", "Technologies", "Sur le terrain"];

const selectCategory = (
  editor: Editor,
  path: number[],
  category: string
): void => {
  // Modify the category of the hero section :
  const parentNode: Node | undefined = getParentNode(editor, path);
  if (parentNode) {
    const parentNodePath: number[] = ReactEditor.findPath(editor, parentNode);
    Transforms.setNodes(
      editor,
      { heroCategory: category },
      { at: parentNodePath }
    );
  }

  // Get the children nodes to find the text leaf
  const textNodes = Array.from(Editor.nodes(editor, { at: path }));
  // Loop through text nodes to find and modify the specific text node
  for (const [node, nodePath] of textNodes) {
    if (Text.isText(node)) {
      // Modify the text node
      Transforms.delete(editor, { at: nodePath });
      Transforms.insertText(editor, category, { at: nodePath });

      // Transforms.setNodes(
      //   editor,
      //   { text: category }, // New value
      //   { at: nodePath } // Specify the path of the text node
      // );
      break; // Exit the loop after modifying the first text node
    }
  }
};

const getParentNode = (editor: Editor, path: number[]): Node | undefined => {
  // Check if the path is not at the root
  if (path.length === 0) {
    return undefined; // No parent exists
  }

  // Create the parent path by removing the last index
  const parentPath = path.slice(0, -1); // Remove the last index to get the parent path

  // Get the parent node
  const [parentNode] = Editor.node(editor, parentPath);

  return parentNode;
};
