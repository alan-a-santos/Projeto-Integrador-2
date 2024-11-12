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
exports.pedidos_routes = void 0;
const server_1 = require("../../server");
const atualiza_pedido_1 = require("./atualiza_pedido");
const cadastro_marmitex_1 = require("./cadastro_marmitex");
const painel_1 = require("./painel");
const pedido_consulta_1 = require("./pedido_consulta");
const pedido_finalizado_1 = require("./pedido_finalizado");
const pedidos_routes = () => __awaiter(void 0, void 0, void 0, function* () {
    server_1.server.register(cadastro_marmitex_1.cadastro_marmitex);
    server_1.server.register(painel_1.painel);
    server_1.server.register(atualiza_pedido_1.atualiza_pedido);
    server_1.server.register(pedido_finalizado_1.pedido_finalizado);
    server_1.server.register(pedido_consulta_1.pedico_consulta);
});
exports.pedidos_routes = pedidos_routes;
