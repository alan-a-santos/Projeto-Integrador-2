import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { nomes_devedores_controller } from "../../controllers/servicos_diversos/nomes_devedores";





export const nomes_devedores = async (route: FastifyInstance) => {
    route.post("/servicos_diversos/nomes_devedores", (request: FastifyRequest, replay: FastifyReply) => {
        return new nomes_devedores_controller(). handle(request,replay)
    })
}