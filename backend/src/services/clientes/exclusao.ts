import { conexao } from "../../bd_config/conexao";
import { ResultSetHeader } from "mysql2"; 

class exclusao_clientes {
    async execute(id: number) {
        const queryDeleteEndereco = 'DELETE FROM endereco WHERE id_cliente = ?';
        const queryDeleteContato = 'DELETE FROM contatos WHERE id_cliente = ?';
        const queryDeleteCliente = 'DELETE FROM clientes WHERE id = ?';

        const conn = await conexao.getConnection();

        try {
            // Inicia uma transação
            await conn.beginTransaction();

            // Exclui o endereço do cliente
            await conn.execute<ResultSetHeader>(queryDeleteEndereco, [id]);

            // Exclui o contato do cliente (se houver)
            await conn.execute<ResultSetHeader>(queryDeleteContato, [id]);

            // Exclui o cliente
            const [resultado] = await conn.execute<ResultSetHeader>(queryDeleteCliente, [id]);

            // Confirma a transação
            await conn.commit();

            // Verifica se algum registro foi afetado
            if (resultado.affectedRows > 0) {
                return "Exclusão realizada com sucesso";
            } else {
                return "Cliente não encontrado";
            }
        } catch (error) {
            // Reverte a transação em caso de erro
            await conn.rollback();
            console.error("Erro ao excluir cliente:", error);
            throw new Error("Erro ao excluir cliente");
        } finally {
            await conn.release();
        }
    }
}

export { exclusao_clientes };

