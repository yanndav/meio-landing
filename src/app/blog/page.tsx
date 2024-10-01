import React from "react";
import styles from "./page.module.css";
import Etiquettes from "@/components/blog/etiquettes/Etiquettes";
import ArticleCard from "@/components/blog/articleCard/ArticleCard";

const Blog: React.FC = () => {
  const etiquettes: {
    title: string;
  }[] = [
    { title: "Méthodes" },
    { title: "Technologies" },
    { title: "Sur le terrain" },
  ];

  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.title}>Le blog de Meio</h1>
        <h2 className={styles.subtitle}>
          Tout sur la démarche de création de la plateforme
        </h2>
        <Etiquettes etiquettes={etiquettes} />
      </div>
      <div className={styles.articles}>
        {Articles.map((article, key) => (
          <ArticleCard key={key} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

const Articles = [
  {
    title: "Démocratiser l’analyse des contextes pour améliorer les décisions",
    subtitle: "Quelques principes fondamentaux de Meio.",
    summary:
      "Une problématique se pose. On pourrait croire, à première vue, qu’il ne s’agit là que d’un sujet d’importance mineure. Voir même surtout d’un délire « geek ». Pourtant, bien que le défi technologique soit en effet intéressant, ce qui se joue est en réalité une question démocratique. ",
    category: "Méthodes",
    link: "/vue/article1",
    photo:
      "https://kzlreivheudzkctawbgm.supabase.co/storage/v1/object/public/images/DataDEmo.jpg",
  },
];
