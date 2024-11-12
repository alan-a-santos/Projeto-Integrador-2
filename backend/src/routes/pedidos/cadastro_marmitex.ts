import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { pedido_marmitex_controller } from "../../controllers/pedidos/cadastro_marmitex";


export const cadastro_marmitex = async (route: FastifyInstance) => {
    route.post("/pedidos/cadastro_marmitex", (request: FastifyRequest, replay: FastifyReply) => {
        return new pedido_marmitex_controller(). handle(request,replay)
    })
}