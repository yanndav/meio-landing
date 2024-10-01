import React from "react";
import { data } from "./data";
import { iconMap } from "./data";
import styles from "./Fonctionnalites.module.css";
import IconButton from "./iconButton/IconButton";

const Fonctionnalites = () => {
  return (
    <div id="fonctionnalites" className={styles.container}>
      <h2 className={styles.title}>
        Découvrez ce que vous pouvez faire avec{" "}
        <span style={{ fontWeight: 700 }}>Meio</span>
      </h2>
      <>
        {data.map((d) => {
          const TopLogo = iconMap[d.icon];

          return (
            <div key={d.title} className={styles.containerSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.titleSection}>
                  <IconButton icon={TopLogo} color={d.color} type={"title"} />
                  <h3>{d.title}</h3>
                </div>
                <p className={styles.textSection}>{d.description}</p>
              </div>
              <div className={styles.cardContainer}>
                {d.cards.map((c) => {
                  const Icon = iconMap[c.icon];
                  return (
                    <div key={c.title} className={styles.card}>
                      <div
                        className={styles.titleSection}
                        style={{ gap: `10px` }}
                      >
                        <IconButton icon={Icon} color={d.color} type={"icon"} />
                        <h4>{c.title}</h4>
                      </div>
                      <p>{c.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Fonctionnalites;
