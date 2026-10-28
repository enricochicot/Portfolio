import './Home.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, projects } from '../../data.js'

const featured = projects.filter((p) => p.tech === 'C#')
const recent = projects.slice(-3).reverse()

function ProjectCard({ project, copy }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className="tag">{project.tech}</span>
      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
        <span>{copy.projectLink}</span>
        <svg aria-hidden="true" viewBox="0 0 16 16">
          <path d="M3.5 8h9m-4-4 4 4-4 4" />
        </svg>
      </a>
    </article>
  )
}

export default function Home({ copy }) {
  const [message, setMessage] = useState({ name: '', text: '' })
  const { profile: localizedProfile, home: homeCopy, projects: projectCopy } = copy

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(homeCopy.emailSubject(message.name))
    const body = encodeURIComponent(message.text)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="home-page">
    <section className="hero">
      <div className="hero-main">
        <h1>{profile.name}</h1>
        <p className="lead">
          {homeCopy.lead(localizedProfile)}
        </p>
        <div className="actions">
          <Link to="/projetos" className="btn">{homeCopy.viewProjects}</Link>
          <Link to="/contato" className="btn btn-outline">{homeCopy.contactMe}</Link>
        </div>
      </div>
      <aside className="hero-aside" aria-label={homeCopy.summary}>
        <div className="hero-detail">
          <h2>{homeCopy.focus}</h2>
          <p>{localizedProfile.focus}</p>
        </div>
        <div className="hero-detail">
          <h2>{homeCopy.base}</h2>
          <p>{localizedProfile.location}</p>
        </div>
      </aside>
    </section>

    <section className="home-section" aria-labelledby="highlights-title">
      <h2 id="highlights-title" className="section-title">{homeCopy.highlights}</h2>
      <div className="grid">
        {featured.map((p) => (
          <ProjectCard key={p.title} project={{ ...p, description: projectCopy.descriptions[p.title] }} copy={homeCopy} />
        ))}
      </div>
    </section>

    <section className="home-section" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">{homeCopy.about}</h2>
      <p className="page-intro">
        {homeCopy.aboutIntro(localizedProfile)}
      </p>
      <ul className="tags home-tags">
        {profile.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <Link to="/sobre" className="section-link">{homeCopy.learnAbout}</Link>
    </section>

    <section className="home-section" aria-labelledby="recent-projects-title">
      <h2 id="recent-projects-title" className="section-title">{homeCopy.recentProjects}</h2>
      <div className="grid">
        {recent.map((p) => (
          <ProjectCard key={p.title} project={{ ...p, description: projectCopy.descriptions[p.title] }} copy={homeCopy} />
        ))}
      </div>
      <Link to="/projetos" className="section-link">{homeCopy.allProjects}</Link>
    </section>

    <section className="home-section" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">{homeCopy.contact}</h2>
      <div className="home-contact">
        <ul className="contact-links">
          <li>
            <span>{homeCopy.email}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span>{homeCopy.github}</span>
            <a href={profile.github} target="_blank" rel="noreferrer">enricochicot</a>
          </li>
        </ul>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            {homeCopy.name}
            <input
              type="text"
              required
              value={message.name}
              onChange={(e) => setMessage({ ...message, name: e.target.value })}
            />
          </label>
          <label>
            {homeCopy.message}
            <textarea
              rows="4"
              required
              value={message.text}
              onChange={(e) => setMessage({ ...message, text: e.target.value })}
            />
          </label>
          <button type="submit" className="btn">{homeCopy.sendMessage}</button>
        </form>
      </div>
    </section>
    </div>
  )
}
