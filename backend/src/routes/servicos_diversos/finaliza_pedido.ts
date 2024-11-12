import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { finaliza_pedido_controller } from "../../controllers/servicos_diversos/finaliza_pedido";




export const finailza_pedido = async (route: FastifyInstance) => {
    route.post("/servicos_diversos/finailza_pedido", (request: FastifyRequest, replay: FastifyReply) => {
        return new finaliza_pedido_controller(). handle(request,replay)
    })
}