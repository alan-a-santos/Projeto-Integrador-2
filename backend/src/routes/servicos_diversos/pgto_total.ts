import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { pgto_total_controller } from "../../controllers/servicos_diversos/pgto_total";





export const pgto_total = async (route: FastifyInstance) => {
    route.post("/servicos_diversos/pgto_total", (request: FastifyRequest, replay: FastifyReply) => {
        return new pgto_total_controller(). handle(request,replay)
    })
}