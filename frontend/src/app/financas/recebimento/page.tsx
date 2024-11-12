import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Financas from '../../../../components/Sessoes/Financas'
import Financas_laterais from '../../../../components/Laterais/Financas_laterais'
import Receber_financeiro from '../../../../components/Financas/Receber_financeiro'

function page() {
  return (
    <>
        <Superior/>
        <Financas/>
        <Financas_laterais/>
        <Receber_financeiro/>
    </>
  )
}

export default page