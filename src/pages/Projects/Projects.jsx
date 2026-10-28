import './Projects.css'
import { projects } from '../../data.js'

export default function Projects() {
  return (
    <section className="content-page projects-page">
      <h1>Projetos</h1>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <span className="tag">{p.tech}</span>
            <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
              <span>Ver no GitHub</span>
              <svg aria-hidden="true" viewBox="0 0 16 16">
                <path d="M3.5 8h9m-4-4 4 4-4 4" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
