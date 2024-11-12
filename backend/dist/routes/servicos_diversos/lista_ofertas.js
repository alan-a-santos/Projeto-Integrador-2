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
exports.lista_ofertas = void 0;
const lista_ofertas_1 = require("../../controllers/servicos_diversos/lista_ofertas");
const lista_ofertas = (route) => __awaiter(void 0, void 0, void 0, function* () {
    route.get("/servicos_diversos/lista_ofertas", (request, replay) => {
        return new lista_ofertas_1.lista_ofertas_controller().handle(request, replay);
    });
});
exports.lista_ofertas = lista_ofertas;
