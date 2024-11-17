"use client";
import React, { useState } from "react";
import "../../src/styles/Oferta_cardapio.css";
import { server } from "@/service/server";

interface Categoria_Props {
  categorias: string;
  nome_prato: string;
  valor: number;
}

function Oferta_cardapio() {
  const [prato, setprato] = useState("");
  const [categoria, setcategoria] = useState("");
  const [segmento, setsegmento] = useState("");
  
  const [descricoes, setDescricoes] = useState<string[]>([]);
  const [valor, setvalor] = useState("");
  const [resposta, setResposta] = useState<{ mensagem: string } | null>(null);

  const segmentar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setsegmento(event.target.value);
  };

  const valores = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setvalor(val);
  };

  const pratos = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pratu = event.target.value;
    setprato(pratu);
  };

  const categorizar = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categ = event.target.value; // Captura o valor da opção selecionada
    setcategoria(categ);
    try {
      const response = await server.post("/servicos_diversos/lista_pratos", {
        categoria: categ,
        segmento: segmento,
      });
      console.log(response.data);
      setDescricoes(
        response.data.map((item: Categoria_Props) => item.nome_prato)
      );
    } catch {}
  };

  const timeElapsed = Date.now();
  const currentDate = new Date(timeElapsed);

  // Extrai o dia, mês e ano, ajustando o mês (começa em 0)
  const currentDay = String(currentDate.getDate()).padStart(2, "0");
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const currentYear = currentDate.getFullYear();

  // Formata a data no padrão yyyy-mm-dd
  const formattedDate = `${currentYear}-${currentMonth}-${currentDay}`;

  async function enviar() {
    try {
      const response = await server.post("/cardapio/oferta_cardapio", {
        valor: valor,
        data: formattedDate,
        categoria: categoria,
        segmento: segmento,
        nome_prato: prato,
      });
      console.log(response.data);
      limparCampos();
      setResposta(response.data);
      setTimeout(() => {
        setResposta(null);
      }, 3000); // A mensagem de sucesso aparece por 5 segundos
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
    }
  }

  function limparCampos() {
    setcategoria("");
    setvalor("");
    setprato("");
  }

  console.log(categoria);
  return (
    <>
      <div className="cliente">
        <h1 id="servico_cardapio">Disponibilização de Pratos</h1>

        <fieldset className="principal_cardapio">
          <legend className="labels" id="legenda"></legend>
          <div className="labels1">
            <label htmlFor="" className="labels" id="label0">Segmento</label>
            <label htmlFor="" className="labels" id="label1">
              Categoria
            </label>
            <label htmlFor="" className="labels" id="label2-1">
              Descrição
            </label>
          </div>

          <div className="inputs1">
            <select
              name=""
              id="input1"
              className="inputs"
              value={segmento}
              onChange={segmentar}
            >
              <option value="">Segmento</option>
              <option value="marmitex">Marmitex</option>
              <option value="fitness">Fitness</option>
            </select>
            <select
              name=""
              id="input2"
              className="inputs"
              value={categoria}
              onChange={categorizar}
            >
              <option value="">Categoria</option>
              <option value="Principal">Principal</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Guarnições">Guarnições</option>
              <option value="Acompanhamento">Acompanhamento</option>
            </select>
            <select
              name=""
              id="input3"
              className="inputs"
              value={prato}
              onChange={pratos}
            >
              <option value="">Selecione uma Descrição</option>
              {descricoes.map((descricao, index) => (
                <option key={index} value={descricao}>
                  {descricao}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <br />

        <div id="nome_cardapio">
          <div>
            <label htmlFor="" className="labels" id="label5">
              Valor
            </label>
          </div>
          <div>
            <input
              type="text"
              name=""
              id="valor"
              value={valor}
              onChange={valores}
              className="inputs"
            />
          </div>
          <button id="botao_cad2" onClick={enviar}>
            Ofertar
          </button>
        </div>

        {resposta && <p className="success-message">{resposta.mensagem}</p>}
      </div>
    </>
  );
}

export default Oferta_cardapio;
