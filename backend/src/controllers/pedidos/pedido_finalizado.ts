import { FastifyRequest, FastifyReply } from "fastify";
import { pedido_finalizado } from "../../services/pedidos/pedido_finalizado";



class pedido_finalizado_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{ id, situacao} = request.body as {
            id: number,
            situacao: string,      
        }



        const solicita = new pedido_finalizado()
        const solicitado = await solicita.execute({id ,situacao })

        reply.send(solicitado)
    }
}

export { pedido_finalizado_controller}