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
exports.nomes_devedores = void 0;
const conexao_1 = require("../../bd_config/conexao");
class nomes_devedores {
    execute(situacao) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = ' SELECT clientes.id, clientes.nome from receber inner join clientes on receber.id_cliente=clientes.id where  receber.situacao =? ; ';
            // const query1 ='SELECT  SUM(valor) AS total_valor FROM receber  where id_cliente= ? and situacao =? '
            const [devedores] = yield conexao_1.conexao.execute(query, [situacao]);
            //const [devedores1] = await conexao.execute(query1, [id_cliente,situacao]);
            return devedores;
        });
    }
}
exports.nomes_devedores = nomes_devedores;
