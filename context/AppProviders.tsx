"use client";

import { ThemeProvider } from "./Theme-context";
import { LanguageProvider } from "./LocaleContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
