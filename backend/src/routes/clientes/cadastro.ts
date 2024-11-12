import { FastifyInstance,FastifyReply, FastifyRequest } from "fastify";
import { cadastro_controller } from "../../controllers/clientes/cadastro";

export const cadastro = async(route: FastifyInstance) => {
    route.post("/clientes/cadastro", (request: FastifyRequest, replay: FastifyReply)=>{
        return new cadastro_controller().handle(request, replay)
    })
}