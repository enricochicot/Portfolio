import './Navbar.css'
import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar({ copy, controlsCopy, language, theme, onLanguageToggle, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  const links = [
    { to: '/', label: copy.home },
    { to: '/sobre', label: copy.about },
    { to: '/projetos', label: copy.projects },
    { to: '/contato', label: copy.contact },
  ]

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 761px)')
    const closeOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false)
    }

    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  function handleKeyDown(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header className="navbar" onKeyDown={handleKeyDown}>
      <div className="container navbar-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>{"<Dev/>"}</Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="navbar-toggle"
          aria-label={menuOpen ? controlsCopy.menuClose : controlsCopy.menuOpen}
          aria-expanded={menuOpen}
          aria-controls="navbar-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen
              ? <path d="M5 5l14 14M19 5L5 19" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <nav id="navbar-links" className={menuOpen ? 'is-open' : ''} aria-label={copy.label}>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setMenuOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar-controls">
          <button
            type="button"
            className="navbar-control"
            aria-label={controlsCopy.languageAction}
            title={controlsCopy.languageAction}
            onClick={onLanguageToggle}
          >
            {language === 'pt-BR' ? (
              <svg className="navbar-flag" aria-hidden="true" viewBox="0 0 28 20">
                <rect width="28" height="20" rx="2" fill="#16823b" />
                <path d="M14 2.5 25 10 14 17.5 3 10z" fill="#f9d548" />
                <circle cx="14" cy="10" r="4.25" fill="#2455a4" />
              </svg>
            ) : (
              <svg className="navbar-flag" aria-hidden="true" viewBox="0 0 28 20">
                <rect width="28" height="20" rx="2" fill="#fff" />
                <path d="M0 0h28v2H0zm0 4h28v2H0zm0 4h28v2H0zm0 4h28v2H0zm0 4h28v2H0z" fill="#c83b45" />
                <path d="M0 0h12v10H0z" fill="#28477f" />
                <path d="M2 2h1v1H2zm3 0h1v1H5zm3 0h1v1H8zm-4 2h1v1H4zm3 0h1v1H7zm-5 2h1v1H2zm3 0h1v1H5zm3 0h1v1H8z" fill="#fff" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="navbar-control"
            aria-label={controlsCopy.themeActions[theme]}
            aria-pressed={theme === 'dark'}
            title={controlsCopy.themeActions[theme]}
            onClick={onThemeToggle}
          >
            {theme === 'light' ? (
              <svg className="navbar-theme-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg className="navbar-theme-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
