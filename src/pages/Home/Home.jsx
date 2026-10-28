import './Home.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, projects } from '../../data.js'

const featured = projects.filter((p) => p.tech === 'C#')
const recent = projects.slice(-3).reverse()

function ProjectCard({ project }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className="tag">{project.tech}</span>
      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
        <span>Ver no GitHub</span>
        <svg aria-hidden="true" viewBox="0 0 16 16">
          <path d="M3.5 8h9m-4-4 4 4-4 4" />
        </svg>
      </a>
    </article>
  )
}

export default function Home() {
  const [message, setMessage] = useState({ name: '', text: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contato pelo portfólio - ${message.name}`)
    const body = encodeURIComponent(message.text)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="home-page">
    <section className="hero">
      <div className="hero-main">
        <h1>{profile.name}</h1>
        <p className="lead">
          {profile.role}. Foco em {profile.focus}.
        </p>
        <div className="actions">
          <Link to="/projetos" className="btn">Ver projetos</Link>
          <Link to="/contato" className="btn btn-outline">Fale comigo</Link>
        </div>
      </div>
      <aside className="hero-aside" aria-label="Resumo profissional">
        <div className="hero-detail">
          <h2>Foco</h2>
          <p>{profile.focus}</p>
        </div>
        <div className="hero-detail">
          <h2>Base</h2>
          <p>{profile.location}</p>
        </div>
      </aside>
    </section>

    <section className="home-section" aria-labelledby="destaques-title">
      <h2 id="destaques-title" className="section-title">Destaques</h2>
      <div className="grid">
        {featured.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>

    <section className="home-section" aria-labelledby="sobre-title">
      <h2 id="sobre-title" className="section-title">Sobre</h2>
      <p className="page-intro">
        Estudante de {profile.education}, com foco em {profile.focus}. Gosto de {profile.hobbies.join(', ').toLowerCase()}.
      </p>
      <ul className="tags home-tags">
        {profile.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <Link to="/sobre" className="section-link">Saiba mais sobre mim →</Link>
    </section>

    <section className="home-section" aria-labelledby="projetos-title">
      <h2 id="projetos-title" className="section-title">Projetos recentes</h2>
      <div className="grid">
        {recent.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
      <Link to="/projetos" className="section-link">Ver todos os projetos →</Link>
    </section>

    <section className="home-section" aria-labelledby="contato-title">
      <h2 id="contato-title" className="section-title">Contato</h2>
      <div className="home-contact">
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              type="text"
              required
              value={message.name}
              onChange={(e) => setMessage({ ...message, name: e.target.value })}
            />
          </label>
          <label>
            Mensagem
            <textarea
              rows="4"
              required
              value={message.text}
              onChange={(e) => setMessage({ ...message, text: e.target.value })}
            />
          </label>
          <button type="submit" className="btn">Enviar mensagem</button>
        </form>
      </div>
    </section>
    </div>
  )
}
