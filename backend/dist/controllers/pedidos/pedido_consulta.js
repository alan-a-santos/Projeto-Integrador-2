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
exports.pedido_consulta_controller = void 0;
const pedido_consulta_1 = require("../../services/pedidos/pedido_consulta");
class pedido_consulta_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, } = request.body;
            const consulta = new pedido_consulta_1.pedido_consulta();
            const consultas = yield consulta.execute({ id });
            reply.send({ consultas });
        });
    }
}
exports.pedido_consulta_controller = pedido_consulta_controller;
