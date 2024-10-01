import styles from "./page.module.css";
import LandingPage from "@/components/landing/LandingPage";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <LandingPage />
      </main>
    </div>
  );
}
