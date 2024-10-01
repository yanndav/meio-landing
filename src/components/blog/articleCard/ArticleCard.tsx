import React from "react";
import Etiquette from "@/components/blog/etiquette/Etiquette";
import Image from "next/image";
import styles from "./ArticleCard.module.css";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  subtitle?: string;
  summary: string;
  photo: string;
  category: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const { title, subtitle, summary, photo, category, link } = props;
  return (
    <Link className={styles.card} href={link}>
      <div className={styles.imageContainer}>
        <Image src={photo} height={250} width={347} alt={title} quality={100} />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        <p>{summary}</p>
        <Etiquette title={category} />
      </div>
    </Link>
  );
};

export default ArticleCard;
