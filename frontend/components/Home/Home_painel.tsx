"use client";
import React, { useEffect, useState } from "react";
import "../../src/styles/Home.css";
import { server } from "@/service/server";

function Home_painel() {
  const [clientes, setClientes] = useState<string[]>([]);
  const [fitness, setfitness] = useState<string[]>([]);
  const [marmitex, setmarmitex] = useState<string[]>([]);
  const [entrega, setentrega] = useState<string[]>([]);

  // Função para buscar dados do backend
  async function nomes_clientes() {
    try {
      const response = await server.get("/servicos_diversos/lista_clientes");
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  }

  const quantmarmitex = async () => {
    try {
      const response = await server.get("/servicos_diversos/lista_situacao");
      const data = response.data;
      setmarmitex(
        data.filter(
          (pedido: { situacao: string; segmento: string }) =>
            pedido.situacao === "em preparo" && pedido.segmento === "Marmitex"
        )
      );
    } catch (error) {
      console.error("Erro ao buscar situações Marmitex:", error);
    }
  };

  const quantfitness = async () => {
    try {
      const response = await server.get("/servicos_diversos/lista_situacao");
      const data = response.data;
      setfitness(
        data.filter(
          (pedido: { situacao: string; segmento: string }) =>
            pedido.situacao === "em preparo" && pedido.segmento === "Fitness"
        )
      );
    } catch (error) {
      console.error("Erro ao buscar situações Fitness:", error);
    }
  };

  const entregar = async () => {
    try {
      const response = await server.get("/servicos_diversos/lista_situacao");
      const data = response.data;
      setentrega(data.filter((pedido: { situacao: string }) => pedido.situacao === "pronto"));
    } catch (error) {
      console.error("Erro ao buscar situações para entrega:", error);
    }
  };

  useEffect(() => {
    nomes_clientes();
    quantfitness();
    quantmarmitex();
    entregar();
  }, []);

  return (
    <>
      <div className="home">
        <div className="home1">
          <section className="home1_1">
            <fieldset className="home1_1_1">
              <legend className="labels" id="leg1">
                Clientes Ativos
              </legend>
              <section className="div1">
                {/* <fieldset className='field1'>
                              <legend id='leg1_1'>Ativos</legend>
                              <br />
                           <label htmlFor="" id='ativos'>-</label>
                           </fieldset> */}
              </section>

              <section className="div1">
                <fieldset className="field2">
                  <legend id="leg1_1">Quantidade</legend>
                  <br />
                  <label htmlFor="" id="tot">
                    {clientes.length}
                  </label>
                </fieldset>
              </section>
            </fieldset>
          </section>

          <section className="home1_2">
            <fieldset className="home2_2_2">
              <legend className="labels" id="leg1">
                Pedidos em Aberto
              </legend>
              <section className="div2">
                <fieldset className="field1">
                  <legend id="leg1_1">Marmitex</legend>
                  <br />
                  <label htmlFor="" id="ativos">
                    {marmitex.length}
                  </label>
                </fieldset>
              </section>

              <section className="div2">
                <fieldset className="field2">
                  <legend id="leg1_1">Fitness</legend>
                  <br />
                  <label htmlFor="" id="total">
                    {fitness.length}
                  </label>
                </fieldset>
              </section>

              <section className="div2">
                <fieldset className="field2">
                  <legend id="leg1_1">Para Entrega</legend>
                  <br />
                  <label htmlFor="" id="total">
                    {entrega.length}
                  </label>
                </fieldset>
              </section>
            </fieldset>
          </section>
        </div>
        {/* <fieldset className='home3_3_3'>
              <legend className='labels' id='leg3'>Histórico de Vendas Mensal</legend>
                  <select name="" id="mes" className='inputs'>
                      <option value="1">Janeiro</option>
                      <option value="2">Fevereiro</option>
                      <option value="3">Março</option>
                      <option value="4">Abril</option>
                      <option value="5">Maio</option>
                      <option value="6">Junho</option>
                      <option value="7">Julho</option>
                      <option value="8">Agosto</option>
                      <option value="9">Setembro</option>
                      <option value="10">Outubro</option>
                      <option value="11">Novembro</option>
                      <option value="12">Dezembro</option>
                  </select>
             </fieldset> */}
      </div>
    </>
  );
}

export default Home_painel;
