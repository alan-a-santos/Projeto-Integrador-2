import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { informacao_cliente_controller } from "../../controllers/servicos_diversos/informacao_cliente";



export const informacao_cliente = async (route: FastifyInstance) => {
    route.post("/servicos_diversos/informacao_cliente", (request: FastifyRequest, replay: FastifyReply) => {
        return new informacao_cliente_controller(). handle(request,replay)
    })
}