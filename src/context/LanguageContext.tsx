"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { en } from "@/locales/en";
import { bn } from "@/locales/bn";

type Locale = "en" | "bn";
type Translations = typeof en;

interface LanguageContextProps {
  locale: Locale;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "en" ? "bn" : "en"));
  };

  const t = locale === "en" ? en : bn;

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
