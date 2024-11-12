import { FastifyReply, FastifyRequest } from "fastify"

import { lista_fitness } from "../../services/servicos/lista_fitness"


class lista_fitness_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
      
        const nomes = new lista_fitness()
        const nome = await nomes.execute()
        reply.send(nome)

    }
}
export {lista_fitness_controller}