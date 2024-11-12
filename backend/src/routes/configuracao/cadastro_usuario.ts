import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { cadastro_usuario_controller } from "../../controllers/configuracao/cadastro_usuario";

export const cadastro_usuario = async(route: FastifyInstance) =>{
    route.post("/configuracao/novo_usuario", (request: FastifyRequest, replay: FastifyReply) =>{
        return new cadastro_usuario_controller().handle(request, replay)
    }
    )
}