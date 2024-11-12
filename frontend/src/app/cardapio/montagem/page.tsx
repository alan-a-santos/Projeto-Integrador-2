import React from 'react'
import Superior from '../../../../components/Sessoes/Superior'
import Cardapio from '../../../../components/Sessoes/Cardapio'
import Cardapio_lateral from '../../../../components/Laterais/Cardapio_lateral'
import Montagem_cardapio from '../../../../components/Cardapio/Montagem_cardapio'

function page() {
  return (
    <>
        <Superior/>
        <Cardapio/>
        <Cardapio_lateral/>
        <Montagem_cardapio/>
    </>
  )
}

export default page