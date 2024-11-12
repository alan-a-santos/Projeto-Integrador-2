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
exports.finaliza_pedido_controller = void 0;
const finaliza_pedido_1 = require("../../services/servicos/finaliza_pedido");
class finaliza_pedido_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { situacao, id_pedido } = request.body;
            const pedidos = new finaliza_pedido_1.finaliza_pedido();
            const pedido = yield pedidos.execute({ id_pedido, situacao });
            reply.send(pedido);
        });
    }
}
exports.finaliza_pedido_controller = finaliza_pedido_controller;
