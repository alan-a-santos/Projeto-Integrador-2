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
exports.lista_devedores = void 0;
const lista_devedores_1 = require("../../controllers/servicos_diversos/lista_devedores");
const lista_devedores = (route) => __awaiter(void 0, void 0, void 0, function* () {
    route.post("/servicos_diversos/lista_devedores", (request, replay) => {
        return new lista_devedores_1.lista_devedores_controller().handle(request, replay);
    });
});
exports.lista_devedores = lista_devedores;
