import { conexao } from "../../bd_config/conexao"

interface dados{
    id: number,
    situacao: string
    
}


class pedido_finalizado{
    async execute({situacao, id  }: dados){

    const query = 'update  pedidos set  situacao=? where id=? '

    const [pedidos] = await conexao.execute(query,[situacao, id ])
            return pedidos as []
      
}
}
export { pedido_finalizado }