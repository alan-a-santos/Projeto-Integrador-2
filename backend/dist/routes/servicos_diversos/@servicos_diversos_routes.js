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
exports.servicos_diversos_routes = void 0;
const server_1 = require("../../server");
const finaliza_pedido_1 = require("./finaliza_pedido");
const informacao_cliente_1 = require("./informacao_cliente");
const lista_clientes_1 = require("./lista_clientes");
const lista_devedores_1 = require("./lista_devedores");
const lista_fitness_1 = require("./lista_fitness");
const lista_ofertas_1 = require("./lista_ofertas");
const lista_pedidos_1 = require("./lista_pedidos");
const lista_pratos_1 = require("./lista_pratos");
const lista_situacao_1 = require("./lista_situacao");
const nomes_devedores_1 = require("./nomes_devedores");
const pedido_informacao_cliente_1 = require("./pedido_informacao_cliente");
const pgto_total_1 = require("./pgto_total");
const servicos_diversos_routes = () => __awaiter(void 0, void 0, void 0, function* () {
    server_1.server.register(lista_clientes_1.lista_clientes);
    server_1.server.register(informacao_cliente_1.informacao_cliente);
    server_1.server.register(pedido_informacao_cliente_1.pedido_informacao_cliente);
    server_1.server.register(finaliza_pedido_1.finailza_pedido);
    server_1.server.register(lista_pratos_1.lista_porcoes);
    server_1.server.register(lista_ofertas_1.lista_ofertas);
    server_1.server.register(lista_fitness_1.lista_fitness);
    server_1.server.register(lista_situacao_1.lista_situacao);
    server_1.server.register(lista_devedores_1.lista_devedores);
    server_1.server.register(lista_pedidos_1.lista_pedidos);
    server_1.server.register(pgto_total_1.pgto_total);
    server_1.server.register(nomes_devedores_1.nomes_devedores);
});
exports.servicos_diversos_routes = servicos_diversos_routes;
