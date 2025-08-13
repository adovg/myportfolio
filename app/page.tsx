import Image from "next/image";
import styles from "./page.module.scss";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>This is Main page</h1>
      </main>
      <Footer />
    </div>
  );
}
