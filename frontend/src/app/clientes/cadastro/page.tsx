import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Clientes from '../../../../components/Sessoes/Clientes'
import Clientes_lateral from '../../../../components/Laterais/Clientes_lateral'
import Cadastro_clientes from '../../../../components/Clientes/Cadastro_clientes'

function page() {
  return (
    <>
        <Superior/>
        <Clientes/>
        <Clientes_lateral/>
        <Cadastro_clientes/>
    </>
  )
}

export default page