import { FC } from "react";
import IconButton from "@/components/landing/fonctionnalites/iconButton/IconButton";
import { PiToolbox, PiCode, PiBinoculars, PiWarning } from "react-icons/pi";
import styles from "./Etiquette.module.css";

interface iconMap {
  [key: string]: {
    icon: React.FC;
    color: string;
  };
}

interface EtiquetteProps {
  title: string;
}

const Etiquette: FC<EtiquetteProps> = ({ title }) => {
  return (
    <div className={styles.etiquette}>
      <IconButton
        icon={iconMap[title].icon}
        color={iconMap[title].color}
        type={"normal"}
      />
      <div> {title}</div>
    </div>
  );
};

export default Etiquette;

const iconMap: iconMap = {
  Méthodes: { icon: PiToolbox, color: "--clear" },
  Technologies: { icon: PiCode, color: "--light-purple" },
  "Sur le terrain": { icon: PiBinoculars, color: "--yellow" },
  "Choisir une catégorie": { icon: PiWarning, color: "--error" },
};
