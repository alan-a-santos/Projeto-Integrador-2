"use client";
import React from "react";
import { useState, useEffect } from "react";
import "../../src/styles/Clientes.css";
import { server } from "../../src/service/server";

interface Clientes_Props {
  nome: string;
  id: string;
  nascimento: string;
  tipo: string;
  telefone: string;
  cpf: string;
  email: string;
  cadastro: string;
  observacao: string;
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
}

function Consulta_cliente() {
  const [clientes, setClientes] = useState<Clientes_Props[]>([]);
  const [selectedCliente, setSelectedCliente] = useState<string>("");
  const [clienteInfo, setClienteInfo] = useState<Clientes_Props | null>(null);

  useEffect(() => {
    nomes_clientes();
  }, []);

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Meses começam em 0, então adicionamos +1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function formatCep(value: string): string {
    // Verifica se o valor possui 8 dígitos
    if (value.length === 8) {
      return value.replace(/(\d{5})(\d{3})/, "$1-$2");
    }
    return value; // Retorna o valor original se não tiver 8 dígitos
  }

  function formatCpfCnpj(value: string): string {
    // Verifica se é CPF (11 dígitos)
    if (value.length === 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    // Verifica se é CNPJ (14 dígitos)
    else if (value.length === 14) {
      return value.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
      );
    }
    return value; // Retorna o valor original se não for CPF nem CNPJ válido
  }

  async function nomes_clientes() {
    const response = await server.get("/servicos_diversos/lista_clientes");
    setClientes(response.data);
  }

  async function handleSelectChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const selectedClienteNome = event.target.value;
    setSelectedCliente(selectedClienteNome);

    if (selectedClienteNome) {
      try {
        const response = await server.post(
          "/servicos_diversos/informacao_cliente",
          {
            nome: selectedClienteNome,
          }
        );
        setClienteInfo(response.data[0]); // Atualiza o estado com os dados completos do cliente
        console.log("Dados do cliente recebidos:", response.data);
      } catch (error) {
        console.error("Erro ao buscar informações do cliente:", error);
      }
    }
  }

  return (
    <div className="cliente">
      <h1 id="servico_cliente">Consulta de Clientes</h1>
      <fieldset className="principal_cliente1">
        <legend className="labels" id="legenda">
          Dados Pessoais
        </legend>
        <div className="labels1">
          <label htmlFor="" className="labels" id="label1">
            ID
          </label>
          <label htmlFor="" className="labels" id="label2000">
            Nome do Cliente
          </label>
          <label htmlFor="" className="labels" id="label3">
            Nascimento
          </label>
          <label htmlFor="" className="labels" id="label104">
            Telefone
          </label>
          <label htmlFor="" className="labels" id="label104_1">
            Tipo
          </label>
          <label htmlFor="" className="labels" id="label105">
            CPF/CNPJ
          </label>
          <label htmlFor="" className="labels" id="label105_1">
            Email
          </label>
          <label htmlFor="" className="labels" id="label106">
            Cadastro
          </label>
        </div>
        <div className="inputs1">
          <input
            type="text"
            id="input101"
            className="inputs"
            value={clienteInfo?.id || ""}
            readOnly
          />
          <select
            id="input102"
            className="inputs"
            value={selectedCliente}
            onChange={handleSelectChange}
          >
            <option value="">Selecione um cliente</option>
            {clientes.map((cliente) => (
              <option key={cliente.nome} value={cliente.nome}>
                {cliente.nome}
              </option>
            ))}
          </select>
          <input
            type="text"
            id="input103"
            className="inputs"
            value={clienteInfo ? formatDate(clienteInfo.nascimento) : ""}
            readOnly
          />
          <input
            type="text"
            id="input104"
            className="inputs"
            value={clienteInfo?.telefone || ""}
            readOnly
          />
          <input
            type="text"
            id="input104_1"
            className="inputs"
            value={clienteInfo?.tipo || ""}
            readOnly
          />
          <input
            type="text"
            id="input105"
            className="inputs"
            value={clienteInfo ? formatCpfCnpj(clienteInfo.cpf) : ""}
            readOnly
          />
          <input
            type="text"
            id="input105_1"
            className="inputs"
            value={clienteInfo?.email || ""}
            readOnly
          />
          <input
            type="text"
            id="input106"
            className="inputs"
            value={clienteInfo ? formatDate(clienteInfo.cadastro) : ""}
            readOnly
          />
        </div>
      </fieldset>
      <fieldset className="principal_cliente2">
        <legend className="labels" id="legenda">
          Endereço
        </legend>
        <div className="labels1">
          <label htmlFor="" className="labels" id="label107">
            CEP
          </label>
          <label htmlFor="" className="labels" id="label108">
            Endereço
          </label>
          <label htmlFor="" className="labels" id="label109">
            Nº
          </label>
          <label htmlFor="" className="labels" id="label110">
            Complemento
          </label>
          <label htmlFor="" className="labels" id="label111">
            Bairro
          </label>
          <label htmlFor="" className="labels" id="label112">
            Cidade
          </label>
        </div>
        <div className="inputs1">
          <input
            type="text"
            id="input107"
            className="inputs"
            value={
              clienteInfo && clienteInfo.cep ? formatCep(clienteInfo.cep) : ""
            }
            readOnly
          />
          <input
            type="text"
            id="input108"
            className="inputs"
            value={clienteInfo?.rua || ""}
            readOnly
          />
          <input
            type="text"
            id="input109"
            className="inputs"
            value={clienteInfo?.numero || ""}
            readOnly
          />
          <input
            type="text"
            id="input110"
            className="inputs"
            value={clienteInfo?.complemento || ""}
            readOnly
          />
          <input
            type="text"
            id="input111"
            className="inputs"
            value={clienteInfo?.bairro || ""}
            readOnly
          />
          <input
            type="text"
            id="input112"
            className="inputs"
            value={clienteInfo?.cidade || ""}
            readOnly
          />
        </div>
      </fieldset>
      <h2 id="obs">Observações</h2>
      <textarea
        id="observa"
        className="inputs"
        value={clienteInfo?.observacao || ""}
        readOnly
      ></textarea>
    </div>
  );
}

export default Consulta_cliente;
