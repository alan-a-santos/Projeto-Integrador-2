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
exports.pgto_total = void 0;
const conexao_1 = require("../../bd_config/conexao");
class pgto_total {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ situacao, id_cliente }) {
            const query = 'UPDATE receber  SET situacao =? WHERE id_cliente =? ';
            const atualiza = yield conexao_1.conexao.execute(query, [situacao, id_cliente]);
            return { Mensagem: "Pedido Finalizado com Sucesso" };
        });
    }
}
exports.pgto_total = pgto_total;
