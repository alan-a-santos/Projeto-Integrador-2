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
exports.novo_usuario = void 0;
const conexao_1 = require("../../bd_config/conexao");
let resposta = "";
class novo_usuario {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ usuario, senha }) {
            const query_pesq = "SELECT * FROM usuarios WHERE usuario =? ";
            const [resultado_pesq] = yield conexao_1.conexao.execute(query_pesq, [usuario]);
            const pesq = resultado_pesq[0];
            if (pesq) {
                return ("Cliente já cadastrado");
            }
            const query = "INSERT INTO usuarios (usuario, senha) VALUES (?, ?)";
            yield conexao_1.conexao.execute(query, [usuario, senha]);
            return ("Usuário cadastrado com sucesso");
        });
    }
}
exports.novo_usuario = novo_usuario;
