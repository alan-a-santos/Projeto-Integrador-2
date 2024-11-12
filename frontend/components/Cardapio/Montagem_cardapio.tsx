"use client";
import React, {  useState } from "react";
import "../../src/styles/Montagem_cardapio.css";
import { server } from "@/service/server";

interface Categoria_Props {
  categorias: string;
  descricao: string;
}

function Montagem_cardapio() {
  const [descricoes, setDescricoes] = useState<string[]>([]);
  const [selectcategoria, setSelectcategoria] = useState("");
  const [selectedDescricao, setSelectedDescricao] = useState("");
  const [itensNovoPrato, setItensNovoPrato] = useState<string[]>([]);
  const [nomeprato, setnomeprato] = useState("");
  const [segmento, setsegmento] = useState("Marmitex");

  const handleSelectChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const valorSelecionado = event.target.value; // Captura o valor da opção selecionada
    setSelectcategoria(valorSelecionado);

    if (valorSelecionado) {
      try {
        const response = await server.post("servicos_diversos/lista_porcoes", {
          categoria: valorSelecionado,
        });
        console.log(response.data);

        // Atualiza o estado com as descrições recebidas
        setDescricoes(
          response.data.map((item: Categoria_Props) => item.descricao)
        );
      } catch (error) {
        console.error("Erro ao buscar descrições:", error);
      }
    } else {
      setDescricoes([]); // Limpa as descrições se nenhuma categoria estiver selecionada
    }
  };

  const handleDescricaoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDescricao(event.target.value);
  };
  const handleSegmentoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setsegmento(event.target.value);
    console.log(segmento);
  };
  const handlePratoChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setnomeprato(e.target.value);
  };

  const adicionarItemAoPrato = () => {
    // Adiciona a descrição selecionada ao novo prato
    if (selectedDescricao && !itensNovoPrato.includes(selectedDescricao)) {
      setItensNovoPrato([...itensNovoPrato, selectedDescricao]);
      setSelectedDescricao(""); // Limpa o select de descrição após adicionar
    }
  };

  async function enviar() {
    try {
       await server.post("/cardapio/cadastro_cardapio", {
        segmento: segmento,
        nome_prato: nomeprato,
        itens: itensNovoPrato,
      });
    } catch {
      console.log("Não foi possivel fazer o cadastro");
    }
  }
  return (
    <>
      <div className="cliente">
        <h1 id="servico_cardapio">Montagem de Pratos</h1>

        <fieldset className="principal_cardapio">
          <legend className="labels" id="legenda"></legend>

          <div className="labels1">
            <label htmlFor="" className="labels" id="label0">
              Segmento
            </label>
            <label htmlFor="" className="labels" id="label1">
              Categoria
            </label>
            <label htmlFor="" className="labels" id="label21">
              Descrição
            </label>
          </div>

          <div className="inputs1">
            <select
              name=""
              id="input0"
              className="inputs"
              onChange={handleSegmentoChange}
            >
              <option value="marmitex">Marmitex</option>
              <option value="fitness">Fitness</option>
            </select>
            <select
              name=""
              id="input2"
              className="inputs"
              onChange={handleSelectChange}
              value={selectcategoria}
            >
              <option value="">Selecione uma Categoria</option>
              <option value="Principal">Principal</option>
              <option value="Guarnições">Guarnições</option>
              <option value="Acompanhamento">Acompanhamento</option>
            </select>

            <select
              name=""
              id="input3"
              className="inputs"
              onChange={handleDescricaoChange}
              value={selectedDescricao}
            >
              <option value="">Selecione uma Descrição</option>
              {descricoes.map((descricao, index) => (
                <option key={index} value={descricao}>
                  {descricao}
                </option>
              ))}
            </select>

            <button id="botao_cad1" onClick={adicionarItemAoPrato}>
              Incluir
            </button>
          </div>
        </fieldset>
        <br />
        <label htmlFor="" className="labels" id="novo">
          Itens do Novo Prato
        </label>
        <br />
        <div>
          <select name="" id="novo_prato" className="inputs" multiple>
            {itensNovoPrato.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div id="nome_cardapio">
          <label htmlFor="" className="labels" id="label4">
            Nome do prato a ser ofertado
          </label>
          <div>
            <input
              type="text"
              name=""
              id="nome"
              value={nomeprato}
              onChange={handlePratoChange}
              className="inputs"
            />
          </div>
          <button id="botao_cad2" onClick={enviar}>
            Cadastrar
          </button>
        </div>
      </div>
    </>
  );
}

export default Montagem_cardapio;
