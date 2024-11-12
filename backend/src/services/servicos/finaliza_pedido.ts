import { conexao } from "../../bd_config/conexao";

interface dados{
    id_pedido: number,
    situacao: string
}

class finaliza_pedido{
    async execute({situacao, id_pedido }: dados){
        const query = 'UPDATE receber  SET situacao =? WHERE id =? '

        const atualiza = await conexao.execute(query,[situacao, id_pedido])

    
        
        return { Mensagem: "Pedido Finalizado com Sucesso"}

    }
}
    
export { finaliza_pedido }