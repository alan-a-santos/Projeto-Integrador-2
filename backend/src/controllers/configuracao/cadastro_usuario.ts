import { FastifyRequest, FastifyReply } from "fastify";
import { novo_usuario } from "../../services/configuracao/novo_usuario";

class cadastro_usuario_controller{
    async handle(request: FastifyRequest, replay: FastifyReply){
        const { usuario, senha} = request.body as { usuario:string, senha:string}

        const novo = new novo_usuario()
        const user = await novo.execute({usuario, senha})
        replay.send(user)
    }
}

export { cadastro_usuario_controller }