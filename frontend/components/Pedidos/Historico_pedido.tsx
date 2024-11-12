import React from "react";
import "../../src/styles/Historico_pedidos.css";

function Historico_pedido() {
  return (
    <div className="cliente">
      <div id="p1">
        <h1 id="servico_pedido">Histórico de Pedidos - </h1>
        <select name="" id="servico" className="inputs">
          <option value="1">Fitness</option>
          <option value="2">Marmitex</option>
        </select>
      </div>

      <fieldset className="principal_pedidos1">
        <legend className="labels" id="legenda">
          Pesquisar{" "}
        </legend>

        <div className="labels1">
          <label htmlFor="" className="labels" id="label1h">
            Critério
          </label>
          <label htmlFor="" className="labels" id="label2h">
            Nome do Cliente
          </label>
          <label htmlFor="" className="labels" id="label3h">
            Data Inicial
          </label>
          <label htmlFor="" className="labels" id="label4h">
            Data Final
          </label>
        </div>

        <div className="inputs1">
          <select name="" id="pesquisa" className="inputs">
            <option value="1">Cliente</option>
            <option value="2">Data</option>
            <option value="3">Cliente + Data</option>
          </select>
          <select name="" id="input2" className="inputs"></select>

          <input type="date" name="" id="input3h" className="inputs" />
          <input type="date" name="" id="input4h" className="inputs" />

          <button id="botao_pesqh">Pesquisar</button>
        </div>
      </fieldset>

      <fieldset className="principal_cliente2h">
        <legend className="labels" id="legenda">
          Histórico Pesquisado
        </legend>
        <div>
          <label htmlFor="" id="cardapioh" className="labels">
            Pedidos
          </label>

          <label htmlFor="" id="obs_pedidoh" className="labels">
            Observações
          </label>
        </div>

        <div>
          <select
            name=""
            id="categoria5"
            className="inputs"
            multiple
            size={10}
          ></select>
          <section className="fim_pedidoh">
            <textarea name="" id="observa" className="inputs"></textarea>

            <label htmlFor="" id="totalh" className="labels">
              Valor Total
            </label>
            <input name="" id="observa1h" className="inputs"></input>
            <section id="prazoh">
              <label htmlFor="" className="labels">
                Prazo de Entrega
              </label>
              <div>
                <input type="date" name="" className="inputs" id="data" />
              </div>
            </section>
          </section>
        </div>
      </fieldset>

      <div className="dados_pedidos"></div>

      <div></div>
    </div>
  );
}

export default Historico_pedido;
