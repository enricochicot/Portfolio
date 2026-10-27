import { Link } from 'react-router-dom'
import { profile } from '../data.js'

export default function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">Olá, eu sou</p>
      <h1>{profile.name}</h1>
      <p className="lead">
        {profile.role}. Foco em {profile.focus}.
      </p>
      <div className="actions">
        <Link to="/projetos" className="btn">Ver projetos</Link>
        <Link to="/contato" className="btn btn-outline">Fale comigo</Link>
      </div>
    </section>
  )
}
