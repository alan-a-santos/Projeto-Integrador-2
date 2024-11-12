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
exports.lista_devedores = void 0;
const conexao_1 = require("../../bd_config/conexao");
class lista_devedores {
    execute(id_cliente, situacao) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = ' SELECT id,  id_pedido, segmento, data_venda, valor from receber where id_cliente= ? and situacao =? ';
            // const query1 ='SELECT  SUM(valor) AS total_valor FROM receber  where id_cliente= ? and situacao =? '
            const [devedores] = yield conexao_1.conexao.execute(query, [id_cliente, situacao]);
            //const [devedores1] = await conexao.execute(query1, [id_cliente,situacao]);
            return devedores;
        });
    }
}
exports.lista_devedores = lista_devedores;
