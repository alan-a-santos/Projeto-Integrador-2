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
exports.pedido_marmitex_controller = void 0;
const cadastro_marmitex_1 = require("../../services/pedidos/cadastro_marmitex");
class pedido_marmitex_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_cliente, segmento, pedido, observacao, valor, dia, situacao, situacaof } = request.body;
            const solicita = new cadastro_marmitex_1.pedido_marmitex();
            const solicitado = yield solicita.execute({ id_cliente, segmento, pedido, observacao, valor, dia, situacao, receber: {
                    id_cliente, segmento, dia, valor, situacaof
                }
            });
            reply.send(solicitado);
        });
    }
}
exports.pedido_marmitex_controller = pedido_marmitex_controller;
