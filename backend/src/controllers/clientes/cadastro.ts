    import { FastifyRequest, FastifyReply } from "fastify";
import { registro_usuario } from "../../services/clientes/cadastro";




    class cadastro_controller{
        async handle(request:FastifyRequest, replay:FastifyReply){
            const { nome, nascimento, tipo, cpf, cadastro, observacao, email, telefone, cep, rua, numero, complemento, bairro, cidade } = request.body as {
                nome: string,
                nascimento: string,
                tipo: string,
                cpf: string,
                cadastro: string,
                observacao: string,
                email: string,
                telefone: string,
                cep: string,
                rua: string,
                numero: string,
                complemento: string,
                bairro: string,
                cidade: string
            };
         
            
            const registrado = new registro_usuario()
            const registro = await registrado.execute({nome,
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
                }})
            replay.send(registro)
        }
    }

    export {cadastro_controller}

