"use client";
import React from "react";
import { useContext } from "react";
import { LanguageContext } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const Hero = () => {
  const { lang } = useContext(LanguageContext)!;
  return (
    <div>
      <h1>{translations[lang].welcome}</h1>
      <p>{translations[lang].about}</p>
    </div>
  );
};

export default Hero;
