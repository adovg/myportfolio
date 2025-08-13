import Image from "next/image";
import styles from "./page.module.scss";
import Footer from "@/components/Footer";
import Hero from "./hero/page";

export default function Home() {
  return (
    <div className={`container ${styles.page}`}>
      <Hero />
      <Footer />
    </div>
  );
}
