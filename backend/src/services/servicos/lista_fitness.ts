import { conexao } from "../../bd_config/conexao";



class lista_fitness {
    async execute() {
     
        const query = 'SELECT nome_prato FROM cardapio WHERE segmento = "Fitness"  ';
       
        // Executa a consulta usando a data do dia
        const [porcoes] = await conexao.execute(query);
        return porcoes;
    }
}
export { lista_fitness }