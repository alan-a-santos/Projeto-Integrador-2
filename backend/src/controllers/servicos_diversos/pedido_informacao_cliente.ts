import { FastifyReply, FastifyRequest } from "fastify"

import { pedido_informacao_cliente } from "../../services/servicos/pedido_informacao_clientes";


class pedido_informacao_cliente_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { nome } = request.body as { nome:string}

 const clientes = new pedido_informacao_cliente();
 try {
     const cliente = await clientes.execute(nome);

     if (!cliente) {
         // Retorna uma mensagem se o cliente não for encontrado
         reply.status(404).send({ mensagem: "Cliente não encontrado" });
     } else {
         // Retorna as informações do cliente
         reply.send(cliente);
     }
 } catch (error) {
     reply.status(500).send({ mensagem: "Erro ao buscar informações do cliente" });
 }
}
}
export { pedido_informacao_cliente_controller}