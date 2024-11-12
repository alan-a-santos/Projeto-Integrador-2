import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { oferta_cardapio_controller } from "../../controllers/cardapio/oferta_cardapio";

export const oferta_cardapio = async(route: FastifyInstance) => {
    route.post('/cardapio/oferta_cardapio', (request: FastifyRequest, replay: FastifyReply) => {
        return new oferta_cardapio_controller().handle(request, replay)
    })
}