import './About.css'
import { profile } from '../../data.js'

export default function About() {
  return (
    <section className="content-page about-page">
      <div className="page-heading">
        <h1>Sobre mim</h1>
        <p className="page-intro">
          Sou estudante de {profile.education}, atuo como Analista Júnior e moro
          em {profile.location}. Meu foco é {profile.focus}.
        </p>
      </div>
      <div className="about-groups">
        <section className="about-group">
          <h2>Tecnologias</h2>
          <ul className="tags">
            {profile.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
        <section className="about-group">
          <h2>Hobbies</h2>
          <ul className="tags">
            {profile.hobbies.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
