import { conexao } from "../../bd_config/conexao";

interface dados{
    id_cliente: number,
    situacao: string
}

class pgto_total{
    async execute({situacao, id_cliente }: dados){
        const query = 'UPDATE receber  SET situacao =? WHERE id_cliente =? '
      

        const atualiza = await conexao.execute(query,[situacao, id_cliente])

    
        
        return { Mensagem: "Pedido Finalizado com Sucesso"}

    }
}
    
export { pgto_total }