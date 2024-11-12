import { FastifyRequest, FastifyReply } from "fastify";
import { oferta_cardapio } from "../../services/cardapio/oferta_cardapio";

class oferta_cardapio_controller{
    async handle(request: FastifyRequest, replay: FastifyReply){
        const { segmento, categoria, nome_prato, valor, data } = request.body as { segmento:string, categoria:string, nome_prato:string, data:string,  valor: number}



        const oferta = new oferta_cardapio()
        const ofertado = await oferta.execute({ segmento, categoria, nome_prato, valor, data})

        replay.send(ofertado)
    }   
}

export { oferta_cardapio_controller}