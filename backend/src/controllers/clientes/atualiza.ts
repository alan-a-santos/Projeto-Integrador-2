import { FastifyRequest, FastifyReply } from "fastify";
import { atualiza_cadastro } from "../../services/clientes/atualiza";




    class atualiza_controller{
        async handle(request:FastifyRequest, reply:FastifyReply){
            try {
                const { nome, nascimento, telefone, tipo, cpf, email, cadastro, cep, rua, numero, complemento, bairro, cidade, observacao, id } = request.body as {
                    nome: string,
                    nascimento: string,
                    telefone: string,
                    tipo: string,
                    cpf: string,
                    email: string,
                    cadastro: string,
                    cep: string,
                    rua: string,
                    numero: string,
                    complemento: string,
                    bairro: string,
                    cidade: string,
                    observacao: string,
                    id: number
                };
    
               
    
                // Instancia o serviço de atualização e passa os dados para ele
                const registrado = new atualiza_cadastro();
                const registro = await registrado.execute({
                    id,  // Passa o ID do cliente para o service
                    nome,
                    nascimento,
                    tipo,
                    cpf,
                    cadastro,
                    observacao,
                    contatos: {
                        email,
                        telefone
                    },
                    endereco: {
                        cep,
                        rua,
                        numero,
                        complemento,
                        bairro,
                        cidade
                    }
                });
    
                // Envia o resultado da atualização de volta para o cliente
                reply.status(200).send({ message: 'Cliente atualizado com sucesso', registro });
            } catch (error) {
                console.error("Erro ao atualizar cliente:", error);
                reply.status(500).send({ error: 'Erro ao atualizar cliente' });
            }
        }
    }
    

    export {atualiza_controller}