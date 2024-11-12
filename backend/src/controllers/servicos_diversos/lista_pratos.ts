import { FastifyReply, FastifyRequest } from "fastify"
import { lista_porcoes } from "../../services/servicos/lista_pratos";



class lista_porcoes_controller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { categoria, segmento} = request.body as { categoria:string, segmento:string}

 
 const porcoes = new lista_porcoes();
 try {
     const porcao = await porcoes.execute(categoria, segmento);

     if (!porcao) {
         // Retorna uma mensagem se o cliente não for encontrado
         reply.status(404).send({ mensagem: "Cliente não encontrado" });
     } else {
         // Retorna as informações do cliente
         reply.send(porcao);
     }
 } catch (error) {
     reply.status(500).send({ mensagem: "Erro ao buscar informações do cliente" });
 }
}
}
export {lista_porcoes_controller}