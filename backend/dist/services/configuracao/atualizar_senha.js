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
exports.atualizar_senha = void 0;
const conexao_1 = require("../../bd_config/conexao");
class atualizar_senha {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ usuario, senha }) {
            const query_pesq = "SELECT * FROM usuarios WHERE usuario =? ";
            const queryupdate = 'UPDATE usuarios SET senha=? WHERE usuario=?';
            const [resultado_pesq] = yield conexao_1.conexao.execute(query_pesq, [usuario]);
            const user = resultado_pesq[0];
            if (!user) {
                return ("Usuário não localizado");
            }
            const conn = yield conexao_1.conexao.getConnection();
            try {
                conn.beginTransaction();
                yield conn.execute(queryupdate, [senha, usuario]);
                yield conn.commit();
                return ('Senha alterada com sucesso!!!');
            }
            catch (error) {
                yield conn.rollback();
                console.error("Erro na alteração da senha");
                throw new Error("Erro ao alterar senha");
            }
            finally {
                yield conn.release();
            }
        });
    }
}
exports.atualizar_senha = atualizar_senha;
