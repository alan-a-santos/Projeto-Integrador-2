import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { atualiza_pedido_controller } from "../../controllers/pedidos/atualizar_pedido";


export const atualiza_pedido = async (route: FastifyInstance) => {
    route.post("/pedidos/atualiza", (request: FastifyRequest, replay: FastifyReply) => {
        return new atualiza_pedido_controller(). handle(request,replay)
    })
}