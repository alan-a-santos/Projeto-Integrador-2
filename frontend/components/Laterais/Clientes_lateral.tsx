'use client'
import React from "react";
import "../../src/styles/Laterais.css";
import img1 from "../../public/image/cadastrar.png";
import img2 from "../../public/image/pesquisar.png";
import img3 from "../../public/image/atualizar.jpg";
import img4 from "../../public/image/excluir.png";
import img5 from "../../public/image/home.jpg";
import Image from "next/image";

function Clientes_lateral() {
  return (
    <>
      <div className="lateral_principal">
        <fieldset className="lateral_cliente">
          <a href="/clientes/cadastro">
            <Image src={img1} alt="" id="img1" className="icones" />
            <label htmlFor="" className="label_icones">
              Cadastrar
            </label>
          </a>
          <a href="/clientes/consulta">
            <Image src={img2} alt="" id="img2" className="icones" />
            <label htmlFor="" className="label_icones">
              Consultar
            </label>
          </a>
          <a href="/clientes/atualiza">
            <Image src={img3} alt="" id="img3" className="icones" />
            <label htmlFor="" className="label_icones">
              Atualizar
            </label>
          </a>
          <a href="/clientes/exclusao">
            <Image src={img4} alt="" id="img4" className="icones" />
            <label htmlFor="" className="label_icones">
              Excluir
            </label>
          </a>
          <a href="/home">
            <Image src={img5} alt="" id="img5c" className="icones" />
          </a>
        </fieldset>
      </div>
    </>
  );
}

export default Clientes_lateral;
