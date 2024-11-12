"use client";
import React, { useState } from "react";
import "../../src/styles/Cadastro_cardapio.css";
import { server } from "@/service/server";

function Cadastro_cardapio() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [categoria, setcategoria] = useState("");
  const [segmento, setsegmento] = useState("Marmitex");
  const [nome_prato, setnome_prato] = useState("");

  const selecionar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cat = event.target.selectedOptions[0].text;
    setcategoria(cat);
  };

  const segmentar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const seg = event.target.value;
    setsegmento(seg);
  };
  const nomear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nom = event.target.value;
    setnome_prato(nom);
  };
  async function enviar() {
    console.log(segmento, categoria, nome_prato);
    try {
      const response = await server.post("/cardapio/cadastro_cardapio", {
        categoria: categoria,
        segmento: segmento,
        nome_prato: nome_prato,
      });
      console.log(response.data);
      limparCampos();
      setSuccessMessage(response.data);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000); // A mensagem de sucesso aparece por 5 segundos
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
    }
    function limparCampos() {
      setcategoria("");
      setnome_prato("");
    }
  }

  return (
    <>
      <div className="cliente">
        <h1 id="servico_cardapio">Cadastro de Pratos</h1>

        <fieldset className="principal_cardapio">
          <legend className="labels" id="legenda"></legend>

          <br />
          <div className="labels1">
            <label htmlFor="" className="labels" id="label1">
              Segmento
            </label>
            <label htmlFor="" className="labels" id="label21">
              Categoria
            </label>
            <label htmlFor="" className="labels" id="label3">
              Nome do Prato
            </label>
          </div>

          <div className="inputs1">
            <select
              name=""
              id="input0"
              className="inputs"
              value={segmento}
              onChange={segmentar}
            >
              <option value="marmitex">Marmitex</option>
              <option value="fitness">Fitness</option>
            </select>
            <select
              name=""
              id="input2"
              className="inputs"
              value={categoria}
              onChange={selecionar}
            >
              <option value="">Escolha uma Categoria</option>
              <option value="Principal">Principal</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Guarnições">Guarnições</option>
              <option value="Acompanhamento">Acompanhamento</option>
            </select>
            <input
              type="text"
              name=""
              id="input3"
              className="inputs"
              value={nome_prato}
              onChange={nomear}
            />
            <button id="botao_cad1" onClick={enviar}>
              Cadastrar
            </button>
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default Cadastro_cardapio;
