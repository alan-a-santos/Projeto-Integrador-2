"use client";
import React from "react";
import "../../src/styles/Sessoes/dados_clientes.css";
import { useState, useEffect } from "react";
import { server } from "../../src/service/server";
import { useCliente } from "../Pedidos/ClienteContext";

interface Clientes_Props {
  id: string;
  nome: string;
  telefone: string;
  nascimento: string;
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  id_cliente: string;
}

function Dados_clientes() {
  const [clientes, setclientes] = useState<Clientes_Props[]>([]);
  const [clienteInfo, setClienteInfo] = useState<Clientes_Props | null>(null);
  const [selectedCliente, setSelectedCliente] = useState<string>("");
  const { setIdCliente } = useCliente();

  useEffect(() => {
    nomes_clientes();
  }, []);

  function formatCep(value: string): string {
    // Verifica se o valor possui 8 dígitos
    if (value.length === 8) {
      return value.replace(/(\d{5})(\d{3})/, "$1-$2");
    }
    return value; // Retorna o valor original se não tiver 8 dígitos
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Meses começam em 0, então adicionamos +1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  async function nomes_clientes() {
    const response = await server.get("/servicos_diversos/lista_clientes");
    setclientes(response.data);
  }

  const [, setid_cliente] = useState<string | null>(null);

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
        setClienteInfo(response.data[0]);
        setIdCliente(response.data[0].id);
      } catch (error) {
        console.error("Erro ao buscar informações do cliente:", error);
      }
    }
  }

  return (
    <>
      <fieldset className="principal_pedidos1">
        <legend className="labels" id="legenda">
          Dados do Cliente
        </legend>

        <div className="labels1">
          <label htmlFor="" className="labels" id="label1">
            ID
          </label>
          <label htmlFor="" className="labels" id="label2dc">
            Nome do Cliente
          </label>
          <label htmlFor="" className="labels" id="label3">
            Telefone
          </label>
          <label htmlFor="" className="labels" id="label4dc">
            Nascimento
          </label>
        </div>

        <div className="inputs1">
          <input
            type="text"
            name=""
            id="input1"
            className="inputs"
            onChange={(e) => setid_cliente(e.target.value)}
            readOnly
            value={clienteInfo?.id || ""}
          />
          <select
            name=""
            id="input2"
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
            name=""
            id="input3"
            className="inputs"
            value={clienteInfo?.telefone || ""}
            readOnly
          />
          <input
            type="text"
            id="input4"
            className="inputs"
            value={clienteInfo ? formatDate(clienteInfo.nascimento) : ""}
            readOnly
          />
        </div>
      </fieldset>

      <fieldset className="principal_cliente2">
        {/* <legend className='labels' id='legenda'>Endereço</legend> */}

        <div className="labels1">
          <label htmlFor="" className="labels" id="label5">
            CEP
          </label>
          <label htmlFor="" className="labels" id="label6">
            Endereço
          </label>
          <label htmlFor="" className="labels" id="label7">
            Nº
          </label>
          <label htmlFor="" className="labels" id="label8">
            Complemento
          </label>
          <label htmlFor="" className="labels" id="label9">
            Bairro
          </label>
          <label htmlFor="" className="labels" id="label10">
            Cidade
          </label>
        </div>

        <div className="inputs1">
          <input
            type="text"
            id="input5"
            className="inputs"
            value={
              clienteInfo && clienteInfo.cep ? formatCep(clienteInfo.cep) : ""
            }
            readOnly
          />
          <input
            type="text"
            id="input6"
            className="inputs"
            value={clienteInfo?.rua || ""}
            readOnly
          />
          <input
            type="text"
            id="input7"
            className="inputs"
            value={clienteInfo?.numero || ""}
            readOnly
          />
          <input
            type="text"
            id="input8"
            className="inputs"
            value={clienteInfo?.complemento || ""}
            readOnly
          />
          <input
            type="text"
            id="input9"
            className="inputs"
            value={clienteInfo?.bairro || ""}
            readOnly
          />
          <input
            type="text"
            id="input10"
            className="inputs"
            value={clienteInfo?.cidade || ""}
            readOnly
          />
        </div>
      </fieldset>
    </>
  );
}

export default Dados_clientes;
