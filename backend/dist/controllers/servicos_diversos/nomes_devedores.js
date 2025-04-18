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
exports.nomes_devedores_controller = void 0;
const nomes_devedores_1 = require("../../services/servicos/nomes_devedores");
class nomes_devedores_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { situacao } = request.body;
            const clientes = new nomes_devedores_1.nomes_devedores();
            const cliente = yield clientes.execute(situacao);
            reply.send(cliente);
        });
    }
}
exports.nomes_devedores_controller = nomes_devedores_controller;
