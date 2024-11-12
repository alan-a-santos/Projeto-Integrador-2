import { conexao } from "../../bd_config/conexao"

interface dados{
   id: number

}

class pedido_consulta{
    async execute({ id  }: dados){
  
    const query_datas = 'SELECT * FROM pedidos  WHERE id=?'

    const [consulta] = await conexao.execute(query_datas,[id ])

            return consulta as [] 
      
}
}
export { pedido_consulta }