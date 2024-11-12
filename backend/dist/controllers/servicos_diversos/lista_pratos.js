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
exports.lista_porcoes_controller = void 0;
const lista_pratos_1 = require("../../services/servicos/lista_pratos");
class lista_porcoes_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { categoria, segmento } = request.body;
            const porcoes = new lista_pratos_1.lista_porcoes();
            try {
                const porcao = yield porcoes.execute(categoria, segmento);
                if (!porcao) {
                    // Retorna uma mensagem se o cliente não for encontrado
                    reply.status(404).send({ mensagem: "Cliente não encontrado" });
                }
                else {
                    // Retorna as informações do cliente
                    reply.send(porcao);
                }
            }
            catch (error) {
                reply.status(500).send({ mensagem: "Erro ao buscar informações do cliente" });
            }
        });
    }
}
exports.lista_porcoes_controller = lista_porcoes_controller;
