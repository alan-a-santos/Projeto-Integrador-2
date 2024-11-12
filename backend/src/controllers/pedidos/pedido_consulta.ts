import { FastifyReply, FastifyRequest } from "fastify"
import { pedido_consulta } from "../../services/pedidos/pedido_consulta";




class pedido_consulta_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id,  } = request.body as { id:number}

 const consulta = new pedido_consulta();
 const consultas = await consulta.execute({id})


 reply.send({ consultas})
}

}
export {pedido_consulta_controller}