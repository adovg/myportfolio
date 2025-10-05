"use client";

import { useTheme } from "../context/Theme-context";
import { useLanguageContext } from "../context/LocaleContext";

export function useAppContext() {
  const theme = useTheme();
  const locale = useLanguageContext();

  return { ...theme, ...locale };
}
