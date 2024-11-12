import { FastifyRequest, FastifyReply } from "fastify";
import { pedido_marmitex } from "../../services/pedidos/cadastro_marmitex";


class pedido_marmitex_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{ id_cliente, segmento, pedido, observacao, valor, dia, situacao, situacaof} = request.body as {
            id_cliente: number,
            segmento: string,
            pedido: string,
            observacao: string,
            valor: number,
            dia: string,
            situacao: string,      
            situacaof: string
        }



        const solicita = new pedido_marmitex()
        const solicitado = await solicita.execute({ id_cliente, segmento, pedido, observacao, valor, dia, situacao,receber:{
            id_cliente, segmento,dia, valor,  situacaof}
        })

        reply.send(solicitado)
    }
}

export { pedido_marmitex_controller}