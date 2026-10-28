import './About.css'
import { profile as sourceProfile } from '../../data.js'

export default function About({ copy, profile }) {
  return (
    <section className="content-page about-page">
      <div className="page-heading">
        <h1>{copy.title}</h1>
        <p className="page-intro">
          {copy.intro(profile)}
        </p>
      </div>
      <div className="about-groups">
        <section className="about-group">
          <h2>{copy.technologies}</h2>
          <ul className="tags">
            {sourceProfile.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
        <section className="about-group">
          <h2>{copy.hobbies}</h2>
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
