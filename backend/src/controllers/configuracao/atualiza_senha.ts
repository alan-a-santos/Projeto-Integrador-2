import { FastifyRequest, FastifyReply } from "fastify";
import { atualizar_senha } from "../../services/configuracao/atualizar_senha";


class atualizar_senha_controller{
    async handle(request: FastifyRequest, replay: FastifyReply){
        const { usuario, senha} = request.body as { usuario:string, senha:string}

      

        const novo = new atualizar_senha()
        const user = await novo.execute({senha, usuario})
        replay.send(user)
    }
}

export { atualizar_senha_controller }