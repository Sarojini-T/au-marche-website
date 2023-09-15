import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./Translations";

export interface TranslationData {
  welcomeMessage: string;
  selectLanguage: string;
  aboutTitle: string;
  aboutDescription: string;
  noItemFound: string;
  inPersonStores: string;
  onlineStores: string;
  notFound: string;
  [key: string]: string;
}

export interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  languageData: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const storedLanguage =
    localStorage.getItem("selectedLanguage") || "en";
  const [language, setLanguageState] = useState(storedLanguage);
  const [languageData, setLanguageData] = useState(translations[storedLanguage]);

  useEffect(() => {
    localStorage.setItem("selectedLanguage", language);
    setLanguageData(translations[language]);
  }, [language]);

  const setLanguage = (newLanguage: string) => {
    setLanguageState(newLanguage);
  };

  const contextValue = {
    language,
    setLanguage,
    languageData,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
};

export default LanguageContext;
