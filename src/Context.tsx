import React, { createContext, useState, useEffect } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from './utils/supabaseClient';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt,
      en,
      es,
    },
    lng: localStorage.getItem('language') || 'pt', 
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

interface AppContextProps {
  language: string;
  setLanguage: (language: string) => void;
  supabase: SupabaseClient; 
}

export const AppContext = createContext<AppContextProps>({
  language: 'pt',
  setLanguage: () => {},
  supabase: supabase as SupabaseClient,
});

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <AppContext.Provider value={{ language, setLanguage, supabase }}>
      {children}
    </AppContext.Provider>
  );
};