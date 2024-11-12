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
exports.lista_clientes_controller = void 0;
const lista_clientes_1 = require("../../services/servicos/lista_clientes");
class lista_clientes_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const nomes = new lista_clientes_1.lista_clientes();
            const nome = yield nomes.execute();
            reply.send(nome);
        });
    }
}
exports.lista_clientes_controller = lista_clientes_controller;
