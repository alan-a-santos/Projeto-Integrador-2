import { conexao } from "../../bd_config/conexao"

interface dados{
    inicio: string,
    fim: string
    
    
}

class painel{
    async execute({ inicio, fim,  }: dados){
             
    const query_datas = 'SELECT * FROM pedidos  WHERE dia BETWEEN ? AND ? '

    const [pedidos] = await conexao.execute(query_datas,[inicio, fim, ])
            return pedidos as []
      
}
}
export { painel }