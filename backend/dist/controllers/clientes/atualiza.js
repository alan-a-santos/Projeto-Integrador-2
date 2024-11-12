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
exports.atualiza_controller = void 0;
const atualiza_1 = require("../../services/clientes/atualiza");
class atualiza_controller {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome, nascimento, telefone, tipo, cpf, email, cadastro, cep, rua, numero, complemento, bairro, cidade, observacao, id } = request.body;
                // Instancia o serviço de atualização e passa os dados para ele
                const registrado = new atualiza_1.atualiza_cadastro();
                const registro = yield registrado.execute({
                    id, // Passa o ID do cliente para o service
                    nome,
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
                    }
                });
                // Envia o resultado da atualização de volta para o cliente
                reply.status(200).send({ message: 'Cliente atualizado com sucesso', registro });
            }
            catch (error) {
                console.error("Erro ao atualizar cliente:", error);
                reply.status(500).send({ error: 'Erro ao atualizar cliente' });
            }
        });
    }
}
exports.atualiza_controller = atualiza_controller;
