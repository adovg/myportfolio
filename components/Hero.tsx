"use client";
import React from "react";
import { useContext } from "react";
import { LanguageContext } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";
import styles from "./Hero.module.scss";

const Hero = () => {
  const { lang } = useContext(LanguageContext)!;
  return (
    <section className={styles.hero}>
      <h1>
        <span>Hello, I am </span>
        <span className={styles.title__gradient}>Frontend Developer</span>
      </h1>
      <h2>
        <span>
          I create modern web applications with a focus on user experience
        </span>
        <span>
          I specialize in React, Next.js, TypeScript, and modern web
          technologies
        </span>
      </h2>
    </section>
  );
};

export default Hero;

// <h1>{translations[lang].welcome}</h1>
// <p>{translations[lang].about}</p>
