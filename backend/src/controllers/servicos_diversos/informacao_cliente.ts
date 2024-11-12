import { FastifyReply, FastifyRequest } from "fastify"
import { informacao_cliente } from "../../services/servicos/informacao_clientes"


class informacao_cliente_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { nome } = request.body as { nome:string}
 
 const clientes = new informacao_cliente();
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
export {informacao_cliente_controller}