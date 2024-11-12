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
exports.lista_porcoes = void 0;
const lista_pratos_1 = require("../../controllers/servicos_diversos/lista_pratos");
const lista_porcoes = (route) => __awaiter(void 0, void 0, void 0, function* () {
    route.post("/servicos_diversos/lista_pratos", (request, replay) => {
        return new lista_pratos_1.lista_porcoes_controller().handle(request, replay);
    });
});
exports.lista_porcoes = lista_porcoes;
