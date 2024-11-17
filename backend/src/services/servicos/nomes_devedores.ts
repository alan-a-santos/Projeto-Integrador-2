import { conexao } from "../../bd_config/conexao";

class nomes_devedores{
    async execute(situacao:string){
        const query = ' SELECT clientes.id, clientes.nome from receber inner join clientes on receber.id_cliente=clientes.id where  receber.situacao =? ; '
       // const query1 ='SELECT  SUM(valor) AS total_valor FROM receber  where id_cliente= ? and situacao =? '
    
        const [devedores] = await conexao.execute(query, [situacao]);
        //const [devedores1] = await conexao.execute(query1, [id_cliente,situacao]);

        return devedores
}
}
export { nomes_devedores }
