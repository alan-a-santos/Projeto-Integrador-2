import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { lista_clientes_controller } from "../../controllers/servicos_diversos/lista_clientes";



export const lista_clientes = async (route: FastifyInstance) => {
    route.get("/servicos_diversos/lista_clientes", (request: FastifyRequest, replay: FastifyReply) => {
        return new lista_clientes_controller(). handle(request,replay)
    })
}