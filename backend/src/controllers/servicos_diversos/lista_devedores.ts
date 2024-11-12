import { FastifyReply, FastifyRequest } from "fastify"
import { lista_devedores } from "../../services/servicos/lista_devedores"




class lista_devedores_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id_cliente, situacao} = request.body as { id_cliente: number , situacao:string}

        
 
        const clientes = new lista_devedores()
        const cliente = await clientes.execute(id_cliente, situacao)
        reply.send(cliente)

    }
}
export {lista_devedores_controller}