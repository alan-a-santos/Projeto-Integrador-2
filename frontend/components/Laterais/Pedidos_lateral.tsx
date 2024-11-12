'use client'
import React from "react";
import "../../src/styles/Laterais.css";
import Image from "next/image";
import img1 from "../../public/image/marmitex.jpg";
import img2 from "../../public/image/fitness.jpg";
import img3 from "../../public/image/acompanharpedido.png";
//import img4 from "../../public/image/historico.png";
import img5 from "../../public/image/home.jpg";

function Pedidos_lateral() {
  return (
    <>
      <div className="lateral_principal">
        <fieldset className="lateral_pedidos">
          <a href="/pedidos/marmitex">
            <Image src={img1} alt="" id="img1" className="icones" />
            <label htmlFor="" className="label_icones">
              Marmitex
            </label>
          </a>
          <a href="/pedidos/fitness">
            <Image src={img2} alt="" id="img2" className="icones" />
            <label htmlFor="" className="label_icones">
              Fitness
            </label>
          </a>
          <a href="/pedidos/painel">
            <Image src={img3} alt="" id="img3" className="icones" />
            <label htmlFor="" className="label_icones">
              Painel
            </label>
          </a>
          {/* <a href="/pedidos/historico"><Image src={img4} alt='' id='img4' className='icones'/>
           <label htmlFor="" className='label_icones'>Histórico</label></a> */}
          <a href="/home">
            <Image src={img5} alt="" id="img5p" className="icones" />
          </a>
        </fieldset>
      </div>
    </>
  );
}

export default Pedidos_lateral;
