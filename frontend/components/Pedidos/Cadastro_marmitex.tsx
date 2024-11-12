"use client";
import React, { useEffect, useState } from "react";
import "../../src/styles/Sessoes/pedidos.css";
import { server } from "@/service/server";
import { useCliente } from "./ClienteContext";

interface itens {
  segmento: string;
  pedido: string;
  observacao: string;
  valor: string | number;
  dia: string;
  situacao: string;
  id: number;
  nome_prato: string;
  idcliente: string;
}

function Cadastro_marmitex() {
  const { idCliente } = useCliente();
  const [pratos, setPratos] = useState<itens[]>([]);
  const [, setitem] = useState("");
  const [pedido, setPedido] = useState<itens[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [itemSelecionado, setItemSelecionado] = useState<string | null>(null);
  const [observa, setobserva] = useState("");
  

  const timeElapsed = Date.now();
  const currentDate = new Date(timeElapsed);

  // Extrai o dia, mês e ano, ajustando o mês (começa em 0)
  const currentDay = String(currentDate.getDate()).padStart(2, "0");
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const currentYear = currentDate.getFullYear();

  // Formata a data no padrão yyyy-mm-dd
  const formattedDate = `${currentYear}-${currentMonth}-${currentDay}`;

  useEffect(() => {
    ofertas();
  }, []);

  async function ofertas() {
    try {
      const response = await server.get("/servicos_diversos/lista_ofertas");

      setPratos(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  }

  const incluirNoPedido = () => {
    if (itemSelecionado) {
      const pratoSelecionado = pratos.find(
        (prato) => prato.nome_prato === itemSelecionado
      );

      if (pratoSelecionado) {
        const novoPedido = [...pedido, pratoSelecionado];
        setPedido(novoPedido);

        atualizarTotal(novoPedido);
      }
    }
  };

  const atualizarTotal = (novoPedido: itens[]) => {
    const novoTotal = novoPedido.reduce(
      (acc, prato) => acc + parseFloat(`${prato.valor}`),
      0
    );
    setTotal(novoTotal);
  };

  const removerItem = (index: number) => {
    const novoPedido = pedido.filter((_, i) => i !== index);
    setPedido(novoPedido);
    atualizarTotal(novoPedido);
  };

  const enviarPedido = async () => {
    try {
      const response = await server.post("/pedidos/cadastro_marmitex", {
        id_cliente: idCliente,
        segmento: "Marmitex",
        situacao: "em preparo",
        situacaof: "a pagar",
        valor: total,
        observacao: observa,
        dia: formattedDate,
        entrega: formattedDate,
        pedido: pedido.map((item) => item.nome_prato),
      });

      console.log("Pedido enviado:", response.data);
      setitem("");
      setPedido([]);
      setTotal(0);
      setItemSelecionado(null);
      setobserva("");
    } catch (error) {
      console.error("Erro ao enviar pedido:", error);
    }
  };

  return (
    <>
      <div className="clientes">
        <div className="dados_pedidos">
          <section className="disponivel">
            <label htmlFor="" id="cardapio" className="labels">
              Pratos Ofertados
            </label>
            <textarea
              id="categoria1"
              className="inputs"
              readOnly
              value={pratos
                .map(
                  (prato) => `${prato.nome_prato}            R$${prato.valor}`
                )
                .join("\n")}
            />
          </section>

          <section className="pedido">
            <label htmlFor="" id="pedir" className="labels">
              Pedido do Cliente
            </label>
            <select
              name=""
              id="categoria2"
              className="inputs"
              onChange={(e) => setItemSelecionado(e.target.value)}
            >
              <option value="0A">Escolha o prato pedido pelo cliente</option>
              {pratos.map((prato) => (
                <option
                  key={prato.nome_prato}
                  value={prato.nome_prato}
                >{`${prato.nome_prato}`}</option>
              ))}
            </select>
            <button id="bp" onClick={incluirNoPedido}>
              Incluir
            </button>
            <select
              name=""
              id="detalhes"
              className="inputs"
              size={5}
              multiple
              onChange={(e) => setitem(e.target.value)}
              onDoubleClick={(e) => {
                const selectedIndex = e.currentTarget.selectedIndex;
                if (selectedIndex >= 0) {
                  removerItem(selectedIndex);
                }
              }}
            >
              {pedido.map((prato) => (
                <option key={prato.nome_prato} value={prato.nome_prato}>
                  {`${prato.nome_prato} `}
                </option>
              ))}
            </select>
            <label htmlFor="" id="total" className="labels">
              Valor Total
            </label>
            <input
              type="text"
              id="valor1"
              className="inputs"
              value={` R$ ${total.toFixed(2)}`}
              readOnly
            />
            <label htmlFor="" id="obs_pedido" className="labels">
              Observações do Pedido n
            </label>
            <textarea
              name=""
              id="observa"
              className="inputs"
              value={observa}
              onChange={(e) => setobserva(e.target.value)}
            ></textarea>
            {/* <label htmlFor="" className='labels' id='dtentrega'>Data de Entrega</label>
                        <input type="date" id='entrega' value={data} onChange={(e) => setdata(e.target.value)}className='inputs'/> */}
            <button id="botao_cad2" onClick={enviarPedido}>
              Processar
            </button>
          </section>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Cadastro_marmitex;
