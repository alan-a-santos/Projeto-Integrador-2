import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

import { painel_controller } from "../../controllers/pedidos/painel";


export const painel = async (route: FastifyInstance) => {
    route.post("/pedidos/painel", (request: FastifyRequest, replay: FastifyReply) => {
        return new painel_controller(). handle(request,replay)
    })
}