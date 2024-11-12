import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { lista_situacao_controller } from "../../controllers/servicos_diversos/lista_situacao";




export const lista_situacao = async (route: FastifyInstance) => {
    route.get("/servicos_diversos/lista_situacao", (request: FastifyRequest, replay: FastifyReply) => {
        return new lista_situacao_controller(). handle(request,replay)
    })
}