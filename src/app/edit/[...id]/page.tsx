"use client";
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const EditPage: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
    immediatelyRender: false,
  });

  return (
    <div>
      <h1>Edit Page</h1>
      <EditorContent editor={editor} />
    </div>
  );
};

export default EditPage;
