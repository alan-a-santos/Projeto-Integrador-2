import { FastifyReply, FastifyRequest } from "fastify"
import { lista_clientes } from "../../services/servicos/lista_clientes"


class lista_clientes_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
 
 
        const nomes = new lista_clientes()
        const nome = await nomes.execute()
        reply.send(nome)

    }
}
export {lista_clientes_controller}