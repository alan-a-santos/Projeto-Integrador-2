import React from "react";
import "../../src/styles/Financas.css";

function Consulta_financa() {
  return (
    <>
      <div className="cliente">
        <h1 id="servico_cliente">Consultas</h1>

        <fieldset className="principal_contas1">
          {/* <legend className='labels' id='legenda'>Cadastro de Credores</legend> */}

          <div className="labels1">
            <label htmlFor="" className="labels" id="label1c">
              Categoria
            </label>
            <label htmlFor="" className="labels" id="label2c">
              Inicio
            </label>
            <label htmlFor="" className="labels" id="label3c">
              Término
            </label>
            <label htmlFor="" className="labels" id="label4c">
              Nome
            </label>
          </div>

          <div className="inputs1">
            <select name="" id="input1c" className="inputs">
              <option value="1">Valores a Receber</option>
              <option value="2">Valores Recebidos</option>
              <option value="3">Valores a Pagar</option>
              <option value="4">Valores Pagos</option>
            </select>
            <input type="date" className="inputs" id="input2c" />
            <input type="date" name="" id="input3c" className="inputs" />

            <select name="" id="input4c" className="inputs"></select>
          </div>
        </fieldset>

        <fieldset className="principal_contas2">
          <legend className="labels" id="legenda">
            Detalhes da Consulta
          </legend>
          <div>
            <label htmlFor="" className="labels" id="label5p">
              Descrição do Pagamento
            </label>
          </div>
          <div>
            <select name="" id="input5c" className="inputs" multiple></select>
          </div>
          <br />
          <br />
          <br />
          <div>
            <label htmlFor="" className="labels" id="label6c">
              Total a Pagar
            </label>
            <label htmlFor="" className="labels" id="label7c">
              Vencimento
            </label>
            <label htmlFor="" className="labels" id="label8c">
              Pagamento
            </label>
            <label htmlFor="" className="labels" id="label9c">
              Total Pago
            </label>
          </div>
          <div>
            <input type="text" className="inputs" id="input6c" readOnly />
            <input type="date" className="inputs" id="input9c" readOnly />
            <input type="date" className="inputs" id="input10c" />
            <input type="text" className="inputs" id="input11c" />
          </div>

          <div />
        </fieldset>

        <div></div>
      </div>
    </>
  );
}

export default Consulta_financa;
