import { FastifyReply, FastifyRequest } from "fastify"
import { nomes_devedores } from "../../services/servicos/nomes_devedores"





class nomes_devedores_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {  situacao} = request.body as { situacao:string}

        
 
        const clientes = new nomes_devedores()
        const cliente = await clientes.execute(situacao)
        reply.send(cliente)

    }
}
export { nomes_devedores_controller}