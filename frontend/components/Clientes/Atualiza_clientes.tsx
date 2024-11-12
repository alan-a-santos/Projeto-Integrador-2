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

function Atualiza_cliente() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [clientes, setClientes] = useState<Clientes_Props[]>([]);
  const [selectedCliente, setSelectedCliente] = useState<string>("");
  const [clienteInfo, setClienteInfo] = useState<Clientes_Props | null>(null);

  useEffect(() => {
    nomes_clientes();
  }, []);

  function formatDateToInput(dateString: string): string {
    // Formata a data para "yyyy-mm-dd" para uso no campo de data
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
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
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setClienteInfo((prevInfo) =>
      prevInfo ? { ...prevInfo, [name]: value } : null
    );
  };
  const atualizarCliente = async () => {
    if (clienteInfo) {
      try {
        await server.put("/clientes/atualiza", clienteInfo);
        setSuccessMessage("Cadastro Atualizado com sucesso!");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } catch (error) {
        console.error("Erro ao atualizar cliente:", error);
        await server.put("/clientes/atualiza", clienteInfo);
        setSuccessMessage("Não ha atulizações a serm realizadas !");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      }
    }
  };

  return (
    <div className="cliente">
      <h1 id="servico_cliente">Atualização de Clientes</h1>
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
            type="date"
            id="input103"
            className="inputs"
            name="nascimento"
            value={clienteInfo ? formatDateToInput(clienteInfo.nascimento) : ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="input104"
            className="inputs"
            name="telefone"
            value={clienteInfo?.telefone || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="input104_1"
            className="inputs"
            value={clienteInfo?.tipo || ""}
          />
          <input
            type="text"
            id="input105"
            className="inputs"
            name="cpf"
            value={clienteInfo ? formatCpfCnpj(clienteInfo.cpf) : ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="input105_1"
            className="inputs"
            name="email"
            value={clienteInfo?.email || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="input106"
            className="inputs"
            value={clienteInfo ? formatDateToInput(clienteInfo.cadastro) : ""}
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
            name="cep"
            value={
              clienteInfo && clienteInfo.cep ? formatCep(clienteInfo.cep) : ""
            }
            onChange={handleInputChange}
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
            name="numero"
            value={clienteInfo?.numero || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="input110"
            className="inputs"
            name="complemeto"
            value={clienteInfo?.complemento || ""}
            onChange={handleInputChange}
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
        name="observacao"
        value={clienteInfo?.observacao || ""}
        onChange={handleInputChange}
      ></textarea>
      <button className="inputs" id="botao_cad1" onClick={atualizarCliente}>
        Atualizar
      </button>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
}

export default Atualiza_cliente;
