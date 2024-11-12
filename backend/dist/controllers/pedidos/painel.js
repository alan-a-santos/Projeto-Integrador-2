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
exports.painel_controller = void 0;
const painel_1 = require("../../services/pedidos/painel");
class painel_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { inicio, fim, } = request.body;
            const pedido = new painel_1.painel();
            const pedidos = yield pedido.execute({ inicio, fim, });
            const preparo = pedidos.filter((pedido) => pedido.situacao === "Preparação");
            const pronto = pedidos.filter((pedido) => pedido.situacao === "Finalizado");
            reply.send({ preparo, pronto });
        });
    }
}
exports.painel_controller = painel_controller;
