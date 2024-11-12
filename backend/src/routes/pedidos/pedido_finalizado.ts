import { FastifyInstance,FastifyReply, FastifyRequest } from "fastify";
import { pedido_finalizado_controller } from "../../controllers/pedidos/pedido_finalizado";

export const pedido_finalizado = async(route: FastifyInstance) => {
    route.post("/pedidos/finalizados", (request: FastifyRequest, replay: FastifyReply)=>{
        return new pedido_finalizado_controller().handle(request, replay)
    })
}