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
exports.clientes_routes = void 0;
const server_1 = require("../../server");
const atualiza_1 = require("./atualiza");
const cadastro_1 = require("./cadastro");
const exclusao_1 = require("./exclusao");
const clientes_routes = () => __awaiter(void 0, void 0, void 0, function* () {
    server_1.server.register(cadastro_1.cadastro);
    server_1.server.register(exclusao_1.exclusao);
    server_1.server.register(atualiza_1.atualiza);
});
exports.clientes_routes = clientes_routes;
