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
exports.cadastro_marmitex = void 0;
const cadastro_marmitex_1 = require("../../controllers/pedidos/cadastro_marmitex");
const cadastro_marmitex = (route) => __awaiter(void 0, void 0, void 0, function* () {
    route.post("/pedidos/cadastro_marmitex", (request, replay) => {
        return new cadastro_marmitex_1.pedido_marmitex_controller().handle(request, replay);
    });
});
exports.cadastro_marmitex = cadastro_marmitex;
