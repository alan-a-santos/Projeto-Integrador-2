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
exports.login_usuario = void 0;
const conexao_1 = require("../../bd_config/conexao");
let resposta = "";
class login_usuario {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ usuario, senha }) {
            const query = "SELECT * FROM usuarios WHERE usuario = ?";
            const [pesq] = yield conexao_1.conexao.execute(query, [usuario]);
            const user = pesq[0];
            if (user.senha == senha) {
                resposta = "Autorizado";
            }
            else {
                resposta = "Negado";
            }
            return resposta;
        });
    }
}
exports.login_usuario = login_usuario;
