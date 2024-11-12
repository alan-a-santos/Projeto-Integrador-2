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
exports.cadastro_pratos_controller = void 0;
const cadastro_cardapio_1 = require("../../services/cardapio/cadastro_cardapio");
class cadastro_pratos_controller {
    handle(request, replay) {
        return __awaiter(this, void 0, void 0, function* () {
            const { segmento, categoria, nome_prato } = request.body;
            const cadastro = new cadastro_cardapio_1.cadastro_cardapio();
            const prato = yield cadastro.execute({ segmento, categoria, nome_prato });
            replay.send(prato);
        });
    }
}
exports.cadastro_pratos_controller = cadastro_pratos_controller;
