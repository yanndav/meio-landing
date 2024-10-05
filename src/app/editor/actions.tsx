import {
  Editor,
  Element as SlateElement,
  TextUnit,
  Range,
  Node,
  Transforms,
  Operation,
  NodeEntry,
  Path,
} from "slate";
import { KeyboardEvent } from "react";
import { CustomElement, NodeProperties } from "@/components/editor/types";
export const handleKeyDown = (event: KeyboardEvent, editor: Editor) => {
  if (
    (event.ctrlKey && event.key === "a") ||
    (event.metaKey && event.key === "a")
  ) {
    event.preventDefault(); // Prevent the default select all action
  }
  if (event.key === "Enter") {
    const { selection } = editor;
    if (!selection || !Range.isCollapsed(selection)) {
      // If we're not in the editor, or if a range is selected, we don't do shit
      return;
    }
    // Getting the currentNode
    const [currentNode, currentPath] = Editor.node(
      editor,
      selection.anchor.path
    );

    // Getting the parentNode
    const parent: NodeEntry<CustomElement> | undefined =
      Editor.above<CustomElement>(editor, {
        at: currentPath,
        match: (n) => {
          const node = n as CustomElement;
          return !Editor.isEditor(node) && SlateElement.isElement(node);
        },
        mode: "lowest",
      });

    if (!parent) {
      // If no parent, means we're at the Document level
      console.log("pas de node parent");
      return;
    }
    const [parentNode, parentPath] = parent;

    console.log("parentNode", parentNode);

    // Case 1 : The Hero - H1 case
    if (
      SlateElement.isElement(parentNode) &&
      parentNode.type === "heading" &&
      parentNode.category === "hero" &&
      parentNode.level === 1
    ) {
      event.preventDefault();

      // We want to jump to the next node that is a H2 and create it if it's been removed
      const nextNodePath: number[] = [0, 1, 0];
      const nextNodeParent =
        Node.has(editor, nextNodePath) && Node.parent(editor, nextNodePath);

      console.log("next node parent", nextNodeParent);
      if (
        SlateElement.isElement(nextNodeParent) &&
        nextNodeParent.type === "etiquette"
      ) {
        const newNodeContent: CustomElement = {
          type: "heading",
          level: 2,
          category: "hero",
          children: [{ text: "Choisissez un sous-titre" }],
        };

        setTimeout(() => {
          Transforms.insertNodes(editor, newNodeContent, {
            at: nextNodePath.slice(0, 2),
          });
        }, 0);
      }
      // We can now move to it
      Transforms.select(editor, {
        path: nextNodePath,
        offset: Node.string(Node.get(editor, nextNodePath)).length,
      });
    }

    // Case 2 - The Hero - H2 Case
    if (
      SlateElement.isElement(parentNode) &&
      parentNode.type === "heading" &&
      parentNode.category === "hero" &&
      parentNode.level === 2
    ) {
      // We want to jump the Etiquette node and go to the text, hence check if exists
      event.preventDefault();
      const nextNodePath: number[] = [1, 0, 0];

      if (!Node.has(editor, nextNodePath)) {
        const newNodeContent: CustomElement = {
          type: "section",
          category: "default",
          children: [{ type: "paragraph", children: [{ text: "" }] }],
        };

        setTimeout(() => {
          Transforms.insertNodes(editor, newNodeContent, {
            at: nextNodePath.slice(0, 1),
          });
        }, 0);
      }
      // We jump to the text

      Transforms.select(editor, {
        path: nextNodePath,
        offset: Node.string(Node.get(editor, nextNodePath)).length,
      });
    }
  }
  // If we're in the standard case
  // we want it to become a paragraph if it's a heading

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
  const { deleteBackward, apply, onChange, selection } = editor;
  let preventCascading: boolean = false;
  let operationsQueue: string[] = [];
  let preventionName: string | null = null;
  let endsPrevention: string | null = null;

  editor.apply = (op: Operation) => {
    if (preventCascading) {
      preventCascading = op.type !== endsPrevention;
      console.log("prevented", preventCascading, operationsQueue, op);
      return;
    }
    console.log("document", editor.children);
    if (op.type === "insert_node") {
      console.log("Node inserted", op);

      // On empêche les insertions pour le HERO
      const path: number[] = op.path;
      const [sectionNode] = Editor.parent(editor, path.slice(0, 1));

      if (
        SlateElement.isElement(sectionNode) &&
        sectionNode.type === "section" &&
        sectionNode.category === "hero"
      ) {
        //avoid insertion because it is in the hero section

        return;
      }
    }

    if (op.type === "insert_text") {
      console.log("Text inserted", op);
    }

    if (op.type === "move_node") {
      console.log("Move node", op);
      const { newPath } = op;
      if (Path.equals(newPath, [0, 3])) {
        //Preventing any move to hero section
        preventCascading = true; // preventing cascading of operations as well
        operationsQueue.push("merge_node", "remove_node", "set_selection");
        endsPrevention = "set_selection";
        return;
      }
    }

    // When removing a node
    if (op.type === "remove_node") {
      console.log("Node removed:", op);
      // Avoid removal of first default section
      const properties: NodeProperties = op.node as NodeProperties;
      const path: number[] = op.path;
      if (properties.type === "section" && path[0] === 1) {
        const newNodeContent: CustomElement = {
          type: "section",
          category: "default",
          children: [{ type: "paragraph", children: [{ text: "" }] }],
        };

        setTimeout(() => {
          Transforms.insertNodes(editor, newNodeContent, {
            at: [1],
          });
        }, 0);
      }

      // Avoid removal of Etiquette
      if (properties.type === "etiquette" && properties.category === "hero") {
        console.log("avoided node remove : hero etiquette");
        return;
      }
      if (properties.type === "heading" && properties.category === "hero") {
        return;
      }
    }
    if (op.type === "split_node") {
      const properties: NodeProperties = op.properties as NodeProperties;
      const path = op.path;
      console.log(properties.type);
      if (properties.type === "heading") {
        // Quand on saute une ligne depuis un header, on peut que le node d'arrivée soit de type paragraphe
        console.log(path);
        console.log([...path.slice(0, -1), path[-1] + 1]);

        setTimeout(() => {
          Transforms.setNodes(
            editor,
            { type: "paragraph" },
            { at: [...path.slice(0, -1), path.slice(-1)[0] + 1] }
          );
        }, 0);
      }
    }

    if (op.type === "remove_text") {
      console.log("Text removed:", op);

      // Avoid removing text when first of the editor

      // Implement your custom logic here
    }

    if (op.type === "set_node") {
      console.log("Set node", op);
    }

    if (op.type === "split_node") {
      console.log("split_node", op);
    }

    if (op.type === "merge_node") {
      console.log("merger");
      console.log("op", op);
      const properties: NodeProperties = op.properties as NodeProperties;
      const path: number[] = op.path;

      if (properties.type === "etiquette" && properties.category === "hero") {
        console.log("avoided etiquette merger");
        return;
      }

      // Avoid merger with etiquette
      if (Path.equals(path, [0, 3])) {
        console.log("avoid", op);
        return;
      }
      // Avoid default behaviour for Hero-H2 merged to Hero-H1 -> recreated H2
      if (
        properties.category &&
        properties.category === "hero" &&
        properties.type === "heading" &&
        properties.level &&
        properties.level == 2
      ) {
        const newNodeContent: CustomElement = {
          type: "heading",
          level: 2,
          category: "hero",
          children: [{ text: "" }],
        };

        setTimeout(() => {
          Transforms.insertNodes(editor, newNodeContent, {
            at: [0, 1],
          });
        }, 0);
      }
    }

    // Call the original apply method
    apply(op);
  };

  editor.onChange = () => {
    // Ensure there is a selection and that it's a range (not collapsed)
    if (selection && Range.isExpanded(selection)) {
      const [start] = Range.edges(selection); // Get the start of the selection
      const [end] = Range.edges(selection, { reverse: true }); // Get the end of the selection

      // Get the parent nodes for the start and end points
      const [startNode, pathStartNode] = Editor.parent(editor, start.path);
      const [endNode, pathEndNode] = Editor.parent(editor, end.path);

      console.log("onchange", startNode, endNode);

      // If the start and end nodes are different, constrain the selection
      if (
        !Path.equals(pathStartNode, pathEndNode) &&
        SlateElement.isElement(endNode) &&
        endNode.type !== "paragraph"
      ) {
        console.log("triggered selection");
        // Adjust the selection to only cover the first node

        setTimeout(() => {
          Transforms.select(editor, {
            anchor: selection.anchor,
            focus: { path: start.path, offset: Node.string(startNode).length }, // Constrain to the end of the first node
          });
        }, 0);
      }
    }

    // Call the original onChange method to continue processing
    onChange();
  };

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

    // Get the current node and its path

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

  editor.insertData = (data: DataTransfer) => {
    // Prevent default paste behavior
    const text = data.getData("text/plain");

    if (text) {
      // Insert the plain text content
      Transforms.insertText(editor, text);
    } else {
      // If there is no plain text, fall back to default behavior
      editor.insertData(data);
    }
  };
  return editor;
};
