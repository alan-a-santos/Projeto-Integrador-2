"use client";

import Pedidos_lateral from "../../../../components/Laterais/Pedidos_lateral";
import Dados_clientes from "../../../../components/Sessoes/Dados_cliente";
import Pedido from "../../../../components/Sessoes/Pedido";
import Superior from "../../../../components/Sessoes/Superior";

import { ClienteProvider } from "../../../../components/Pedidos/ClienteContext";
import Cadastro_marmitex from "../../../../components/Pedidos/Cadastro_marmitex";

function page() {
  return (
    <>
      <ClienteProvider>
        <Superior />
        <Pedido />
        <Pedidos_lateral />
        <Dados_clientes />
        <h1 id="servico_pedido">Pedidos Marmitex</h1>
        <Cadastro_marmitex />
      </ClienteProvider>
    </>
  );
}

export default page;
