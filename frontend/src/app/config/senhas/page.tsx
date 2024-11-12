import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Config from '../../../../components/Sessoes/config'
import Config_lateral from '../../../../components/Laterais/Config_lateral'
import Senhas from '../../../../components/Sessoes/senhas'





function page() {
  return (
    <>
        <Superior/>
        <Config/>
        <Config_lateral/>
       <Senhas/>
    </>
  )
}

export default page