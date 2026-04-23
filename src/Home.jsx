import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from './assets/Donuts.png'
import logo from './assets/logo.fundo.png'
import Footer from './components/Footer'
import Topbar from './components/topbar'

function Home() {
  const [apiStatus, setApiStatus] = useState('A ligar...')

  useEffect(() => {
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => setApiStatus(data.message))
      .catch(() => setApiStatus('Servidor offline'))
  }, [])

  return (
    <div className="page">
<Topbar />

      <main className="hero-block" id="home">
        <div className="hero-copy">
          <span className="hero-badge">Feitos à mão diariamente</span>
          <h1>Os melhores donuts da cidade</h1>
          <p>
            Receitas artesanais, glaze delicado e uma seleção de sabores pensada para transformar qualquer pausa num pequeno ritual doce.
          </p>
          <Link className="hero-button" to="/menu">
            Ver Menu
          </Link>
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

      <Footer />
    </div>
  )
}

export default Home