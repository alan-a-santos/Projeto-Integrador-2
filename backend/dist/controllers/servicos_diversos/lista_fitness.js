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
exports.lista_fitness_controller = void 0;
const lista_fitness_1 = require("../../services/servicos/lista_fitness");
class lista_fitness_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const nomes = new lista_fitness_1.lista_fitness();
            const nome = yield nomes.execute();
            reply.send(nome);
        });
    }
}
exports.lista_fitness_controller = lista_fitness_controller;
