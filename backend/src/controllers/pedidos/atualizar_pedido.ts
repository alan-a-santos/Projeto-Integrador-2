import { FastifyReply, FastifyRequest } from "fastify";
import { atualiza_pedido } from "../../services/pedidos/atualiza_pedido";


class atualiza_pedido_controller {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id, segmento, pedido, observacao, valor, dia, situacao, receber } = request.body as {
            id: number,
            segmento?: string,
            pedido?: string,
            observacao?: string,
            valor?: number,
            dia?: string,
            situacao?: string,
            receber?: {
                id_cliente?: number,
                valor?: number,
                dia?: string,
                segmento?: string,
                situacaof?: string
            }
        };

        const pedidos = new atualiza_pedido();

        try {
            const resultado = await pedidos.update({
                id,
                segmento,
                pedido,
                observacao,
                valor,
                situacao,
                
            });

            reply.send(resultado);
        } catch (error) {
            console.error('Erro ao atualizar pedido:', error);
            reply.status(500).send({ mensagem: 'Erro na atualização do pedido' });
        }
    }
}

export { atualiza_pedido_controller };
