import './About.css'

export default function About({ copy, profile }) {
  return (
    <section className="content-page about-page">
      <div className="page-heading">
        <h1>{copy.title}</h1>
        <p className="page-intro">
          {copy.intro(profile)}
        </p>
      </div>
    </section>
  )
}
