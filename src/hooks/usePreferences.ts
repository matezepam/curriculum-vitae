import { useEffect, useState } from 'react'
import type { Language, Theme } from '../types'

export function usePreferences() {
  const [theme, setTheme] = useState<Theme>(() => localStorage.getItem('cv-theme') === 'light' ? 'light' : 'dark')
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('cv-language') === 'en' ? 'en' : 'es')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('cv-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('cv-language', language)
  }, [language])

  return {
    theme,
    language,
    toggleTheme: () => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark'),
    toggleLanguage: () => setLanguage((currentLanguage) => currentLanguage === 'es' ? 'en' : 'es')
  }
}
