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
exports.informacao_cliente = void 0;
const conexao_1 = require("../../bd_config/conexao");
class informacao_cliente {
    execute(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            // Realiza um JOIN para combinar as tabelas clientes, endereco e contato
            const query = `
            SELECT 
                clientes.nome, clientes.id, clientes.nascimento, clientes.tipo, clientes.cpf, clientes.cadastro, clientes.observacao,
                endereco.cep, endereco.rua, endereco.numero, endereco.complemento, endereco.bairro, endereco.cidade,
                contatos.email, contatos.telefone
            FROM 
                clientes
            LEFT JOIN endereco ON clientes.id = endereco.id_cliente
            LEFT JOIN contatos ON clientes.id = contatos.id_cliente
            WHERE 
                clientes.nome = ?
        `;
            const [clienteDetalhes] = yield conexao_1.conexao.execute(query, [nome]);
            return clienteDetalhes;
        });
    }
}
exports.informacao_cliente = informacao_cliente;
