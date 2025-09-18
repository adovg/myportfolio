import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";

export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <HeroBackground />
      <Hero />
    </div>
  );
}
