import { FastifyInstance,FastifyReply, FastifyRequest } from "fastify";
import { atualiza_controller } from "../../controllers/clientes/atualiza";

export const atualiza = async(route: FastifyInstance) => {
    route.put("/clientes/atualiza", (request: FastifyRequest, replay: FastifyReply)=>{
        return new atualiza_controller().handle(request, replay)
    })
}