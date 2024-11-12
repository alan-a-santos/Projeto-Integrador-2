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
exports.cadastro_controller = void 0;
const cadastro_1 = require("../../services/clientes/cadastro");
class cadastro_controller {
    handle(request, replay) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, nascimento, tipo, cpf, cadastro, observacao, email, telefone, cep, rua, numero, complemento, bairro, cidade } = request.body;
            const registrado = new cadastro_1.registro_usuario();
            const registro = yield registrado.execute({ nome,
                nascimento,
                tipo,
                cpf,
                cadastro,
                observacao,
                contatos: {
                    email,
                    telefone
                },
                endereco: {
                    cep,
                    rua,
                    numero,
                    complemento,
                    bairro,
                    cidade
                } });
            replay.send(registro);
        });
    }
}
exports.cadastro_controller = cadastro_controller;
