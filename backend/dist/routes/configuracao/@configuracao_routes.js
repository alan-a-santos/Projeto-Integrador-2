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
exports.configuracao_routes = void 0;
const cadastro_usuario_1 = require("./cadastro_usuario");
const server_1 = require("../../server");
const atualiza_senha_1 = require("./atualiza_senha");
const configuracao_routes = () => __awaiter(void 0, void 0, void 0, function* () {
    server_1.server.register(cadastro_usuario_1.cadastro_usuario);
    server_1.server.register(atualiza_senha_1.atualizar_senha);
});
exports.configuracao_routes = configuracao_routes;
