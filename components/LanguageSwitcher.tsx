"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/LocaleContext";

export function LanguageSwitcher() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("LanguageSwitcher must be used inside LanguageProvider");
  }

  const { lang, setLang } = context;

  return (
    <select value={lang} onChange={(e) => setLang(e.target.value as Language)}>
      <option value="en">En</option>
      <option value="ru">Ру</option>
      <option value="es">Ук</option>
    </select>
  );
}
