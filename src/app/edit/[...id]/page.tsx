"use client";
import React, { useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";
import Hero from "@/components/blog/edit/hero/Hero";
import styles from "./page.module.css";
interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  content: object;
}

const EditPage: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
    immediatelyRender: false,
  });
  const [article, setArticle] = useState<Article>(articleT);
  console.log(editor?.getJSON());
  return (
    <div className={styles.vue}>
      <Hero
        id={article.id}
        title={article.title}
        category={article.category}
        subtitle={article.subtitle}
        setArticle={setArticle}
      />
      <div className={styles.editor}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default EditPage;

const articleT: Article = {
  id: "nfoezfnld",
  title: "",
  category: "",
  subtitle: "",
  content: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "h1",
            text: "Hello World!",
          },
        ],
      },
    ],
  },
};
