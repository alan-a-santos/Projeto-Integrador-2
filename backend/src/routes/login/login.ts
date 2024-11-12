import { FastifyInstance,FastifyReply, FastifyRequest } from "fastify";
import { login_controller } from '../../controllers/login/login';


export const login = async(route: FastifyInstance) =>{
    route.post("/login", (request: FastifyRequest, replay: FastifyReply) => {
        return new login_controller().handle(request,replay)
    })
}