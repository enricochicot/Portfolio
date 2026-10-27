import { profile } from '../data.js'

export default function About() {
  return (
    <section>
      <h1>Sobre mim</h1>
      <p>
        Sou estudante de {profile.education}, atuo como Analista Júnior e moro
        em {profile.location}. Meu foco é {profile.focus}.
      </p>
      <h2>Tecnologias</h2>
      <ul className="tags">
        {profile.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2>Hobbies</h2>
      <ul className="tags">
        {profile.hobbies.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </section>
  )
}
