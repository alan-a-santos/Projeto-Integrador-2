import React from "react";
import "../../src/styles/Financas.css";

function Pagar_financas() {
  return (
    <>
      <div className="cliente">
        <h1 id="servico_cliente">Gestão de Pagamentos</h1>

        <fieldset className="principal_contas1">
          {/* <legend className='labels' id='legenda'>Origem</legend> */}

          <div className="labels1">
            <label htmlFor="" className="labels" id="label1r">
              Categoria
            </label>
            <label htmlFor="" className="labels" id="label2p">
              Inicio
            </label>
            <label htmlFor="" className="labels" id="label3p">
              Término
            </label>
            <label htmlFor="" className="labels" id="label4p">
              Nome
            </label>
          </div>

          <div className="inputs1">
            <select name="" id="input1p" className="inputs">
              <option value="1">Contas</option>
              <option value="2">Forncedores</option>
              <option value="3">Impostos</option>
              <option value="4">Insumos</option>
              <option value="5">Prestadores de Serviço</option>
              <option value="6">Outros</option>
            </select>
            <input type="date" className="inputs" id="input2r" />
            <input type="date" name="" id="input3r" className="inputs" />

            <select name="" id="input4p" className="inputs">
              <option value="1">Cliente</option>
              <option value="2">Empresa</option>
              <option value="3">Fornecedor</option>
              <option value="4">Particular</option>
            </select>
          </div>
        </fieldset>

        <fieldset className="principal_contas2">
          <legend className="labels" id="legenda">
            Dados do Pagamento
          </legend>

          <div className="labels1">
            <label htmlFor="" className="labels" id="label5p">
              Descrição do Pagamento
            </label>
            <label htmlFor="" className="labels" id="label6p">
              Total a Pagar
            </label>
            <label htmlFor="" className="labels" id="label6p-1">
              Vencimento
            </label>
            <label htmlFor="" className="labels" id="label6p-2">
              Pagamento
            </label>
            <label htmlFor="" className="labels" id="label7p">
              Total Pago
            </label>
          </div>

          <div className="inputs2">
            <select name="" id="input5r" className="inputs" multiple></select>
            <section id="ccc">
              <input type="text" className="inputs" id="input6r" readOnly />
              <input type="date" className="inputs" id="input7r" readOnly />
              <input type="date" className="inputs" id="input7p" />
              <input type="text" className="inputs" id="input8p" />

              <div id="t1">
                <label htmlFor="" className="labels" id="label9p">
                  Forma de Pagamento
                </label>
                <div>
                  <select name="" id="input9p" className="inputs">
                    <option value="1">Débito</option>
                    <option value="2">Crédito</option>
                    <option value="3">Espécie</option>
                    <option value="4">PIX</option>
                    <option value="5">Transferência</option>
                  </select>{" "}
                </div>{" "}
              </div>
            </section>
            <button id="btnpaga">Processar</button>
          </div>
        </fieldset>

        <div></div>
      </div>
    </>
  );
}

export default Pagar_financas;
