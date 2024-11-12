import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Financas from '../../../../components/Sessoes/Financas'
import Financas_laterais from '../../../../components/Laterais/Financas_laterais'
import Contas_financas from '../../../../components/Financas/Contas_financas'

function page() {
  return (
    <>
        <Superior/>
        <Financas/>
        <Financas_laterais/>
        <Contas_financas/>
    </>
  )
}

export default page