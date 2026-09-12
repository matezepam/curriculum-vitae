import type { ContentLabels } from '../constants/content'
import type { Language, Theme } from '../types'

type HeaderProps = {
  language: Language
  onLanguageChange: () => void
  theme: Theme
  onThemeChange: () => void
  labels: ContentLabels
}

export function Header({ language, onLanguageChange, theme, onThemeChange, labels }: HeaderProps) {
  return (
    <header className="topbar wrap" data-reveal>
      <a className="brand" href="#home" aria-label="Go to home">MS<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#experience">{labels.navigation[0]}</a>
        <a href="#projects">{labels.navigation[1]}</a>
        <a href="#contact">{labels.navigation[2]}</a>
      </nav>
      <div className="header-controls">
        <button className="language-toggle" type="button" onClick={onLanguageChange} aria-label="Change language">{language === 'es' ? 'EN' : 'ES'}</button>
        <button className="theme-toggle" type="button" onClick={onThemeChange} aria-label="Change color theme">
          <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
          <span>{theme === 'dark' ? labels.theme[0] : labels.theme[1]}</span>
        </button>
      </div>
    </header>
  )
}
