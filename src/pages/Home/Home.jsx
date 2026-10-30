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
  const [message, setMessage] = useState({ name: '', email: '', subject: '', text: '' })
  const { profile: localizedProfile, home: homeCopy, projects: projectCopy } = copy

  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedSubject = homeCopy.subjectOptions[message.subject]
    const subject = encodeURIComponent(homeCopy.emailSubject(message.name, selectedSubject))
    const body = encodeURIComponent(
      `${homeCopy.name}: ${message.name}\n${homeCopy.email}: ${message.email}\n${homeCopy.subject}: ${selectedSubject}\n\n${homeCopy.message}:\n${message.text}`,
    )
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
        <div className="contact-info">
          <div className="contact-methods">
            <a className="contact-method" href={`mailto:${profile.email}`}>
              <span className="contact-method-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M3.5 5.5h17v13h-17zM4 6l8 6.5L20 6" />
                </svg>
              </span>
              <span className="contact-method-copy">
                <strong>{homeCopy.contactCards.emailTitle}</strong>
                <span className="contact-method-description">{homeCopy.contactCards.emailDescription}</span>
              </span>
              <svg className="contact-method-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a
              className="contact-method"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(localizedProfile.location)}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-method-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                  <circle cx="12" cy="10" r="2.3" />
                </svg>
              </span>
              <span className="contact-method-copy">
                <strong>{homeCopy.contactCards.locationTitle}</strong>
                <span className="contact-method-value">{localizedProfile.location}</span>
              </span>
              <svg className="contact-method-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a className="contact-method" href={profile.github} target="_blank" rel="noreferrer">
              <span className="contact-method-icon contact-method-icon-brand" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.2 3.42 1.54.1-.73.39-1.23.7-1.52-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.43.1-2.98 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.15 3.05-1.15.6 1.55.22 2.7.11 2.98.71.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.5.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              </span>
              <span className="contact-method-copy">
                <strong>GitHub</strong>
                <span className="contact-method-value">enricochicot</span>
              </span>
              <svg className="contact-method-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a
              className="contact-method"
              href="https://www.linkedin.com/in/enricoleite"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-method-icon contact-method-icon-brand" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5.2 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.7v11.6H3.4V9Zm5.9 0h3.5v1.6h.1c.5-.9 1.7-2 3.5-2 3.8 0 4.5 2.5 4.5 5.7v6.3h-3.7V15c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.3V9Z" />
                </svg>
              </span>
              <span className="contact-method-copy">
                <strong>{homeCopy.contactCards.linkedinTitle}</strong>
                <span className="contact-method-description">{homeCopy.contactCards.linkedinDescription}</span>
              </span>
              <svg className="contact-method-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-title">
          <h3 id="contact-form-title" className="contact-form-title">{homeCopy.formTitle}</h3>
          <div className="contact-form-fields">
            <label htmlFor="contact-name">
              <span className="contact-label">{homeCopy.name} <span className="required-mark" aria-hidden="true">*</span></span>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={homeCopy.namePlaceholder}
                required
                value={message.name}
                onChange={(e) => setMessage({ ...message, name: e.target.value })}
              />
            </label>
            <label htmlFor="contact-email">
              <span className="contact-label">{homeCopy.email} <span className="required-mark" aria-hidden="true">*</span></span>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={homeCopy.emailPlaceholder}
                required
                value={message.email}
                onChange={(e) => setMessage({ ...message, email: e.target.value })}
              />
            </label>
            <label className="contact-form-wide" htmlFor="contact-subject">
              <span className="contact-label">{homeCopy.subject} <span className="required-mark" aria-hidden="true">*</span></span>
              <select
                id="contact-subject"
                name="subject"
                required
                value={message.subject}
                onChange={(e) => setMessage({ ...message, subject: e.target.value })}
              >
                <option value="" disabled>{homeCopy.subjectPlaceholder}</option>
                {Object.entries(homeCopy.subjectOptions).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </label>
            <label className="contact-form-wide" htmlFor="contact-message">
              <span className="contact-label">{homeCopy.message} <span className="required-mark" aria-hidden="true">*</span></span>
              <textarea
                id="contact-message"
                name="message"
                rows="3"
                placeholder={homeCopy.messagePlaceholder}
                required
                value={message.text}
                onChange={(e) => setMessage({ ...message, text: e.target.value })}
              />
            </label>
          </div>
          <button type="submit" className="btn">
            <svg aria-hidden="true" viewBox="0 0 20 20">
              <path d="M3 5.5h14v9H3zM3.5 6l6.5 5 6.5-5" />
            </svg>
            <span>{homeCopy.sendMessage}</span>
          </button>
        </form>
      </div>
    </section>
    </div>
  )
}
