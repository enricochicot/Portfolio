import { profile } from '../data.js'

export default function Contact() {
  return (
    <section>
      <h1>Contato</h1>
      <p>Vamos conversar! Me encontre em:</p>
      <ul>
        <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
    </section>
  )
}
