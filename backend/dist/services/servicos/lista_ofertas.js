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
exports.lista_ofertas = void 0;
const conexao_1 = require("../../bd_config/conexao");
class lista_ofertas {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0'); // Ajuste para mês (0-11) e formatação
            const day = String(today.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            const query = 'SELECT nome_prato, id, valor FROM ofertas WHERE data = ? and segmento = "Marmitex"';
            // Executa a consulta usando a data do dia
            const [porcoes] = yield conexao_1.conexao.execute(query, [formattedDate]);
            return porcoes;
        });
    }
}
exports.lista_ofertas = lista_ofertas;
