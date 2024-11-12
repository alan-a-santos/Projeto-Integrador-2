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
exports.login_controller = void 0;
const login_1 = require("../../services/login/login");
class login_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario, senha } = request.body;
            const usuario_logado = new login_1.login_usuario();
            const logado = yield usuario_logado.execute({ usuario, senha });
            reply.send(logado);
        });
    }
}
exports.login_controller = login_controller;
