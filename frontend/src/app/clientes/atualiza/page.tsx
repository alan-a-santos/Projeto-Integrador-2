import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Clientes from '../../../../components/Sessoes/Clientes'
import Clientes_lateral from '../../../../components/Laterais/Clientes_lateral'
import Atualiza_clientes from '../../../../components/Clientes/Atualiza_clientes'



function page() {
  return (
    <>
        <Superior/>
        <Clientes/>
        <Clientes_lateral/>
        <Atualiza_clientes/>
    </>
  )
}

export default page