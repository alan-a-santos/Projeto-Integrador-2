import { FastifyRequest, FastifyReply } from "fastify";
import { cadastro_cardapio } from "../../services/cardapio/cadastro_cardapio";


class cadastro_pratos_controller{
    async handle(request: FastifyRequest, replay: FastifyReply){
        const { segmento, categoria, nome_prato } = request.body as { segmento: string, categoria: string, nome_prato:string, }

        
 

        const cadastro = new cadastro_cardapio()
        const prato = await cadastro.execute({ segmento,categoria, nome_prato})

        replay.send(prato)

    }
}

export { cadastro_pratos_controller }