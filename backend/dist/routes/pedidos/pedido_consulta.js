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
exports.pedico_consulta = void 0;
const pedido_consulta_1 = require("../../controllers/pedidos/pedido_consulta");
const pedico_consulta = (route) => __awaiter(void 0, void 0, void 0, function* () {
    route.post("/pedidos/consulta", (request, replay) => {
        return new pedido_consulta_1.pedido_consulta_controller().handle(request, replay);
    });
});
exports.pedico_consulta = pedico_consulta;
