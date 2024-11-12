import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { atualizar_senha_controller } from "../../controllers/configuracao/atualiza_senha";



export const atualizar_senha = async(route: FastifyInstance) =>{
    route.put("/configuracao/atualiza_senha", (request: FastifyRequest, replay: FastifyReply) =>{
        return new atualizar_senha_controller().handle(request, replay)
    }
    )
}