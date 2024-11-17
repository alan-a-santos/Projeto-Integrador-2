"use client";
import React, { useEffect, useState } from "react";
import "../../src/styles/Sessoes/financas.css";
import { server } from "@/service/server";

interface cliente{
    id: number,
    nome: string
}
interface devedor{
  id: number,
  data_venda: string,
  valor: number
}
function Receber_financeiro() {
  const [devedores, setdevedores] = useState<devedor[]>([]);
  const [clientes, setclientes] = useState<cliente[]>([]);
  const [, setSelectedCliente] = useState<string>("");
  const [total, settotal] = useState<number>(0);
  const [pedidoid, setpedidoid] = useState<string>("");
  const [clienteid, setclienteid] = useState<string>("");

  useEffect(() => {
    nomes_devedores();
  }, []);

  async function nomes_devedores() {
    try {
      // const response = await server.get("/servicos_diversos/lista_clientes");
      const response = await server.post("/servicos_diversos/nomes_devedores", {
        situacao: "a pagar",
      });
      setclientes(response.data);

    } catch  {
      console.error("Erro ao buscar clientes:");
    }
  }

  async function atualiza_pedido() {
    try {
      const response = await server.post("/servicos_diversos/lista_devedores", {
        id_cliente: clienteid,
        situacao: "a pagar",
      });
      setdevedores(response.data);
      const totalValor = response.data.reduce(
        (acc: number, item: { valor: string }) => acc + parseFloat(item.valor),
        0
      );
      settotal(totalValor);
    } catch (error) {
      console.error("Erro ao listar devedores:", error);
    }
  }

  function formatarData(data: string): string {
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, "0");
    const mes = String(dataObj.getMonth() + 1).padStart(2, "0");
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
  function handleSelectChangep(event: React.ChangeEvent<HTMLSelectElement>) {
    const pedidoid = event.target.value;
    setpedidoid(pedidoid);
  }

  async function handleSelectChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const clienteId = event.target.value;
    setSelectedCliente(clienteId);
    setclienteid(clienteId);
    
    try {
      const response = await server.post("/servicos_diversos/lista_devedores", {
        id_cliente: clienteId,
        situacao: "a pagar",
      });
      setdevedores(response.data);
      const totalValor = response.data.reduce(
        (acc: number, item: { valor: string }) => acc + parseFloat(item.valor),
        0
      );
      settotal(totalValor);
    } catch (error) {
      console.error("Erro ao listar devedores:", error);
    }
  }

  const pgtopedido = async () => {
    try {
      await server.post("/servicos_diversos/finailza_pedido", {
        id_pedido: Number(pedidoid),
        situacao: "pago",
      });
      atualiza_pedido();
    } catch {}
  };

  const pgtototal = async () => {
    try {
      await server.post("/servicos_diversos/pgto_total", {
        id_cliente: clienteid,
        situacao: "pago",
      });
      atualiza_pedido();
    } catch {}
  };

  return (
    <>
      <div className="clientefin">
        <div className="div1">
          <label htmlFor="listagem" className="labels" id="nomes">
            Nome dos Clientes
          </label>
        </div>
        <div className="div2">
          <select
            name="listagem"
            id="listagem"
            className="inputs"
            onChange={handleSelectChange}
          >
            <option value="0">Selecione o Cliente</option>
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome}
              </option>
            ))}
          </select>

          <label htmlFor="lista-pedidos" className="labels" id="pendentes">
            Pedidos Pendentes de Pagamento
          </label>
          <select
            name="lista-pedidos"
            id="lista-pedidos"
            className="inputs"
            multiple
            onChange={handleSelectChangep}
          >
            {devedores.map((devedor) => (
              <option key={devedor.id} value={devedor.id}>
                {formatarData(devedor.data_venda)}{" "}
                {".............................................R$ "}{" "}
                {devedor.valor}
              </option>
            ))}
          </select>

          <label htmlFor="saldo-devedor" className="labels" id="devedor">
            Saldo Devedor
          </label>
          <input
            type="text"
            id="total"
            value={`R$ ${total.toFixed(2)}`}
            className="inputs"
            readOnly
          />

          <section className="s1">
            <button className="inputs" id="pi" onClick={pgtopedido}>
              Pagamento de Pedido
            </button>
            <button className="inputs" id="pt" onClick={pgtototal}>
              Pagamento Total
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default Receber_financeiro;
