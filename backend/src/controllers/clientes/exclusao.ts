import { FastifyRequest, FastifyReply } from "fastify";
import { exclusao_clientes } from "../../services/clientes/exclusao";




    class exclusao_controller{
        async handle(request:FastifyRequest, replay:FastifyReply){
            const {id} = request.body as {id:number}



            const operacao = new exclusao_clientes()
            const status = await operacao.execute(id)
            replay.send(status)
        }
    }

    export {exclusao_controller}