import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Clientes from '../../../../components/Sessoes/Clientes'
import Clientes_lateral from '../../../../components/Laterais/Clientes_lateral'
import Consulta_cliente from '../../../../components/Clientes/Consulta_cliente'

function page() {
  return (
    <>
        <Superior/>
        <Clientes/>
        <Clientes_lateral/>
        <Consulta_cliente/>
    </>
  )
}

export default page