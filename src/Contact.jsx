import Footer from './components/footer'
import Topbar from './components/topbar'

function Contact() {
  return (
    <div className="page">
      <Topbar />

      <main style={{ padding: '24px' }}>
        <h1>Contactos</h1>

        <section style={{ maxWidth: 720 }}>
          <h2>Morada</h2>
          <p>Centro de Viseu, 3100-550 Viseu, Portugal</p>

          <h2>Como Chegar</h2>
          <p>
            Estamos no centro da cidade. Segue por GPS ou abre o mapa: <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">Ver no mapa</a>.
          </p>

          <h2>Telefone & Email</h2>
          <p>Telefone: +351 912 345 678</p>
          <p>Email: hello@donutclub.pt</p>

          <h2>Horário</h2>
          <p>Segunda — Sábado: 08:00 — 20:00</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
