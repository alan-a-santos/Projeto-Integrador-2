import { FastifyReply, FastifyRequest } from "fastify"
import { painel } from "../../services/pedidos/painel";



class painel_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { inicio, fim,  } = request.body as { inicio:string, fim: string}

 const pedido = new painel();
 const pedidos = await pedido.execute({inicio, fim, })

 const preparo = pedidos.filter((pedido: any) => pedido.situacao === "Preparação");
 const pronto = pedidos.filter((pedido: any) => pedido.situacao === "Finalizado")

 reply.send({preparo, pronto})
}

}
export {painel_controller}