import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Pedido from '../../../../components/Sessoes/Pedido'
import Pedidos_lateral from '../../../../components/Laterais/Pedidos_lateral'
import Historico_pedido from '../../../../components/Pedidos/Historico_pedido'

function page() {
  return (
    <>
        <Superior/>
        <Pedido/>
        <Pedidos_lateral/>
        <Historico_pedido/>
    </>
  )
}

export default page