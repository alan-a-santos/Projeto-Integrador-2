import { FastifyReply, FastifyRequest } from "fastify"
import { finaliza_pedido } from "../../services/servicos/finaliza_pedido"


class finaliza_pedido_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const { situacao, id_pedido } = request.body as { situacao:string, id_pedido: number}

   
 
        const pedidos = new finaliza_pedido()
        const pedido = await pedidos.execute({ id_pedido, situacao})
        reply.send(pedido)

    }
}
export {finaliza_pedido_controller}