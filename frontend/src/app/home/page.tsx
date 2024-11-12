import React from 'react'
import Superior from '../../../components/Sessoes/Superior'
import Home from '../../../components/Sessoes/Home'
import Principal from '../../../components/Laterais/Principal'
import Home_painel from '../../../components/Home/Home_painel'

function page() {
  return (
    <>
      <Superior/>
     <Home/>
      <Principal/>
       <Home_painel/>
    </>
  )
}

export default page