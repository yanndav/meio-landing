import { FC } from "react";
import { PiToolbox, PiCode, PiBinoculars } from "react-icons/pi";
import styles from "./Etiquettes.module.css";
import Etiquette from "@/components/blog/etiquette/Etiquette";

interface iconMap {
  [key: string]: {
    icon: React.FC;
    color: string;
  };
}

interface Etiquette {
  title: string;
}

interface EtiquettesProps {
  etiquettes: Etiquette[];
}
const Etiquettes: FC<EtiquettesProps> = ({ etiquettes }) => {
  return (
    <div className={styles.etiquettes}>
      {etiquettes.map((etiquette, key) => (
        <Etiquette key={key} title={etiquette.title} />
      ))}
    </div>
  );
};

export default Etiquettes;

const iconMap: iconMap = {
  Méthodes: { icon: PiToolbox, color: "--clear" },
  Technologies: { icon: PiCode, color: "--light-purple" },
  "Sur le terrain": { icon: PiBinoculars, color: "--yellow" },
};
