import { FastifyReply, FastifyRequest } from "fastify"
import { lista_ofertas } from "../../services/servicos/lista_ofertas"


class lista_ofertas_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
      
        const nomes = new lista_ofertas()
        const nome = await nomes.execute()
        reply.send(nome)

    }
}
export {lista_ofertas_controller}