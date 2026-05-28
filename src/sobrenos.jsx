import Footer from './components/footer'
import Topbar from './components/topbar'

function Sobrenos() {
  return (
    <div className="page">
      <Topbar />

      <main style={{ padding: '24px', maxWidth: 920 }}>
        <h1>Sobre Nós</h1>
        <p className="subtitle">Paixão por donuts artesanais e momentos doces desde o primeiro dia.</p>

        <section style={{ marginTop: 20 }}>
          <h2>Nossa História</h2>
          <p>
            O Donut Club nasceu de uma pequena banca de mercado onde experimentámos receitas todos os dias até encontrar
            a combinação perfeita entre massa leve e coberturas criativas. Crescemos mantendo o foco na qualidade artesanal
            e na relação com a comunidade local.
          </p>
        </section>

        <section style={{ marginTop: 20 }}>
          <h2>Missão</h2>
          <p>
            Oferecer donuts feitos à mão, com ingredientes selecionados, que transformem pequenas pausas em memórias.
            Queremos partilhar sabor, acolhimento e criatividade em cada fornada.
          </p>
        </section>

        <section style={{ marginTop: 20 }}>
          <h2>Equipe</h2>
          <p>
            Uma equipa pequena e dedicada: pasteleiros, designers de sabores e pessoas que acreditam que um bom donut
            faz o dia melhor. Estamos sempre a testar novas receitas — vem provar!
          </p>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default Sobrenos