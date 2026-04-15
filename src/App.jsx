import { useEffect, useState } from 'react'
import heroImg from './assets/Donutimg1.jpg'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState('A ligar...')

  useEffect(() => {
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => setApiStatus(data.message))
      .catch(() => setApiStatus('Servidor offline'))
  }, [])

  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#home">
          Donut Club
        </a>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">Sobre Nós</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Como Chegar</a>
          <a href="#contact">Contactos</a>
        </nav>
      </header>

      <main className="hero-block" id="home">
        <div className="hero-copy">
          <span className="hero-badge">Feitos à mão diariamente</span>
          <h1>Os melhores donuts da cidade</h1>
          <p>
            Receitas artesanais, glaze delicado e uma seleção de sabores pensada para transformar qualquer pausa num pequeno ritual doce.
          </p>
          <a className="hero-button" href="#menu">Ver Menu</a>
        </div>

        <div className="hero-media">
          <div className="hero-card">
           <img src={heroImg} alt="Donuts artesanais" />
          </div>
        </div>
      </main>

      <section className="features">
        <article className="feature-card">
          <h2>Artesanal</h2>
          <p>Massa fresca preparada todos os dias.</p>
        </article>
        <article className="feature-card">
          <h2>Premium</h2>
          <p>Ingredientes de qualidade com combinações elegantes e jovens.</p>
        </article>
        <article className="feature-card">
          <h2>Acessível</h2>
          <p>Visual premium, ambiente leve e donuts feitos para voltar sempre.</p>
        </article>
      </section>



      <footer className="footer" id="contact">
        <div className="footer-column">
          <strong>Contactos</strong>
          <p>+351 912 345 678</p>
          <p>hello@donutclub.pt</p>
          <p>Rua das Flores, 123 · Porto</p>
        </div>

        <div className="footer-column">
          <strong>Redes Sociais</strong>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>TikTok</p>
        </div>

        <div className="footer-column">
          <strong>Morada</strong>
          <p>Centro do Porto</p>
          <p>Aberto todos os dias</p>
          <p>08:00 — 20:00</p>
        </div>
      </footer>

      <div className="copyright">
        © 2025 Donut Club. Todos os direitos reservados.
      </div>
    </div>
  )
}

export default App
