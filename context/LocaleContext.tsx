"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ru" | "es";

export const LanguageContext = createContext<
  | {
      lang: Language;
      setLang: (lang: Language) => void;
    }
  | undefined
>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// кастомный хук useContext
export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageProvider not found!");
  return context;
};
