import './Footer.css'
import { profile } from '../data.js'

export default function Footer({ copy }) {
  return (
    <footer className="footer">
      <div className="container">
        <span>© {new Date().getFullYear()} {profile.name}. {copy.rights}</span>
        <nav className="footer-links" aria-label={copy.socialLinks}>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>{copy.email}</a>
        </nav>
      </div>
    </footer>
  )
}
