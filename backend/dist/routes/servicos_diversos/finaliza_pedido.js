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
exports.finailza_pedido = void 0;
const finaliza_pedido_1 = require("../../controllers/servicos_diversos/finaliza_pedido");
const finailza_pedido = (route) => __awaiter(void 0, void 0, void 0, function* () {
    route.post("/servicos_diversos/finailza_pedido", (request, replay) => {
        return new finaliza_pedido_1.finaliza_pedido_controller().handle(request, replay);
    });
});
exports.finailza_pedido = finailza_pedido;
