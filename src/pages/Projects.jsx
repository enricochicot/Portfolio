import { projects } from '../data.js'

export default function Projects() {
  return (
    <section>
      <h1>Projetos</h1>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <span className="tag">{p.tech}</span>
            <p><a href={p.link} target="_blank" rel="noreferrer">Ver no GitHub →</a></p>
          </article>
        ))}
      </div>
    </section>
  )
}
