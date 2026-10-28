import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'
import { translations } from './translations.js'

export default function App() {
  const [language, setLanguage] = useState('pt-BR')
  const [theme, setTheme] = useState('dark')
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#10141a' : '#f6f7f9',
    )
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.pageDescription)
  }, [copy.pageDescription, language, theme])

  return (
    <>
      <Navbar
        copy={copy.nav}
        controlsCopy={copy.controls}
        language={language}
        theme={theme}
        onLanguageToggle={() => setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR')}
        onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <main className="container page-main">
        <Routes>
          <Route path="/" element={<Home copy={copy} />} />
          <Route path="/sobre" element={<About copy={copy.about} profile={copy.profile} />} />
          <Route path="/projetos" element={<Projects copy={copy.projects} />} />
          <Route path="/contato" element={<Contact copy={copy.contact} />} />
          <Route path="*" element={<h1>{copy.notFound}</h1>} />
        </Routes>
      </main>
      <Footer copy={copy.footer} />
    </>
  )
}
