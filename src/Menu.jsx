import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './components/footer'
import cinnamon from './assets/donutsmenu/Cinnamon Sugar.png'
import classic from './assets/donutsmenu/Classic Glaze.png'
import choco from './assets/donutsmenu/Double Choco.png'
import herb from './assets/donutsmenu/Herb & Cheese.png'
import matcha from './assets/donutsmenu/Matcha Dream.png'
import pistachio from './assets/donutsmenu/Pistachio Vegan.png'
import strawberry from './assets/donutsmenu/Strawberry Fix.png'
import vanilla from './assets/donutsmenu/Vanilla Bomb.png'
import Topbar from './components/topbar'


const donuts = [
  {
    name: "Classic Glaze",
    price: "2.50€",
    img: classic,
    desc: "Massa brioche leve com glaze de baunilha e acabamento brilhante."
  },
  {
    name: "Matcha Dream",
    price: "3.50€",
    img: matcha,
    desc: "Cobertura cremosa vegetal de matcha com acabamento delicado."
  },
  {
    name: "Double Choco",
    price: "3.50€",
    img: choco,
    desc: "Chocolate intenso por dentro e por fora."
  },
  {
    name: "Strawberry Fix",
    price: "3.00€",
    img: strawberry,
    desc: "Morangos e glaze frutado com visual fresco."
  },
  {
    name: "Cinnamon Sugar",
    price: "2.50€",
    img: cinnamon,
    desc: "Clássico com açúcar e canela."
  },
  {
    name: "Vanilla Bomb",
    price: "3.80€",
    img: vanilla,
    desc: "Recheio cremoso de baunilha."
  },
  {
    name: "Herb & Cheese",
    price: "4.20€",
    img: herb,
    desc: "Versão salgada com queijo e ervas."
  },
  {
    name: "Pistachio Vegan",
    price: "4.00€",
    img: pistachio,
    desc: "Massa vegan com pistácio e glaze suave."
  }
];


export default function Menu() {
  return (
    <div className="menu-page">
        <Topbar />
      <div className="menu-header">
        <div>
          <p className="subtitle">Seleção da casa</p>
          <h1>O Nosso Menu</h1>
          <p className="description">
            Um menu dinâmico com filtro por categoria para explorares todos os donuts.
          </p>
        </div>

        <div className="filters">
          <label>Filtrar por categoria</label>
          <select>
            <option>Todos</option>
          </select>
        </div>
      </div>

      <p className="count">8 donuts visíveis</p>

      <div className="grid">
        {donuts.map((d, i) => (
          <div className="card" key={i}>
            <img src={d.img} alt={d.name} />

            <div className="card-content">
              <div className="title-row">
                <h3>{d.name}</h3>
                <span className="price">{d.price}</span>
              </div>

              <p>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}