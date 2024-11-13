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
exports.routes = void 0;
const _cardapio_routes_1 = require("./routes/cardapio/@cardapio_routes");
const _clientes_routes_1 = require("./routes/clientes/@clientes_routes");
const _configuracao_routes_1 = require("./routes/configuracao/@configuracao_routes");
const _login_routes_1 = require("./routes/login/@login_routes");
const _pedidos_routes_1 = require("./routes/pedidos/@pedidos_routes");
const _servicos_diversos_routes_1 = require("./routes/servicos_diversos/@servicos_diversos_routes");
const server_1 = require("./server");
const routes = () => __awaiter(void 0, void 0, void 0, function* () {
    server_1.server.register(_login_routes_1.login_routes);
    server_1.server.register(_configuracao_routes_1.configuracao_routes);
    server_1.server.register(_clientes_routes_1.clientes_routes);
    server_1.server.register(_cardapio_routes_1.cardapio_routes);
    server_1.server.register(_pedidos_routes_1.pedidos_routes);
    server_1.server.register(_servicos_diversos_routes_1.servicos_diversos_routes);
});
exports.routes = routes;
server_1.server.get('/health', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    reply.send({ status: 'ok' });
}));
