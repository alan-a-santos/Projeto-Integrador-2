'use client'
import React from "react";
import "../../src/styles/Laterais.css";
import img1 from "../../public/image/Fichatecnica.png";
//import img2 from "../../public/image/montagem.jpg";
import img3 from "../../public/image/incluircardapio.jpg";
// import img4 from '../../public/image/preco.png'
import img5 from "../../public/image/home.jpg";
import Image from "next/image";

function Cardapio_lateral() {
  return (
    <>
      <div className="lateral_principal">
        <fieldset className="lateral_cardapio">
          <a href="/cardapio/cadastro">
            <Image src={img1} alt="" id="img1" className="icones" />
            <label htmlFor="" className="label_icones">
              Cadastrar
            </label>
          </a>
          {/* <a href="/cardapio/montagem"><Image src={img2} alt='' id='img2' className='icones'/>
            <label htmlFor="" className='label_icones'>Montar</label></a> */}
          <a href="/cardapio/oferta">
            <Image src={img3} alt="" id="img3" className="icones" />
            <label htmlFor="" className="label_icones">
              Ofertar
            </label>
          </a>
          {/* <a href="/cardapio/preco"><Image src={img4} alt='' id='img4' className='icones'/></a>
           <label htmlFor="" className='label_icones'>Preço</label> */}

          <a href="/home">
            <Image src={img5} alt="" id="img5ca" className="icones" />
          </a>
        </fieldset>
      </div>
    </>
  );
}

export default Cardapio_lateral;
