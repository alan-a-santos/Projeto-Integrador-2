'use client'
import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Pedido from '../../../../components/Sessoes/Pedido'
import Pedidos_lateral from '../../../../components/Laterais/Pedidos_lateral'
import Dados_clientes from '../../../../components/Sessoes/Dados_cliente'
import Cadastro_fitness from '../../../../components/Pedidos/Cadastro_fitness'
import { ClienteProvider } from '../../../../components/Pedidos/ClienteContext'


function page() {
  return (
    <>
    <ClienteProvider>
        <Superior/>
        <Pedido/>
        <Pedidos_lateral/>
        <Dados_clientes/>
        <h1 id='servico_pedido'>Pedidos Fitness</h1>
        <Cadastro_fitness/>
        </ClienteProvider>
    </>
  )
}

export default page