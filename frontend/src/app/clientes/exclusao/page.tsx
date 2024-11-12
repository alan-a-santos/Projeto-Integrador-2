import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Clientes from '../../../../components/Sessoes/Clientes'
import Clientes_lateral from '../../../../components/Laterais/Clientes_lateral'
import Exclusao_clientes from '../../../../components/Clientes/Exclusao_clientes'

function page() {
  return (
    <>
        <Superior/>
        <Clientes/>
        <Clientes_lateral/>
        <Exclusao_clientes/>
    </>
  )
}

export default page