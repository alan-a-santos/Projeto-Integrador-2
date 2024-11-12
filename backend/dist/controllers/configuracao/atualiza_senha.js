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
exports.atualizar_senha_controller = void 0;
const atualizar_senha_1 = require("../../services/configuracao/atualizar_senha");
class atualizar_senha_controller {
    handle(request, replay) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario, senha } = request.body;
            const novo = new atualizar_senha_1.atualizar_senha();
            const user = yield novo.execute({ senha, usuario });
            replay.send(user);
        });
    }
}
exports.atualizar_senha_controller = atualizar_senha_controller;
