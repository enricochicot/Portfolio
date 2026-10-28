import { Link } from 'react-router-dom'
import { profile } from '../../data.js'

export default function Home() {
  return (
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
  )
}
