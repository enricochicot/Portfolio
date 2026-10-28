import './Contact.css'
import { profile } from '../../data.js'

export default function Contact({ copy }) {
  return (
    <section className="content-page contact-page">
      <h1>{copy.title}</h1>
      <p className="contact-intro">{copy.intro}</p>
      <ul className="contact-links">
        <li>
          <span>{copy.email}</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <span>{copy.github}</span>
          <a href={profile.github} target="_blank" rel="noreferrer">enricochicot</a>
        </li>
      </ul>
    </section>
  )
}
