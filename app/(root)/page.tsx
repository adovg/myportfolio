import Hero from "@/components/Hero";
import styles from "./page.module.scss";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <Hero />
      {/* <Footer /> */}
    </div>
  );
}
