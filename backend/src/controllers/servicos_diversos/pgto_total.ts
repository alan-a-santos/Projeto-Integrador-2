import { FastifyReply, FastifyRequest } from "fastify"
import { pgto_total } from "../../services/servicos/pgto_total"





class pgto_total_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const { situacao, id_cliente } = request.body as { situacao:string, id_cliente: number}

    
 
        const totais = new pgto_total()
        const total = await totais.execute({ id_cliente, situacao})
        reply.send(total)

    }
}
export { pgto_total_controller}