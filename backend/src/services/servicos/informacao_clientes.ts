
import { conexao } from "../../bd_config/conexao";

class informacao_cliente {
    async execute(nome: string) {
      
        // Realiza um JOIN para combinar as tabelas clientes, endereco e contato
        const query = `
            SELECT 
                clientes.nome, clientes.id, clientes.nascimento, clientes.tipo, clientes.cpf, clientes.cadastro, clientes.observacao,
                endereco.cep, endereco.rua, endereco.numero, endereco.complemento, endereco.bairro, endereco.cidade,
                contatos.email, contatos.telefone
            FROM 
                clientes
            LEFT JOIN endereco ON clientes.id = endereco.id_cliente
            LEFT JOIN contatos ON clientes.id = contatos.id_cliente
            WHERE 
                clientes.nome = ?
        `
    
        const [clienteDetalhes] = await conexao.execute(query, [nome]);
     
        return clienteDetalhes;
    }
}

export { informacao_cliente };
