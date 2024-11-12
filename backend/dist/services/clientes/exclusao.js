"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclusao_clientes = void 0;
const conexao_1 = require("../../bd_config/conexao");
class exclusao_clientes {
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryDeleteEndereco = 'DELETE FROM endereco WHERE id_cliente = ?';
            const queryDeleteContato = 'DELETE FROM contatos WHERE id_cliente = ?';
            const queryDeleteCliente = 'DELETE FROM clientes WHERE id = ?';
            const conn = yield conexao_1.conexao.getConnection();
            try {
                // Inicia uma transação
                yield conn.beginTransaction();
                // Exclui o endereço do cliente
                yield conn.execute(queryDeleteEndereco, [id]);
                // Exclui o contato do cliente (se houver)
                yield conn.execute(queryDeleteContato, [id]);
                // Exclui o cliente
                const [resultado] = yield conn.execute(queryDeleteCliente, [id]);
                // Confirma a transação
                yield conn.commit();
                // Verifica se algum registro foi afetado
                if (resultado.affectedRows > 0) {
                    return "Exclusão realizada com sucesso";
                }
                else {
                    return "Cliente não encontrado";
                }
            }
            catch (error) {
                // Reverte a transação em caso de erro
                yield conn.rollback();
                console.error("Erro ao excluir cliente:", error);
                throw new Error("Erro ao excluir cliente");
            }
            finally {
                yield conn.release();
            }
        });
    }
}
exports.exclusao_clientes = exclusao_clientes;
