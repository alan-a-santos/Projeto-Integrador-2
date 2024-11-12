'use client'
import React, { FormEvent,  useRef } from 'react'
import logo from '../../public/image/Logo.jpg'
import Image from 'next/image'
import '../styles/Sessoes/login.css'
import { server } from '@/service/server'



function Login() {

  const usuarioref = useRef<HTMLInputElement | null> (null)
  const senharef = useRef<HTMLInputElement | null> (null)

  // useEffect(() => {
  //   // Qualquer lógica necessária para formatar a página
  //   // Por exemplo, ajustar o estado ou aplicar algum estilo
  // }, []); // O arr
async function logar(event: FormEvent){
  event.preventDefault()
  // usuario:  usuarioref.current?.value
  // senha: senharef.current?.value

  if (!usuarioref.current?.value) return

  const response = await server.post('/login', {
      usuario: usuarioref.current?.value,
      senha : senharef.current?.value,
  })

if (response.data=== "Autorizado"){
  window.location.href = '/home'
    // router.push('/home')
} else{
  alert ("Usuario e/ou senha inválidos")
}
}
  

  return (
  <>

        <div className='login' id='div1'>
            <Image src={logo} alt="" id='logo' priority/>
            <form action="" id='acesso' onSubmit={logar}>
                <input type="text" name="usuario" id="usuario" className='inputs' placeholder='usuario' ref={usuarioref}/>
                <input type="password" name="senha" id="senha" className='inputs' placeholder='senha' ref={senharef} />
                <button type="submit" id='btentrar'> Entrar</button>
            </form>
        </div>

  </>
  )
}

export default Login