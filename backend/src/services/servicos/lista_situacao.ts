import { conexao } from "../../bd_config/conexao";



class lista_situacao {
    async execute() {
     
        const query = 'SELECT pedidos.*, clientes.nome AS nome_cliente FROM pedidos INNER JOIN clientes ON pedidos.id_cliente = clientes.id'
       
        // Executa a consulta usando a data do dia
        const [porcoes] = await conexao.execute(query);
        return porcoes;
    }
}
export { lista_situacao }