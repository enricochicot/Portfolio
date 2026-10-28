import './Footer.css'
import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</span>
        <nav className="footer-links" aria-label="Redes sociais">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>E-mail</a>
        </nav>
      </div>
    </footer>
  )
}
