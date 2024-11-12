import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { lista_ofertas_controller } from "../../controllers/servicos_diversos/lista_ofertas";



export const lista_ofertas = async (route: FastifyInstance) => {
    route.get("/servicos_diversos/lista_ofertas", (request: FastifyRequest, replay: FastifyReply) => {
        return new lista_ofertas_controller(). handle(request,replay)
    })
}