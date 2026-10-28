import './Contact.css'
import { profile } from '../../data.js'

export default function Contact() {
  return (
    <section className="content-page contact-page">
      <h1>Contato</h1>
      <p className="contact-intro">Vamos conversar! Me encontre em:</p>
      <ul className="contact-links">
        <li>
          <span>E-mail</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <span>GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">enricochicot</a>
        </li>
      </ul>
    </section>
  )
}
