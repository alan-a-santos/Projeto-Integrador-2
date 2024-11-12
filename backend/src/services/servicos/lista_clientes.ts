import { conexao } from "../../bd_config/conexao";

class lista_clientes{
    async execute(){
        const query = 'SELECT id, nome FROM clientes order by nome'
    
        const [clientes] = await conexao.execute(query);
    
        return clientes
}
}
export { lista_clientes }
