import { FastifyInstance,FastifyReply, FastifyRequest } from "fastify";
import { exclusao_controller } from "../../controllers/clientes/exclusao";

export const exclusao = async(route: FastifyInstance) => {
    route.post("/clientes/exclusao", (request: FastifyRequest, replay: FastifyReply)=>{
        return new exclusao_controller().handle(request, replay)
    })
}