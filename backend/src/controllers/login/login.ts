import { FastifyRequest, FastifyReply } from "fastify";
import { login_usuario } from '../../services/login/login'

class login_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
    const {usuario, senha} = request.body as {usuario: string, senha:string}
  
        console.log(usuario, senha)
    const usuario_logado = new login_usuario()
    const logado = await usuario_logado.execute({usuario,senha})
    reply.send(logado)
}}
export {login_controller}