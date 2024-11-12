'use client'
import React from "react";

function Endereco_cliente() {
  return (
    <>
      <fieldset className="principal_cliente2">
        {/* <legend className='labels' id='legenda'>Endereço</legend> */}

        <div className="labels1">
          <label htmlFor="" className="labels" id="label11">
            CEP
          </label>
          <label htmlFor="" className="labels" id="label22">
            Endereço
          </label>
          <label htmlFor="" className="labels" id="label33">
            Nº
          </label>
          <label htmlFor="" className="labels" id="label44">
            Complemento
          </label>
          <label htmlFor="" className="labels" id="label55">
            Bairro
          </label>
          <label htmlFor="" className="labels" id="label66">
            Cidade
          </label>
        </div>

        <div className="inputs1">
          <input type="text" name="" id="input11" className="inputs" readOnly />
          <input type="text" name="" id="input22" className="inputs" readOnly />
          <input type="text" name="" id="input33" className="inputs" readOnly />
          <input type="text" name="" id="input44" className="inputs" readOnly />
          <input type="text" name="" id="input55" className="inputs" readOnly />
          <input type="text" name="" id="input66" className="inputs" readOnly />
        </div>
      </fieldset>
    </>
  );
}

export default Endereco_cliente;
