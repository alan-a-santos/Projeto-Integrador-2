import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { lista_porcoes_controller } from "../../controllers/servicos_diversos/lista_pratos";




export const lista_porcoes = async (route: FastifyInstance) => {
    route.post("/servicos_diversos/lista_pratos", (request: FastifyRequest, replay: FastifyReply) => {
        return new lista_porcoes_controller(). handle(request,replay)
    })
}