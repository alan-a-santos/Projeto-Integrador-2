import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Financas from '../../../../components/Sessoes/Financas'
import Financas_laterais from '../../../../components/Laterais/Financas_laterais'
import Pagar_financas from '../../../../components/Financas/Pagar_financas'

function page() {
  return (
    <>
        <Superior/>
        <Financas/>
        <Financas_laterais/>
        <Pagar_financas/>
    </>
  )
}

export default page