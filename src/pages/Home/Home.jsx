import './Home.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, projects } from '../../data.js'

const featured = projects.filter((p) => p.tech === 'C#')
const recent = projects.slice(-3).reverse()

const orbitSkills = [
  {
    name: 'C#',
    color: '#9B4F96',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2 2.5 7.5v9L12 22l9.5-5.5v-9L12 2Zm4.6 13.2c-.75 1.3-2.15 2.1-3.7 2.1-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3c1.55 0 2.95.8 3.7 2.1l-1.5.85c-.42-.75-1.25-1.25-2.2-1.25-1.4 0-2.5 1.1-2.5 2.6s1.1 2.6 2.5 2.6c.95 0 1.78-.5 2.2-1.25l1.5.85Zm2.65-3.7h-1v1h1v1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h1v1h1v1Z"
        />
      </svg>
    ),
  },
  {
    name: 'Flutter',
    color: '#02569B',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#02569B" d="M7 17 17.5 6.5h-7L3 14l4 3Z" />
        <path fill="#45D1FD" d="M10.5 17.5 14 21h7l-6.5-6.5-4 3Z" />
        <path fill="#02569B" d="m10.5 14 3.5 3.5 7-7h-7l-3.5 3.5Z" />
      </svg>
    ),
  },
  {
    name: 'SQL',
    color: '#4479A1',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3c-4.4 0-8 1.2-8 2.7v12.6C4 19.8 7.6 21 12 21s8-1.2 8-2.7V5.7C20 4.2 16.4 3 12 3Zm0 1.8c3.9 0 6.2 1 6.2 1.5S15.9 7.8 12 7.8s-6.2-1-6.2-1.5S8.1 4.8 12 4.8ZM5.8 8.4c1.3.8 3.8 1.3 6.2 1.3s4.9-.5 6.2-1.3v3.1c0 .5-2.3 1.5-6.2 1.5s-6.2-1-6.2-1.5V8.4Zm0 5c1.3.8 3.8 1.3 6.2 1.3s4.9-.5 6.2-1.3v3.1c0 .5-2.3 1.5-6.2 1.5s-6.2-1-6.2-1.5v-3.1Z"
        />
      </svg>
    ),
  },
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1.3">
          <ellipse cx="12" cy="12" rx="9.5" ry="4" />
          <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
]

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
      <aside className="hero-aside" aria-label={homeCopy.technologies}>
        <img
          className="hero-portrait"
          src="/enrico-leite.png"
          alt="Enrico Leite"
          width="269"
          height="281"
        />
        <ul className="tech-orbit">
          {orbitSkills.map(({ name, color, icon }, index) => (
            <li
              className={`tech-orbit-item tech-orbit-item-${index + 1}`}
              key={name}
              aria-label={name}
              style={{ '--tech-color': color }}
            >
              <span className="tech-mark" aria-hidden="true">{icon}</span>
            </li>
          ))}
        </ul>
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
