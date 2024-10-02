"use client";
import React, { useState, useCallback } from "react";
import sanitizeHtml from "sanitize-html";
// import updateArticleElement from "@/app/actions/editor/updateArticleElement";
import { Article } from "../../types";
interface HeroTitleProps {
  title: string;
  articleId: string;
  setKeyValue: (key: keyof Article, newValue: string) => void;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  title,
  articleId,
  setKeyValue,
}) => {
  console.log(articleId);
  const [briefD, setBriefD] = useState(
    title === "" ? "Veuillez saisir un titre d'article" : title
  );

  const onContentBlur = useCallback((evt: string) => {
    const sanitizeConf = {
      allowedTags: ["h1"],
      allowedAttributes: {},
    };
    const sanitized: string = sanitizeHtml(evt, sanitizeConf);
    setBriefD(sanitized);
    setKeyValue("title", sanitized);
  }, []);

  // useEffect(() => {
  //   const updateDB = async () => {
  //     const up = await updateArticleElement(articleId, "brief", briefD);
  //   };
  //   updateDB();
  // }, [briefD]);

  return (
    <h1
      contentEditable
      dangerouslySetInnerHTML={{ __html: briefD }}
      onBlur={(e) => onContentBlur(e.currentTarget.innerHTML)}
    />
  );
};

export default HeroTitle;

// const updateLocation = async ({ location, id }) => {

// }
