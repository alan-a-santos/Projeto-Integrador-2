'use client'
import Image from "next/image";
import React from "react";
import "../../src/styles/Laterais.css";
import img1 from "../../public/image/cliente.png";
import img2 from "../../public/image/pratos.png";
import img3 from "../../public/image/financeiro.png";
import img4 from "../../public/image/pedido.jpg";
import img5 from "../../public/image/config.jpeg";
import img6 from "../../public/image/sair.jpg";

function Principal() {
  return (
    <>
      <div className="lateral_principal">
        <fieldset className="principal">
          <a href="/clientes">
            <Image src={img1} alt="" id="img1" className="icones" />
            <label htmlFor="" className="label_icones">
              Clientes
            </label>{" "}
          </a>
          <a href="/pedidos">
            <Image src={img4} alt="" id="img4" className="icones" />
            <label htmlFor="" className="label_icones">
              Pedidos
            </label>
          </a>
          <a href="/cardapio">
            <Image src={img2} alt="" id="img2" className="icones" />
            <label htmlFor="" className="label_icones">
              Cardápio
            </label>
          </a>

          <a href="/financas">
            <Image src={img3} alt="" id="img3" className="icones" />
            <label htmlFor="" className="label_icones">
              Finanças
            </label>{" "}
          </a>

          <a href="/config">
            <Image src={img5} alt="" id="img5" className="icones" />
            <label htmlFor="" className="label_icones">
              Config.
            </label>
          </a>
          <a href="/">
            <Image src={img6} alt="" id="img6" className="icones" />
          </a>
          {/* <label htmlFor="" className='label_icones' id='lsair'>Sair</label> */}
        </fieldset>
      </div>
    </>
  );
}

export default Principal;
