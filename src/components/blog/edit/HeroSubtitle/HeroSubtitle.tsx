"use client";
import React, { useState, useCallback } from "react";
import sanitizeHtml from "sanitize-html";
// import updateArticleElement from "@/app/actions/editor/updateArticleElement";
import { Article } from "../../types";
interface HeroSubtitleProps {
  subtitle: string;
  articleId: string;
  setKeyValue: (key: keyof Article, newValue: string) => void;
}

const HeroSubtitle: React.FC<HeroSubtitleProps> = ({
  subtitle,
  articleId,
  setKeyValue,
}) => {
  console.log(articleId);
  const [briefD, setBriefD] = useState(
    subtitle === "" ? "Veuillez saisir un sous-titre" : subtitle
  );

  const onContentBlur = useCallback((evt: string) => {
    const sanitizeConf = {
      allowedTags: ["h1"],
      allowedAttributes: {},
    };
    const sanitized: string = sanitizeHtml(evt, sanitizeConf);
    setBriefD(sanitized);
    setKeyValue("subtitle", sanitized);
  }, []);

  // useEffect(() => {
  //   const updateDB = async () => {
  //     const up = await updateArticleElement(articleId, "brief", briefD);
  //   };
  //   updateDB();
  // }, [briefD]);

  return (
    <h2
      contentEditable
      dangerouslySetInnerHTML={{ __html: briefD }}
      onBlur={(e) => onContentBlur(e.currentTarget.innerHTML)}
    />
  );
};

export default HeroSubtitle;

// const updateLocation = async ({ location, id }) => {

// }
