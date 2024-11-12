import { FastifyReply, FastifyRequest } from "fastify"


import { lista_situacao } from "../../services/servicos/lista_situacao"



class lista_situacao_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
      
        const nomes = new lista_situacao()
        const nome = await nomes.execute()
        reply.send(nome)

    }
}
export {lista_situacao_controller}