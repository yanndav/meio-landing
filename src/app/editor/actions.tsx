import {
  Editor,
  Element as SlateElement,
  TextUnit,
  Range,
  Node,
  Transforms,
  Ancestor,
  NodeEntry,
} from "slate";
import { KeyboardEvent } from "react";
import { CustomElement } from "@/components/editor/types";
import next from "next";

export const handleKeyDown = (event: KeyboardEvent, editor: Editor) => {
  if (
    (event.ctrlKey && event.key === "a") ||
    (event.metaKey && event.key === "a")
  ) {
    event.preventDefault(); // Prevent the default select all action
  }
  if (event.key === "Enter") {
    const { selection } = editor;
    if (!selection) {
      return;
    }

    // Checking if we're in the "Hero section" context
    const parentNodeEntry = Editor.above(editor, {
      at: selection,
      match: (n) => {
        const node = n as CustomElement;
        return Editor.isBlock(editor, node);
      }, // You can customize the match condition
    });

    if (!parentNodeEntry) {
      return;
    }

    // Access the parent node's attributes
    const [parentNode] = parentNodeEntry;

    // If we're in the hero case
    if (
      !(
        SlateElement.isElement(parentNode) &&
        parentNode.type === "section" &&
        parentNode.category === "hero"
      )
    ) {
      if (
        SlateElement.isElement(parentNode) &&
        parentNode.type === "heading" &&
        selection &&
        Range.isCollapsed(selection)
      ) {
        event.preventDefault();
        // insertion d'un paragraphe
        const [currentNode, currentPath] = Editor.node(
          editor,
          selection.anchor.path
        );
        console.log(currentPath);
        //     Transforms.insertNodes(
        //       editor,
        //       {
        //         type: "paragraph",
        //         children: [{ text: "" }],
        //       },
        //       {
        //         at: [currentPath.slice(0, 1), currentPath.slice(1, 1)],
        //       }
        //     );
      }
    }
    event.preventDefault();
    // In the Hero case, we want to jump to the next element
    if (selection && Range.isCollapsed(selection)) {
      const [currentNode, currentPath] = Editor.node(
        editor,
        selection.anchor.path
      );

      const nextPath: number[] = currentPath[1] === 0 ? [0, 1, 0] : [1, 0, 0];

      // Check if the next node exists
      const isNodeExists: boolean = Node.has(editor, nextPath);
      const isParentExists: boolean | CustomElement =
        isNodeExists && (Node.parent(editor, nextPath) as CustomElement);

      if (
        !isNodeExists ||
        (isParentExists && isParentExists.type === "etiquette")
      ) {
        // We have to create a new node
        const nodeContent: CustomElement =
          currentPath[1] === 0
            ? {
                type: "heading",
                level: 2,
                category: "hero",
                children: [{ text: "Choisissez un sous-titre" }],
              }
            : {
                type: "section",
                category: "default",
                children: [
                  {
                    type: "paragraph",
                    children: [{ text: "Ecrivez votre premier paragraphe" }],
                  },
                ],
              };
        // Optionally, if there's no next node, insert a new paragraph
        Transforms.insertNodes(editor, nodeContent, {
          at: currentPath[1] === 0 ? [0, 1] : [1],
        });
        Transforms.select(editor, {
          path: nextPath,
          offset: Node.string(Node.get(editor, nextPath)).length,
        });
      } else {
        // Move the cursor to the end of the next node
        Transforms.select(editor, {
          path: nextPath,
          offset: Node.string(Node.get(editor, nextPath)).length,
        });
      }
    }

    // If we're in the standard case
    // we want it to become a paragraph if it's a heading
  }
  if (event.key == "#") {
    console.log("triggered");
    const { selection } = editor;
    if (selection && Range.isCollapsed(selection)) {
      const [currentNode, currentPath] = Editor.node(
        editor,
        selection.anchor.path
      );
      console.log("node", currentNode, currentPath);
      const currentText = Editor.string(editor, currentPath);
      console.log("current text", currentText);
      // We ensure we're at the beginning of a sentence
      if (currentText === "") {
        console.log("detects the #");
        event.preventDefault();

        // Check if the parent node is a block
        const [parentNode, parentPath]: NodeEntry<any> = Editor.parent(
          editor,
          currentPath
        );
        if (
          Editor.isBlock(editor, parentNode) &&
          parentNode.type === "paragraph"
        ) {
          // Transform the parent block to a heading
          Transforms.setNodes(
            editor,
            { type: "heading", level: 1 }, // Set to heading level 1
            { at: parentPath as number[] }
          );
        }
      }
    }
  }
};

export const meioPlugin = (editor: Editor) => {
  const { deleteBackward } = editor;

  // DELETING FUNCTIONS

  editor.deleteBackward = (unit: TextUnit) => {
    const [heroNode] = Editor.nodes(editor, {
      match: (n) => {
        const node = n as CustomElement;
        return (
          !Editor.isEditor(node) &&
          SlateElement.isElement(node) &&
          (node.type === "etiquette" || node.type == "heading") &&
          node.category === "hero"
        );
      },
    });

    if (
      heroNode &&
      SlateElement.isElement(heroNode[0]) &&
      Editor.isEmpty(editor, heroNode[0])
    ) {
      console.log("we try to avoid backward delete");
      return;
    }

    deleteBackward(unit);
  };

  return editor;
};
