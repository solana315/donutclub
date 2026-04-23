import React from "react";
import "../App.css";

function Footer() {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer-column">
          <strong>Contactos</strong>
          <p>+351 912 345 678</p>
          <p>hello@donutclub.pt</p>
          <p>Projeto de Marketing, </p>
           <p> 3100-550, Viseu</p>
        </div>

        <div className="footer-column">
          <strong>Redes Sociais</strong>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>TikTok</p>
        </div>

        <div className="footer-column">
          <strong>Morada</strong>
          <p>Centro de Viseu</p>
          <p>Aberto de Segunda a Sábado</p>
          <p>08:00 — 20:00</p>
        </div>
      </footer>

      <div className="copyright">
        © 2025 Donut Club. Todos os direitos reservados.
      </div>
    </>
  );
}

export default Footer;