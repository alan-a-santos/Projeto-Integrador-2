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
exports.lista_porcoes = void 0;
const conexao_1 = require("../../bd_config/conexao");
class lista_porcoes {
    execute(categoria, segmento) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM cardapio  WHERE categoria =? and segmento=? order by nome_prato';
            const [porcoes] = yield conexao_1.conexao.execute(query, [categoria, segmento]);
            return porcoes;
        });
    }
}
exports.lista_porcoes = lista_porcoes;
