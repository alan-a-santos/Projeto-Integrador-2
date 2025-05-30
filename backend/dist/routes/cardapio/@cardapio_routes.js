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
exports.cardapio_routes = void 0;
const server_1 = require("../../server");
const cadastro_pratos_1 = require("./cadastro_pratos");
const oferta_cardapio_1 = require("./oferta_cardapio");
const cardapio_routes = () => __awaiter(void 0, void 0, void 0, function* () {
    server_1.server.register(cadastro_pratos_1.cadastro_pratos);
    server_1.server.register(oferta_cardapio_1.oferta_cardapio);
});
exports.cardapio_routes = cardapio_routes;
