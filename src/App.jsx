import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
