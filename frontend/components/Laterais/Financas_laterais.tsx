'use client'
import React from "react";
import "../../src/styles/Laterais.css";
import img1 from "../../public/image/receber.png";
// import img2 from "../../public/image/pagar.png";
// import img3 from "../../public/image/pesquisar.png";
// import img4 from "../../public/image/banco.jpg";
import img5 from "../../public/image/home.jpg";
import Image from "next/image";

function Financas_laterais() {
  return (
    <>
      <div className="lateral_principal">
        <fieldset className="lateral_financas">
          <a href="/financas/recebimento">
            <Image src={img1} alt="" id="img1" className="icones" />
            <label htmlFor="" className="label_icones">
              Receber
            </label>
          </a>
          {/* <a href="/financas/pagamento"><Image src={img2} alt='' id='img2' className='icones'/>
            <label htmlFor="" className='label_icones'>Pagar</label></a>
            <a href="/financas/consulta"><Image src={img3} alt='' id='img3' className='icones'/>
            <label htmlFor="" className='label_icones'>Consultar</label></a>
            <a href="/financas/contas"><Image src={img4} alt='' id='img4' className='icones'/>
           <label htmlFor="" className='label_icones'>Contas</label></a> */}
          <a href="/home">
            <Image src={img5} alt="" id="img5f" className="icones" />
          </a>
        </fieldset>
      </div>
    </>
  );
}

export default Financas_laterais;
