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
exports.atualiza_pedido_controller = void 0;
const atualiza_pedido_1 = require("../../services/pedidos/atualiza_pedido");
class atualiza_pedido_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, segmento, pedido, observacao, valor, dia, situacao, receber } = request.body;
            const pedidos = new atualiza_pedido_1.atualiza_pedido();
            try {
                const resultado = yield pedidos.update({
                    id,
                    segmento,
                    pedido,
                    observacao,
                    valor,
                    situacao,
                });
                reply.send(resultado);
            }
            catch (error) {
                console.error('Erro ao atualizar pedido:', error);
                reply.status(500).send({ mensagem: 'Erro na atualização do pedido' });
            }
        });
    }
}
exports.atualiza_pedido_controller = atualiza_pedido_controller;
