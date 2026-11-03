import './Contact.css'
import { profile } from '../../data.js'

export default function Contact({ copy }) {
  return (
    <section className="content-page contact-page">
      <header className="contact-heading">
        <h1>{copy.title}</h1>
        <p className="contact-intro">{copy.intro}</p>
      </header>
      <ul className="contact-links">
        <li>
          <a className="contact-link" href={`mailto:${profile.email}`}>
            <span className="contact-link-label">{copy.email}</span>
            <span className="contact-link-value">{profile.email}</span>
            <svg aria-hidden="true" viewBox="0 0 16 16">
              <path d="M3.5 8h9m-4-4 4 4-4 4" />
            </svg>
          </a>
        </li>
        <li>
          <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
            <span className="contact-link-label">{copy.github}</span>
            <span className="contact-link-value">enricochicot</span>
            <svg aria-hidden="true" viewBox="0 0 16 16">
              <path d="M3.5 8h9m-4-4 4 4-4 4" />
            </svg>
          </a>
        </li>
      </ul>
    </section>
  )
}
