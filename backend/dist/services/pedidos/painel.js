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
exports.painel = void 0;
const conexao_1 = require("../../bd_config/conexao");
class painel {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ inicio, fim, }) {
            const query_datas = 'SELECT * FROM pedidos  WHERE dia BETWEEN ? AND ? ';
            const [pedidos] = yield conexao_1.conexao.execute(query_datas, [inicio, fim,]);
            return pedidos;
        });
    }
}
exports.painel = painel;
