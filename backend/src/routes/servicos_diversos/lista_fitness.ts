import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { lista_fitness_controller } from "../../controllers/servicos_diversos/lista_fitness";




export const lista_fitness = async (route: FastifyInstance) => {
    route.get("/servicos_diversos/lista_fitness", (request: FastifyRequest, replay: FastifyReply) => {
        return new lista_fitness_controller(). handle(request,replay)
    })
}