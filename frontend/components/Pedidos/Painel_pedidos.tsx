"use client";
import React, { useCallback, useEffect, useState } from "react";
import "../../src/styles/Painel_pedido.css";
import { server } from "@/service/server";

interface dados {
  pedido: string;
  observacao: string;
  nome_cliente:string,
  valor: number;
  id: number;
}

function Painel_pedidos() {
  const [segmento, setSegmento] = useState<string>("Marmitex");
  const [, setSituacoes] = useState<string[]>([]); // Ajuste o tipo conforme a estrutura da resposta
  const [pedidosEmPreparo, setPedidosEmPreparo] = useState<dados[]>([]);
  const [pedidosProntos, setPedidosProntos] = useState<dados[]>([]);
  const [, setconsultas] = useState<{ id: number; pedido: string }[]>([]);
  const [, setSelectedIds] = useState<number[]>([]);

  // Função para buscar situações de acordo com o segmento selecionado
  const buscarSituacoes = useCallback(
    async (segmentoAtual: string) => {
      try {
        const response = await server.get("/servicos_diversos/lista_situacao", {
          params: { segmento: segmentoAtual },
        });
        const data = response.data;
        console.log(segmento);
  
        // Filter and set orders by status
        setPedidosEmPreparo(
          data.filter(
            (pedido: { situacao: string; segmento: string }) =>
              pedido.situacao === "em preparo" && pedido.segmento === segmento
          )
        );
        setPedidosProntos(
          data.filter(
            (pedido: { situacao: string; segmento: string }) =>
              pedido.situacao === "pronto" && pedido.segmento === segmento
          )
        );
  
        setSituacoes(data);
        console.log(pedidosEmPreparo);
      } catch (error) {
        console.error("Erro ao buscar situações:", error);
      }
    },
    [segmento, setPedidosEmPreparo, setPedidosProntos, setSituacoes, pedidosEmPreparo] // Include pedidosEmPreparo as a dependency
  );
  
  useEffect(() => {
    buscarSituacoes(segmento);
  }, [buscarSituacoes, segmento]);

  const finaliza = async (event: React.MouseEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.currentTarget.selectedOptions);
    const ids = selectedOptions.map((option) =>
      Number(option.value.match(/\d+/)?.[0])
    );
    setSelectedIds(ids);

    try {
      await server.post("/pedidos/finalizados", {
        id: ids[0],
        situacao: "pronto",
      });
      console.log("Pedido Finalizado");
      buscarSituacoes(segmento);
    } catch {
      console.log("não encontrado");
    }
  };

  const entrega = async (event: React.MouseEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.currentTarget.selectedOptions);
    const ids = selectedOptions.map((option) =>
      Number(option.value.match(/\d+/)?.[0])
    );
    setSelectedIds(ids);

    try {
      await server.post("/pedidos/finalizados", {
        id: ids[0],
        situacao: "entregue",
      });
      console.log("Pedido Finalizado");
      buscarSituacoes(segmento);
    } catch {
      console.log("não encontrado");
    }
  };
  
  const consulta = async (event: React.MouseEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.currentTarget.selectedOptions);
    const ids = selectedOptions.map((option) =>
      Number(option.value.match(/\d+/)?.[0])
    );
    setSelectedIds(ids);

    try {
      const response = await server.post("/pedidos/consulta", {
        id: ids[0],
      });
      const data = response.data;
      setconsultas(data.consultas || []);
    } catch {
      console.log("não encontrado");
    }
  };

  const handleSegmentoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const novoSegmento = event.target.value;
    setSegmento(novoSegmento);
  };

  return (
    <>
      <div className="painel">
        <div id="p1">
          <h1 id="servico_pedido">Painel de Acompanhamento - </h1>
          <select
            name="segmento"
            id="servico"
            className="inputs"
            onChange={handleSegmentoChange}
          >
            <option value="Marmitex">Marmitex</option>
            <option value="Fitness">Fitness</option>
          </select>
        </div>
        <br />

        <div className="paineis">
          <fieldset className="preparo">
            <legend className="labels" id="legenda">
              Pedidos em Preparo
            </legend>
            <select
              name="preparo"
              id="preparo-list"
              className="inputs"
              size={5}
              multiple
              onDoubleClick={finaliza}
              onClick={consulta}
            >
              {pedidosEmPreparo.map((pedido) => (
                <option key={pedido.id}>
                  {pedido.id} - {pedido.nome_cliente} - R$ {pedido.valor}{" "}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className="pronto">
            <legend className="labels" id="legenda">
              Pedidos Prontos para Entrega
            </legend>
            <select
              name="pronto"
              id="pronto-list"
              className="inputs"
              size={5}
              multiple
              onDoubleClick={entrega}
            >
              {pedidosProntos.map((pedido) => (
                <option key={pedido.id}>
                  {pedido.id} - {pedido.nome_cliente}
                </option>
              ))}
            </select>
          </fieldset>
        </div>

        {/* <label htmlFor="pedidoobs" id="pedidoobs" className="labels">Observações do Pedido</label> */}
        <div>
          {/* <select name="pedidoobs" id ="pedidoobserva" className="inputs" multiple>
          {consultas.map((consulta) => (
          <option key={consulta.id} value={consulta.id}>
            {consulta.pedido} 
          </option>
        ))}
          </select> */}
        </div>
      </div>
    </>
  );
}

export default Painel_pedidos;
