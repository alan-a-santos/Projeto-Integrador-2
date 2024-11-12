
import { conexao } from "../../bd_config/conexao";

class pedido_informacao_cliente {
    async execute(nome: string) {
        // Realiza um JOIN para combinar as tabelas clientes, endereco e contato
        const query = `
            SELECT 
                clientes.nome_cliente, clientes.data_nascimento, clientes.tipo_pessoa, clientes.observacao,
                endereco.cep, endereco.rua, endereco.numero, endereco.complemento, endereco.bairro, endereco.cidade,
                 contatos.telefone
            FROM 
                clientes
            LEFT JOIN endereco ON clientes.id_cliente = endereco.id_cliente
            LEFT JOIN contatos ON clientes.id_cliente = contatos.id_cliente
            WHERE 
                clientes.nome_cliente = ?
        `;
    
        const [clienteDetalhes] = await conexao.execute(query, [nome]);
        return clienteDetalhes;
    }
}

export { pedido_informacao_cliente };
