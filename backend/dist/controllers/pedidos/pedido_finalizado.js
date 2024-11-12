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
exports.pedido_finalizado_controller = void 0;
const pedido_finalizado_1 = require("../../services/pedidos/pedido_finalizado");
class pedido_finalizado_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, situacao } = request.body;
            const solicita = new pedido_finalizado_1.pedido_finalizado();
            const solicitado = yield solicita.execute({ id, situacao });
            reply.send(solicitado);
        });
    }
}
exports.pedido_finalizado_controller = pedido_finalizado_controller;
