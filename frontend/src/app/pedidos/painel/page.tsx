import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Pedido from '../../../../components/Sessoes/Pedido'
import Pedidos_lateral from '../../../../components/Laterais/Pedidos_lateral'
import Painel_pedidos from '../../../../components/Pedidos/Painel_pedidos'

function page() {
  return (
    <>
      <Superior/>
      <Pedido/>
      <Pedidos_lateral/>
      <Painel_pedidos/>
    </>
  )
}

export default page