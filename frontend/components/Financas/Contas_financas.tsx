import React from "react";
import "../../src/styles/Financas.css";
function Contas_financas() {
  return (
    <>
      <div className="cliente">
        <h1 id="servico_cliente">Contas a Bancárias</h1>

        <fieldset className="principal_contas1">
          <legend className="labels" id="legenda">
            Cadastro de Credores
          </legend>

          <div className="labels1">
            <label htmlFor="" className="labels" id="label1">
              Categoria
            </label>
            <label htmlFor="" className="labels" id="label2">
              Nome
            </label>
            <label htmlFor="" className="labels" id="label4">
              Tipo
            </label>
            <label htmlFor="" className="labels" id="label3">
              CPF/CNPJ
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

            <input type="text" name="" id="input2" className="inputs" />
            <select name="" id="input4" className="inputs">
              <option value="1">Pessoa Física</option>
              <option value="2">Pessoa Jurídica</option>
            </select>
            <input type="text" name="" id="input3r" className="inputs" />
            <button id="btncredor">Cadastrar</button>
          </div>
        </fieldset>

        <fieldset className="principal_contas2">
          <legend className="labels" id="legenda">
            Dados do Pagamento
          </legend>
          <label htmlFor="" className="labels" id="dlnome">
            Nome do Credor
          </label>
          <div className="detalhes">
            <select name="" id="dnome" className="inputs"></select>
          </div>

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
          </div>

          <div className="inputs2">
            <textarea
              name=""
              id="input5"
              className="inputs"
              rows={5}
            ></textarea>
            <section id="ccc">
              <input type="text" className="inputs" id="input6r" />
              <input type="date" className="inputs" id="input7r" />
            </section>
            <button id="btnpagamento">Processar</button>
          </div>
        </fieldset>

        <div></div>
      </div>
    </>
  );
}

export default Contas_financas;
