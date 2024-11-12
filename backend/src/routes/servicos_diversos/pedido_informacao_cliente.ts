import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { pedido_informacao_cliente_controller } from "../../controllers/servicos_diversos/pedido_informacao_cliente";



export const pedido_informacao_cliente = async (route: FastifyInstance) => {
    route.post("/servicos_diversos/pedido_informacao_cliente", (request: FastifyRequest, replay: FastifyReply) => {
        return new pedido_informacao_cliente_controller(). handle(request,replay)
    })
}