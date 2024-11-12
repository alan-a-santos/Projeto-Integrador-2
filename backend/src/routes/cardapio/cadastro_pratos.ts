import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { cadastro_pratos_controller } from "../../controllers/cardapio/cadastro_pratos";

export const cadastro_pratos = async(route: FastifyInstance) => {
    route.post("/cardapio/cadastro_cardapio", (request: FastifyRequest, replay: FastifyReply) => {
        return new cadastro_pratos_controller().handle(request, replay)
    })
}