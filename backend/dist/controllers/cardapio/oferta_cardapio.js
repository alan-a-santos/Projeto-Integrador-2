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
exports.oferta_cardapio_controller = void 0;
const oferta_cardapio_1 = require("../../services/cardapio/oferta_cardapio");
class oferta_cardapio_controller {
    handle(request, replay) {
        return __awaiter(this, void 0, void 0, function* () {
            const { segmento, categoria, nome_prato, valor, data } = request.body;
            const oferta = new oferta_cardapio_1.oferta_cardapio();
            const ofertado = yield oferta.execute({ segmento, categoria, nome_prato, valor, data });
            replay.send(ofertado);
        });
    }
}
exports.oferta_cardapio_controller = oferta_cardapio_controller;
