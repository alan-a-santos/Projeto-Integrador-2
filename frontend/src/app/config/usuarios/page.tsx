import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Config from '../../../../components/Sessoes/config'
import Config_lateral from '../../../../components/Laterais/Config_lateral'
import Usuarios from '../../../../components/Sessoes/Usuario'


function page() {
  return (
    <>
        <Superior/>
        <Config/>
        <Config_lateral/>
        <Usuarios/>
    </>
  )
}

export default page