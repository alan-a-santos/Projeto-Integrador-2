import React from "react";
import "../../src/styles/Preco_cardapio.css";

function Preço_cardapio() {
  return (
    <>
      <div className="cliente">
        <h1 id="servico_cardapio">Precificação</h1>

        <fieldset className="principal_cardapio">
          <legend className="labels" id="legenda"></legend>

          <div className="labels1">
            <label htmlFor="" className="labels" id="label1">
              Nome do Prato
            </label>
            <label htmlFor="" className="labels" id="label2ca">
              Preço
            </label>
          </div>

          <div className="inputs1">
            <select name="" id="input3m" className="inputs"></select>

            <select name="" id="input2" className="inputs">
              <option value="1">Principal</option>
              <option value="2">Guarnição</option>
              <option value="3">Acompanhamento</option>
            </select>
          </div>
        </fieldset>
        <br />
        <br />
        <label htmlFor="" className="labels" id="novo">
          Itens do Novo Prato
        </label>
        <br />
        <br />
        <div>
          <select name="" id="novo_prato" className="inputs" multiple></select>
        </div>

        <div id="nome_cardapio">
          <label htmlFor="" className="labels" id="label4">
            Nome do prato a ser ofertado
          </label>

          <input type="text" name="" id="nome" className="inputs" />
          <button id="botao_cad2">Cadastrar</button>
        </div>
      </div>
    </>
  );
}

export default Preço_cardapio;
