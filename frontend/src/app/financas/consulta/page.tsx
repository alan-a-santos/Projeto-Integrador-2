import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Financas from '../../../../components/Sessoes/Financas'
import Financas_laterais from '../../../../components/Laterais/Financas_laterais'
import Consulta_financa from '../../../../components/Financas/Consulta_financa'

function page() {
  return (
    <>
        <Superior/>
        <Financas/>
        <Financas_laterais/>
        <Consulta_financa/>
        
    </>
  )
}

export default page