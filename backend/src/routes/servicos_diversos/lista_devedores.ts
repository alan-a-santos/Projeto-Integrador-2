import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { lista_devedores_controller } from "../../controllers/servicos_diversos/lista_devedores";




export const lista_devedores = async (route: FastifyInstance) => {
    route.post("/servicos_diversos/lista_devedores", (request: FastifyRequest, replay: FastifyReply) => {
        return new lista_devedores_controller(). handle(request,replay)
    })
}