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
exports.oferta_cardapio = void 0;
const conexao_1 = require("../../bd_config/conexao");
let resposta = "";
class oferta_cardapio {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ segmento, categoria, nome_prato, data, valor }) {
            const query_pesq = "SELECT * FROM ofertas WHERE nome_prato =? and data=?";
            const [resultado_pesq] = yield conexao_1.conexao.execute(query_pesq, [nome_prato, data]);
            const pesq = resultado_pesq[0];
            if (pesq) {
                return { mensagem: `Prato "${nome_prato}" já disponível para oferta no dia "${data}` };
            }
            const query = 'INSERT INTO ofertas (segmento, categoria,  nome_prato, data, valor) VALUES (?, ?, ?, ?, ?)';
            yield conexao_1.conexao.execute(query, [segmento, categoria, nome_prato, data, valor]);
            resposta = "Oferta efetuada com sucesso";
            return { mensage: resposta };
        });
    }
}
exports.oferta_cardapio = oferta_cardapio;
