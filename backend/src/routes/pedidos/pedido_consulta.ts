import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { pedido_consulta_controller } from "../../controllers/pedidos/pedido_consulta";




export const pedico_consulta = async (route: FastifyInstance) => {
    route.post("/pedidos/consulta", (request: FastifyRequest, replay: FastifyReply) => {
        return new pedido_consulta_controller(). handle(request,replay)
    })
}