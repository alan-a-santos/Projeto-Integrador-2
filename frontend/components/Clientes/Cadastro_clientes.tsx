"use client";
import React, { useRef, FormEvent, useState, useEffect } from "react";
import "../../src/styles/Clientes.css";
import { server } from "../../src/service/server";
import axios from "axios";

function Cadastro_clientes() {
  // Referências aos inputs
  const nomeref = useRef<HTMLInputElement | null>(null);
  const nascimentoref = useRef<HTMLInputElement | null>(null);
  const telefoneref = useRef<HTMLInputElement | null>(null);
  const tiporef = useRef<HTMLSelectElement | null>(null);
  const cpfref = useRef<HTMLInputElement | null>(null);
  const emailref = useRef<HTMLInputElement | null>(null);
  const cadastroref = useRef<HTMLInputElement | null>(null);
  const cepref = useRef<HTMLInputElement | null>(null);
  const ruaref = useRef<HTMLInputElement | null>(null);
  const numeroref = useRef<HTMLInputElement | null>(null);
  const complementoref = useRef<HTMLInputElement | null>(null);
  const bairroref = useRef<HTMLInputElement | null>(null);
  const cidaderef = useRef<HTMLInputElement | null>(null);
  const observacaoref = useRef<HTMLTextAreaElement | null>(null);

  const [cepError, setCepError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [tipo, setTipo] = useState<string>("Pessoa Física");

  // Função para buscar o endereço via CEP
  async function handleCepBlur() {
    const cep = cepref.current?.value;
    if (cep && cep.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        if (response.data.erro) {
          setCepError("CEP não encontrado");
        } else {
          setCepError(null);
          ruaref.current!.value = response.data.logradouro || "";
          bairroref.current!.value = response.data.bairro || "";
          cidaderef.current!.value = response.data.localidade || "";
        }
      } catch {
        setCepError("Erro ao buscar o CEP");
      }
    } else {
      setCepError("CEP inválido");
    }
  }

  // Atualiza o valor do select
  const handleTipoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTipo(event.target.value);
  };

  // Função para carregar a data atual no campo "cadastro"
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    if (cadastroref.current) {
      cadastroref.current.value = formattedDate;
    }
  }, []);

  function clearFields() {
    nomeref.current!.value = "";
    nascimentoref.current!.value = "";
    telefoneref.current!.value = "";
    cpfref.current!.value = "";
    emailref.current!.value = "";
    cepref.current!.value = "";
    ruaref.current!.value = "";
    numeroref.current!.value = "";
    complementoref.current!.value = "";
    bairroref.current!.value = "";
    cidaderef.current!.value = "";
    observacaoref.current!.value = "";
    tiporef.current!.value = ""; // Para o select, redefine o valor
    setTipo("Pessoa Física"); // Redefine o tipo para o valor padrão
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!nomeref.current?.value) return alert("Necessario o nome do cliente");
    if (!telefoneref.current?.value)
      return alert("Necessario o informar o número do celular do cliente");

    const nascimento = nascimentoref.current?.value || "1900-01-01";

    try {
      const response = await server.post("/clientes/cadastro", {
        nome: nomeref.current?.value,
        nascimento: nascimento,
        telefone: telefoneref.current?.value,
        tipo: tipo,
        cpf: cpfref.current?.value,
        email: emailref.current?.value,
        cadastro: cadastroref.current?.value,
        cep: cepref.current?.value,
        rua: ruaref.current?.value,
        numero: numeroref.current?.value,
        complemento: complementoref.current?.value,
        bairro: bairroref.current?.value,
        cidade: cidaderef.current?.value,
        observacao: observacaoref.current?.value,
      });

      console.log("Dados enviados com sucesso:", response.data);

      setSuccessMessage("Cadastro realizado com sucesso!");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000); // A mensagem de sucesso aparece por 5 segundos

      clearFields(); // Limpa os campos após o envio
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  }

  return (
    <div className="cliente">
      <h1 id="servico_cliente">Cadastro de Clientes</h1>
      <form onSubmit={handleSubmit}>
        {/* Formulário de cadastro */}
        <fieldset className="principal_cliente1">
          <legend className="labels" id="legenda">
            Dados Pessoais
          </legend>
          <div className="labels1">
            <label className="labels" id="label1">
              ID
            </label>
            <label className="labels" id="label2000">
              Nome do Cliente
            </label>
            <label className="labels" id="label3">
              Nascimento
            </label>
            <label className="labels" id="label4">
              Telefone
            </label>
            <label className="labels" id="label4_1">
              Tipo
            </label>
            <label className="labels" id="label5">
              CPF/CNPJ
            </label>
            <label className="labels" id="label5_1">
              Email
            </label>
            <label className="labels" id="label6">
              Cadastro
            </label>
          </div>
          <div className="inputs1">
            <input type="text" className="inputs" id="input1" />
            <input
              type="text"
              className="inputs"
              id="input2000"
              ref={nomeref}
            />
            <input
              type="date"
              className="inputs"
              id="input3"
              ref={nascimentoref}
            />
            <input
              type="text"
              className="inputs"
              id="input4"
              ref={telefoneref}
            />
            <select
              className="inputs"
              id="tipo"
              value={tipo}
              onChange={handleTipoChange}
            >
              <option value="Pessoa Fisíca">Pessoa Fisíca</option>
              <option value="Pessoa Jurídica">Pessoa Jurídica</option>
            </select>
            <input type="text" className="inputs" id="input5" ref={cpfref} />
            <input type="text" className="inputs" id="input6" ref={emailref} />
            <input
              type="date"
              className="inputs"
              id="input6_1"
              ref={cadastroref}
              readOnly
            />
          </div>
        </fieldset>
        {/* Endereço */}
        <fieldset className="principal_cliente2">
          <legend className="labels" id="legenda">
            Endereço
          </legend>
          <div className="labels1">
            <label className="labels" id="label7">
              CEP
            </label>
            <label className="labels" id="label8">
              Endereço
            </label>
            <label className="labels" id="label9">
              Nº
            </label>
            <label className="labels" id="label10">
              Complemento
            </label>
            <label className="labels" id="label11">
              Bairro
            </label>
            <label className="labels" id="label12">
              Cidade
            </label>
          </div>
          <div className="inputs1">
            <input
              type="text"
              className="inputs"
              id="input7"
              ref={cepref}
              onBlur={handleCepBlur}
            />
            {cepError && <span style={{ color: "red" }}>{cepError}</span>}
            <input
              type="text"
              className="inputs"
              id="input8"
              ref={ruaref}
              readOnly
            />
            <input type="text" className="inputs" id="input9" ref={numeroref} />
            <input
              type="text"
              className="inputs"
              id="input10"
              ref={complementoref}
            />
            <input
              type="text"
              className="inputs"
              id="input11"
              ref={bairroref}
              readOnly
            />
            <input
              type="text"
              className="inputs"
              id="input12"
              ref={cidaderef}
              readOnly
            />
          </div>
        </fieldset>
        {/* Observações */}
        <h2 id="obs">Observações</h2>
        <textarea
          className="inputs"
          id="observa"
          ref={observacaoref}
        ></textarea>
        <div className="msg">
          <button id="botao_cad1">Processar</button>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Cadastro_clientes;
